import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SchedForm = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        inline
      />

      <h1>{startDate.toDateString()}</h1>
    </>
  );
};

export default SchedForm;
