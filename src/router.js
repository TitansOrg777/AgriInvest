import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue"; // Import HomePage
import UserProfile from "./components/UserProfile.vue"; // Import UserProfile component
import AppLayout from "./components/AppLayout.vue"; // Import your AppLayout component
import ProductCard from "./components/ProductCard.vue"; // Import your AppLayout component
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
<<<<<<< HEAD
import ContactPage from "./components/ContactPage.vue"
import BlogPage from "./components/BlogPage.vue";
=======
import ContactPage from "./components/ContactPage.vue";
import CategoriesPage from "./components/CategoriesPage.vue";
>>>>>>> 26399d8336f660aec89a1eab270a9acfdcfe11dc
const routes = [
  {
    path: "/",
    component: AppLayout, // Use AppLayout as the layout for this route
    children: [
      {
        path: "",
        component: HomePage, // HomePage will be displayed within AppLayout
      },
      {
        path: "profile", // Route for UserProfile
        component: UserProfile, // UserProfile will also be displayed within AppLayout
      },
      {
        path: "products",
        component: ProductCard, // HomePage will be displayed within AppLayout
      },
      {
        path: "login", // Route for UserProfile
        component: LogIn, // UserProfile will also be displayed within AppLayout
      },
      {
        path: "signup", // Route for UserProfile
        component: SignUp, // UserProfile will also be displayed within AppLayout
      },
      {
        path: "contact", // Route for UserProfile
        component: ContactPage, // UserProfile will also be displayed within AppLayout
      },
      {
<<<<<<< HEAD
        path: "blog", // Route for UserProfile
        component: BlogPage, // UserProfile will also be displayed within AppLayout
=======
        path: "categories", // Route for UserProfile
        component: CategoriesPage, // UserProfile will also be displayed within AppLayout
>>>>>>> 26399d8336f660aec89a1eab270a9acfdcfe11dc
      },
      // You can add additional child routes as needed here
    ],
  },
  // Additional routes can be added here if needed, using different layouts
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
