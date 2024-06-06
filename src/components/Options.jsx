import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Property1Default1 from "./Property1Default1";
import PropTypes from "prop-types";
import styles from "./Options.module.css";

const Options = ({ className = "" }) => {
  const navigate = useNavigate();

  const onRightIconClick = useCallback(() => {
    navigate("/editar-perfil1");
  }, [navigate]);

  const onRightIcon2Click = useCallback(() => {
    navigate("/payment");
  }, [navigate]);

  const onRightIcon3Click = useCallback(() => {
    navigate("/payment1");
  }, [navigate]);

  const onRightIcon4Click = useCallback(() => {
    navigate("/calendario1");
  }, [navigate]);

  return (
    <div className={[styles.options, className].join(" ")}>
      <Property1Default1
        rectangle="/rectangle12.svg"
        editProfile="Editar perfil"
        right="/right5@2x.png"
        property1DefaultHeight="35.6px"
        property1DefaultPosition="absolute"
        property1DefaultTop="15.2px"
        property1DefaultLeft="0px"
        rectangleIconHeight="2.81%"
        rectangleIconBottom="-2.81%"
        onRightIconClick={onRightIconClick}
      />
      <Property1Default1
        rectangle="/rectangle12.svg"
        editProfile="Sobre el gimnasio"
        right="/right6@2x.png"
        property1DefaultHeight="35.6px"
        property1DefaultPosition="absolute"
        property1DefaultTop="67.8px"
        property1DefaultLeft="0px"
        rectangleIconHeight="2.81%"
        rectangleIconBottom="-2.81%"
        onRightIconClick={onRightIcon2Click}
      />
      <Property1Default1
        rectangle="/rectangle12.svg"
        editProfile="Ajustes"
        right="/right7@2x.png"
        property1DefaultHeight="35.6px"
        property1DefaultPosition="absolute"
        property1DefaultTop="120.3px"
        property1DefaultLeft="0px"
        rectangleIconHeight="2.81%"
        rectangleIconBottom="-2.81%"
        onRightIconClick={onRightIcon3Click}
      />
      <Property1Default1
        rectangle="/rectangle12.svg"
        editProfile="Calendario personal"
        right="/right8@2x.png"
        property1DefaultHeight="35.6px"
        property1DefaultPosition="absolute"
        property1DefaultTop="173px"
        property1DefaultLeft="0px"
        rectangleIconHeight="2.81%"
        rectangleIconBottom="-2.81%"
        onRightIconClick={onRightIcon4Click}
      />
      <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
      <img className={styles.rectangleIcon1} alt="" src="/rectangle13.svg" />
      <img className={styles.rectangleIcon2} alt="" src="/rectangle.svg" />
    </div>
  );
};

Options.propTypes = {
  className: PropTypes.string,
};

export default Options;
