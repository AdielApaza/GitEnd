import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./ProBadge.module.css";

const ProBadge = ({
  className = "",
  title,
  proBadgeWidth,
  proBadgeHeight,
  proBadgePosition,
  proBadgeTop,
  proBadgeRight,
  proBadgeBottom,
  proBadgeLeft,
  rectangleDivBackgroundColor,
  titleLeft,
  titleTextAlign,
  titleTop,
  titleColor,
}) => {
  const proBadgeStyle = useMemo(() => {
    return {
      width: proBadgeWidth,
      height: proBadgeHeight,
      position: proBadgePosition,
      top: proBadgeTop,
      right: proBadgeRight,
      bottom: proBadgeBottom,
      left: proBadgeLeft,
    };
  }, [
    proBadgeWidth,
    proBadgeHeight,
    proBadgePosition,
    proBadgeTop,
    proBadgeRight,
    proBadgeBottom,
    proBadgeLeft,
  ]);

  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: rectangleDivBackgroundColor,
    };
  }, [rectangleDivBackgroundColor]);

  const titleStyle = useMemo(() => {
    return {
      left: titleLeft,
      textAlign: titleTextAlign,
      top: titleTop,
      color: titleColor,
    };
  }, [titleLeft, titleTextAlign, titleTop, titleColor]);

  return (
    <div
      className={[styles.proBadge, className].join(" ")}
      style={proBadgeStyle}
    >
      <div className={styles.proBadgeChild} style={rectangleDivStyle} />
      <b className={styles.title} style={titleStyle}>
        {title}
      </b>
    </div>
  );
};

ProBadge.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,

  /** Style props */
  proBadgeWidth: PropTypes.any,
  proBadgeHeight: PropTypes.any,
  proBadgePosition: PropTypes.any,
  proBadgeTop: PropTypes.any,
  proBadgeRight: PropTypes.any,
  proBadgeBottom: PropTypes.any,
  proBadgeLeft: PropTypes.any,
  rectangleDivBackgroundColor: PropTypes.any,
  titleLeft: PropTypes.any,
  titleTextAlign: PropTypes.any,
  titleTop: PropTypes.any,
  titleColor: PropTypes.any,
};

export default ProBadge;
