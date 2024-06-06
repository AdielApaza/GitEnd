import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SmallCard6 from "../components/SmallCard6";
import SmallCard5 from "../components/SmallCard5";
import SmallCard from "../components/SmallCard4";
import styles from "./Descanso4.module.css";

const Descanso4 = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/postpostmarip");
  }, [navigate]);

  const onCircleLeftIconClick = useCallback(() => {
    navigate("/mariposa");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/casa");
  }, [navigate]);

  return (
    <div className={styles.postmarip}>
      <div className={styles.background}>
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
      </div>
      <div className={styles.text}>
        <div className={styles.horaDelDescanso}>Hora del descanso</div>
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
      <div className={styles.smallCard}>
        <div className={styles.rectangle} />
        <div className={styles.title}>Descanso corto</div>
        <img className={styles.downIcon} alt="" src="/down.svg" />
        <div className={styles.title1}>00:01:00</div>
      </div>
      <SmallCard6
        propBorderRadius="unset"
        propBorder="unset"
        propWidth="123px"
        propHeight="117px"
      />
      <SmallCard5 />
      <SmallCard />
      <img
        className={styles.homeIcon}
        alt=""
        src="/home.svg"
        onClick={onHomeIconClick}
      />
    </div>
  );
};

export default Descanso4;
