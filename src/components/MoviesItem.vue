<template>
    <div class="card">
        <router-link :to="{ name: 'Movie', params: {imdb: movie.imdb } }" tag="div" class="card-content">  	    
            <img v-if="!noImage" class="" :src="poster()" alt="Movie poster">
            <hr />
            <h4 class="">{{ movie.name }}</h4>
            <p class="card-text">{{ movie.year }}</p>
        </router-link>
    </div>
</template>

<script>

export default {
    name: 'MoviesItem',
    props: ['movie'],
    data(){
        return {
            noImage: false
        }
    },
    methods: {
        poster() {
            if (this.movie.poster) {
                return this.movie.poster
            } else {
                this.noImage = true;
            }
        }
    }
}

</script>

<style scoped>
.card {
      background: #F5F5F5;
        padding: 10px;
          display: inline-block;
            margin: 0 0 1em;
              width: 100%;
                cursor: pointer;
                  -webkit-perspective: 1000;
                    -webkit-backface-visibility: hidden;
                      transition: all 100ms ease-in-out;

}
.card:hover {
      transform: translateY(-0.5em);
        background: #EBEBEB;

}
img {
      display: block;
        width: 100%;

}

</style>
