import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Info.module.css";

const Info = ({
  className = "",
  play,
  min,
  infoPosition,
  infoTop,
  infoLeft,
}) => {
  const infoStyle = useMemo(() => {
    return {
      position: infoPosition,
      top: infoTop,
      left: infoLeft,
    };
  }, [infoPosition, infoTop, infoLeft]);

  return (
    <div className={[styles.info, className].join(" ")} style={infoStyle}>
      <img className={styles.playIcon} alt="" src={play} />
      <div className={styles.min}>{min}</div>
    </div>
  );
};

Info.propTypes = {
  className: PropTypes.string,
  play: PropTypes.string,
  min: PropTypes.string,

  /** Style props */
  infoPosition: PropTypes.any,
  infoTop: PropTypes.any,
  infoLeft: PropTypes.any,
};

export default Info;
