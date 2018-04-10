<template>

    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <router-link to="/" class="navbar-brand">WebAppTech</router-link>
        <button  class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div v-if="isAuthenticated" class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li v-bind:class="{ active: this.$route.path.startsWith('/movies') }" class="nav-item" data-toggle="collapse" data-target="#navbarCollapse" >
                        <router-link to="/movies/" class="nav-link" data-toggle="collapse" data-target="#navbarCollapse">Movies</router-link>
                    </li>
                    <li v-bind:class="{ active: this.$route.path.startsWith('/profile') }" class="nav-item" data-toggle="collapse" data-target="#navbarCollapse">
                        <router-link to="/profile" class="nav-link" data-toggle="collapse" data-target="#navbarCollapse">Profile</router-link>
                    </li>
            </ul>
			<form class="form-inline mt-2 mt-md-0">
            <router-link to="/logout" class="btn btn-outline-secondary my-2 my-sm-0" data-toggle="collapse" data-target="#navbarCollapse">Logout</router-link>
            </form>

            </div>
            <div v-else class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                
                </ul>
                    <form class="form-inline mt-2 mt-md-0">
            <router-link to="/login" class="btn btn-outline-primary my-sm-0 my-2 mx-2" data-toggle="collapse" data-target="#navbarCollapse">Log in</router-link>
            <router-link to="/signup" class="btn btn-primary my-2 my-sm-0" data-toggle="collapse" data-target="#navbarCollapse">Sign Up</router-link>
<!--                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Log In</button>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>-->
                    </form>
            

        </div>
    </nav>





</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Navbar',
    computed: {
        ...mapGetters({ isAuthenticated: 'isAuthenticated' })
    }
}
</script>

<style lang="scss" scoped>
/*.bg-bookstore {
    background: #00487c !important;
    height: 3rem;
}
.btn-logout {
    background-color: #3e6680;
    border-color: #3e6680;
    color: #fff;

}
.btn-logout:hover {
    background-color: darken(#3e6680, 20%);
    border-color: darken(#3e6680, 20%);
    color: #fff;

}*/
</style>
