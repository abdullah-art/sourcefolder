import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import "./ReportsSection1.css";
export default function ReportsSection1() {
  return (
    <section id="Reportssection1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-caption pt-1">
          <div className="container h-100 d-flex">
            <div className="row align-content-center ml-3">
              <div className="wow fadeInUp">
                <h1 id="rs1mtext">Social Media Reporting</h1>
                <h5 id="rs1mc" className="mt-3">
                  Use automated reporting functions to share social intelligence
                  <br /> across departments in seconds
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
