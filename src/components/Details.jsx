import React from "react";
import "./card-descriptions.css";

import { FaArrowUp, FaArrowDown, FaWind} from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";


const Details = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "°C" : "°F";
  const windUnit = units === "metric" ? "m/s" : "m/h";


  const cards = [
    {
      id: 1,
      icon: <FaArrowDown className="large-icon"/>,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp className="large-icon"/>,
      title: "max",
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy className="large-icon"/>,
      title: "feels like",
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress className="large-icon"/>,
      title: "pressure",
      data: weather.pressure,
      unit: "MB",
    },
    {
      id: 5,
      icon: <WiHumidity className="large-icon"/>,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind className="large-icon"/>,
      title: "wind speed",
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];
  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div key={id} className="card">
          <div className="description__card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))} 
    </div>
  );
}; 

export default Details


// I spent so much time trying to figure out how to convert the weather map API time zone and offsets from the UTC time.




// function currentTime(timezoneIn, dtIn) {
//   let dateTime = new Date(dtIn * 1000 + (timezoneIn * 1000));

//   // Convert into 24-hour format
//   let hour = (dateTime.getHours() % 12) - 3;
//   let ampm = hour >= 12 ? 'pm' : 'am';

//   let minutes = dateTime.getMinutes();
//   let weekday = dateTime.toLocaleString('default', { weekday: 'long' });
//   let month = dateTime.toLocaleString('default', { month: 'short' });
//   let date = dateTime.getDate();
  
//   return `${hour} : ${minutes} ${ampm} - ${weekday} , ${month} ${date}`; 