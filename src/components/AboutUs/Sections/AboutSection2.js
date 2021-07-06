import React from "react";
import aus2a from "../../../assets/img/aus2a.jpg";
import aus2b from "../../../assets/img/aus2b.jpg";
import "./AboutSection2.css";
export default function AboutSection2() {
  return (
    <section id="AboutSection2">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={aus2a} alt="no" id="aus2-i" />
          </div>
          <div className="col-md-6">
            <div className="iconic-list d-flex">
              <div className="iconic-item wow fadeInUp justify-content-center">
                <div className="iconic-content">
                  <h3 id="aus2title-h">Who we are</h3>
                  <h5 className="mt-4" id="aus2title-c">
                    Talkwalker is an online and social data analytics software
                    company specialized in listening, analytics and reporting
                    that empowers over 2,000 brands analysing online
                    conversations on social networks in 187 languages. We have
                    been recognized by the Forrester Wave Social Listening
                    Report as a Strong Performer. For us, it validates
                    everything that we are striving for – happy customers,
                    super-powerful product, groundbreaking AI technology, and an
                    abundance of clean and accurate social data.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-6 text-center">
            <img src={aus2b} alt="no" id="aus2-i" />
          </div>
          <div className="col-md-6">
            <div className="iconic-list flex">
              <div className="iconic-item wow fadeInUp justify-content-center">
                <div className="iconic-content">
                  <h5 className="mt-4" id="aus2title-c">
                    The company is extremely international with their
                    headquarters based in the city center of Luxembourg and has
                    additional offices in New York, San Francisco, Frankfurt,
                    Singapore, Paris, and Tokyo. Our colleagues come from 40+
                    different countries around the world, and we have a total
                    headcount of over 400+ employees. Being a rapidly-growing
                    organization, our goal is to be 500+ employees by the end of
                    2020.
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
