import axiosInstance from "./api";
import TokenService from "./TokenService";

const setup = (store) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        config.headers["Authorization"] = 'Bearer ' + token;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  let isRefreshing = false; // Флаг для отслеживания процесса обновления токена
  let subscribers = []; // Массив подписчиков на обновление токена

  axiosInstance.interceptors.response.use(
    (res) => {
      return res;
    },
    async (err) => {
      const originalConfig = err.config;

      if (originalConfig.url !== "/auth/login" && err.response) {
        // Access Token was expired
        if (err.response.status === 401 && !originalConfig._retry) {
          if (!isRefreshing) {
            isRefreshing = true;

            try {
              const token = TokenService.getLocalRefreshToken();
              if (token) {
                console.log(1)
                const rs = await axiosInstance.post("/auth/refresh", {
                  refreshToken: token,
                });
                console.log(2)

                const { data } = rs;

                if (data.statusCode === 401) {
                  store.dispatch('auth/logout');
                  return Promise.reject(err);
                }

                store.dispatch('auth/refreshToken', data.tokens.accessToken);
                TokenService.updateTokens(data.tokens);

                // Повторяем оригинальный запрос с обновленным токеном
                originalConfig.headers["Authorization"] = 'Bearer ' + TokenService.getLocalAccessToken();
                return axiosInstance(originalConfig);
              }
            } catch (_error) {
              return Promise.reject(_error);
            } finally {
              isRefreshing = false;
            }
          } else {
            // Если уже идет процесс обновления токена, подписываемся на его завершение
            return new Promise((resolve) => {
              subscribers.push((newToken) => {
                originalConfig.headers["Authorization"] = 'Bearer ' + newToken;
                resolve(axiosInstance(originalConfig));
              });
            });
          }
        }
      }

      return Promise.reject(err);
    }
  );

  // Подписываемся на успешное обновление токена
  axiosInstance.interceptors.response.use((res) => {
    return res;
  }, (err) => {
    const status = err.response ? err.response.status : null;
    if (status === 401) {
      const token = TokenService.getLocalAccessToken();
      if (token) {
        subscribers.forEach((callback) => callback(token));
        subscribers = []; // Очищаем массив подписчиков после выполнения запроса с обновленным токеном
      }
    }
    return Promise.reject(err);
  });

};

export default setup;
