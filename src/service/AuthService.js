import api from './api'
import TokenService from './TokenService'

class AuthService {
    login({ login, password }) {
        // return api
        //     .post("/auth/login", {
        //         login,
        //         password
        //     })
        //     .then((response) => {
        //         if (response.data.tokens.accessToken) {
        //             TokenService.setUser(response.data.tokens);
        //             TokenService.setUserInfo(response.data.user);
        //         }

        //         return response;
        //     });
        // console.log('Service', login, password)
        //console.log('api',{ login, password })
         return new Promise(resolve => {
            return resolve({ status: 201, data: {
                accessToken: 'test',
                refreshToken: 'Testrefresh'
            } })
        })
    }

    logout() {
        TokenService.removeUser();
    }

    register({ username, email, password }) {
        return api.post("/auth/signup", {
            username,
            email,
            password
        });
    }

    changePass(data) {
        return api.put("/users/change-pass", data);
    }
}

export default new AuthService();