import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Property1Default1.module.css";

const Property1Default1 = ({
  className = "",
  rectangle,
  editProfile,
  right,
  property1DefaultHeight,
  property1DefaultPosition,
  property1DefaultTop,
  property1DefaultLeft,
  rectangleIconHeight,
  rectangleIconBottom,
  onRightIconClick,
}) => {
  const property1Default1Style = useMemo(() => {
    return {
      height: property1DefaultHeight,
      position: property1DefaultPosition,
      top: property1DefaultTop,
      left: property1DefaultLeft,
    };
  }, [
    property1DefaultHeight,
    property1DefaultPosition,
    property1DefaultTop,
    property1DefaultLeft,
  ]);

  const rectangleIconStyle = useMemo(() => {
    return {
      height: rectangleIconHeight,
      bottom: rectangleIconBottom,
    };
  }, [rectangleIconHeight, rectangleIconBottom]);

  return (
    <div
      className={[styles.property1default, className].join(" ")}
      style={property1Default1Style}
    >
      <img
        className={styles.rectangleIcon}
        alt=""
        src={rectangle}
        style={rectangleIconStyle}
      />
      <div className={styles.editProfile}>{editProfile}</div>
      <img
        className={styles.rightIcon}
        alt=""
        src={right}
        onClick={onRightIconClick}
      />
    </div>
  );
};

Property1Default1.propTypes = {
  className: PropTypes.string,
  rectangle: PropTypes.string,
  editProfile: PropTypes.string,
  right: PropTypes.string,

  /** Style props */
  property1DefaultHeight: PropTypes.any,
  property1DefaultPosition: PropTypes.any,
  property1DefaultTop: PropTypes.any,
  property1DefaultLeft: PropTypes.any,
  rectangleIconHeight: PropTypes.any,
  rectangleIconBottom: PropTypes.any,

  /** Action props */
  onRightIconClick: PropTypes.func,
};

export default Property1Default1;
