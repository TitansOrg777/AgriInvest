<template>
  <div>
    <!-- Top Nav-like Container (Custom) -->
    <div class="bg-success text-white py-2">
      <div class="container d-flex justify-content-between align-items-center">
        <div>
          <span class="me-3">Empowering Farmers, Growing Futures</span>
          <i class="fas fa-envelope me-1"></i>
          <span class="me-3">info@agriinvest.com</span>
          <i class="fas fa-phone-alt me-1"></i>
          <span>+123 456 789</span>
        </div>

        <div>
          <a href="#" class="text-white me-3"><i class="fab fa-instagram"></i></a>
          <a href="#" class="text-white me-3"><i class="fab fa-whatsapp"></i></a>
          <a href="#" class="text-white me-3"><i class="fab fa-facebook"></i></a>
          <a href="#" class="text-white"><i class="fab fa-twitter"></i></a>
        </div>
      </div>
    </div>

    <!-- First Navbar (Bootstrap) -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div class="container">
        <a class="navbar-brand d-flex align-items-center" href="#">
          <img src="@/assets/tree-21-64.png" alt="Logo" width="40" height="40" class="me-2" />
          <span class="fw-bold" style="color: #00d257">Agri-Invest</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarFirst" aria-controls="navbarFirst" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarFirst">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <li class="nav-item dropdown me-3">
              <a class="nav-link dropdown-toggle" href="#" id="locationDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style="color: black">Select Location</a>
              <ul class="dropdown-menu" aria-labelledby="locationDropdown">
                <li><a class="dropdown-item" href="#">Location 1</a></li>
                <li><a class="dropdown-item" href="#">Location 2</a></li>
                <li><a class="dropdown-item" href="#">Location 3</a></li>
              </ul>
            </li>
            <li class="nav-item me-3">
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="color: black" />
                <button class="btn" type="submit"><i class="fas fa-search" style="color: black"></i></button>
              </form>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><i class="fas fa-shopping-cart" style="color: #00d257"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Second Navbar (Bootstrap) -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top mt-1">
      <div class="container">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link" href="/" style="color: black">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="/profile" style="color: black">Profile</a></li>
          <li class="nav-item"><a class="nav-link" href="#" style="color: black">Products</a></li>
          <li class="nav-item"><a class="nav-link" href="#" style="color: black">Categories</a></li>
          <li class="nav-item"><a class="nav-link" href="#" style="color: black">Blog</a></li>
          <li class="nav-item"><a class="nav-link" href="#" style="color: black">Contacts</a></li>
        </ul>

        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li class="nav-item me-2">
  <router-link to="/login" class="btn btn-outline-success" style="border-color: #00d257; color: #00d257">Login</router-link>
</li>
  <li class="nav-item me-2">
  <router-link to="/signup" class="btn btn-outline-success" style="border-color: #00d257; color: #00d257">Signup</router-link>
  </li>

          <li class="nav-item">
            <a class="nav-link" href="/profile"><i class="fas fa-user" style="color: black"></i></a>
          </li>
        </ul>
      </div>
    </nav>

    <!-- Slot for page content -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "AppLayout",
};
</script>

<style scoped>
/* Optional custom styles */
.navbar {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.bg-success {
  background-color: #00d257 !important;
}
</style>
