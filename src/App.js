import React, { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card";

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
        setJsonData(data.reverse());
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("problem fetching data");
      });
  }, []);

  function arrayLoop(arrayToLoop) {
    let info = [];

    for (let item of arrayToLoop) {
      console.log(item.title);

      info.push(
        <div>
          <Card
            title={item.title}
            mediaType={item.media_type}
            imageUrl={item.url}
            date={item.date}
            description={item.explanation}
          />
        </div>
      );
    }
    return info;
  }
  if (!isLoading) {
    imageCards = arrayLoop(jsonData);
  }
  return (
    <React.Fragment>
      <h1>Spacestagram</h1>
      <div className="grid-container ">{imageCards}</div>
    </React.Fragment>
  );
}

export default App;
