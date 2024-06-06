import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Day.module.css";

const Day = ({
  className = "",
  day,
  number,
  dayPosition,
  dayFlex,
  dayTop,
  dayLeft,
  dayWidth,
  rectangleBackgroundColor,
  dayHeight,
  dayWidth1,
  dayTop1,
  dayLeft1,
  dayColor,
  numberLeft,
  numberColor,
  onDayContainer2Click,
}) => {
  const dayStyle = useMemo(() => {
    return {
      position: dayPosition,
      flex: dayFlex,
      top: dayTop,
      left: dayLeft,
      width: dayWidth,
    };
  }, [dayPosition, dayFlex, dayTop, dayLeft, dayWidth]);

  const rectangleStyle = useMemo(() => {
    return {
      backgroundColor: rectangleBackgroundColor,
    };
  }, [rectangleBackgroundColor]);

  const day1Style = useMemo(() => {
    return {
      height: dayHeight,
      width: dayWidth1,
      top: dayTop1,
      left: dayLeft1,
      color: dayColor,
    };
  }, [dayHeight, dayWidth1, dayTop1, dayLeft1, dayColor]);

  const numberStyle = useMemo(() => {
    return {
      left: numberLeft,
      color: numberColor,
    };
  }, [numberLeft, numberColor]);

  return (
    <div
      className={[styles.day, className].join(" ")}
      style={dayStyle}
      onClick={onDayContainer2Click}
    >
      <div className={styles.rectangle} style={rectangleStyle} />
      <div className={styles.day1} style={day1Style}>
        {day}
      </div>
      <div className={styles.number} style={numberStyle}>
        {number}
      </div>
    </div>
  );
};

Day.propTypes = {
  className: PropTypes.string,
  day: PropTypes.string,
  number: PropTypes.string,

  /** Style props */
  dayPosition: PropTypes.any,
  dayFlex: PropTypes.any,
  dayTop: PropTypes.any,
  dayLeft: PropTypes.any,
  dayWidth: PropTypes.any,
  rectangleBackgroundColor: PropTypes.any,
  dayHeight: PropTypes.any,
  dayWidth1: PropTypes.any,
  dayTop1: PropTypes.any,
  dayLeft1: PropTypes.any,
  dayColor: PropTypes.any,
  numberLeft: PropTypes.any,
  numberColor: PropTypes.any,

  /** Action props */
  onDayContainer2Click: PropTypes.func,
};

export default Day;
