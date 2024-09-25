<template>
    <footer class="bg-dark text-white text-center py-4">
      <div class="container">
        <div class="row">
          <!-- Column 1: About -->
          <div class="col-md-4 mb-4 mb-md-0">
            <h5>About Us</h5>
            <p class="small">
              We provide the best services in the industry. Our mission is to deliver quality experiences to our customers.
            </p>
          </div>
  
          <!-- Column 2: Links -->
          <div class="col-md-4 mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul class="list-unstyled">
              <li><a href="#" class="text-white">Home</a></li>
              <li><a href="#" class="text-white">Sign Up</a></li>
              <li><a href="#" class="text-white">Contact Us</a></li>
            </ul>
          </div>
  
          <!-- Column 3: Contact -->
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li>Email: contact@website.com</li>
              <li>Phone: +123 456 7890</li>
              <li>Address: 1234 Vue Lane, Bootstrap City</li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Bottom section: Copyright -->
      <div class="bg-secondary py-2">
        <p class="mb-0 small">
          &copy; 2024 Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "FooterComponent"
  };
  </script>
  
  <style scoped>
  footer {
    position: relative;
    bottom: 0;
    width: 100%;
  }
  </style>
  