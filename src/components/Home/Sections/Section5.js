import React from "react";
import rocket from "../../../assets/img/icons/rocket.svg";
import testimony from "../../../assets/img/icons/testimony.svg";
import promotion from "../../../assets/img/icons/promotion.svg";
import coins from "../../../assets/img/icons/coins.svg";
import support from "../../../assets/img/icons/support.svg";
import laptop from "../../../assets/img/icons/laptop.svg";

export default function Section5() {
  return (
    <section id="section5">
      <div className="page-section bg-dark fg-white">
        <div className="container">
          <h1 className="text-center">Why Choose Me ...?</h1>

          <div className="row justify-content-center mt-5">
            <div className="col-md-6 col-lg-3 py-3">
              <div className="card card-body border-0 bg-transparent text-center wow zoomIn">
                <div className="mb-3">
                  <img src={rocket} alt="" />
                </div>
                <p className="fs-large ">Very Fast</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="200ms"
              >
                <div className="mb-3">
                  <img src={testimony} alt="" />
                </div>
                <p className="fs-large">Happy Client</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="400ms"
              >
                <div className="mb-3">
                  <img src={promotion} alt="" />
                </div>
                <p className="fs-large">Free Ads</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="600ms"
              >
                <div className="mb-3">
                  <img src={coins} alt="" />
                </div>
                <p className="fs-large">Save Money</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="800ms"
              >
                <div className="mb-3">
                  <img src={support} alt="" />
                </div>
                <p className="fs-large">24/7 Support</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 py-3">
              <div
                className="card card-body border-0 bg-transparent text-center wow zoomIn"
                data-wow-delay="1000ms"
              >
                <div className="mb-3">
                  <img src={laptop} alt="" />
                </div>
                <p className="fs-large">Full Features</p>
                <p className="fs-small fg-grey">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
