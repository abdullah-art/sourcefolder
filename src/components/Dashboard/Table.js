import React, { useState } from "react";
import "./Table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Foo from "../utils/Foo";
import { useAsyncDebounce } from "react-table";

export default function Table({
  heading,
  fetchData,
  tweets,
  handleNextPage,
  handlePreviousPage,
  fetchTweets,
  nextPageReq,
}) {
  const [input, setInput] = useState("");
  const element = <FontAwesomeIcon icon={faSearch} />;
  return (
    <div className="row">
      <div className="col">
        <form
          className="searchbox form-group has-search ml-5"
          onSubmit={(e) => {
            e.preventDefault();
            fetchData(input.trim());
            fetchTweets(input.trim());
          }}
        >
          <h4 className="mb-4">{heading}</h4>
          <span class="form-control-feedback">{element}</span>
          <input
            type="text"
            id="text"
            className="form-control mb-5"
            placeholder="Search"
            onChange={({ target }) => {
              setInput(target.value);
              nextPageReq();
            }}
            style={{ borderColor: "#333333" }}
          />
        </form>
      </div>
      <div className="col-md-12 shadow ml-5 pb-5">
        <table id="customers">
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
                  <td>{<Foo text={tweet.Tweet} />}</td>
                  <td>{tweet.Sentiment === 1 ? "True" : "False"}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="row justify-content-center">
          <a
            href="#"
            class="previous round"
            onClick={() => {
              handlePreviousPage();
              fetchTweets(input.trim());
            }}
          >
            &#8249;
          </a>
          <a
            href="#"
            class="next round"
            onClick={() => {
              handleNextPage();
              fetchTweets(input.trim());
            }}
          >
            &#8250;
          </a>
        </div>
      </div>
    </div>
  );
}
