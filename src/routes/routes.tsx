import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Posts from "../pages/Posts";
import Home from "../pages/home/Home";
import SinglePostDetail from "../pages/SinglePostDetail";
import CreatePost from "../pages/dashboard/CreatePost";
import Supplies from "../pages/dashboard/Supplies";
import ProtectedRoute from "../components/layout/ProtectedRoute";
import LeaderBoard from "../pages/LeaderBoard";
import Community from "../pages/Community";
import CreateTestimonial from "../pages/dashboard/CreateTestimonial";
import AddVolunteer from "../pages/AddVolunteers";
import AboutUs from "../pages/AboutUs";
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
       
      }
    ],
  },
  {
    path: "/dashboard/supplies",
    element:<ProtectedRoute><Supplies></Supplies></ProtectedRoute> ,
  },
  {
    path: "/dashboard/create-supply",
    element:<ProtectedRoute> <CreatePost></CreatePost></ProtectedRoute>,
  },
  {
    path: "/dashboard/create-testimonial",
    element:<ProtectedRoute> <CreateTestimonial></CreateTestimonial></ProtectedRoute>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/relief-goods/:id",
    element: <SinglePostDetail></SinglePostDetail>,
  },
  {
    path: "/relief-goods",
    element: <Posts></Posts>,
  },
  {
    path: "/leaderboard",
    element: <LeaderBoard></LeaderBoard>,
  },
  {
    path: "/community",
    element: <Community></Community>,
  },
  {
    path: "/volunteer",
    element: <AddVolunteer></AddVolunteer>,
  },
  {
    path: "/about-us",
    element: <AboutUs></AboutUs>,
  },
]);

export default router;
