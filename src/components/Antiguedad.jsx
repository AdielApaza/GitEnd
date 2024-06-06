import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Antiguedad.module.css";

const Antiguedad = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDesdeTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onClienteRegularTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={[styles.antiguedad, className].join(" ")}>
      <img className={styles.antiguedadChild} alt="" src="/vector-9.svg" />
      <div className={styles.desde} onClick={onDesdeTextClick}>
        Desde
      </div>
      <div className={styles.headline}>hace 2 meses</div>
      <div className={styles.membresia}>Membresia:</div>
      <div className={styles.tipoDeUsuario}>Tipo de usuario:</div>
      <b className={styles.b}>16/04/24 - 16/05/24</b>
      <b className={styles.clienteRegular} onClick={onClienteRegularTextClick}>
        Cliente Regular
      </b>
    </div>
  );
};

Antiguedad.propTypes = {
  className: PropTypes.string,
};

export default Antiguedad;
