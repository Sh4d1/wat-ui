<template>
<div class="container pt-3">
    <div class="row justify-content-md-center">
        <div class="col col-lg-2">
            <img class="img-fluid" :src="this.movie.poster" alt="Movie Poster">
        </div>
        <div class="col col-md-6">
            <div class="">
                <h5 class="">{{ this.movie.name }}</h5>
                <p class="">{{ this.movie.plot }}</p>
                <p class=""><small class="text-muted">Rating:{{ this.movie.rating }} - {{ this.movie.year }}</small></p>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
import { API } from '../apis'

export default {
    name: 'Movie',
    data () {
        return {
            imdb: '',
            movie: {},
        }
    },
    created () {
        this.imdb = this.$route.params.imdb || ''
        if (this.imdb === '') this.$router.push('/movies')
    },
    computed: {
        ...mapGetters(['isAuthenticated', 'authStatus'])
    },
    mounted () {
        if (this.imdb.length) {
            this.fetch()
        }

    },
    methods: {
        fetch () {
            API('getMovie').doRequest({
                body: {
                    imdb: this.imdb,
                }
            }).on('done', res => {
                console.log(res)
                this.movie = res.body.movie
            }).on('fail', (res, state) => {
                    console.log(res)
                    console.log(state)
            })
        },
    }
}
</script>

<style lang="css" scoped>



</style>
