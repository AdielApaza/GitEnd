import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Payment1.module.css";

const Payment1 = () => {
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
      <div className={styles.details}>
        <img className={styles.cardIcon} alt="" src="/vector-1.svg" />
        <div className={styles.trainer}>
          <div className={styles.subtitle}>Sobre nosotros</div>
          <div className={styles.subtitle1}>Nuestra ubicación</div>
          <div className={styles.smallPoint}>
            <div className={styles.point}>
              <div className={styles.pointChild} />
              <b className={styles.title}>4.8</b>
            </div>
            <b className={styles.title1}>4.9</b>
          </div>
        </div>
      </div>
      <b className={styles.sobreElGimnasio}>Sobre el Gimnasio</b>
      <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
      <div className={styles.trainer1}>
        <div className={styles.subtitle}>Contactanos</div>
        <div className={styles.subtitle3}>{`Facebook `}</div>
        <div className={styles.smallPoint}>
          <div className={styles.point}>
            <div className={styles.pointChild} />
            <b className={styles.title}>4.8</b>
          </div>
          <b className={styles.title1}>4.9</b>
        </div>
      </div>
      <img className={styles.image20Icon} alt="" src="/image-20@2x.png" />
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
      <div className={styles.div}>78764484</div>
      <div className={styles.fitclublapazgmailcom}>fitclub.lapaz@gmail.com</div>
    </div>
  );
};

export default Payment1;
