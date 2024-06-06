import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SmallCard6.module.css";

const SmallCard6 = ({
  className = "",
  propBorderRadius,
  propBorder,
  propWidth,
  propHeight,
}) => {
  const smallCard1Style = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      border: propBorder,
      width: propWidth,
      height: propHeight,
    };
  }, [propBorderRadius, propBorder, propWidth, propHeight]);

  return (
    <div
      className={[styles.smallCard, className].join(" ")}
      style={smallCard1Style}
    >
      <div className={styles.rectangle} />
      <div className={styles.title}>Descanso medio</div>
      <img className={styles.downIcon} alt="" src="/down.svg" />
      <div className={styles.title1}>00:02:00</div>
    </div>
  );
};

SmallCard6.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propBorderRadius: PropTypes.any,
  propBorder: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
};

export default SmallCard6;
