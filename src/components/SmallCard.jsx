import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SmallCard.module.css";

const SmallCard = ({
  className = "",
  simpleWarmUp,
  exercises,
  image,
  down,
  showDownIcon,
  showTitle,
  smallCardWidth,
  smallCardPosition,
  smallCardTop,
  smallCardLeft,
  titleWidth,
  titleLeft,
  simpleWarmUpMargin,
  simpleWarmUpPosition,
  simpleWarmUpHeight,
  simpleWarmUpWidth,
  simpleWarmUpTop,
  simpleWarmUpRight,
  simpleWarmUpBottom,
  simpleWarmUpLeft,
  simpleWarmUpOverflow,
  simpleWarmUpMaxHeight,
  exercisesMargin,
  exercisesPosition,
  exercisesWidth,
  exercisesTop,
  exercisesLeft,
  exercisesFontSize,
  exercisesLineHeight,
  exercisesFontFamily,
  exercisesColor,
  exercisesTextAlign,
  exercisesDisplay,
  titleLeft1,
  onSmallCardContainerClick,
}) => {
  const smallCardStyle = useMemo(() => {
    return {
      width: smallCardWidth,
      position: smallCardPosition,
      top: smallCardTop,
      left: smallCardLeft,
    };
  }, [smallCardWidth, smallCardPosition, smallCardTop, smallCardLeft]);

  const title1Style = useMemo(() => {
    return {
      width: titleWidth,
      left: titleLeft,
    };
  }, [titleWidth, titleLeft]);

  const simpleWarmUpStyle = useMemo(() => {
    return {
      margin: simpleWarmUpMargin,
      position: simpleWarmUpPosition,
      height: simpleWarmUpHeight,
      width: simpleWarmUpWidth,
      top: simpleWarmUpTop,
      right: simpleWarmUpRight,
      bottom: simpleWarmUpBottom,
      left: simpleWarmUpLeft,
      overflow: simpleWarmUpOverflow,
      maxHeight: simpleWarmUpMaxHeight,
    };
  }, [
    simpleWarmUpMargin,
    simpleWarmUpPosition,
    simpleWarmUpHeight,
    simpleWarmUpWidth,
    simpleWarmUpTop,
    simpleWarmUpRight,
    simpleWarmUpBottom,
    simpleWarmUpLeft,
    simpleWarmUpOverflow,
    simpleWarmUpMaxHeight,
  ]);

  const exercisesStyle = useMemo(() => {
    return {
      margin: exercisesMargin,
      position: exercisesPosition,
      width: exercisesWidth,
      top: exercisesTop,
      left: exercisesLeft,
      fontSize: exercisesFontSize,
      lineHeight: exercisesLineHeight,
      fontFamily: exercisesFontFamily,
      color: exercisesColor,
      textAlign: exercisesTextAlign,
      display: exercisesDisplay,
    };
  }, [
    exercisesMargin,
    exercisesPosition,
    exercisesWidth,
    exercisesTop,
    exercisesLeft,
    exercisesFontSize,
    exercisesLineHeight,
    exercisesFontFamily,
    exercisesColor,
    exercisesTextAlign,
    exercisesDisplay,
  ]);

  const title2Style = useMemo(() => {
    return {
      left: titleLeft1,
    };
  }, [titleLeft1]);

  return (
    <div
      className={[styles.smallCard, className].join(" ")}
      style={smallCardStyle}
      onClick={onSmallCardContainerClick}
    >
      <div className={styles.rectangle} />
      <div className={styles.title} style={title1Style}>
        <p className={styles.simpleWarmUp} style={simpleWarmUpStyle}>
          {simpleWarmUp}
        </p>
        <p className={styles.simpleWarmUp} style={exercisesStyle}>
          {exercises}
        </p>
      </div>
      <img className={styles.imageIcon} alt="" src={image} />
      {showDownIcon && <img className={styles.downIcon} alt="" src={down} />}
      {showTitle && (
        <div className={styles.title1} style={title2Style}>
          0:30
        </div>
      )}
    </div>
  );
};

SmallCard.propTypes = {
  className: PropTypes.string,
  simpleWarmUp: PropTypes.string,
  exercises: PropTypes.string,
  image: PropTypes.string,
  down: PropTypes.string,
  showDownIcon: PropTypes.bool,
  showTitle: PropTypes.bool,

  /** Style props */
  smallCardWidth: PropTypes.any,
  smallCardPosition: PropTypes.any,
  smallCardTop: PropTypes.any,
  smallCardLeft: PropTypes.any,
  titleWidth: PropTypes.any,
  titleLeft: PropTypes.any,
  simpleWarmUpMargin: PropTypes.any,
  simpleWarmUpPosition: PropTypes.any,
  simpleWarmUpHeight: PropTypes.any,
  simpleWarmUpWidth: PropTypes.any,
  simpleWarmUpTop: PropTypes.any,
  simpleWarmUpRight: PropTypes.any,
  simpleWarmUpBottom: PropTypes.any,
  simpleWarmUpLeft: PropTypes.any,
  simpleWarmUpOverflow: PropTypes.any,
  simpleWarmUpMaxHeight: PropTypes.any,
  exercisesMargin: PropTypes.any,
  exercisesPosition: PropTypes.any,
  exercisesWidth: PropTypes.any,
  exercisesTop: PropTypes.any,
  exercisesLeft: PropTypes.any,
  exercisesFontSize: PropTypes.any,
  exercisesLineHeight: PropTypes.any,
  exercisesFontFamily: PropTypes.any,
  exercisesColor: PropTypes.any,
  exercisesTextAlign: PropTypes.any,
  exercisesDisplay: PropTypes.any,
  titleLeft1: PropTypes.any,

  /** Action props */
  onSmallCardContainerClick: PropTypes.func,
};

export default SmallCard;
