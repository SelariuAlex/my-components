import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function ReactDate() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div>
      <h2>Date picker</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        isClearable
      />
    </div>
  );
}

export default ReactDate;
