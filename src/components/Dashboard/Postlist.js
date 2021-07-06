import React, { useState } from "react";
import "./Postlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Foo from "../utils/Foo";
import { tweets } from "../../components/utils/data";

function Postlist({ heading }) {
  const [input, setInput] = useState("");
  const element = <FontAwesomeIcon icon={faSearch} />;
  return (
    <div className="container ">
      <div className="row">
        <div className="col">
          <form
            class="searchbox form-group has-search ml-5"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h4 className="mb-4">{heading}</h4>
            <span class="form-control-feedback">{element}</span>
            <input
              type="text"
              id="text"
              className="form-control mb-5"
              placeholder="Search"
              onChange={({ target }) => setInput(target.value)}
              style={{ borderColor: "#333333" }}
            />
          </form>
        </div>
        <div className="col-md-12 shadow ml-5 pb-5">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellspacing="0"
          >
            <thead>
              <tr style={{ background: "#333333" }}>
                <th style={{ color: "white" }}>Tests</th>
                <th style={{ color: "white" }}>Sentiments</th>
              </tr>
            </thead>

            <tbody>
              {tweets &&
                tweets.map((tweet) => (
                  <tr key={tweet.id}>
                    <td>{<Foo text={tweet.message} />}</td>
                    <td>{tweet.id % 2 ? "True" : "False"}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Postlist;
