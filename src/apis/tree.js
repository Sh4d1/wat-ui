import fetch from "@apicase/adapter-fetch"
import { ApiTree } from "@apicase/services"
import { ApiService } from "@apicase/core"
import { commitToStore } from "@apicase/vue"

import store from "@/store"

const R = require('ramda')

const withToken = R.assoc(['headers', 'token'])

const Root = new ApiService(fetch, {
    url: "https://api.wat.ptrk.io/rpc",
    meta: { store },
    hooks: {
        before ({ payload, meta, next }) {
            const body = {
                service: meta.service,
                method: meta.method,
                request: payload.body
            }
            if (meta.requiresAuth) {
                payload.headers = {
                    ...(payload.headers || {}),
                    Authorization: 'Bearer ' + localStorage.getItem('user-token')
                }
            }
            next({ ...payload, body })
        }
    }
})

export const rpc = (name, service, method, data = {}) => ({
    ...data,
    name: name,
    method: 'POST',
    meta: { service, method, store}
})

export const rpcWithAuth = (name, service, method, data = {}) => ({
    ...data,
    name: name,
    method: 'POST',
    meta: {
        service: service,
        method: method,
        store: store,
        requiresAuth: true,
    }
})

export const API = new ApiTree(Root, [
    rpc('login', 'user', 'UserService.Auth'),
    rpcWithAuth('listMovies', 'movie', 'MovieService.List'),
    rpcWithAuth('getMovie', 'movie', 'MovieService.Get')
])
