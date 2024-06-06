import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./SmallCard3.module.css";

const SmallCard3 = ({ className = "", title, title1, propLeft }) => {
  const smallCard2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={[styles.smallCard, className].join(" ")}
      style={smallCard2Style}
    >
      <div className={styles.rectangle} />
      <div className={styles.title}>{title}</div>
      <img className={styles.downIcon} alt="" src="/down.svg" />
      <div className={styles.title1}>{title1}</div>
    </div>
  );
};

SmallCard3.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  title1: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,
};

export default SmallCard3;
