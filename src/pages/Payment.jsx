import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import DefaultButton from "../components/DefaultButton";
import Details from "../components/Details";
import styles from "./Payment.module.css";

const Payment = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/perfil");
  }, [navigate]);

  return (
    <div className={styles.payment}>
      <div className={styles.button} onClick={onButtonContainerClick}>
        <DefaultButton
          buttonText="Volver"
          defaultButtonWidth="100%"
          defaultButtonHeight="100%"
          defaultButtonPosition="absolute"
          defaultButtonTop="0%"
          defaultButtonRight="0%"
          defaultButtonBottom="0%"
          defaultButtonLeft="0%"
          buttonTextLeft="calc(50% - 26.5px)"
          buttonTextColor="#000"
        />
      </div>
      <Details />
      <div className={styles.cost}>
        <div className={styles.subtitle}>Promocion / Descuento</div>
        <div className={styles.name}>Ninguno</div>
      </div>
      <div className={styles.cost1}>
        <div className={styles.subtitle}>Duracion de suscripcion</div>
        <div className={styles.name1}>1 Mes</div>
      </div>
      <b className={styles.estadoMembresia}>Estado Membresia</b>
    </div>
  );
};

export default Payment;
