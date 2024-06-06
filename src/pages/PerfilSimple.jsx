import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PerfilSimple.module.css";

const PerfilSimple = () => {
  const navigate = useNavigate();

  const onRightIconClick = useCallback(() => {
    navigate("/workout-plan-detail2");
  }, [navigate]);

  const onRightIcon2Click = useCallback(() => {
    navigate("/perfil");
  }, [navigate]);

  return (
    <div className={styles.perfilsimple}>
      <div className={styles.options}>
        <div className={styles.profileList}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle12.svg" />
          <div className={styles.editProfile}>EjPress1</div>
          <img
            className={styles.rightIcon}
            alt=""
            src="/right8@2x.png"
            onClick={onRightIconClick}
          />
        </div>
        <div className={styles.profileList1}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle12.svg" />
          <div className={styles.editProfile}>Calendario</div>
          <img
            className={styles.rightIcon}
            alt=""
            src="/right@2x.png"
            onClick={onRightIcon2Click}
          />
        </div>
        <img className={styles.rectangleIcon2} alt="" src="/rectangle16.svg" />
        <img className={styles.rectangleIcon3} alt="" src="/rectangle17.svg" />
      </div>
      <b className={styles.templateComponents}>Template Components</b>
      <img
        className={styles.component10Icon}
        alt=""
        src="/component-101@2x.png"
      />
    </div>
  );
};

export default PerfilSimple;
