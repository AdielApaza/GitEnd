import PropTypes from "prop-types";
import styles from "./SmallCard5.module.css";

const SmallCard5 = ({ className = "" }) => {
  return (
    <div className={[styles.smallCard, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.title}>
        <p className={styles.descanso}>Descanso</p>
        <p className={styles.descanso}>largo</p>
      </div>
      <img className={styles.downIcon} alt="" src="/down.svg" />
      <div className={styles.title1}>00:03:00</div>
    </div>
  );
};

SmallCard5.propTypes = {
  className: PropTypes.string,
};

export default SmallCard5;
