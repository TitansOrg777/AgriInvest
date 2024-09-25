<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            required
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted">Enter your registered email.</small>
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
            minlength="6"
          />
          <small class="form-text text-muted">Password must be at least 6 characters.</small>
        </div>
  
        <button type="submit" class="btn btn-success btn-block">Login</button>
  
        <div v-if="loginError" class="alert alert-danger mt-3" role="alert">
          {{ loginError }}
        </div>
      </form>
      <div class="text-center mt-3">
        <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        loginError: '' // To store login error messages
      };
    },
    methods: {
      handleLogin() {
        // Perform login logic here
        if (this.validateEmail(this.email)) {
          console.log("Login Data:", this.email, this.password);
          // Here you can call your API for login
          // If login fails, set this.loginError to display the error message
        } else {
          this.loginError = 'Please enter a valid email address.';
        }
      },
      validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 400px;
  }
  </style>
  