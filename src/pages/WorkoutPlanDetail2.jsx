import { useCallback } from "react";
import Info from "../components/Info";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../components/DefaultButton";
import SmallCard from "../components/SmallCard";
import styles from "./WorkoutPlanDetail2.module.css";

const WorkoutPlanDetail2 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/postmarip");
  }, [navigate]);

  const onCircleLeftIconClick = useCallback(() => {
    navigate("/postdescpress");
  }, [navigate]);

  return (
    <div className={styles.mariposa}>
      <div className={styles.background}>
        <img className={styles.imageIcon} alt="" src="/image36@2x.png" />
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
        <div className={styles.title}>mariposa</div>
        <div className={styles.description}>
          Si estás buscando aumentar la resistencia muscular, puedes optar por
          un peso más ligero y hacer de 12 a 15 repeticiones por serie. Por otro
          lado, si tu enfoque está en la fuerza máxima, puedes trabajar con un
          peso más pesado y hacer menos repeticiones, como de 4 a 6 por serie.
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
        exercises="0:30"
        smallCardWidth="327px"
        smallCardPosition="absolute"
        smallCardTop="606px"
        smallCardLeft="29px"
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
      />
    </div>
  );
};

export default WorkoutPlanDetail2;
