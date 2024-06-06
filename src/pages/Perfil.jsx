import { useCallback } from "react";
import Antiguedad from "../components/Antiguedad";
import Options from "../components/Options";
import { useNavigate } from "react-router-dom";
import styles from "./Perfil.module.css";

const Perfil = () => {
  const navigate = useNavigate();

  const onACTIVOTextClick = useCallback(() => {
    navigate("/payment2");
  }, [navigate]);

  return (
    <div className={styles.perfil}>
      <img className={styles.profileIcon} alt="" src="/profile2.svg" />
      <Antiguedad />
      <Options />
      <div className={styles.cerrarSesion}>Cerrar sesion</div>
      <img className={styles.icon} alt="" src="/593@2x.png" />
      <b className={styles.perfil1}>Perfil</b>
      <div className={styles.gabrielaEsprella}>Gabriela Esprella</div>
      <b className={styles.activo} onClick={onACTIVOTextClick}>
        ACTIVO
      </b>
      <img
        className={styles.component10Icon}
        alt=""
        src="/component-101@2x.png"
      />
    </div>
  );
};

export default Perfil;
