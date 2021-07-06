import React, { useState, useMemo } from "react";
import "./NamedEntitiesTable.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Foo from "../utils/Foo";
import { namedEntites } from "../utils/NamedEntittiesSymbols";
import reactStringReplace from "react-string-replace";

export default function NamedEntitiesTable({
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

  const mapTweets = (t, n, w) => {
    const NE = JSON.parse(n);
    const words = JSON.parse(w);
    const tweetWords = t.split(" ");
    let mappedNE = new Array(tweetWords.length).fill("O");
    let updatedWords = [];
    let result = [];
    let j = 0;
    words.map((w) => {
      let arr = w.split(" ");
      for (let i in arr) {
        updatedWords.push(arr[i]);
      }
    });
    updatedWords.map((word) => {
      const index = tweetWords.indexOf(word);
      if (index != -1) {
        if (NE[j] != undefined) {
          mappedNE[index] = NE[j];
        }
      }
      j++;
    });

    result = mappedNE.map((ne, index) => {
      return {
        color: namedEntites[ne],
        word: tweetWords[index],
      };
    });
    return result;
  };

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
            </tr>
          </thead>
          <tbody>
            {tweets &&
              tweets.map((tweet) => {
                {
                  let arr = [];
                  let result = mapTweets(
                    tweet.Tweet,
                    tweet.NamedEntities,
                    tweet.words
                  );

                  result &&
                    result.map((element) => {
                      let span = React.createElement(
                        "span",
                        { style: { color: element.color } },
                        element.word
                      );
                      let space = <span> </span>;
                      arr.push(span);
                      arr.push(space);
                    });
                  return React.createElement("tr", {}, arr);
                }
              })}
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
