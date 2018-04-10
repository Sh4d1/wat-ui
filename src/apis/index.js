import { API } from "./tree"
import { AUTH_REQUEST } from "@/store/actions/auth"

import store from "@/store"

API("login").on("done", (result, state) => {
    state.meta.store.dispatch(AUTH_REQUEST, result.body)
})

API("listMovies").on("done", (result, state) => {
})

export { API }
