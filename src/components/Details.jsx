import PropTypes from "prop-types";
import styles from "./Details.module.css";

const Details = ({ className = "" }) => {
  return (
    <div className={[styles.details, className].join(" ")}>
      <img className={styles.cardIcon} alt="" src="/card.svg" />
      <div className={styles.cost}>
        <div className={styles.subtitle}>Costo de Suscripcion</div>
        <div className={styles.name}>100 bs</div>
      </div>
      <div className={styles.time}>
        <div className={styles.subtitle1}>Estado</div>
        <div className={styles.name1}>Membresia Activa</div>
      </div>
      <div className={styles.date}>
        <div className={styles.subtitle2}>Fecha</div>
        <b className={styles.name2}>20 de Agosto - 20 de Septiembre</b>
      </div>
      <div className={styles.trainer}>
        <div className={styles.subtitle1}>Usuario</div>
        <div className={styles.name3}>Gabriela</div>
        <div className={styles.smallPoint}>
          <div className={styles.point}>
            <div className={styles.pointChild} />
            <b className={styles.title}>4.8</b>
          </div>
          <b className={styles.title1}>4.9</b>
        </div>
      </div>
    </div>
  );
};

Details.propTypes = {
  className: PropTypes.string,
};

export default Details;
