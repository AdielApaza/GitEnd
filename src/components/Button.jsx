import { useMemo } from "react";
import DefaultButton from "./DefaultButton";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({
  className = "",
  buttonText,
  propLeft,
  onDefaultButtonContainerClick,
}) => {
  const buttonTextStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className={[styles.button, className].join(" ")}>
      <img className={styles.rectangleIcon} alt="" />
      <DefaultButton
        buttonText="Iniciar Descanso"
        defaultButtonWidth="70.13%"
        defaultButtonHeight="26.46%"
        defaultButtonPosition="absolute"
        defaultButtonTop="37.04%"
        defaultButtonRight="14.27%"
        defaultButtonBottom="36.51%"
        defaultButtonLeft="15.6%"
        buttonTextLeft="calc(50% - 67.5px)"
        buttonTextColor="#000"
        onDefaultButtonContainerClick={onDefaultButtonContainerClick}
      />
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,

  /** Style props */
  propLeft: PropTypes.any,

  /** Action props */
  onDefaultButtonContainerClick: PropTypes.func,
};

export default Button;
