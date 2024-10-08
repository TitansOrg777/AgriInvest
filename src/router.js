import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue";
import UserProfile from "./components/UserProfile.vue";
import AppLayout from "./components/AppLayout.vue";
import ProductCard from "./components/ProductCard.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import ContactPage from "./components/ContactPage.vue";
import BlogPage from "./components/BlogPage.vue";
import CategoriesPage from "./components/CategoriesPage.vue";
import CartPage from "./components/CartPage.vue";
import CheckoutPage from "./components/CheckoutPage.vue";
import FarmerDashboard from "./components/FarmerDashboard.vue"; // Import the FarmerDashboard component

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "",
        component: HomePage,
      },
      {
        path: "profile",
        component: UserProfile,
      },
      {
        path: "products",
        component: ProductCard,
      },
      {
        path: "login",
        component: LogIn,
      },
      {
        path: "signup",
        component: SignUp,
      },
      {
        path: "contact",
        component: ContactPage,
      },
      {
        path: "blog",
        component: BlogPage,
      },
      {
        path: "categories",
        component: CategoriesPage,
      },
      {
        path: "cart",
        component: CartPage,
      },
      {
        path: "checkout",
        component: CheckoutPage,
      },
      {
        path: "farmer-dashboard", // New route for Farmer Dashboard
        component: FarmerDashboard,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
