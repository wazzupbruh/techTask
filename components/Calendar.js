import React, { Fragment } from "react";
import Modal from "../Modal/Modal";
import { useState } from "react";
import useCalendar from "../hooks/useCalendar";

const Calendar = () => {
  const {
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  const [modalActive, setModalActive] = useState(false);

  const dateClickHandler = (date) => {
    console.log(date);
    setModalActive(true);
  };

  return (
    <Fragment>
      <Modal active={modalActive} setActive={setModalActive} />

      <div className="calendar-wrapper">
        <div className="calendar-header">
          <i class="fas fa-angle-left prev" onClick={getPrevMonth} />
          {`${
            monthNames[selectedDate.getMonth()]
          } ${selectedDate.getFullYear()}`}
          <i class="fas fa-angle-right next" onClick={getNextMonth} />
        </div>
        <hr />
        <table className="table">
          <tbody>
            {Object.values(calendarRows).map((cols) => {
              return (
                <tr key={cols[0].date}>
                  {cols.map((col) =>
                    col.date === todayFormatted ? (
                      <td
                        key={col.date}
                        className={`${col.classes} today`}
                        onClick={() => dateClickHandler(col.date)}
                      >
                        {col.value}
                      </td>
                    ) : (
                      <td
                        key={col.date}
                        className={col.classes}
                        onClick={() => dateClickHandler(col.date)}
                      >
                        {col.value}
                      </td>
                    )
                  )}
                </tr>
              );
            })}

            <tr>
              {daysShort.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </tbody>
        </table>
        <hr />
        <hr className="hr" />
      </div>
    </Fragment>
  );
};

export default Calendar;
