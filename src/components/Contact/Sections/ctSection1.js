import React from "react";
import "./ctSection1.css";

export default function ctSection1() {
  return (
    <div>
      <section id="AboutSection1">
        <div className="row">
          <div className="cts1">
            <h2 id="ct-h" className="text-center">
              Let's Talk
            </h2>
            <p className="text-center" id="cttxt">
              Got feature requests or ideas on how we can make Awario better?
              Please shoot us a message.
              <br />
              Have questions? Our hands-on Customer Care team will have them
              answered asap.
              <br />
              Just popping in to say hi? We love those as well!{" "}
            </p>
            <br />
            <form action="/action_page_binary.asp" method="post">
              <input type="text" id="fname" name="fname" />
              <input type="text" id="lname" name="lname" placeholder="Email" />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
              />
              <input
                type="text"
                id="messege"
                name="messege"
                placeholder="Messege"
              />
              <button
                href="#"
                className="btn btn-primary rounded-pill mt-5"
                id="cts1demo"
              >
                Send Messege
              </button>
            </form>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </div>
  );
}
