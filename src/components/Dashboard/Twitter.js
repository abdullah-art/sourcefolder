import React, { useState, useEffect } from "react";
import Postlist from "./Postlist";
import Table from "./Table";
import axios from "axios";

let pageNo = 1;
let id;
export default function Twitter() {
  const [tweets, setTweets] = useState("");

  useEffect(() => {
    return () => {
      clearInterval(id);
    };
  }, []);

  const fetchData = (key) => {
    const dataToSubmit = {
      topic: key,
    };
    axios
      .post("/api/twitter", dataToSubmit)
      .then((res) => {})
      .catch((err) => {});
  };

  const fetchTweets = (key) => {
    id = setInterval(() => {
      axios.get(`/api/tweets/${key}?page=${pageNo.toString()}`).then((res) => {
        setTweets(res.data.results);
      });
    }, 5000);
  };

  const handleNextPage = () => {
    pageNo += 1;
  };

  const handlePreviousPage = () => {
    pageNo -= 1;
  };

  const nextPageReq = () => {
    pageNo = 1;
    clearInterval(id);
  };

  return (
    <div className="container">
      <div className="row">
        <Table
          heading="Search Tweets:"
          fetchData={fetchData}
          fetchTweets={fetchTweets}
          tweets={tweets}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          nextPageReq={nextPageReq}
        />
      </div>
    </div>
  );
}
