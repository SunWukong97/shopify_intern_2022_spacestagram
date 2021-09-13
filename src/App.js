import logo from "./logo.svg";
import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  let todayDate = new Date().toISOString().slice(0, 10);
  let startDate = new Date();
  startDate.setDate(startDate.getDate() - 10);
  startDate = startDate.toISOString().slice(0, 10);
  const [isLoading, setIsLoading] = useState(true);
  const [jsonData, setJsonData] = useState(null);
  // console.log(todayDate);

  //console.log(startDate);

  let test;
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

  function arrayLoop(data2) {
    let info = [];
    for (let item of data2) {
      console.log(item.title);
      info.push(
        <Card
          title={item.title}
          imageUrl={item.url}
          date={item.date}
          description={item.explanation}
        />
      );
    }
    return info;
  }
  if (!isLoading) {
    test = arrayLoop(jsonData);
    console.log(jsonData);
  }
  return <div>{test}</div>;
}

export default App;
