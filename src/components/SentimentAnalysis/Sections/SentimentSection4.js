import React from "react";
import "./SentimentSection4.css";
import sentiment from "../../../assets/img/sentiment3.png";
export default function SentimentSection4() {
  return (
    <section id="SentimentSection4">
      <div className="page-section">
        <div className="container-fluid mt-5">
          <div className="row m-auto justify-content-center text-center">
            <div className="col-md-9 iconic-list m-auto text-center d-flex">
              <div className="iconic-item wow fadeInUp justify-content-center">
                <div className="iconic-content">
                  <h2 id="sas4title-h">
                    Track the reaction to your marketing campaigns.
                  </h2>
                  <h5 className="mt-4" id="sas4title-c">
                    Set up an alert for your campaign or product launch in
                    Awario and watch the reaction.
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <img src={sentiment} alt="no" className="mt-5 sas4img" />
            </div>
            <div className="pt-5 ml-1">
              <h5 id="sas4-c">
                Sentiment analysis tools ensure that you get to know how people
                react to your marketing campaign,
                <br /> event, product launch, feature update, blog post, or
                whatever it is in real time. Ongoing social media
                <br /> sentiment analysis makes sure you know if people are
                positive or negative about it and if you should
                <br /> stop immediately, change something, or keep going.
                Analyze the sentiment using tools for sentiment
                <br /> analysis and spot any problem as soon as it arises,
                because, let's face it, people these days say
                <br /> something online before they do absolutely anything else.
              </h5>
              <br />
              <br />
              <a href="demo" id="sas4link">
                Sign up for free{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
