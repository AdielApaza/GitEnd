import { useMemo } from "react";
import ProBadge from "./ProBadge";
import PropTypes from "prop-types";
import styles from "./Point.module.css";

const Point = ({
  className = "",
  title,
  pointPosition,
  pointWidth,
  pointHeight,
  pointTop,
  pointRight,
  pointBottom,
  pointLeft,
  pointBorderRadius,
  titleLeft,
  titleColor,
  titleTop,
}) => {
  const pointStyle = useMemo(() => {
    return {
      position: pointPosition,
      width: pointWidth,
      height: pointHeight,
      top: pointTop,
      right: pointRight,
      bottom: pointBottom,
      left: pointLeft,
      borderRadius: pointBorderRadius,
    };
  }, [
    pointPosition,
    pointWidth,
    pointHeight,
    pointTop,
    pointRight,
    pointBottom,
    pointLeft,
    pointBorderRadius,
  ]);

  const titleStyle = useMemo(() => {
    return {
      left: titleLeft,
      color: titleColor,
      top: titleTop,
    };
  }, [titleLeft, titleColor, titleTop]);

  return (
    <div className={[styles.point, className].join(" ")} style={pointStyle}>
      <ProBadge
        title="4.8"
        proBadgeWidth="100%"
        proBadgeHeight="100%"
        proBadgePosition="absolute"
        proBadgeTop="0%"
        proBadgeRight="0%"
        proBadgeBottom="0%"
        proBadgeLeft="0%"
        rectangleDivBackgroundColor="#d0fd3e"
        titleLeft="24.24%"
        titleTextAlign="center"
        titleTop="6.25%"
        titleColor="#fff"
      />
    </div>
  );
};

Point.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  pointPosition: PropTypes.any,
  pointWidth: PropTypes.any,
  pointHeight: PropTypes.any,
  pointTop: PropTypes.any,
  pointRight: PropTypes.any,
  pointBottom: PropTypes.any,
  pointLeft: PropTypes.any,
  pointBorderRadius: PropTypes.any,
  titleLeft: PropTypes.any,
  titleColor: PropTypes.any,
  titleTop: PropTypes.any,
};

export default Point;
