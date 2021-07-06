import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import "./AboutSection1.css";
export default function AboutSection1() {
  return (
    <section id="AnalyticsSection1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
          height: "400px",
        }}
      >
        <div className="hero-caption p-1">
          <div className="container h-100 d-flex">
            <div className="row align-content-center">
              <div className=" wow fadeInUp">
                <p id="as1htext">About Us</p>
                <p id="as1mtext">
                  Awario is an audacious project designed to change the world of
                  social media intelligence and analytics, with audacious people
                  at its heart.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
