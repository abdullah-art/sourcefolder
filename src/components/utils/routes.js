import Analytics from "../Analytics/Analytics";
import Blogs from "../Blogs/Blogs";
import Cluster from "../ConversationCluster/Cluster";
import Home from "../Home/Home";
import DHome from "../Dashboard/Home";
import Reports from "../Reports/Reports";
import Sentiment from "../SentimentAnalysis/Sentiment";
import Pricing from "../Pricing/Pricing";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Login from "../auth/Login/login.js";
import Signup from "../auth/Signup/Signup";
import Dashboard from "../Dashboard/Dashboard";
import Twitter from "../Dashboard/Twitter";
import Facebook from "../Dashboard/Facebook";
import DoughnutChart from "../Dashboard/DoughnutChart";
import NamedEntities from "../Dashboard/NamedEntities";
import React from "react";
import MainLayout from "./MainLayout";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/conversationcluster", element: <Cluster /> },
      { path: "/sentimentanalysis", element: <Sentiment /> },
      { path: "/blogs", element: <Blogs /> },
      { path: "/analytics", element: <Analytics /> },
      { path: "/reports", element: <Reports /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "/", element: <DHome /> },
      { path: "/twitter", element: <Twitter /> },
      { path: "/facebook", element: <Facebook /> },
      { path: "/chart", element: <DoughnutChart /> },
      { path: "/namedentities", element: <NamedEntities /> },
    ],
  },
];

export { routes };
