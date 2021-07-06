import React from "react";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import background from "../../assets/img/pattern_1.svg";
import Section5 from "./Sections/Section5";

export default function Home() {
  return (
    <>
      <Section1/>
      <div
        className="position-realive bg-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Section2/>
        <Section3/>
      </div>
      <Section5/>
    </>
  );
}
