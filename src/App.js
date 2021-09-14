import React, { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card";
import LikeButton from "./components/LikeButton";
function App() {
  let todayDate = new Date().toISOString().slice(0, 10);
  let startDate = new Date();
  startDate.setDate(startDate.getDate() - 10);
  startDate = startDate.toISOString().slice(0, 10);
  const [isLoading, setIsLoading] = useState(true);
  const [jsonData, setJsonData] = useState(null);
  // console.log(todayDate);

  //console.log(startDate);

  let imageCards;
  let apiKey = "vn0fMtp6NRQpMEMQlXgvuFttofKGuxcMKFG0cixN";
  let apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${startDate}&end_date=${todayDate}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("no reposnse");
        }
        return response.json();
      })
      .then((data) => {
        setJsonData(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("problem fetching data");
      });
  }, []);

  function arrayLoop(arrayToLoop) {
    let info = [];
    let group = [];
    let counter = 0;
    for (let item of arrayToLoop) {
      console.log(item.title);
      if (counter >= 2) {
        info.push(<div className="row row-cols-2">{group}</div>);
        counter = 0;
        group = [];
      }
      group.push(
        <div className="col">
          <Card
            title={item.title}
            imageUrl={item.url}
            date={item.date}
            description={item.explanation}
          />
          <LikeButton />
        </div>
      );
      counter++;
    }
    return info;
  }
  if (!isLoading) {
    imageCards = arrayLoop(jsonData);
  }
  return <div className="container">{imageCards}</div>;
}

export default App;
