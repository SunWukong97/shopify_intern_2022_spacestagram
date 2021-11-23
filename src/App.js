import React, { useEffect, useState } from "react";

import "./App.css";
import Card from "./components/Card";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";

function App() {
  let imageCards;
  let loadingScreenDisplay;

  let todayDate = new Date().toISOString().slice(0, 10);
  let startingDate = new Date();
  startingDate.setDate(startingDate.getDate() - 10);
  startingDate = startingDate.toISOString().slice(0, 10);

  //hooks
  const [isLoading, setIsLoading] = useState(true);
  const [jsonData, setJsonData] = useState(null);

  let apiKey = "vn0fMtp6NRQpMEMQlXgvuFttofKGuxcMKFG0cixN";
  let apiUrl;

  useEffect(() => {
    fetchApi(startingDate);
    // eslint-disable-next-line
  }, []);

  function fetchApi(this_startDate) {
    apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${this_startDate}&end_date=${todayDate}`;
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
  }

  function createCards(arrayToLoop) {
    let info = [];

    for (let item of arrayToLoop) {
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

  /**
   *
   * @param {number} dateValue the number of days to go back from the current date
   */
  function dateSelection(dateValue) {
    let newStartDate = new Date();
    newStartDate.setDate(new Date().getDate() - dateValue);
    newStartDate = newStartDate.toISOString().slice(0, 10);

    setIsLoading(true);
    fetchApi(newStartDate);
  }
  if (!isLoading) {
    loadingScreenDisplay = "none";
    imageCards = createCards(jsonData);
  } else {
    loadingScreenDisplay = "block";
  }

  return (
    <React.Fragment>
      <NavBar dateSelection={dateSelection} />
      <LoadingScreen display={loadingScreenDisplay} />
      <div className="container ">{imageCards}</div>
    </React.Fragment>
  );
}

export default App;
