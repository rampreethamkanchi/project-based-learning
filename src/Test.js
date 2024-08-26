import React from "react";
import { useState, useEffect } from "react";
// key : http://www.omdbapi.com/?i=tt3896198&apikey=440f5f87

export function App(props) {
  const key = "http://www.omdbapi.com/?i=tt3896198&apikey=440f5f87&t=avengers";
  const [data, setData] = useState();
  async function getData() {
    const jsonData = await fetch(key);
    const objData = await jsonData.json();
    setData(objData);
  }

  useEffect(() => {
    getData();
  }, []);
  return <div>{data? data.Title : "fetching.."}</div>;
}
