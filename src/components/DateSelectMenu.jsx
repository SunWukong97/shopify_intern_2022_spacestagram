import React from "react";
import "./DateSelectMenu.css";
function DateSelectMenu(props) {
  const { dateSelection } = props;

  const values = [10, 20, 30, 60];

  function handleChange(event) {
    dateSelection(event.target.value);
  }

  return (
    <div className="date-selector-menu">
      <label htmlFor="date-selector">Posts from last</label>
      <select name="date-selector" id="date-selector" onChange={handleChange}>
        <option value={values[0]}>10 days</option>
        <option value={values[1]}>20 days</option>
        <option value={values[2]}>30 days</option>
        <option value={values[3]}>2 months</option>
      </select>
    </div>
  );
}
export default DateSelectMenu;
