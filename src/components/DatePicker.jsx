import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Day from "./Day";
import Frame1 from "./Frame1";
import PropTypes from "prop-types";
import styles from "./DatePicker.module.css";

const DatePicker = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDayContainer2Click = useCallback(() => {
    navigate("/calendario2");
  }, [navigate]);

  const onRightIconClick = useCallback(() => {
    navigate("/informe2");
  }, [navigate]);

  return (
    <div className={[styles.datePicker, className].join(" ")}>
      <img className={styles.rectangleIcon} alt="" src="/rectangle14.svg" />
      <img className={styles.circleRightIcon} alt="" src="/circle-right.svg" />
      <img className={styles.circleLeftIcon} alt="" src="/circle-left3.svg" />
      <div className={styles.days}>
        <Day
          day="M"
          number="16"
          dayPosition="relative"
          dayFlex="1"
          dayTop="unset"
          dayLeft="unset"
          dayWidth="unset"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.53%"
          dayWidth1="33.33%"
          dayTop1="17.79%"
          dayLeft1="32.56%"
          dayColor="#fff"
          numberLeft="20%"
          numberColor="#fff"
        />
        <Day
          day="T"
          number="17"
          dayPosition="relative"
          dayFlex="1"
          dayTop="unset"
          dayLeft="unset"
          dayWidth="unset"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.53%"
          dayWidth1="33.33%"
          dayTop1="17.79%"
          dayLeft1="32.56%"
          dayColor="#fff"
          numberLeft="20%"
          numberColor="#fff"
        />
        <Day
          day="W"
          number="18"
          dayPosition="relative"
          dayFlex="1"
          dayTop="unset"
          dayLeft="unset"
          dayWidth="unset"
          rectangleBackgroundColor="#d0fd3e"
          dayHeight="28.53%"
          dayWidth1="33.33%"
          dayTop1="17.79%"
          dayLeft1="32.56%"
          dayColor="#000"
          numberLeft="20%"
          numberColor="#000"
          onDayContainer2Click={onDayContainer2Click}
        />
        <Day
          day="T"
          number="19"
          dayPosition="relative"
          dayFlex="1"
          dayTop="unset"
          dayLeft="unset"
          dayWidth="unset"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.53%"
          dayWidth1="33.33%"
          dayTop1="17.79%"
          dayLeft1="32.56%"
          dayColor="#fff"
          numberLeft="20%"
          numberColor="#fff"
        />
        <Day
          day="F"
          number="20"
          dayPosition="relative"
          dayFlex="1"
          dayTop="unset"
          dayLeft="unset"
          dayWidth="unset"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.53%"
          dayWidth1="33.33%"
          dayTop1="17.79%"
          dayLeft1="32.56%"
          dayColor="#fff"
          numberLeft="20%"
          numberColor="#fff"
        />
        <Day
          day="S"
          number="21"
          dayPosition="relative"
          dayFlex="1"
          dayTop="unset"
          dayLeft="unset"
          dayWidth="unset"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.53%"
          dayWidth1="33.33%"
          dayTop1="17.79%"
          dayLeft1="32.56%"
          dayColor="#fff"
          numberLeft="20%"
          numberColor="#fff"
        />
        <Day
          day="S"
          number="22"
          dayPosition="relative"
          dayFlex="1"
          dayTop="unset"
          dayLeft="unset"
          dayWidth="unset"
          rectangleBackgroundColor="#3a3a3c"
          dayHeight="28.53%"
          dayWidth1="33.33%"
          dayTop1="17.79%"
          dayLeft1="32.56%"
          dayColor="#fff"
          numberLeft="20%"
          numberColor="#fff"
        />
      </div>
      <div className={styles.date}>October 2021</div>
      <div className={styles.trainers}>
        <Frame1
          subtitle="High Intensity Training"
          image="/image32@2x.png"
          name1="Ejercicio de gluteos"
          title="4.8"
          right="/right2@2x.png"
          title1="30:43"
          subtitle1={false}
          onRightIconClick={onRightIconClick}
        />
        <Frame1
          image="/image33@2x.png"
          name1="Ejercicio de pecho"
          title="4.6"
          right="/right3@2x.png"
          title1="24:42"
          subtitle1
        />
      </div>
    </div>
  );
};

DatePicker.propTypes = {
  className: PropTypes.string,
};

export default DatePicker;
