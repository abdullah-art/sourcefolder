import React from "react";
import "./ClusterSection2.css";
import imgcs2 from "../../../assets/img/cclusters2.png";
export default function ClusterSection2() {
  return (
    <section id="ClusterSection2">
      <div className="container-fluid ccs2">
        <div className="row">
          <div className="col-md-5 text-center">
            <img src={imgcs2} alt="no" id="ccs2-i" />
          </div>
          <div className="col-md-7 mt-md-5">
            <div className="iconic-list ml-6">
              <div className="iconic-item wow fadeInUp">
                <div className="iconic-content">
                  <h1 id="ccs2title-h">
                    {" "}
                    Trend Research
                    <br /> See what’s hidden - quickly{" "}
                  </h1>
                  <h5 className="mt-4" id="ccs2title-c">
                    Conversation Clusters map any topic visually, showing you
                    the trends and connections behind millions of social, media
                    and consumer data points in real time. Semantically linked
                    clusters help you detect emerging themes and trending
                    conversations, follow shifts in public opinion and gain a
                    full understanding of the situation in minutes.{" "}
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
