import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../components/DefaultButton";
import SmallCard from "../components/SmallCard";
import styles from "./WorkoutPlanDetail10.module.css";

const WorkoutPlanDetail10 = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/descanso");
  }, [navigate]);

  const onSmallCardContainerClick = useCallback(() => {
    navigate("/workout-plan-detail1");
  }, [navigate]);

  const onCircleLeftIconClick = useCallback(() => {
    navigate("/rutina-4");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/casa");
  }, [navigate]);

  return (
    <div className={styles.ej1fin}>
      <div className={styles.background}>
        <img className={styles.imageIcon} alt="" src="/image30@2x.png" />
        <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
      </div>
      <div className={styles.text}>
        <div className={styles.subtitle}>Ejercicio de Pecho</div>
        <div className={styles.title}>Flexiones</div>
        <div className={styles.description}>
          <p className={styles.ejerciciosCompletados}>Ejercicios completados</p>
          <p className={styles.ejerciciosCompletados}>
            Tiempo transcurrido 60 min
          </p>
        </div>
      </div>
      <div className={styles.button}>
        <img className={styles.rectangleIcon1} alt="" />
        <DefaultButton
          buttonText="Iniciar el descanzo"
          defaultButtonWidth="70.13%"
          defaultButtonHeight="26.46%"
          defaultButtonPosition="absolute"
          defaultButtonTop="57.14%"
          defaultButtonRight="15.07%"
          defaultButtonBottom="16.4%"
          defaultButtonLeft="14.8%"
          buttonTextLeft="calc(50% - 75.5px)"
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
      <SmallCard
        simpleWarmUp="Excelente trabajo !!!"
        exercises="Sigue adelante!!"
        image="/image34@2x.png"
        down="/down.svg"
        showDownIcon={false}
        showTitle={false}
        smallCardWidth="327px"
        smallCardPosition="absolute"
        smallCardTop="600px"
        smallCardLeft="24px"
        titleWidth="47.28%"
        titleLeft="30.21%"
        simpleWarmUpPosition="unset"
        simpleWarmUpHeight="unset"
        simpleWarmUpWidth="unset"
        simpleWarmUpTop="unset"
        simpleWarmUpRight="unset"
        simpleWarmUpBottom="unset"
        simpleWarmUpLeft="unset"
        simpleWarmUpOverflow="unset"
        simpleWarmUpMaxHeight="unset"
        exercisesPosition="unset"
        exercisesWidth="unset"
        exercisesTop="unset"
        exercisesLeft="unset"
        exercisesFontSize="unset"
        exercisesLineHeight="unset"
        exercisesFontFamily="unset"
        exercisesColor="unset"
        exercisesTextAlign="unset"
        exercisesDisplay="unset"
        titleLeft1="30.21%"
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

export default WorkoutPlanDetail10;
