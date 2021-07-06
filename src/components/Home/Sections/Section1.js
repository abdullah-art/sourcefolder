import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import "./Section1.css";
export default function Section1() {
  return (
    <section id="section1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-caption pt-1">
          <div className="container h-100 d-flex">
            <div className="row align-content-center">
              <div className="col-md-8 wow fadeInUp ml-2">
                <p id="dbhead">
                  Social insights for the world's most impactful brands
                </p>
                <p className="mt-3" id="dbtxt">
                  From intelligence to impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
