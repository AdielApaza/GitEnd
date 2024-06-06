import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./Descanso1.module.css";

const Descanso1 = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/workout-plan-detail");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/casa2");
  }, [navigate]);

  return (
    <div className={styles.descanso1}>
      <div className={styles.background}>
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
      </div>
      <div className={styles.text}>
        <div className={styles.text1}>
          <b className={styles.horaDelDescanso}>Hora del descanso</b>
        </div>
      </div>
      <Button
        buttonText="Continuar Entrenamiento "
        propLeft="calc(50% - 105.5px)"
        onDefaultButtonContainerClick={onDefaultButtonContainerClick}
      />
      <div className={styles.descansoMedio}>Descanso medio</div>
      <div className={styles.div}>00:00:00</div>
      <img
        className={styles.homeIcon}
        alt=""
        src="/home.svg"
        onClick={onHomeIconClick}
      />
    </div>
  );
};

export default Descanso1;
