import React, { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";

function App() {
  let todayDate = new Date().toISOString().slice(0, 10);
  let startDate = new Date();
  startDate.setDate(startDate.getDate() - 10);
  startDate = startDate.toISOString().slice(0, 10);
  const [isLoading, setIsLoading] = useState(true);
  const [jsonData, setJsonData] = useState(null);

  let imageCards;
  let loadingScreenDisplay;
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
        <div key={item.title} className="row justify-content-center mt-4">
          <div className="col-lg-4 col-md-8 col-sm-auto">
            <Card
              title={item.title}
              mediaType={item.media_type}
              imageUrl={item.url}
              date={item.date}
              description={item.explanation}
            />
          </div>
        </div>
      );
    }
    return info;
  }
  if (!isLoading) {
    loadingScreenDisplay = "none";
    imageCards = arrayLoop(jsonData);
  } else {
    loadingScreenDisplay = "block";
  }

  return (
    <React.Fragment>
      <NavBar />
      <LoadingScreen display={loadingScreenDisplay} />
      <div className="container ">{imageCards}</div>
    </React.Fragment>
  );
}

export default App;
