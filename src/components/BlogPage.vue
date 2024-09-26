<template>
    <div>
      <header class="bg-success text-white text-center py-5">
        <h1>Agriculture Blog</h1>
        <p>Latest News and Tips on Farming</p>
      </header>
      
      <!-- Blog List -->
      <div class="container my-5" v-if="!selectedPost">
        <div class="row">
          <div class="col-md-4" v-for="post in posts" :key="post.id">
            <div class="card mb-4">
              <img :src="post.image" class="card-img-top" alt="Post Image">
              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.excerpt }}</p>
                <button class="btn btn-primary" @click="selectPost(post)">Read More</button>
              </div>
              <div class="card-footer text-muted">
                Posted on {{ post.date }}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Blog Post Details -->
      <div class="container my-5" v-else>
        <button class="btn btn-secondary mb-4" @click="selectedPost = null">Back to Blog</button>
        <h1>{{ selectedPost.title }}</h1>
        <img :src="selectedPost.image" class="img-fluid mb-4" alt="Post Image">
        <p>{{ selectedPost.content }}</p>
        <p class="text-muted">Published on {{ selectedPost.date }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedPost: null, // This will hold the currently selected post
        posts: [
          {
            id: 1,
            title: 'How to Improve Soil Quality',
            image: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=600',
            excerpt: 'Learn the best methods for improving soil...',
            content: 'Full content for improving soil quality...',
            date: 'September 25, 2024'
          },
          {
            id: 2,
            title: 'Modern Irrigation Techniques',
            image: 'https://images.pexels.com/photos/2955794/pexels-photo-2955794.jpeg?auto=compress&cs=tinysrgb&w=600',
            excerpt: 'Irrigation is key to successful agriculture...',
            content: 'Full content for modern irrigation techniques...',
            date: 'September 24, 2024'
          },
          {
            id: 3,
            title: 'Modern Irrigation Techniques',
            image: 'https://images.pexels.com/photos/4207906/pexels-photo-4207906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            excerpt: 'Irrigation is key to successful agriculture...',
            content: 'Full content for modern irrigation techniques...',
            date: 'September 24, 2024'
          },
          {
            id: 4,
            title: 'Modern Irrigation Techniques',
            image: 'https://images.pexels.com/photos/4207906/pexels-photo-4207906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            excerpt: 'Irrigation is key to successful agriculture...',
            content: 'Full content for modern irrigation techniques...',
            date: 'September 24, 2024'
        },
        {
          id: 5,
          title: 'Sustainable Farming Practices',
          image: ('https://images.pexels.com/photos/321542/pexels-photo-321542.jpeg?auto=compress&cs=tinysrgb&w=600'),
          excerpt: 'Implementing sustainable methods in agriculture...',
          content: 'Full content on sustainable farming practices...',
          date: 'September 21, 2024',
        },
        {
          id: 6,
          title: 'Advanced Greenhouse Technologies',
          image: ('https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=600'),
          excerpt: 'Explore the latest technologies in greenhouse management...',
          content: 'Full content on advanced greenhouse technologies...',
          date: 'September 20, 2024',
        },
        {
          id: 7,
          title: 'Integrated Pest Management (IPM) Strategies',
          image: ('https://images.pexels.com/photos/1276235/pexels-photo-1276235.jpeg?auto=compress&cs=tinysrgb&w=600'),
          excerpt: 'Learn about integrated pest management to minimize pesticide use...',
          content: 'Full content on Integrated Pest Management (IPM) strategies...',
          date: 'September 19, 2024',
        },
        {
          id: 8,
          title: 'Benefits of Cover Crops',
          image: ('https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&w=600'),
          excerpt: 'Discover how cover crops can improve soil health and reduce erosion...',
          content: 'Full content on the benefits of cover crops...',
          date: 'September 18, 2024',
        },
        {
          id: 9,
          title: 'Precision Agriculture Technologies',
          image: ('https://images.pexels.com/photos/348689/pexels-photo-348689.jpeg?auto=compress&cs=tinysrgb&w=600'),
          excerpt: 'Explore the latest technologies in precision agriculture for higher yields...',
          content: 'Full content on precision agriculture technologies...',
          date: 'September 17, 2024',
        },
        {
          id: 10,
          title: 'Organic vs. Synthetic Fertilizers',
          image: ('https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600'),
          excerpt: 'Compare the pros and cons of organic and synthetic fertilizers...',
          content: 'Full content comparing organic and synthetic fertilizers...',
          date: 'September 16, 2024',
        },
        {
          id: 11,
          title: 'Sustainable Farming Practices',
          image: ('https://images.pexels.com/photos/321542/pexels-photo-321542.jpeg?auto=compress&cs=tinysrgb&w=600'),
          excerpt: 'Implementing sustainable methods in agriculture...',
          content: 'Full content on sustainable farming practices...',
          date: 'September 21, 2024',
        },
        {
          id: 12,
          title: 'Advanced Greenhouse Technologies',
          image: ('https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=600'),
          excerpt: 'Explore the latest technologies in greenhouse management...',
          content: 'Full content on advanced greenhouse technologies...',
          date: 'September 20, 2024',
        },
       
          // Add more posts as needed
        ]
      };
    },
    methods: {
      selectPost(post) {
        this.selectedPost = post;
      }
    }
  }
  </script>
  
  <style scoped>
  header {
    background-image: url('https://images.pexels.com/photos/1719669/pexels-photo-1719669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-size: cover;
    background-position: center;
  }
  </style>
  