<template>
<div>
   <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
		<div class="carousel-inner">
          <div class="carousel-item active">
            <img class="first-slide d-block w-2000" src="../assets/new_movies.jpg" alt="First slide">
            <div class="container">
              <div class="carousel-caption text-left">
                <h1>Discover new movies</h1>
                <p>WebAppTech is the new social media to discover new films, share them with your friends, and get some feedbacks. Registration are free for the moment.</p>
                <p><router-link to="/signup" class="btn btn-lg btn-primary">Sign up today</router-link></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="second-slide" src="../assets/better.jpg" alt="Second slide">
            <div class="container">
              <div class="carousel-caption">
                <h1>Just like Facebook, but better!</h1>
                <p>We don't sell your information. Everything is private, everything is encrypted, everything belongs only to you. Just don't worry, and enjoy a new, incredible, and fantastic social media.</p>
				<p><router-link to="/about" class="btn btn-lg btn-primary">Learn more</router-link></p>

              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img class="third-slide" src="../assets/discover.jpg" alt="Third slide">
            <div class="container">
              <div class="carousel-caption text-right">
                <h1>Want to watch a movie, but you have no idea?</h1>
                <p>We make you discover incredible movies. We will make you want to watch even more movies. We will not disappoint!</p>
				<p><router-link to="/movies" class="btn btn-lg btn-primary">Browse movies</router-link></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div> 
            <!--<router-link to="/login" class="btn btn-login btn-sm" replace>Log in</router-link>-->
		<div class="container marketing">

        <!-- Three columns of text below the carousel -->
        <div class="row">
          <div class="col-lg-4">
            <img class="rounded-circle" src="../assets/secure.png" alt="Generic placeholder image" width="140" height="140">
            <h2>Secure</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded-circle" src="../assets/fast.png" alt="Generic placeholder image" width="140" height="140">
            <h2>Fast</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <img class="rounded-circle" src="../assets/easy.png" alt="Generic placeholder image" width="140" height="140">
            <h2>Easy</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
<hr class="divider">
	</div>
</div>
</template>

<script>

// import { mapGetters } from 'vuex'

export default {
    name: 'Home'
}
</script>

<style lang="css" scoped>

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
  background-color: #777;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}

.carousel-item img {
	left: -9999px;  /*important */
   right: -9999px;  /*important */
   margin: 0 auto;  /*important */
max-width: none;  /*important */
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}


/* Featurettes
------------------------- */

.divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

}


</style>
