import React from "react";
import './section6.css';

export default function Section6() {
  const style = {
    "margin-left": "13%",
  };

  return (
    <section id="section6">
      <div className="arrow-up"></div>
      <div className="container-fluid p-5 bg-primary">
        <div className="text-white text-center row">
          <div className="col-12">
            <h2>Get Your Free Personalized Demo</h2>
          </div>
        </div>
        <form>
          <div className="form-row w-75" style={style}>
            <div className="form-group col-6 pr-5">
              <input
                type="text"
                className="inp text-white form-control bg-primary "
                id="inputFirstName"
              />
              <label for="inputFirstName" className="text-white">
                First Name
              </label>
            </div>
            <div className="form-group col-6 pr-5 ">
              <input
                type="text"
                className="inp text-white form-control bg-primary"
                id="inputLastName"
              />
              <label for="inputLastName" className="text-white">
                Last Name
              </label>
            </div>
          </div>
          <div className="form-row w-75" style={style}>
            <div className="form-group col-6 pr-5">
              <input
                type="email"
                className="inp text-white form-control bg-primary "
                id="inputEmail"
              />
              <label for="inputEmail" className="text-white">
                Email
              </label>
            </div>
            <div className="form-group col-6 pr-5 ">
              <input
                type="text"
                className="inp text-white form-control bg-primary"
                id="inputPhone"
                value="+92"
              />
              <label for="inputPhone" className="text-white">
                Phone Number
              </label>
            </div>
          </div>
          <div className="form-row w-75" style={style}>
            <div className="form-group col-6 pr-5">
              <input
                type="text"
                className="inp text-white form-control bg-primary "
                id="inputCompany"
              />
              <label for="inputCompany" className="text-white">
                Company
              </label>
            </div>
            <div className="form-group col-6 pr-5 ">
              <input
                type="text"
                className="inp text-white form-control bg-primary"
                id="inputIndustry"
              />
              <label for="inputIndustry" className="text-white">
                Industry
              </label>
            </div>
          </div>
        </form>
        <div className="d-flex justify-content-center">
          <a href="demo" className="btn rounded-pill mt-5" id="demobtn">
            Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}
