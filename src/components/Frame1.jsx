import TrainerCard from "./TrainerCard";
import Point from "./Point";
import PropTypes from "prop-types";
import styles from "./Frame1.module.css";

const Frame1 = ({
  className = "",
  subtitle,
  image,
  name1,
  title,
  right,
  title1,
  subtitle1,
  onRightIconClick,
}) => {
  return (
    <div className={[styles.frame, className].join(" ")}>
      <TrainerCard
        subtitle="High Intensity Training"
        experience="Duracion"
        image="/image32@2x.png"
        name1="Ejercicio de gluteos"
        title="4.8"
        right="/right2@2x.png"
        showSubtitle={false}
        showExperience
        showPoint={false}
        showRightIcon={false}
        trainerCardWidth="321px"
        trainerCardPosition="relative"
        trainerCardTop="unset"
        trainerCardLeft="unset"
        frameDivGap="unset"
        titleColor="#000"
        onRightIconClick={onRightIconClick}
      />
      <div className={styles.frame1}>
        <Point
          title="30:43"
          pointPosition="relative"
          pointWidth="32.4px"
          pointHeight="16.3px"
          pointTop="unset"
          pointRight="unset"
          pointBottom="unset"
          pointLeft="unset"
          pointBorderRadius="unset"
          titleLeft="2.78%"
          titleColor="#000"
          titleTop="6.13%"
        />
      </div>
    </div>
  );
};

Frame1.propTypes = {
  className: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  name1: PropTypes.string,
  title: PropTypes.string,
  right: PropTypes.string,
  title1: PropTypes.string,
  subtitle1: PropTypes.bool,

  /** Action props */
  onRightIconClick: PropTypes.func,
};

export default Frame1;
