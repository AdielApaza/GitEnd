import PropTypes from "prop-types";
import styles from "./Graphics.module.css";

const Graphics = ({ className = "" }) => {
  return (
    <div className={[styles.graphics, className].join(" ")}>
      <div className={styles.activeCalories}>
        <div className={styles.activeCaloriesChild} />
        <img
          className={styles.activeCaloriesItem}
          alt=""
          src="/ellipse-30.svg"
        />
        <div className={styles.div}>652</div>
        <div className={styles.cal}>Cal</div>
        <div className={styles.subtitle}>Calorías activas</div>
      </div>
      <div className={styles.steps}>
        <div className={styles.stepsChild} />
        <img className={styles.stepsItem} alt="" src="/ellipse-34.svg" />
        <div className={styles.div1}>6540</div>
        <div className={styles.subtitle1}>Pasos</div>
      </div>
      <div className={styles.time}>
        <div className={styles.stepsChild} />
        <img className={styles.timeItem} alt="" src="/ellipse-35.svg" />
        <div className={styles.subtitle2}>Tiempo</div>
        <div className={styles.parent}>
          <div className={styles.div2}>45</div>
          <div className={styles.subtitle3}>min</div>
        </div>
      </div>
      <div className={styles.heart}>
        <div className={styles.stepsChild} />
        <img className={styles.heartItem} alt="" src="/ellipse-36.svg" />
        <div className={styles.subtitle4}>Corazón</div>
        <div className={styles.group}>
          <div className={styles.div3}>72</div>
          <div className={styles.subtitle5}>bpm</div>
        </div>
      </div>
    </div>
  );
};

Graphics.propTypes = {
  className: PropTypes.string,
};

export default Graphics;
