import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const VehicleDetails = () => {
  //set image state for data
  const [image, setImage] = useState("");

  //get the car data
  const location = useLocation();
  const carData = location.state;
  const [vin, , make, model, , , , series] = carData;

  useEffect(() => {
    const query = make.value + " " + model.value + " " + series.value;
    getImage(query);
  }, [vin]);

  async function getImage(query) {
    const response = await axios.get("http://localhost:3000/api/image", {
      params: {
        query: query,
      },
    });

    console.log(response.data);
    const { thumbnailUrl } = response.data;
    setImage(thumbnailUrl);
  }

  return (
    <div className="min-h-screen m-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold font-Tektur">Vehicle Data</h1>
        <h2 className="mt-5 text-xl font-Lunasima">
          {make.value}
          &nbsp;
          {model.value}
          &nbsp;
          {series.value}
        </h2>
        <h2 className="mt-2 text-lg bg-primary text-white p-1 rounded-md font-Tektur -tracking-light">
          {vin.label}:&nbsp;{vin.value}
        </h2>
        <img src={image} alt={make.value} className="p-4 object-cover" />
      </div>
      <div className="flex mt-20 flex-col w-full items-center lg:justify-between xl:flex-row">
        <ul className="mt-12 ml-5 font-Lunasima text-sm p-1  xl:pl-10  md:grid md:grid-cols-2 sm:text-base lg:text-xl lg:grid lg:grid-cols-3">
          {carData?.length > 0 ? (
            carData.map((item, index) => {
              return (
                <li className="p-5" key={index}>
                  <h3>
                    {item.label}:&nbsp;{" "}
                    <span className="bg-primary text-white p-1 text-xs rounded-md md:text-md lg:text-base xl:p-2">
                      {item.value}
                    </span>
                  </h3>
                </li>
              );
            })
          ) : (
            <li className="text-xl">No data found</li>
          )}
        </ul>
      </div>
    </div>
  );
};
