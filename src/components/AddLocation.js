import React, { useEffect, useState } from "react";
import Axios from "axios";

const AddLocation = () => {
  let [formData, setFormData] = useState();
  let [location, setLocation] = useState();

  let baseUrl = "https://location-app-backend.vercel.app";
  let userName = "Sagar Borude";

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation(position.coords);
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }, []);

  let handelInputChange = (e) => {
    setFormData({
      ...formData,
      locationName: e.target.value,
      latitude: location.latitude,
      longitude: location.longitude,
      addedBy: userName,
    });
  };

  let savelocation = (e) => {
    e.preventDefault();

    Axios.post(`${baseUrl}/api/save-location`, formData).then((result) => {
      console.log(result);
    });

    console.log(formData);
  };

  console.log(location);

  return (
    <div className="w-full h-full flex items-center justify-center border ">
      <form className="flex flex-col gap-3" onSubmit={(e) => savelocation(e)}>
        <label className="form-label inline-block  text-gray-700">
          Enter Location Name
        </label>
        <input
          required
          type="text"
          onChange={(e) => {
            handelInputChange(e);
          }}
          className="form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder=""
        />
        <div>
          <p>
            Latitude: <span>{location ? location.latitude : "Loding..."}</span>
          </p>
        </div>
        <div>
          <p>
            Latitude: <span>{location ? location.longitude : "Loding..."}</span>
          </p>
        </div>

        <button
          type="submit"
          className="
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddLocation;
