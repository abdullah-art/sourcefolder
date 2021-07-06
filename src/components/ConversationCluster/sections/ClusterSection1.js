import React from "react";
import background from "../../../assets/img/bg_hero_1.svg";
import "./ClusterSection1.css";
export default function ClusterSection1() {
  return (
    <section id="ClusterSection1">
      <div
        className="page-hero-section bg-image hero-home-1"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="hero-caption pt-1">
          <div className="container h-100 d-flex">
            <div className="row align-content-center">
              <div className="col-lg-8 wow fadeInUp ml-2">
                <h1 id="ccs1-h">The light-bulb moment for your data</h1>
                <h3 id="ccs1-t" className="mt-3">
                  Conversation Clusters let you uncover, understand and
                  visualize the context around any topic at a glance.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
