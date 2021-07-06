import React, { Component } from "react";
import logo from "../../assets/favicon.png";
import smiley from "../../assets/img/smiley1.png";
import dart from "../../assets/img/dart.png";
import trend from "../../assets/img/trend1.png";
import contact from "../../assets/img/contact.png";
import "./Home.css";
import HomeContent from "./component/HomeContent";
export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center">
            <img src={logo} alt="" height="30%" width="7%" />
            <h4 className="mt-5">Hello , Ahsan</h4>
            <h2 className="mt-5 mb-5">Social Media Listening Platform</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <hr
            style={{
              color: "cadetBlue",
              backgroundColor: "cadetBlue",
              height: "1%",
              width: "80%",
            }}
          />
        </div>
        <div className="row mb-5">
          <div className="col-md-7 mt-4 pr-5">
            <p id="intro">
              Awario is a social listening tool that gives brands access to data
              that matters to their business: insights on their customers,
              market, and competitors Our team was fascinated by the technology
              behind crawling and indexing web data, so we thought, why not
              build a powerful web search mechanism for businesses? Say, one
              that lets brands monitor what people are saying about them across
              the web: on news sites, blogs, forums, and social media? What if
              we could make all of that happen in real time?
            </p>
          </div>
          <div className="col-md-5 pl-5">
            <div className="row d-flex text-center">
              <div className="col-md-5" id="sintro">
                <p id="sintro">Location</p>
                <p id="sintro">Website</p>
                <p id="sintro">Founded</p>
                <p id="sintro">Employee</p>
              </div>
              <div className="col-md-4">
                <p id="sintro">Lahore</p>
                <p id="sintro">------</p>
                <p id="sintro">2021</p>
                <p id="sintro">5</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
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
        <HomeContent />
      </div>
    );
  }
}
