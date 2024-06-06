import PropTypes from "prop-types";
import styles from "./SmallCard4.module.css";

const SmallCard = ({ className = "" }) => {
  return (
    <div className={[styles.smallCard, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.title}>Descanso mega largo</div>
      <img className={styles.downIcon} alt="" src="/down.svg" />
      <div className={styles.title1}>00:05:00</div>
    </div>
  );
};

SmallCard.propTypes = {
  className: PropTypes.string,
};

export default SmallCard;
