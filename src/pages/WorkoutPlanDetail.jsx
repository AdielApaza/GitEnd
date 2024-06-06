import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info";
import DefaultButton from "../components/DefaultButton";
import SmallCard4 from "../components/SmallCard4";
import styles from "./WorkoutPlanDetail.module.css";

const WorkoutPlanDetail = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/ej1fin");
  }, [navigate]);

  const onCircleLeftIconClick = useCallback(() => {
    navigate("/rutina-4");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/casa");
  }, [navigate]);

  return (
    <div className={styles.ej1guion}>
      <div className={styles.background}>
        <img className={styles.imageIcon} alt="" src="/image30@2x.png" />
        <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
      </div>
      <div className={styles.info}>
        <Info
          play="/play@2x.png"
          min="60 min"
          infoPosition="absolute"
          infoTop="calc(50% - 14.5px)"
          infoLeft="calc(50% - 96.25px)"
        />
        <Info
          play="/flame.svg"
          min="350 Cal"
          infoPosition="absolute"
          infoTop="calc(50% - 14.5px)"
          infoLeft="calc(50% + 7.25px)"
        />
      </div>
      <div className={styles.text}>
        <div className={styles.subtitle}>Ejercicio de Pecho</div>
        <div className={styles.title}>Flexiones</div>
        <div className={styles.description}>
          {" "}
          Las flexiones son una forma efectiva de fortalecer el pecho, los
          hombros, los tríceps y el core, mientras se mejora la resistencia
          muscular. Para principiantes, puede ser recomendable comenzar con un
          número más bajo, como 5 a 10 flexiones por serie
        </div>
      </div>
      <div className={styles.button}>
        <img className={styles.rectangleIcon1} alt="" />
        <DefaultButton
          buttonText="Iniciar el ejercicio"
          defaultButtonWidth="70.13%"
          defaultButtonHeight="26.46%"
          defaultButtonPosition="absolute"
          defaultButtonTop="57.14%"
          defaultButtonRight="15.07%"
          defaultButtonBottom="16.4%"
          defaultButtonLeft="14.8%"
          buttonTextLeft="calc(50% - 71.5px)"
          buttonTextColor="#000"
          onDefaultButtonContainerClick={onDefaultButtonContainerClick}
        />
      </div>
      <img
        className={styles.circleLeftIcon}
        alt=""
        src="/circle-left.svg"
        onClick={onCircleLeftIconClick}
      />
      <SmallCard4 />
      <img
        className={styles.homeIcon}
        alt=""
        src="/home.svg"
        onClick={onHomeIconClick}
      />
    </div>
  );
};

export default WorkoutPlanDetail;
