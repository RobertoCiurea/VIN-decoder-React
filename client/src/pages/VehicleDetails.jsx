import React from "react";
import { useLocation } from "react-router-dom";
export const VehicleDetails = () => {
  //get the car data
  const location = useLocation();
  const carData = location.state;
  const [
    vin,
    ,
    make,
    model,
    myear,
    ,
    body,
    series,
    ,
    engine,
    powerKW,
    powerCP,
    fuel,
    code,
    transmison,
    gears,
    emission,
    manufacturer,
    country,
    productionStarted,
    productionEnded,
    cylinders,
    ,
    ,
    ,
    ,
    ,
    ,
    turbine,
    ,
    ,
    ,
    ,
    consumption,
    ,
    ,
    ,
    ,
    ,
    ,
    doors,
    seats,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    wheelsize,
  ] = carData;

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
      </div>
      <div className="flex mt-20 flex-col w-full items-center lg:justify-between xl:flex-row">
        <ul className="mt-12 ml-5 font-Lunasima text-sm pl-0 xl:pl-10 sm:text-base lg:text-xl">
          <li className="p-5">
            <h3>
              {myear.label}:&nbsp;{" "}
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {myear.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            <h3>
              {body.label}: &nbsp;{" "}
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {body.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            <h3>
              {series.label}: &nbsp;
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {series.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            <h3>
              {" "}
              {engine.label}:&nbsp;
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {engine.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            <h3>
              {powerKW.label}: &nbsp;
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {powerKW.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            <h3>
              {" "}
              {powerCP.label}:&nbsp;
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {powerCP.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            <h3>
              {" "}
              {fuel.label}:&nbsp;
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {fuel.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            <h3>
              {code.label}:&nbsp;
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {code.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            <h3>
              {transmison.label}:&nbsp;
              <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
                {transmison.value}
              </span>
            </h3>
          </li>
          <li className="p-5">
            {gears.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {gears.value}
            </span>
          </li>
        </ul>

        {/*Half */}
        <ul className="mt-12  font-Lunasima text-sm pl-0 xl:pl-10 sm:text-base lg:text-xl">
          <li className="p-5">
            {emission.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {emission.value}
            </span>
          </li>
          <li className="p-5">
            {manufacturer.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {manufacturer.value}
            </span>
          </li>
          <li className="p-5">
            {country.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {country.value}
            </span>
          </li>
          <li className="p-5">
            {productionStarted.label}: &nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {productionStarted.value}
            </span>
          </li>
          <li className="p-5">
            {productionEnded.label}: &nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {productionEnded.value}
            </span>
          </li>
          <li className="p-5">
            {cylinders.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {cylinders.value}
            </span>
          </li>
          <li className="p-5">
            {turbine.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {turbine.value}
            </span>
          </li>
          <li className="p-5">
            {consumption.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {consumption.value}
            </span>
          </li>
          <li className="p-5">
            {doors.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {doors.value}
            </span>
          </li>
          <li className="p-5">
            {" "}
            {seats.label}:&nbsp;
            <span className="bg-primary text-white p-1 text-xs rounded-md md:text-lg xl:p-3">
              {seats.value}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};
