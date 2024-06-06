import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SmallCard6 from "../components/SmallCard6";
import SmallCard5 from "../components/SmallCard5";
import SmallCard from "../components/SmallCard4";
import styles from "./Descanso.module.css";

const Descanso = () => {
  const navigate = useNavigate();

  const onDefaultButtonContainerClick = useCallback(() => {
    navigate("/descanso1");
  }, [navigate]);

  const onHomeIconClick = useCallback(() => {
    navigate("/casa");
  }, [navigate]);

  return (
    <div className={styles.descanso}>
      <div className={styles.background}>
        <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
        <img className={styles.rectangleIcon} alt="" src="/rectangle1.svg" />
      </div>
      <div className={styles.text}>
        <b className={styles.horaDelDescanso}>Hora del descanso</b>
      </div>
      <Button
        buttonText="Iniciar Descanso"
        onDefaultButtonContainerClick={onDefaultButtonContainerClick}
      />
      <div className={styles.smallCard}>
        <div className={styles.rectangle} />
        <div className={styles.title}>Descanso corto</div>
        <img className={styles.downIcon} alt="" src="/down.svg" />
        <div className={styles.title1}>00:01:00</div>
      </div>
      <SmallCard6 />
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

export default Descanso;
