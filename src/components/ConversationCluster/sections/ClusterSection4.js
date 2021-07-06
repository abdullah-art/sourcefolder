import React from "react";
import "./ClusterSection4.css";
import imgcs4 from "../../../assets/img/clusters4.png";
export default function ClusterSection4() {
  return (
    <section id="ClusterSection4">
      <div className="container-fluid p-4 ccs4">
        <div className="row">
          <div className="col-md-5 text-center">
            <img src={imgcs4} alt="no" id="ccs4" />
          </div>
          <div className="col-md-7">
            <div className="iconic-list ml-6">
              <div className="iconic-item wow fadeInUp">
                <div className="iconic-content">
                  <h2 id="ccs4-h">
                    {" "}
                    Consumer Insights Find white space opportunities{" "}
                  </h2>
                  <h5 className="mt-4" id="ccs4-c">
                    Build a custom analysis on what consumers think, purchase or
                    say in minutes, plot competitive landscapes and identify
                    market gaps at a glance. Power your market research with a
                    database of billions of social, traditional and digital
                    consumer conversations. Enrich your insights by identifying
                    links and proximity between topics and audiences, all
                    without the effort of traditional manual research.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
