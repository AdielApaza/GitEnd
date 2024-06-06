import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./DefaultButton.module.css";

const DefaultButton = ({
  className = "",
  buttonText,
  defaultButtonWidth,
  defaultButtonHeight,
  defaultButtonPosition,
  defaultButtonTop,
  defaultButtonRight,
  defaultButtonBottom,
  defaultButtonLeft,
  buttonTextLeft,
  buttonTextColor,
  onDefaultButtonContainerClick,
}) => {
  const defaultButtonStyle = useMemo(() => {
    return {
      width: defaultButtonWidth,
      height: defaultButtonHeight,
      position: defaultButtonPosition,
      top: defaultButtonTop,
      right: defaultButtonRight,
      bottom: defaultButtonBottom,
      left: defaultButtonLeft,
    };
  }, [
    defaultButtonWidth,
    defaultButtonHeight,
    defaultButtonPosition,
    defaultButtonTop,
    defaultButtonRight,
    defaultButtonBottom,
    defaultButtonLeft,
  ]);

  const buttonTextStyle = useMemo(() => {
    return {
      left: buttonTextLeft,
      color: buttonTextColor,
    };
  }, [buttonTextLeft, buttonTextColor]);

  return (
    <div
      className={[styles.defaultButton, className].join(" ")}
      style={defaultButtonStyle}
      onClick={onDefaultButtonContainerClick}
    >
      <div className={styles.rectangle} />
      <div className={styles.buttonText} style={buttonTextStyle}>
        {buttonText}
      </div>
    </div>
  );
};

DefaultButton.propTypes = {
  className: PropTypes.string,
  buttonText: PropTypes.string,

  /** Style props */
  defaultButtonWidth: PropTypes.any,
  defaultButtonHeight: PropTypes.any,
  defaultButtonPosition: PropTypes.any,
  defaultButtonTop: PropTypes.any,
  defaultButtonRight: PropTypes.any,
  defaultButtonBottom: PropTypes.any,
  defaultButtonLeft: PropTypes.any,
  buttonTextLeft: PropTypes.any,
  buttonTextColor: PropTypes.any,

  /** Action props */
  onDefaultButtonContainerClick: PropTypes.func,
};

export default DefaultButton;
