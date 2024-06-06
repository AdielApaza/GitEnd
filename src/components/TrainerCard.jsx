import { useMemo } from "react";
import Point from "./Point";
import PropTypes from "prop-types";
import styles from "./TrainerCard.module.css";

const TrainerCard = ({
  className = "",
  subtitle,
  experience,
  image,
  name1,
  title,
  right,
  showSubtitle,
  showExperience,
  showPoint,
  showRightIcon,
  trainerCardWidth,
  trainerCardPosition,
  trainerCardTop,
  trainerCardLeft,
  frameDivGap,
  titleColor,
  onRightIconClick,
}) => {
  const trainerCardStyle = useMemo(() => {
    return {
      width: trainerCardWidth,
      position: trainerCardPosition,
      top: trainerCardTop,
      left: trainerCardLeft,
    };
  }, [trainerCardWidth, trainerCardPosition, trainerCardTop, trainerCardLeft]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: frameDivGap,
    };
  }, [frameDivGap]);

  const titleStyle = useMemo(() => {
    return {
      color: titleColor,
    };
  }, [titleColor]);

  return (
    <div
      className={[styles.trainerCard, className].join(" ")}
      style={trainerCardStyle}
    >
      <div className={styles.rectangle} />
      {showSubtitle && <div className={styles.subtitle}>{subtitle}</div>}
      {showExperience && <div className={styles.experience}>{experience}</div>}
      <img className={styles.imageIcon} alt="" src={image} />
      <div className={styles.nameParent} style={frameDivStyle}>
        <div className={styles.name}>{name1}</div>
        <Point
          title="4.8"
          pointPosition="relative"
          pointWidth="33px"
          pointHeight="16px"
          pointTop="unset"
          pointRight="unset"
          pointBottom="unset"
          pointLeft="unset"
          pointBorderRadius="unset"
          titleLeft="24.24%"
          titleColor="#fff"
          titleTop="6.25%"
        />
      </div>
      {showRightIcon && (
        <img
          className={styles.rightIcon}
          alt=""
          src={right}
          onClick={onRightIconClick}
        />
      )}
    </div>
  );
};

TrainerCard.propTypes = {
  className: PropTypes.string,
  subtitle: PropTypes.string,
  experience: PropTypes.string,
  image: PropTypes.string,
  name1: PropTypes.string,
  title: PropTypes.string,
  right: PropTypes.string,
  showSubtitle: PropTypes.bool,
  showExperience: PropTypes.bool,
  showPoint: PropTypes.bool,
  showRightIcon: PropTypes.bool,

  /** Style props */
  trainerCardWidth: PropTypes.any,
  trainerCardPosition: PropTypes.any,
  trainerCardTop: PropTypes.any,
  trainerCardLeft: PropTypes.any,
  frameDivGap: PropTypes.any,
  titleColor: PropTypes.any,

  /** Action props */
  onRightIconClick: PropTypes.func,
};

export default TrainerCard;
