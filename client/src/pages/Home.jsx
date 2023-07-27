import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const Home = () => {
  const [vin, setVin] = useState("");
  //set the data for car

  //navigator
  const navigate = useNavigate();
  async function getData(e) {
    e.preventDefault();
    const response = await axios.post("http://localhost:3000/api/vin", {
      vin,
    });

    const data = response.data;
    const { decode } = data.data;

    const carID = decode[1].value;

    const path = "/vehicle";
    const vehicleLocation = `${path}/?vehicleid=${carID}`;

    navigate(vehicleLocation, { state: decode });
  }
  return (
    <div className="bg-background min-h-screen w-full flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-Tektur text-3xl">VIN decoder</h1>
        <input
          type="text"
          value={vin}
          placeholder="Type the VIN here"
          onChange={(e) => setVin(e.target.value)}
          className="mt-12 text-lg text:border-dashed placeholder:italic border border-spacing-2 p-3 w-full focus:outline-none focus:border-primary focus: ring-primary "
        />
        <button
          className="p-5 mt-10  bg-primary text-white rounded-2xl font-Tektur focus:outline-dashed hover:bg-primaryHover ease-linear"
          onClick={getData}
        >
          Verify VIN
        </button>
      </div>
    </div>
  );
};
