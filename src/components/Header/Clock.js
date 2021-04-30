import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Clock = ({ style }) => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setDateTime(new Date(), 1000));
    return () => {
      clearInterval(id);
    };
  }, []);
  const getFormattedDate = (dateTime) => {
    let year = dateTime.getFullYear();
    let month = String(dateTime.getMonth() + 1).padStart(2, "0");
    let date = String(dateTime.getDate()).padStart(2, "0");
    let hour = String(dateTime.getHours()).padStart(2, "0");
    let minute = String(dateTime.getMinutes()).padStart(2, "0");
    let days = dateTime.getDay();
    switch (days) {
      case 0: {
        days = "(일)";
        break;
      }
      case 1: {
        days = "(월)";
        break;
      }
      case 2: {
        days = "(화)";
        break;
      }
      case 3: {
        days = "(수)";
        break;
      }
      case 4: {
        days = "(목)";
        break;
      }
      case 5: {
        days = "(금)";
        break;
      }
      case 6: {
        days = "(토)";
        break;
      }
    }
    return `${year}-${month}-${date} ${days} ${hour}:${minute}`;
  };
  const formatDate = getFormattedDate(dateTime);
  return (
    <h1 className="p-abs" style={style}>
      {formatDate}
    </h1>
  );
};
Clock.propTypes = {
  style: PropTypes.object,
};
export default Clock;
