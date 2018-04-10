<template>
<div>
    <div class="p-3">
        <input v-model.trim="searchQuery" type="text" class="form-control form-control-lg rounded-2" id="inputName" placeholder="Search for a movie!" required ref="movieName" @keyup.enter="search"/>
    </div>
    <div class="wrapperr" >
    <div class="cardss" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <template v-if="listLoaded">
            <masonry :cols="{default: 4, 1000: 3, 700: 2, 400: 1}" :gutter="{default: '30px', 700: '15px'}">
            <MoviesItem v-for="movie in movies" v-bind:key="movie.imdb" v-bind:movie="movie"></MoviesItem>
            </masonry>
        </template>
    </div>
    </div>
</div>
</template>

<script>

import { mapGetters } from 'vuex'
import axios from 'axios'
import MoviesItem from './MoviesItem.vue'
import { API } from '../apis'

export default {
    components: { MoviesItem },
    name: 'Movies',
    data () {
        return {
            searchQuery: '',
            movies: [],
            listLoaded: false,
            pages: '',
            results: '',
            currentPage: 1,
            busy: true
        }
    },
    created () {
        if (this.$route.params.query) {
            if (this.$route.params.query.length) {
                this.searchQuery = this.$route.params.query.replace(/\+/g, " ") || ''
            }
        }
            },
    computed: {
        query() {
            return this.$route.params.query || ''
        },
        ...mapGetters(['isAuthenticated', 'authStatus'])
    },
    mounted () {
        this.$refs.movieName.focus()
        if (this.searchQuery.length) {
            this.fetch()
        }

    },
    methods: {
        loadMore () {
            this.busy = true
            this.currentPage += 1
            this.fetch()
        },
        fetch () {
            API('listMovies').doRequest({
                body: {
                    name: this.searchQuery,
                    page: this.currentPage,
                }
            }).on('done', res => {
                let data = res.body
                if (this.currentPage === 1) {
                    this.movies = data.movies
                } else {
                    this.movies = this.movies.concat(data.movies)
                }
                this.listLoaded = true
                this.busy = false
            }).on('fail', (res, state) => {
                if (state.payload.body.request.page === 1) {
                    console.log('fail')
                    console.log(res)
                    console.log(state)
                    this.movies = []
                    this.listLoaded = false
                }
            })
        },
        search () {
            if (!this.searchQuery.length) {
                this.movies = []
                this.listLoaded = false
                return
            }
            this.currentPage = 1
            this.$refs.movieName.blur()
            this.$router.push({ name: 'Search', params: { query: this.searchQuery.replace(/ /g, "+") }})
            this.fetch()
        },
    }
}
</script>

<style lang="css" scoped>



</style>
