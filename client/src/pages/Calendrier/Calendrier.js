import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import './Calendrier.css';
import sessions from "../Data/SessionsData";
import SessionCard from "./SessionCard"

const Calendrier = () => {
  const [date, setDate] = useState(new Date());
  const [data, setdata] = useState(sessions)
  const [session, setsession] = useState(closestdate(data))
  useEffect(() => {
    setdata(sessions)
  }, [])
  const [dd, setdd] = useState(closestdate(data))
  const onChange = date => {
    setDate(date);
  };
  function closestdate(arr) {
    //16 02
    const relativedate = new Date(2021, 1, 16, 10)
    let dates = arr.map(item => item.date)
    dates.sort(function (a, b) {
      var distancea = Math.abs(relativedate - a);
      var distanceb = Math.abs(relativedate - b);
      return distancea - distanceb;
    })
    dates = dates.filter(d => d > relativedate)
    return arr.find(d => dates[0] === d.date)
  } // works gucci

  return (
    <div >
     { /*<div className="Calendrier" className='bg'>
        <h1>Calendrier</h1>
      </div>
      <br />
      <div className="Calender">
        <br />
        <br />
        <br />
        <Calendar className="Calendrier-S" showWeekNumbers onChange={onChange} value={date} />
        {console.log(date)}
        {console.log(dd)}
        <h1 className="DateForm">Closest Session: {dd.date.toString()}</h1>
      </div> 
    */}
    <h1>Calandrier</h1>
    <div className="next-session">
      <SessionCard session={session}/>
    </div>
    </div>
  );
};

export default Calendrier;
