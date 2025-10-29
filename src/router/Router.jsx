import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Dashboardlayout from "../components/layout/Dashboardlayout";
import DashboardHome from "../pages/Body/DashboardHome";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Venues from "../pages/Body/Venues";
import Payments from "../pages/Body/Payments";
import Notification from "../pages/Body/Notification";
import ProfileSetting from "../pages/Body/ProfileSetting";
import LandingPageLayout from "../components/layout/LandingPageLayout";
import HomePage from "../pages/Landing/HomePage";
// import LandingPage from "../pages/Landing0/LandingPage";
import HallOwnerLogin from "../pages/auth/HallOwner/HallOwnerLogin";
import HallOwnerSignUp from "../pages/auth/HallOwner/HallOwnerSignUp";
import IndividualLayout from "../components/layout/IndividualLayout";
import AllVenues from "../pages/IndividualDashboard/AllVenues";
import Indoor from "../pages/IndividualDashboard/Indoor";
import Outdoor from "../pages/IndividualDashboard/Outdoor";
import Multipurpose from "../pages/IndividualDashboard/Multipurpose";

export const Element = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: "/dashboardHome",
    element: <Dashboardlayout />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "/dashboardHome/venues",
        element: <Venues />,
      },
      {
        path: "/dashboardHome/payments",
        element: <Payments />,
      },
      {
        path: "/dashboardHome/notifications",
        element: <Notification />,
      },
      {
        path: "/dashboardHome/settings",
        element: <ProfileSetting />,
      },
    ],
  },
  {
    path: "individual-dashboard",
    element: <IndividualLayout />,
    children: [
      {
        index: true,
        element: <AllVenues />,
      },
      {
        path: "/individual-dashboard/indoor",
        element: <Indoor />,
      },
      {
        path: "/individual-dashboard/outdoor",
        element: <Outdoor />,
      },
      {
        path: "/individual-dashboard/multipurpose",
        element: <Multipurpose />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/hall-owner/login",
    element: <HallOwnerLogin />,
  },
  {
    path: "/hall-owner/signup",
    element: <HallOwnerSignUp />,
  },
]);
