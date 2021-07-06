import React from "react";
import "./BlogsSection1.css";
import background from "../../../assets/img/bg_hero_1.svg";
export default function BlogsSection1() {
  return (
    <section id="BlogstSection1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
          height: "100%",
        }}
      >
        <div className="hero-caption pt-1">
          <div className="container h-100 d-flex">
            <div className="row align-content-center justify-content-center">
              <div className="wow fadeInUp">
                <h1 id="blogs1">BLOGS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
