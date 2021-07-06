import React from "react";
import Section1 from "./sections/AnalyticsSection1";
import Section2 from "./sections/AnalyticsSection2";
import background from "../../assets/img/pattern_1.svg";

export default function Analytics() {
  return (
    <>
      <Section1/>
      <div
        className="position-realive bg-image"
        style={{ backgroundImage: `url(${background})` }}
      >
      <Section2/>
      </div>
    </>
  );
}
