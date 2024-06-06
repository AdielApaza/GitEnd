import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./Descanso3.module.css";

const Descanso3 = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/mariposa");
  }, [navigate]);

  const onCircleLeftIconClick = useCallback(() => {
    navigate("/descansopress");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/casa2");
  }, [navigate]);

  return (
    <div className={styles.postdescpress}>
      <div className={styles.background}>
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
      </div>
      <Button
        buttonText="Continuar Entrenamiento "
        propLeft="calc(50% - 105.5px)"
        onDefaultButtonContainerClick={onDefaultButtonContainerClick}
      />
      <img
        className={styles.circleLeftIcon}
        alt=""
        src="/circle-left.svg"
        onClick={onCircleLeftIconClick}
      />
      <div className={styles.descansoMedio}>Descanso medio</div>
      <div className={styles.div}>00:00:00</div>
      <img
        className={styles.homeIcon}
        alt=""
        src="/home.svg"
        onClick={onHomeIconClick}
      />
      <div className={styles.text}>
        <div className={styles.text1}>
          <b className={styles.horaDelDescanso}>Hora del descanso</b>
        </div>
      </div>
    </div>
  );
};

export default Descanso3;
