import React, { useState, useEffect } from "react";

const ApiCalls = () => {
  const [print, setPrint] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setPrint(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <h1>API Calls</h1>
      {print.map((eachItem) => (
        <div key={eachItem.id}>
          <h2>{eachItem.name}</h2>
          <h3>{eachItem.email}</h3>
          <h4>{eachItem.phone}</h4>
        </div>
      ))}
    </div>
  );
};

export default ApiCalls;