import Vuex from 'vuex';
import Vue from 'vue';
import http from "@/plugins/http";

Vue.use(Vuex);

const state = {
    token: localStorage.getItem('token') ?? null,
    usuario: localStorage.getItem('usuario') ?? {}
}

const mutations = {
    setUser(state, { token, usuario }) {
        state.token = token;
        state.usuario = usuario;
    },
    resetUserData(state) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        state.token = null;
        state.usuario = {};
    }
}

const actions = {
    checkUser({ commit }, usuario) {
        return new Promise( (resolve, reject) => {
            http.post('auth/login', usuario)
                .then(response => {
                    // setando token no local storage, para pegar após o F5
                    localStorage.setItem('token', response.data.access_token);
                    localStorage.setItem('usuario', response.data.user);
                    commit('setUser', {
                        token: response.data.access_token,
                        usuario: response.data.user
                    });
                    resolve(response.data);
                })
                .catch(erro => {
                    console.log(erro);
                    reject(erro);
                })
        })
    }
}

const getters = {
    isLogged(state) {
        console.log(state.token);
        return Boolean(state.token)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})