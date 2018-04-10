<template>
    <div id="app">
        <header>
            <Navbar></Navbar>
        </header>
        <main role="main">
            <router-view></router-view>
            <Foot></Foot>
        </main>
    </div>
</template>

<script>

import { mapGetters } from 'vuex'
import Navbar from '@/components/Navbar'
import Foot from '@/components/Foot'

export default {
    name: 'app',
    computed: {
        ...mapGetters({ currentUser: 'currentUser' })
    },
    created () {
        this.checkCurrentLogin()
    },
    updated () {
        this.checkCurrentLogin()
    },
    methods: {
        checkCurrentLogin () {
            console.log(this.$route.path)
            //if (!this.currentUser && this.$route.path !== '/' && this.$route.path !== '/login' && this.$route.path !== '/signup') {
              //  this.$router.push('/login?redirect=' + this.$route.path)
            //}
        }
    },
    components: {
        Navbar,
        Foot
    }
}
</script>

<style>

body {
    padding-top: 3rem;
    padding-bottom: 3rem;
    color: #5a5a5a;
}
</style>
