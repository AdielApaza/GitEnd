import Day from "./Day";
import PropTypes from "prop-types";
import styles from "./DatePicker1.module.css";

const DatePicker1 = ({ className = "" }) => {
  return (
    <div className={[styles.datePicker, className].join(" ")}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle15.svg" />
      <img className={styles.circleRightIcon} alt="" src="/circle-right1.svg" />
      <img className={styles.circleLeftIcon} alt="" src="/circle-left4.svg" />
      <div className={styles.days}>
        <Day
          day="M"
          number="16"
          dayPosition="absolute"
          dayFlex="unset"
          dayTop="0px"
          dayLeft="0px"
          dayWidth="37.9px"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.6%"
          dayWidth1="33.25%"
          dayTop1="17.89%"
          dayLeft1="32.45%"
          dayColor="#fff"
          numberLeft="19.79%"
          numberColor="#fff"
        />
        <Day
          day="T"
          number="17"
          dayPosition="absolute"
          dayFlex="unset"
          dayTop="0px"
          dayLeft="51.2px"
          dayWidth="37.9px"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.6%"
          dayWidth1="33.25%"
          dayTop1="17.89%"
          dayLeft1="32.45%"
          dayColor="#fff"
          numberLeft="19.79%"
          numberColor="#fff"
        />
        <Day
          day="W"
          number="18"
          dayPosition="absolute"
          dayFlex="unset"
          dayTop="0px"
          dayLeft="102.4px"
          dayWidth="37.9px"
          rectangleBackgroundColor="#d0fd3e"
          dayHeight="28.6%"
          dayWidth1="33.25%"
          dayTop1="17.89%"
          dayLeft1="32.45%"
          dayColor="#000"
          numberLeft="19.79%"
          numberColor="#000"
        />
        <Day
          day="T"
          number="19"
          dayPosition="absolute"
          dayFlex="unset"
          dayTop="0px"
          dayLeft="153.5px"
          dayWidth="37.9px"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.6%"
          dayWidth1="33.25%"
          dayTop1="17.89%"
          dayLeft1="32.45%"
          dayColor="#fff"
          numberLeft="19.79%"
          numberColor="#fff"
        />
        <Day
          day="F"
          number="20"
          dayPosition="absolute"
          dayFlex="unset"
          dayTop="0px"
          dayLeft="204.7px"
          dayWidth="37.9px"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.6%"
          dayWidth1="33.25%"
          dayTop1="17.89%"
          dayLeft1="32.45%"
          dayColor="#fff"
          numberLeft="19.79%"
          numberColor="#fff"
        />
        <Day
          day="S"
          number="21"
          dayPosition="absolute"
          dayFlex="unset"
          dayTop="0px"
          dayLeft="255.9px"
          dayWidth="37.9px"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.6%"
          dayWidth1="33.25%"
          dayTop1="17.89%"
          dayLeft1="32.45%"
          dayColor="#fff"
          numberLeft="19.79%"
          numberColor="#fff"
        />
        <Day
          day="S"
          number="22"
          dayPosition="absolute"
          dayFlex="unset"
          dayTop="0px"
          dayLeft="307.1px"
          dayWidth="37.9px"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.6%"
          dayWidth1="33.25%"
          dayTop1="17.89%"
          dayLeft1="32.45%"
          dayColor="#fff"
          numberLeft="19.79%"
          numberColor="#fff"
        />
      </div>
      <div className={styles.date}>October 2021</div>
    </div>
  );
};

DatePicker1.propTypes = {
  className: PropTypes.string,
};

export default DatePicker1;
