/* eslint-disable promise/param-names */
import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'

import axios from 'axios'

const state = { token: localStorage.getItem('user-token') || '', status: '', hasLoadedOnce: false, error: '' }

const getters = {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status,
  errorMessage: state => state.error,
}

const actions = {
    [AUTH_REQUEST]: ({commit, dispatch}, response) => {
        if ('errors' in response) {
            commit(AUTH_ERROR, response.errors[0])
            localStorage.removeItem('user-token')
        } else {
            localStorage.setItem('user-token', response.token)
            commit(AUTH_SUCCESS, response)
        }
    },
    [AUTH_LOGOUT]: ({commit, dispatch}) => {
        commit(AUTH_LOGOUT)
        localStorage.removeItem('user-token')
    }
}

const mutations = {
  [AUTH_REQUEST]: (state) => {
    state.status = 'loading'
    state.error = ''
  },
  [AUTH_SUCCESS]: (state, resp) => {
    state.status = 'success'
    state.token = resp.token
    state.hasLoadedOnce = true
    state.error = ''
  },
  [AUTH_ERROR]: (state, err) => {
    state.status = 'error'
    state.token = ''
    state.hasLoadedOnce = true
    state.error = err.description
  },
  [AUTH_LOGOUT]: (state) => {
    state.token = ''
    state.err = ''
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
