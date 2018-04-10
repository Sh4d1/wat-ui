import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Movies from '@/components/Movies'
import Movie from '@/components/Movie'
import Home from '@/components/Home'
import Logout from '@/components/Logout'
import Signup from '@/components/Signup'

import store from '@/store'

const ifNotAuthenticated = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next()
        return
    }

    next('/')
}

const ifAuthenticated = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next()
        return
    }

    next('/login')
}

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
            beforeEnter: ifNotAuthenticated,
        },
        {
            path: '/movies',
            name: 'Movies',
            component: Movies,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/movies/:imdb',
            name: 'Movie',
            component: Movie,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/movies/search/:query',
            name: 'Search',
            component: Movies,
            beforeEnter: ifAuthenticated,
        },
        {
            path: '/logout',
            name: 'Logout',
            component: Logout,
            beforeEnter: ifAuthenticated,
        }
  ]
})
