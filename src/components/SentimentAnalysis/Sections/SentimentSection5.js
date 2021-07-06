import React from "react";
import "./SentimentSection5.css";
import sentiment from "../../../assets/img/sentiment5.png";
export default function SentimentSection4() {
  return (
    <section id="sentimentSection5">
      <div className="page-section">
        <div className="container-fluid">
          <div className="row m-auto justify-content-center text-center">
            <div className="col-md-9 iconic-list m-auto text-center d-flex">
              <div className="iconic-item wow fadeInUp justify-content-center">
                <div className="iconic-content">
                  <h2 id="sas5title-h">
                    Analyze your competitors' social scene.
                  </h2>
                  <h5 className="mt-4" id="sas5title-c">
                    Create an alert in Awario to monitor competitors' brand
                    sentiment on social media. Create a sentiment analysis
                    report that compares your brand to your competitors'.
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <img src={sentiment} alt="no" id="sas5img" />
            </div>
            <div className="pt-5 ml-1">
              <h5 id="sas5-c">
                Knowledge is power. Knowing where your competitors succeed and
                where they fall behind in the eyes of
                <br /> their consumers is vital to building your own marketing
                strategy and improving your own product. This is
                <br /> why it's often important to monitor their brand almost as
                closely as you monitor your own. And the first
                <br /> thing to know is their brand sentiment. A sentiment
                analysis tool will answer questions such as: Do they
                <br /> get more positive or negative mentions? What are the
                negative mentions about? Can you reply to
                <br /> some complaints with your own offer? Doesn't hurt to
                offer an unhappy customer an alternative, does it?
              </h5>
              <h5 id="sas5-c">
                Discovering competitors' strengths and weaknesses and
                introducing social selling in a timely manner are
                <br /> the main benefits of paid and free sentiment analysis
                tools.
              </h5>
              <br />
              <br />
              <a href="demo" id="sas5link">
                Sign up for free{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
