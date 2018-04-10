<template>
<div class="container py-5">
	<div class="row">
		<div class="col-md-12">
		 <div class="row">
		 	 <div class="col-md-6 mx-auto">
			 	<div class="card rounded-1 border-dark">
					<div class="card-header bg-primary">
						<h3 class="mb-0 text-dark">Please sign up</h3>
					</div>
					<div class="card-body">
						<form class="form" role="form" id="formLogin" @submit.prevent="signup">

                            <div class="form-group">
								<div class="alert alert-danger" v-if="error">{{ error }}</div>
								<label for="inputName" class="sr-only">Your name</label>
								<input v-model="name" type="text" class="form-control form-control-lg rounded-0" id="inputName" placeholder="Your name" required ref='nameInput'>
							</div>


							<div class="form-group">
								<label for="inputEmail" class="sr-only">Email address</label>
								<input v-model="email" type="email" class="form-control form-control-lg rounded-0" id="inputEmail" placeholder="Email address" required>
							</div>
							<div class="form-group">
								<label for="inputPassword" class="sr-only">Password</label>
								<input v-model="password" type="password" id="inputPassword" class="form-control form-control-lg rounded-0" placeholder="Password" required>
                            </div>
							<button type="submit" class="btn btn-primary btn-lg float-right" id="btnLogin">Sign up</button>
						</form>
                        <p>Already have an account? <router-link to="/login">Please log in!</router-link></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</div>

</template>

<script>

import { mapGetters } from 'vuex'

export default {
    name: 'Signup',
    data () {
      return {
        name: '',
        email: '',
        password: '',
        error: false
      }
    },
    computed: {
        ...mapGetters({ currentUser: 'currentUser' })
    },
    created () {
        this.checkCurrentLogin()
    },
    updated () {
        this.checkCurrentLogin()
    },
    mounted () {
        this.$refs.nameInput.focus()
    },
    methods: {
        checkCurrentLogin () {
            if (this.currentUser) {
                this.$router.replace(this.$route.query.redirect || '/movies')
            }
        },
        signup () {
            this.$http.post('rpc', { service: 'user', method: 'UserService.Create', request: { name: this.name, email: this.email, password: this.password } })
            .then(request => {
                console.log(request.data)
                if ('errors' in request.data) {
                    this.error = request.data.errors[0].description
                } else {
                    this.signupSuccessful(request)
                }
            })
            .catch(() => {
                this.error = 'Error: Could not sign up'
            })
        },
        signupSuccessful (req) {
          this.$http.post('rpc', { service: 'user', method: 'UserService.Auth', request: { email: this.email, password: this.password } })
                .then(request => this.loginSussessful(request))
                .catch(() => this.loginFailed())
        },

        loginSussessful (req) {
          if (!req.data.token) {
            this.loginFailed()
            return
          }
          this.error = false
          localStorage.token = req.data.token
          this.$store.dispatch('login')
          this.checkCurrentLogin()
        },

        loginFailed () {
          this.error = 'Login failed!'
          this.$store.dispatch('logout')
          delete localStorage.token
        }
    }
}
</script>

<style lang="css" scoped>

.container {
}

.login-overlay {
      background: #3e6680 !important;
        position: absolute;
          width: 100%;
            height: 32rem;
              top: 0;
                left: 0;

}
.login-wrapper {
      background: #fff;
        width: 70%;
          margin: 12% auto;
            animation: fadein 0.6s;

}
@keyframes fadein {
        from { opacity: 0;  }
            to   { opacity: 1;  }

}
.form-signin {
      max-width: 330px;
        padding: 10% 15px;
          margin: 0 auto;

}
.form-signin .form-signin-heading,
.form-signin .checkbox {
      margin-bottom: 10px;

}
.form-signin .checkbox {
      font-weight: normal;

}
.form-signin .form-control {
      position: relative;
        height: auto;
          -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                      padding: 10px;
                        font-size: 16px;

}
.form-signin .form-control:focus {
      z-index: 2;

}
.form-signin input[type="email"] {
      margin-bottom: -1px;
        border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;

}
.form-signin input[type="password"] {
      margin-bottom: 10px;
        border-top-left-radius: 0;
          border-top-right-radius: 0;

} 
</style>
