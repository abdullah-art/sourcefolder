import React, { useState, useEffect } from "react";
import "./NamedEntities.css";
import NamedEntitiesTable from "./NamedEntitiesTable";
import axios from "axios";

let pageNo = 1;
let id1;
export default function NamedEntities() {
  const [tweets, setTweets] = useState("");

  useEffect(() => {
    return () => {
      clearInterval(id1);
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
    id1 = setInterval(() => {
      axios.get(`/api/tweets/${key}?page=${pageNo.toString()}`).then((res) => {
        console.log(res.data.results);
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
    clearInterval(id1);
  };

  return (
    <div className="container ">
      <div className="row">
        <h2>Named Entities Colors</h2>
        <table
          className="justify-content-center ml-5"
          style={{ width: "100%" }}
        >
          <tr>
            <td>People including fictional</td>
            <td style={{ color: "purple" }}>Purple</td>
          </tr>
          <tr>
            <td>Nationalities or religious or political groups</td>
            <td style={{ color: "blue" }}>Blue</td>
          </tr>
          <tr>
            <td>Bulidings, Airports, Highways, Bridges</td>
            <td style={{ color: "orange" }}>Oranges</td>
          </tr>
          <tr>
            <td>Companies,Agencies,Institutions etc</td>
            <td style={{ color: "yellow" }}>Yellow</td>
          </tr>
          <tr>
            <td>Countries,Cities,States</td>
            <td style={{ color: "green" }}>Green</td>
          </tr>
          <tr>
            <td>Non-GPE Locations,Mountain Ranges,Bodies of water</td>
            <td style={{ color: "red" }}>Red</td>
          </tr>
          <tr>
            <td>Objects, Vehicles, Foods, etc</td>
            <td style={{ color: "pink" }}>Pink</td>
          </tr>
          <tr>
            <td>Named Huricanes,Battles,Wars,Sports,Events</td>
            <td style={{ color: "brown" }}>Brown</td>
          </tr>
          <tr>
            <td>Title of Books,Songs etc</td>
            <td style={{ color: "black" }}>Black</td>
          </tr>
          <tr>
            <td>Any Named Languages</td>
            <td style={{ color: "grey" }}>grey</td>
          </tr>
          <tr>
            <td>Named documents made into laws</td>
            <td style={{ color: "indigo" }}>Indigo</td>
          </tr>
          <tr>
            <td>Absolute or relative dates or periods</td>
            <td style={{ color: "magenta" }}>Magenta</td>
          </tr>
          <tr>
            <td>Times smaller than a day</td>
            <td style={{ color: "chocolate" }}>Chocolate</td>
          </tr>
          <tr>
            <td>Percentage , Including "%"</td>
            <td style={{ color: "darkgray" }}>Dark Gray</td>
          </tr>
          <tr>
            <td>Monetary Values , including unit</td>
            <td style={{ color: "royalblue" }}>Royal Blue</td>
          </tr>
          <tr>
            <td>Measurement , as of weight or distance</td>
            <td style={{ color: "palegreen" }}>Pale Green</td>
          </tr>
          <tr>
            <td>"First", "Second" etc</td>
            <td style={{ color: "navy" }}>Navy</td>
          </tr>
          <tr>
            <td>Numerals that donot fall under another typ</td>
            <td style={{ color: "darkmagenta" }}>dark Magenta</td>
          </tr>
        </table>
      </div>

      <div className="row">
        <NamedEntitiesTable
          heading="Named Entities:"
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
