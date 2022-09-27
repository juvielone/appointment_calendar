import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import { useSelector, useDispatch } from "react-redux";
import { getDateFilter } from "../features/admin/adminSlice";
import "react-datepicker/dist/react-datepicker.css";

const SchedForm = () => {
  // Initialize dependencies
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState(new Date());

  //   Call state in admin slice
  const { schedDate, schedTime, isLoading, isError, message } = useSelector(
    (state) => state.admin
  );

  //  UseEffect @calls our API
  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getDateFilter());
  }, [isError, message, dispatch]);
  //  =================================================

  //   Map respone from the API and convert to date
  const filterDate = schedDate.map((date) => new Date(date.schedFilter));
  console.log(new Date("2022-10-01T16:00:00.000Z"));

  //   Call loading while fetching response data
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        excludeDates={filterDate}
        inline
      />

      <h1>{startDate.toDateString()}</h1>
    </>
  );
};

export default SchedForm;
