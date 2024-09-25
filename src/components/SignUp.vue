<template>
    <div class="container mt-5">
      <h2 class="text-center mb-4">Sign Up</h2>
      <form @submit.prevent="handleSignUp">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="name"
            required
            aria-describedby="nameHelp"
          />
          <small id="nameHelp" class="form-text text-muted">Enter your full name.</small>
        </div>
  
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
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
  
        <button type="submit" class="btn btn-success btn-block">Sign Up</button>
  
        <div v-if="signUpError" class="alert alert-danger mt-3" role="alert">
          {{ signUpError }}
        </div>
  
        <div class="text-center mt-3 mb-3">
          <span>OR</span>
        </div>
  
       
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        signUpError: '' // For displaying sign-up errors
      };
    },
    methods: {
      handleSignUp() {
        // Perform sign-up logic here
        if (this.validateEmail(this.email)) {
          console.log("Sign Up Data:", this.name, this.email, this.password);
          this.signUpError = ''; // Clear any previous error messages
          // Here, you can call your API to sign up the user
        } else {
          this.signUpError = 'Please enter a valid email address.';
        }
      },
  
      validateEmail(email) {
        // Simple email validation regex
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 500px;
  }
  </style>
  