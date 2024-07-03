class TokenService {
    getLocalRefreshToken() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.refreshToken)
            return user.refreshToken;
        return false
    }

    updateLocalRefreshToken(token) {
        let user = JSON.parse(localStorage.getItem("user"));
        user.refreshToken = token;
        localStorage.setItem("user", JSON.stringify(user));
    }

    getLocalAccessToken() {
        const user = JSON.parse(localStorage.getItem("user"));
        return user?.accessToken;
    }

    updateLocalAccessToken(token) {
        let user = JSON.parse(localStorage.getItem("user"));
        user.accessToken = token;
        localStorage.setItem("user", JSON.stringify(user));
    }

    updateTokens(tokens) {
        localStorage.setItem("user", JSON.stringify(tokens));
    }

    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    setUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    setUserInfo(user) {
        localStorage.setItem("userInfo", JSON.stringify(user));
    }

    removeUser() {
        localStorage.removeItem("user");
        localStorage.removeItem("userInfo");
    }
}

export default new TokenService();
