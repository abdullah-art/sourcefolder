import React from "react";
import dbs2 from "../../../assets/img/ds2.gif";
import dbs2a from "../../../assets/img/dbs2a.png";
import dbs2b from "../../../assets/img/dbs2b.png";
import "../Sections/Section2.css";
export default function Section2() {
  return (
    <section id="section2">
      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="iconic-list ">
                <div className="iconic-item wow fadeInUp d-flex justify-content-center align-content-center">
                  <div className="iconic-content">
                    <h2 id="dbs2title-h">
                      Your reputation is everything. Make sure it’s protected,
                      globally
                    </h2>
                    <h5 className="mt-4" id="dbs2title-c">
                      Talkwalker is your extra set of eyes and ears. Its AI
                      powered analysis provides real time insights into what's
                      happening on all social channels and online media, across
                      187 languages. This enables you to quickly identify issues
                      and complaints before a crisis hits.
                    </h5>
                    <a
                      href="demo"
                      className="btn btn-primary rounded-pill mt-3"
                      id="dbs2demo"
                    >
                      Protect Your reputation
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-content-center justify-content-center">
              <img src={dbs2} alt="no" id="dbs2" />
            </div>
          </div>
          <div className="row">
            <div className=" col-md-6 mt-5 d-flex justify-content-center align-content-center">
              <img src={dbs2a} alt="no" id="dbs2a" />
            </div>

            <div className="col-md-6 py-3">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp d-flex justify-content-center align-content-center">
                  <div className="iconic-content">
                    <h2 id="dbs2title-h">
                      Your social media presence is paramount. Measure its
                      impact
                    </h2>
                    <h5 className="mt-4" id="dbs2title-c">
                      Benchmark your brand and campaigns with our proven KPI
                      frameworks. Measure sentiment and brand health. Connect
                      social efforts to real business results and provide your
                      management with instant reports. Compare your results to
                      the competition, across every channel. Discover what
                      customers really think about your brands and products in
                      real time.
                    </h5>
                    <a
                      href="demo"
                      className="btn btn-primary rounded-pill mt-5"
                      id="dbs2demo"
                    >
                      Measure Your Impact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp d-flex justify-content-center align-content-center">
                  <div className="iconic-content">
                    <h2 id="dbs2title-h">
                      Brand impact has moved full digital. Promote and profit.
                    </h2>
                    <h5 className="mt-4" id="dbs2title-c">
                      Maximize the social performance of your communication
                      campaigns with data-driven technology.
                    </h5>
                    <h5 className="mt-4" id="dbs2title-c">
                      Find the best stories and the true influencers to boost
                      your brand power. With Quick Search, spot the trending
                      stories on your brand and industry, in real time. Amplify
                      your brand message for one global impact with Influencer
                      One - one influencer marketing hub for a simpler workflow
                      and measurable ROI metrics.{" "}
                    </h5>
                    <a
                      href="demo"
                      className="btn btn-primary rounded-pill mt-5"
                      id="dbs2demo"
                    >
                      Protect Your reputation
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-flex justify-content-center align-content-center">
              <img src={dbs2b} alt="no" id="dbs2b" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
