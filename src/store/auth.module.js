import AuthService from '../service/AuthService'

const user = localStorage.getItem('user');
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null }
export const auth = {
    namespaced: true,
    state: initialState,
    actions: {
        async login({ commit }, user) {
            try {
                const resp = await AuthService.login(user)
                const { status, data } = resp
                if (status === 201) {
                    commit('loginSuccess', data.user);
                    if (user.password === 'Security#') {
                        return { change: true }
                    }
                    return { change: false }
                }
            }
            catch (error) {
                commit('loginFailure');
                return Promise.reject(error)
            }
        },
        logout({ commit }) {
            AuthService.logout();
            commit('logout');
        },
        refreshToken({ commit }, accessToken) {
            commit('refreshToken', accessToken)
        },
        async changePass({ commit }, payload) {
            try {
                const res = await AuthService.changePass(payload)
                const { status } = res
                if (status === 200) {
                    return 'Updated'
                } else {
                    throw `Change password ${status}`
                }
            } catch (err) {
                throw `Change password is errored: ${err}`
            }
        }
    },
    mutations: {
        loginSuccess(state, user) {
            state.status.loggedIn = true;
            state.user = user;
        },
        loginFailure(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        logout(state) {
            state.status.loggedIn = false;
            state.user = null;
        },
        registerSuccess(state) {
            state.status.loggedIn = false;
        },
        registerFailure(state) {
            state.status.loggedIn = false;
        },
        refreshToken(state, tokens) {
            state.status.loggedIn = true;
            state.user = tokens;
        }
    }
}