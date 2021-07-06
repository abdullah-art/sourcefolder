import React from "react";
import background from "../../assets/img/pattern_1.svg";
import Section1 from "./sections/PricingSection1";
import Section2 from "./sections/PricingSection2";
import Section3 from "./sections/PricingSection3";
import Section4 from "./sections/PricingSection4";
export default function CaseStudies() {
  return (
    <>
      <Section1 />
      <div
        className="position-realive bg-image"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </>
  );
}
