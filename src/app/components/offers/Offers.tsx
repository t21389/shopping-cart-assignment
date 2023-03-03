"use client";

//useSWR allows the use of SWR inside function components
import useSWR from "swr";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Index() {
  //Set up SWR to run the fetcher function when calling "/api/staticdata"
  //There are 3 possible states: (1) loading when data is null (2) ready when the data is returned (3) error when there was an error fetching the data
  const { data, error } = useSWR("/api/staticdata", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  return (
    <div>
      <h1>My Framework from file</h1>
      <ul>
        <li>Name: {data}</li>
        <li>Language: {data}</li>
      </ul>
    </div>
  );
}

// "use client";

// import OffersCard from "./OffersCard";

// import React, { useEffect, useState } from "react";

// const Offers = () => {
//   const [offerData, setOfferData] = useState({});

//   useEffect(() => {
//     console.log("Use Effect Called !");

//     async function fetchData() {
//       console.log("fetch call ...");
//       const response = await fetch("/api/staticdata");
//       const data = response.json();
//       console.log("Fetch Json Data : ", data);
//       setOfferData(data);
//     }

//     fetchData();
//   }, []);

//   return <div>{<OffersCard />}</div>;
// };

// export default Offers;
