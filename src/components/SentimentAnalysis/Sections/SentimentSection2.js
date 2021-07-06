import React from "react";
import "./SentimentSection2.css";
import smiley from "../../../assets/img/smiley1.png";
import dart from "../../../assets/img/dart.png";
import trend from "../../../assets/img/trend1.png";
import contact from "../../../assets/img/contact.png";

export default function SentimentSection2() {
  return (
    <section id="section2">
      <div className="page-section">
        <div className="container-fluid">
          <div className="row m-auto" id="sas2">
            <div className="col-md-3 text-center">
              <img src={smiley} alt="no" id="sas2logo" />
              <br />
              <br />
              <h5 id="sas2-h">Know your reputation.</h5>
              <p id="sas2-c">
                Measure your brand sentiment and see how it changes over time.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <img src={dart} alt="no" id="sas2logo" />
              <br />
              <br />
              <h5 id="sas2-h">Prioritize your engagement.</h5>
              <p id="sas2-c">
                Spot crises and react to urgent negative social mentions first.{" "}
              </p>
            </div>
            <div className="col-md-3 text-center">
              <img src={trend} alt="no" id="sas2logo" />
              <br />
              <br />
              <h5 id="sas2-h">Track reactions.</h5>
              <p id="sas2-c">
                Know how people react to your marketing campaigns or product
                releases.
              </p>
            </div>
            <div className="col-md-3 text-center">
              <img src={contact} alt="no" id="sas2logo" />
              <br />
              <br />
              <h5 id="sas2-h">Analyze your competitors.</h5>
              <p id="sas2-c">
                Identify your competitors' strengths and weaknesses.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
