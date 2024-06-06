import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Payment2.module.css";

const Payment2 = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/perfil");
  }, [navigate]);

  return (
    <div className={styles.payment}>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <div className={styles.defaultButton}>
          <div className={styles.rectangle} />
          <div className={styles.buttonText}>Volver</div>
        </div>
      </div>
      <b className={styles.ajustes}>Ajustes</b>
    </div>
  );
};

export default Payment2;
