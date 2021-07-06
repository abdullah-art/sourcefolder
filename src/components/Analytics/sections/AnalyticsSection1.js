import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import "./AnalyticsSection1.css";
export default function AnalyticsSection1() {
  return (
    <section id="AnalyticsSection1">
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
                <p id="as1-h">
                  Put Social Data Intelligence to Work. Instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
