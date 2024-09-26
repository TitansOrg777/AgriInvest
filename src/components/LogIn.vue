<template>
  <div class="container mt-5 neumorphic-container">
    <h2 class="text-center mb-4">Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          class="form-control neumorphic-input"
          id="email"
          v-model="email"
          required
          aria-describedby="emailHelp"
        />
        <small id="emailHelp" class="form-text text-muted"
          >Enter your registered email.</small
        >
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          class="form-control neumorphic-input"
          id="password"
          v-model="password"
          required
          minlength="6"
        />
        <small class="form-text text-muted"
          >Password must be at least 6 characters.</small
        >
      </div>

      <button type="submit" class="btn neumorphic-button btn-block">
        Login
      </button>

      <div v-if="loginError" class="alert alert-danger mt-3" role="alert">
        {{ loginError }}
      </div>
    </form>
    <div class="text-center mt-3">
      <p>
        Don't have an account?
        <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      loginError: "", // To store login error messages
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
        this.loginError = "Please enter a valid email address.";
      }
    },
    validateEmail(email) {
      // Simple email validation regex
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 500px;
  background: #e0e5ec;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 12px 12px 20px #c8d0e7, -12px -12px 20px #ffffff;
  margin-bottom: 15px;
}

/* Neumorphic Input */
.neumorphic-input {
  background: #e0e5ec;
  border: none;
  padding: 15px;
  box-shadow: inset 8px 8px 16px #c3c3c3, inset -8px -8px 16px #ffffff;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.neumorphic-input:focus {
  outline: none;
  box-shadow: inset 8px 8px 12px #c3c3c3, inset -8px -8px 12px #ffffff;
}

/* Neumorphic Button */
.neumorphic-button {
  padding: 10px 20px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  background: linear-gradient(45deg, #fef500, #18c729); /* Applying gradient */
  box-shadow: 12px 12px 20px #c8d0e7, -12px -12px 20px #ffffff;
  transition: all 0.3s ease;
}

.neumorphic-button:hover {
  box-shadow: 8px 8px 16px #c8d0e7, -8px -8px 16px #ffffff;
  transform: translateY(-2px);
}

.neumorphic-button:active {
  box-shadow: inset 4px 4px 8px #c8d0e7, inset -4px -4px 8px #ffffff;
  transform: translateY(1px);
}
</style>
