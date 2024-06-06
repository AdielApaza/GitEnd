import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./SmallCard41.module.css";

const SmallCard4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onSmallCardContainerClick = useCallback(() => {
    navigate("/workout-plan-detail1");
  }, [navigate]);

  return (
    <div
      className={[styles.smallCard, className].join(" ")}
      onClick={onSmallCardContainerClick}
    >
      <div className={styles.rectangle} />
      <div className={styles.title}>Manera correcta de hacer el ejercicio</div>
      <img className={styles.imageIcon} alt="" src="/image34@2x.png" />
      <img className={styles.downIcon} alt="" src="/down.svg" />
      <div className={styles.title1}>0:30</div>
    </div>
  );
};

SmallCard4.propTypes = {
  className: PropTypes.string,
};

export default SmallCard4;
