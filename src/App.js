import React, { useEffect } from "react";
import { useRoutes } from "react-router-dom";
import WOW from "wowjs";
import { routes } from "./components/utils/routes";
import "./assets/css/mobster.css";
import "./assets/css/maicons.css";
import "./assets/vendor/animate/animate.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);

  let element = useRoutes(routes);
  return <>{element}</>;
};

export default App;
