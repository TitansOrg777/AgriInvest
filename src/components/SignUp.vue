<template>
  <div class="container mt-5 neumorphic-container">
    <h2 class="text-center mb-4">Sign Up</h2>
    <form @submit.prevent="handleSignUp">
      <!-- Name Field -->
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control neumorphic-input"
          id="name"
          v-model="name"
          required
          aria-describedby="nameHelp"
        />
        <small id="nameHelp" class="form-text text-muted">Enter your full name.</small>
      </div>

      <!-- Email Field -->
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
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <!-- Phone Number Field -->
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input
          type="tel"
          class="form-control neumorphic-input"
          id="phone"
          v-model="phone"
          required
        />
        <small id="phoneHelp" class="form-text text-muted">Enter a valid phone number.</small>
      </div>

      <!-- Location Field -->
      <div class="form-group">
        <label for="location">Location</label>
        <input
          type="text"
          class="form-control neumorphic-input"
          id="location"
          v-model="location"
          required
        />
        <small id="locationHelp" class="form-text text-muted">Specify your current location.</small>
      </div>

      <!-- Password Field -->
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
        <small class="form-text text-muted">Password must be at least 6 characters.</small>
      </div>

      <!-- Profile Image Field -->
      <div class="form-group">
        <label for="profileImage">Upload Profile Image</label>
        <input
          type="file"
          class="form-control-file"
          id="profileImage"
          @change="handleFileUpload"
          accept="image/*"
        />
        <small id="imageHelp" class="form-text text-muted">Choose a profile image (JPEG, PNG).</small>
      </div>

      <!-- User Type (Farmer/Client) Checkbox -->
      <div class="form-group">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="isFarmer"
            v-model="isFarmer"
          />
          <label class="form-check-label" for="isFarmer">Are you a Farmer?</label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="checkbox"
            id="isClient"
            v-model="isClient"
          />
          <label class="form-check-label" for="isClient">Are you a Client?</label>
        </div>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="btn btn-success btn-block neumorphic-btn">
        Sign Up
      </button>

      <!-- Error Message -->
      <div v-if="signUpError" class="alert alert-danger mt-3" role="alert">
        {{ signUpError }}
      </div>

      <!-- Link to Login Page -->
      <div class="text-center mt-3">
        <p>Already have an account? <router-link to="/login">Login</router-link></p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      phone: "",
      location: "",
      password: "",
      profileImage: null, // Store profile image file
      isFarmer: false,
      isClient: false,
      signUpError: "", // For displaying sign-up errors
    };
  },
  methods: {
    handleSignUp() {
      // Perform sign-up logic here
      if (this.validateEmail(this.email)) {
        if (this.isFarmer || this.isClient) {
          // Construct form data
          const formData = new FormData();
          formData.append("name", this.name);
          formData.append("email", this.email);
          formData.append("phone", this.phone);
          formData.append("location", this.location);
          formData.append("password", this.password);
          formData.append("userType", this.isFarmer ? "Farmer" : "Client");
          if (this.profileImage) formData.append("profileImage", this.profileImage);

          console.log("Sign Up Data:", formData);
          this.signUpError = ""; // Clear any previous error messages
          // Here, you can call your API to sign up the user with formData
        } else {
          this.signUpError = "Please select either Farmer or Client.";
        }
      } else {
        this.signUpError = "Please enter a valid email address.";
      }
    },

    handleFileUpload(event) {
      // Handle profile image file upload
      const file = event.target.files[0];
      if (file) {
        this.profileImage = file;
        console.log("Profile Image Uploaded:", file.name);
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
}

/* Neumorphic Container */
.neumorphic-container {
  padding: 30px;
  border-radius: 15px;
  box-shadow: 10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff;
  background: #e0e5ec;
  margin-bottom: 15px;
}

/* Neumorphic Input Fields */
.neumorphic-input {
  background: #e0e5ec;
  box-shadow: inset 8px 8px 16px #c3c3c3, inset -8px -8px 16px #ffffff;
  border: none;
  border-radius: 10px;
  transition: box-shadow 0.3s ease;
  margin-bottom: 15px;
}

.neumorphic-input:focus {
  outline: none;
  box-shadow: inset 6px 6px 12px #c3c3c3, inset -6px -6px 12px #ffffff;
}

/* Neumorphic Button */
.neumorphic-btn {
  background: linear-gradient(45deg, #fef500, #18c729); /* Applying gradient */
  color: #ffffff;
  border: none;
  border-radius: 30px;
  box-shadow: 6px 6px 12px #c3c3c3, -6px -6px 12px #ffffff;
  padding: 15px;
  transition: box-shadow 0.3s ease, background 0.3s ease;
}

.neumorphic-btn:hover {
  box-shadow: 4px 4px 8px #c3c3c3, -4px -4px 8px #ffffff;
  background: linear-gradient(45deg, #ffdf00, #16a026); /* Slight color change */
}
</style>
