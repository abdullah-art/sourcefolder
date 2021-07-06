import React from "react";
import background from "../../../assets/img/pattern_1.svg";
import Section1 from "./Section/loginSection";
export default function Login() {
  return (
    <div>
      <>
        <div
          className="position-realive bg-image"
          style={{ backgroundImage: `url(${background})` }}
        >
          <Section1 />
        </div>
      </>
    </div>
  );
}
