import React, { useState } from "react";
import Calendar from "react-calendar";
import './Calendrier.css';

const Calendrier = () => {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div >
      <div className="Calendrier" className='bg'>
        <h1>Calendrier</h1>
      </div>
      <br/>
      <div className="Calender">
      <br/>
      <br/>
      <br/>
        <Calendar className="Calendrier-S" showWeekNumbers onChange={onChange} value={date} />
        {console.log(date)}
        <h1 className="DateForm">{date.toString()}</h1>
      </div>
    </div>
  );
};

export default Calendrier;
