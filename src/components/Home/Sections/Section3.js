import React from "react";
import facebook from "../../../images/facebook.png";
import twitter from "../../../images/twitter.png";
import linkedin from "../../../images/in.png";
import youtube from "../../../images/youtube.png";
import instagram from "../../../images/instagram.png";
import "./stars.css";

export default function Section3() {
  const style = {
    bottom: "10px",
    position: "relative",
  };

  return (
    <section id="section3">
      <div class="stars container-fluid p-5">
        <div class="d-flex justify-content-center">
          <div class="row m-auto justify-content-center">
            <div class="m-4">
              <img src={facebook} width="40px" height="40px" />
            </div>
            <div class="m-4">
              <img src={twitter} width="40px" height="40px" />
            </div>
            <div class="m-4">
              <img src={linkedin} width="40px" height="40px" />
            </div>
            <div class="m-4">
              <img src={youtube} width="40px" height="40px" />
            </div>
            <div class="m-4">
              <img src={instagram} width="40px" height="40px" />
            </div>
            <div class="m-4">
              <img src={twitter} width="40px" height="40px" />
            </div>
            <div class="m-4">
              <img src={twitter} width="40px" height="40px" />
            </div>
            <div class="m-4">
              <img src={twitter} width="50px" height="50px" />
            </div>
          </div>
        </div>
        <div class="text-center text-white mt-2 mb-2 wow fadeInUp">
          <h2 id="dbs3-head">Instant Mentions From All Around The Web And Social Media</h2>
          <div class="text-center text-white mt-3">
          <p id="dbs3-c">
            At Awario, we want you to be the first to know when important
            conversations spark out online. Unlike other monitoring apps that
            rely on a single third-party data provider, we crawl over 13 billion
            web pages daily, in addition to the APIs. So when we say Awario is
            the most immediate way to learn about new mentions, we aren't
            messing around.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
