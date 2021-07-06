import React, { useState, useEffect } from "react";
import Postlist from "./Postlist";

export default function Facebook() {
  const [Facebook, setFacebook] = useState("");

  return (
    <div className="container">
      <div className="row">
        <Postlist heading="Search Facebook Posts:" />
      </div>
    </div>
  );
}
