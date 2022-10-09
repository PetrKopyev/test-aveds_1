import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem('token') || ''
    },
    mutations: {
        setToken(state, token) {
            state.token = token
        },
        clearToken(state) {
            if (state.token) {
                state.token = ''
            }
        }
    },
    actions: {
        login({commit}) {
            const newToken = localStorage.getItem('token')
            commit('setToken', newToken)
        },
        logout({commit}) {
            commit('clearToken')
        }
    },
    getters: {
        hasToken: s => !!s.token
    }
})
