import React from "react";
import app_preview_3 from "../../assets/img/app_preview_3.png";

export default function Section4() {
  return (
    <section id="section4">
      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-1 py-3 mt-lg-5 wow fadeInUp">
              <h1 className="mb-4">Research your market.</h1>
              <p className="mb-4">
                Social media is full of invaluable market information and
                consumer intelligence - but it's also full of noise. Sieve out
                meaningful customer insights with Awario to understand your
                audience better and marketing campaigns.
              </p>
              <a href="demo" className="btn btn-outline-primary rounded-pill">
                How it works
              </a>
            </div>
            <div className="col-lg-5 py-3">
              <div className="img-place mobile-preview shadow wow zoomIn">
                <img src={app_preview_3} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
