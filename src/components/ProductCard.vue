<template>
  <div class="product-card" :class="{ expanded: isExpanded }">
    <!-- Collapsed View -->
    <div v-if="!isExpanded" class="collapsed-view">
      <img :src="getImage('mango.jpeg')" alt="Mango" class="collapsed-image" />
      <div class="collapsed-details">
        <h3 class="title">Mango</h3>
        <p class="description">Fresh organic mangoes</p>
        <p class="location">Location: Nairobi, Kenya</p>
        <p class="price">Price: $15 per dozen</p>
      </div>

      <!-- Buttons Row -->
      <div class="button-row">
        <button class="add-to-cart-btn">
          <i class="fa fa-cart-plus"></i>
        </button>
        <button @click="isExpanded = true" class="expand-btn">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>

    <!-- Expanded View -->
    <div v-else class="expanded-view">
      <div class="image-gallery">
        <img :src="selectedImage" alt="Selected Mango" class="main-image" />
        <div class="thumbnail-container">
          <img
            v-for="(img, index) in images"
            :key="index"
            :src="getImage(img)"
            alt="'Mango ' + (index + 1)"
            class="thumbnail"
            @click="selectedImage = getImage(img)"
          />
        </div>
      </div>

      <div class="product-details">
        <h3>Mango</h3>
        <p>Fresh organic mangoes from the farm</p>
        <p>Location: Nairobi, Kenya</p>
        <p>Price: $15 per dozen</p>

        <div class="button-container">
          <button class="add-to-cart-btn">
            <i class="fa fa-cart-plus"></i>
          </button>
          <!-- Contract Icon (_) -->
          <button @click="isExpanded = false" class="contract-btn">
            <i class="fa fa-minus"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
      isExpanded: false,
      selectedImage: this.getImage("mango.jpeg"),
      images: [
        "mango.jpeg",
        "mango 1.jpeg",
        "mango 2.jpeg",
        "mango 3.jpeg",
        "mango 4.jpeg",
      ],
    };
  },
  methods: {
    // Fetch images from assets folder
    getImage(image) {
      return require(`@/assets/${image}`);
    },
  },
};
</script>

<style scoped>
/* General Styling */
.product-card {
  border: 1px solid #ddd; /* Border around the card */
  border-radius: 8px;
  padding: 10px;
  margin: 20px auto; /* Add margin around the card */
  background-color: white;
  transition: all 0.3s ease;
  width: 300px; /* Increased width for better fit in normal mode */
  height: 400px; /* Increased height for better fit */
  box-sizing: border-box;
  /* Box Shadow */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-card.expanded {
  width: 60%; /* Expanded width for better fit */
  height: auto; /* Allow height to expand as content grows */
}

/* Collapsed View Styling */
.collapsed-view {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.collapsed-image {
  width: 100%;
  height: 200px; /* Adjusted image height */
  object-fit: cover;
  border-radius: 8px;
}

.collapsed-details {
  text-align: flex-start;
  flex-grow: 1;
}

.title {
  font-size: 18px;
  margin-bottom: 5px;
}

.description,
.location,
.price {
  font-size: 14px;
  color: #555;
  margin: 5px 0;
}

/* Button Row Styling */
.button-row {
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0;
}

.add-to-cart-btn,
.expand-btn,
.contract-btn {
  background: linear-gradient(45deg, #fef500, #18c729);
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  margin-right: 10px;
}

.add-to-cart-btn i,
.expand-btn i,
.contract-btn i {
  color: white;
}

/* Expanded View Styling */
.expanded-view {
  display: flex;
  justify-content: space-between;
}

.image-gallery {
  flex-basis: 40%; /* Images on the right */
  margin-right: 16px;
}

.main-image {
  width: 100%;
  height: 400px; /* Adjusted height for better view */
  object-fit: cover;
  border-radius: 8px;
}

.thumbnail-container {
  display: flex;
  margin-top: 10px;
}

.thumbnail {
  width: 70px;
  height: 70px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: transform 0.2s;
}

.thumbnail:hover {
  transform: scale(1.1);
}

.product-details {
  flex-basis: 50%; /* Details on the left */
  display: flex;
  flex-direction: column; /* Align items vertically */
  justify-content: center; /* Center items vertically */
}

/* Button Container */
.button-container {
  display: flex;
  justify-content: flex-start; 
  margin-top: 10px; /* Add some margin to separate buttons from text */
}
</style>
