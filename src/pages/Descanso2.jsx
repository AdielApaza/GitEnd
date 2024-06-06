import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SmallCard3 from "../components/SmallCard3";
import SmallCard5 from "../components/SmallCard5";
import styles from "./Descanso2.module.css";

const Descanso2 = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/postdescpress");
  }, [navigate]);

  const onCircleLeftIconClick = useCallback(() => {
    navigate("/workout-plan-detail");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/casa");
  }, [navigate]);

  return (
    <div className={styles.descansopress}>
      <div className={styles.background}>
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
      </div>
      <Button
        buttonText="Iniciar Descanso"
        propLeft="calc(50% - 67.5px)"
        onDefaultButtonContainerClick={onDefaultButtonContainerClick}
      />
      <img
        className={styles.circleLeftIcon}
        alt=""
        src="/circle-left.svg"
        onClick={onCircleLeftIconClick}
      />
      <SmallCard3 title="Descanso corto" title1="00:01:00" />
      <SmallCard3 title="Descanso medio" title1="00:02:00" propLeft="207px" />
      <SmallCard5 />
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

export default Descanso2;
