import React from "react";
import rs2a from "../../../assets/img/rs2a.png";
import rs2b from "../../../assets/img/rs2b.png";
import rs2c from "../../../assets/img/rs2c.png";
import as2d from "../../../assets/img/as2d.gif";
import "./ReportsSection2.css";
export default function ReportsSection2() {
  return (
    <section id="ReportsSection2">
      <div className="page-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="iconic-list d-flex">
                <div className="iconic-item wow fadeInUp justify-content-center">
                  <div className="iconic-content">
                    <h2 id="rs2title-h">Save Time</h2>
                    <p id="rs2title-c">
                      Save time spent manually preparing and formatting social
                      KPI reports using customizable, multi-format reporting
                      functions.
                    </p>
                    <ul className="mt-1" style={{ marginLeft: "10px" }}>
                      <li>
                        <p id="rs2title-c">
                          Bring reports to life by including video and images,
                          adding comments and editing reports from within the
                          platform.
                        </p>
                      </li>
                      <li>
                        <p id="rs2title-c">
                          Easily download reports as PowerPoint, Word or PDF
                          with underlying data attached to showcase social
                          results to management.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-4 text-center">
              <img src={rs2a} alt="no" id="rs2a" />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 mt-5 text-center">
              <img src={rs2b} alt="no" id="rs2b" />
            </div>

            <div className="col-md-6 py-3">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp d-flex">
                  <div className="iconic-content justify-content-center">
                    <h2 id="rs2title-h">Prove Value</h2>
                    <p className=" mt-1" id="rs2title-c">
                      Demonstrate the value of marketing campaigns by backing up
                      results with multiple data sets.
                    </p>
                    <ul className="mt-4" style={{ marginLeft: "10px" }}>
                      <li>
                        <p id="rs2title-c">
                          Quickly export data to Excel, CSV and RSS format to
                          perform advanced analysis.
                        </p>
                      </li>
                      <li>
                        <p id="rs2title-c">
                          Easily integrate Talkwalker social data into your CRM
                          system, BI tools or common statistical tools to
                          manipulate it efficiently.
                        </p>
                      </li>
                      <li>
                        <p id="rs2title-c">
                          Combine social data with lead gen stats or revenue
                          numbers to prove ROI.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 as2">
              <div className="iconic-list">
                <div className="iconic-item wow fadeInUp">
                  <div className="iconic-content">
                    <h2 id="rs2title-h">Raise Awareness</h2>
                    <p className="mt-1" id="rs2title-c">
                      Highlight success by sharing easy to understand reports
                      that meet each department's needs.
                    </p>
                    <ul
                      className="mt-4"
                      style={{ marginLeft: "10px", lineheight: "-5%" }}
                    >
                      <li>
                        <p id="rs2title-c">
                          Add custom data to link social data to key indicators
                          for each business function.
                        </p>
                      </li>
                      <li>
                        <p id="rs2title-c">
                          Configure alerts and newsletters so that you and your
                          colleagues receive a specific report by email without
                          even needing to log into the tool.
                        </p>
                      </li>
                      <li>
                        <p id="rs2title-c">
                          Receive automatic updates of dashboards each time they
                          are accessed, downloaded or emailed.
                        </p>
                      </li>
                      <li>
                        <p id="rs2title-c">
                          Schedule reports to every key stakeholder with
                          <br /> one click.
                        </p>
                      </li>
                      <li>
                        <p id="rs2title-c">
                          Share widgets, reports and dashboards with one click
                          to make sure everyone is up to date
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-5 mt-5 text-center">
              <img src={rs2c} alt="no" id="irs2c" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
