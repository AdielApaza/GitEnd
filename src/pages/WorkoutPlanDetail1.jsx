import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Info from "../components/Info";
import DefaultButton from "../components/DefaultButton";
import SmallCard from "../components/SmallCard";
import styles from "./WorkoutPlanDetail1.module.css";

const WorkoutPlanDetail1 = () => {
  const navigate = useNavigate();

  const onSmallCardContainerClick = useCallback(() => {
    navigate("/workout-plan-detail3");
  }, [navigate]);

  const onButtonContainerClick = useCallback(() => {
    navigate("/descansopress");
  }, [navigate]);

  const onCircleLeftIconClick = useCallback(() => {
    navigate("/descanso1");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/casa");
  }, [navigate]);

  return (
    <div className={styles.press1}>
      <div className={styles.background}>
        <img className={styles.imageIcon} alt="" src="/image16@2x.png" />
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
        <div className={styles.subtitle}>ejercicio de pecho</div>
        <div className={styles.title}>press inclinado</div>
        <div className={styles.description}>
          Como regla general, puedes comenzar con un peso que te permita
          completar de 8 a 12 repeticiones por serie. Esto te ayudará a
          desarrollar fuerza y tamaño muscular de manera efectiva.
        </div>
      </div>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <DefaultButton
          buttonText="Iniciar el ejercicio"
          defaultButtonWidth="100%"
          defaultButtonHeight="100%"
          defaultButtonPosition="absolute"
          defaultButtonTop="0%"
          defaultButtonRight="0%"
          defaultButtonBottom="0%"
          defaultButtonLeft="0%"
          buttonTextLeft="calc(50% - 71.5px)"
          buttonTextColor="#000"
        />
      </div>
      <img
        className={styles.circleLeftIcon}
        alt=""
        src="/circle-left.svg"
        onClick={onCircleLeftIconClick}
      />
      <SmallCard
        exercises="0:45"
        smallCardWidth="327px"
        smallCardPosition="absolute"
        smallCardTop="606px"
        smallCardLeft="23px"
        titleWidth="47.28%"
        titleLeft="30.21%"
        simpleWarmUpMargin="unset"
        simpleWarmUpPosition="absolute"
        simpleWarmUpHeight="100%"
        simpleWarmUpWidth="25.08%"
        simpleWarmUpTop="0%"
        simpleWarmUpRight="74.92%"
        simpleWarmUpBottom="0%"
        simpleWarmUpLeft="0%"
        simpleWarmUpOverflow="hidden"
        simpleWarmUpMaxHeight="100%"
        exercisesMargin="unset"
        exercisesPosition="absolute"
        exercisesWidth="18.01%"
        exercisesTop="65.79%"
        exercisesLeft="30.21%"
        exercisesFontSize="13px"
        exercisesLineHeight="16px"
        exercisesFontFamily="'Open Sans'"
        exercisesColor="#d0fd3e"
        exercisesTextAlign="left"
        exercisesDisplay="inline-block"
        onSmallCardContainerClick={onSmallCardContainerClick}
      />
      <img
        className={styles.homeIcon}
        alt=""
        src="/home.svg"
        onClick={onHomeIconClick}
      />
    </div>
  );
};

export default WorkoutPlanDetail1;
