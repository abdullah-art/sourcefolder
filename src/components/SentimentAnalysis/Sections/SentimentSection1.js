import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import "./SentimentSection1.css";
export default function SentimentSection1() {
  return (
    <section id="SentimentSection1">
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
                <p id="sas1-h">
                  Meet the sentiment analysis tool for social listening
                </p>
                <p id="sas1-t" className="mt-3">
                  Use Awario to measure the tone of your mentions.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
