import React from "react";
import "./SentimentSection3.css";
import sentiment from "../../../assets/img/sentiment2.png";
import sentiment0 from "../../../assets/img/sentiment.png";
export default function SentimentSection3() {
  return (
    <section id="SentimentSection3">
      <div className="container-fluid">
        <div className="row m-auto justify-content-center text-center">
          <div className="iconic-list d-flex">
            <div className="iconic-item wow fadeInUp justify-content-center">
              <div className="iconic-content">
                <h2 id="sas3title-h">Measure your brand's reputation.</h2>
                <h5 className="mt-4 mb-5" id="sas3title-c">
                  Look at Mention Statistics to see overall trends and patterns
                  in your online presence
                </h5>
              </div>
            </div>
          </div>
          <div className="sas3img">
            <img src={sentiment0} alt="no" id="sas3img" />
          </div>
          <div className="pt-5 ml-3">
            <h5 id="sas3-c">
              Have you ever wondered what your brand's overall social media
              sentiment is? Is it positive, negative, or
              <br /> neutral? Percentage-wise, do they complain or praise it
              more often? Or maybe, they don't express any
              <br /> specific feelings and just ask neutral questions instead?
            </h5>
            <h5 id="sas3-c">
              Monitoring sentiment and digging deeper into what positive and
              negative trends say is vital for every
              <br /> company. This is why social media sentiment analysis tools
              are crucial for any marketing strategy. Social
              <br /> listening sentiment analysis measures social media
              sentiment with the help of sentiment analysis tools.
              <br /> It divides social sentiment into positive, negative, and
              neutral.{" "}
            </h5>
            <h5 id="sas3-c">
              To access sentiment analysis in Awario (a social listening tool
              with extensive sentiment analysis features)
              <br />, go to Mention Statistics and look at the graph that shows
              the growth of neutral, positive, and negative
              <br />
              sentiment. Alternatively, watch the social media sentiment on the
              Dashboard in real time
            </h5>
            <br />
            <br />
            <a href="#" id="sas3alink">
              Sign up for free{" "}
            </a>
          </div>
        </div>
        <div className="row m-auto justify-content-center text-center">
          <div className="iconic-list d-flex">
            <div className="iconic-item wow fadeInUp justify-content-center">
              <div className="iconic-content">
                <h2 id="sas3title-h">Answer important mentions first.</h2>
                <h5 className="mt-4" id="sas3title-c">
                  Use the filter to reveal negative mentions, answer complaints
                  first, and prevent a possible crisis.{" "}
                </h5>
              </div>
            </div>
          </div>
          <div>
            <img src={sentiment} alt="no" className="mt-5" id="sas3aimg" />
          </div>
          <div className="pt-5 ml-3">
            <h5 id="sas3acontent">
              Not all mentions online are equally important. They don't require
              the same kind of engagement, either.
              <br /> This means, mentions with only positive sentiment or only
              negative mentions in your feed might be very
              <br /> helpful. For example, with the help of a sentiment tool
              like Awario, you could at first reply to all burning
              <br />
              complaints, prevent a social media crisis (which is a common
              thing), and make sure your product and
              <br /> your company don't require urgent attention.
            </h5>
            <h5 id="sas3acontent">
              When that's done, you can move to positive brand mentions, and
              comment with "Thank you" to all
              <br /> relevant mentions. You could also sort positive and
              negative mentions by Reach to see which ones
              <br /> attract the most attention and, therefore, require a
              quicker response. Negative mentions with bigger
              <br /> reach are more dangerous, while positive mentions with
              bigger reach are promising: their authors could
              <br /> probably be turned into brand influencers.
            </h5>
            <br />
            <br />
            <a href="#" id="sas3alink">
              Sign up for free{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
