import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./components/HomePage.vue"; // Import HomePage
import UserProfile from "./components/UserProfile.vue"; // Import UserProfile component
import AppLayout from "./components/AppLayout.vue"; // Import your AppLayout component
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
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
        path: "login", // Route for UserProfile
        component: LogIn, // UserProfile will also be displayed within AppLayout
      },
      {
        path: "signup", // Route for UserProfile
        component: SignUp, // UserProfile will also be displayed within AppLayout
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
