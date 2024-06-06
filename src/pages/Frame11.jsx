import { useCallback } from "react";
import Graphics from "../components/Graphics";
import DatePicker1 from "../components/DatePicker1";
import { useNavigate } from "react-router-dom";
import styles from "./Frame11.module.css";

const Frame11 = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/calendario1");
  }, [navigate]);

  return (
    <div className={styles.calendario2}>
      <div className={styles.finishedWorkout}>
        <div className={styles.headline}>Entrenamiento terminado</div>
        <div className={styles.finished}>
          <div className={styles.finishedChild} />
          <div className={styles.subtitle}>10:00</div>
          <div className={styles.name}>Entrenamiento de gluteos</div>
          <img
            className={styles.tickSquareIcon}
            alt=""
            src="/tick-square2@2x.png"
          />
        </div>
      </div>
      <Graphics />
      <DatePicker1 />
      <img
        className={styles.component10Icon}
        alt=""
        src="/component-10@2x.png"
      />
      <div
        className={styles.defaultButton}
        onClick={onDefaultButtonContainerClick}
      >
        <div className={styles.rectangle} />
        <div className={styles.buttonText}>Volver</div>
      </div>
    </div>
  );
};

export default Frame11;
