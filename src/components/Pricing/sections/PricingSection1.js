import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import "./PricingSection1.css";
export default function PricingSection1() {
  return (
    <section id="PricingSection1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
          height: "100%",
        }}
      >
        <div className="hero-caption">
          <div className="container h-100 d-flex">
            <div className="row align-content-center text-center">
              <div className=" wow fadeInUp">
                <p id="cs1mtext">
                  Simple Pricing. Unique conversational intelligence for your
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
