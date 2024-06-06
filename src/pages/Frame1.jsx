import { useCallback } from "react";
import DatePicker from "../components/DatePicker";
import { useNavigate } from "react-router-dom";
import styles from "./Frame1.module.css";

const Frame = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/perfil");
  }, [navigate]);

  return (
    <div className={styles.calendario1}>
      <b className={styles.calendario}>Calendario</b>
      <DatePicker />
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

export default Frame;
