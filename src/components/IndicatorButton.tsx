import React, { useEffect, useState } from 'react';
import { IndicatorButtonProps } from 'types';

/**
 * A button which indicates success/failure
 *
 * @component
 * @param {obj} props - The component props.
 * @param {boolean} props.loading - Check method loading is T/F
 * @param {boolean} props.loaded - Check method is loaded,T/F
 * @param {boolean} props.isSuccess - Check if the method is T/F
 * @param {string} props.successBgColor - A color for success method
 * @param {string} props.failureBgColor - A color for failure method
 * @param {string} params.initialText - Default text for button
 * @param {string} params.successText - Text to display for success
 * @param {string} params.failureText - Text to display for failure
 * @returns {JSX.Element} - The rendered component.
 */
const IndicatorButton: React.FC<IndicatorButtonProps> = (
  props: IndicatorButtonProps,
): JSX.Element => {
  const {
    onClick,
    className,
    style,
    title,
    type,
    name,
    value,
    id,
    successBgColor,
    failureBgColor,
    initialText,
    successText,
    failureText,
  } = props;
  const [loading, setLoading] = useState(props.loading);
  const [loaded, setLoaded] = useState(props.loaded);
  const [isSuccess, setIsSuccess] = useState(props.isSuccess);

  useEffect(() => {
    setLoading(props.loading);
    setLoaded(props.loaded);
    setIsSuccess(props.isSuccess);
  }, [props.loading, props.loaded, props.isSuccess]);

  const getButtonStyle = () => {
    if (loaded === false) {
      return {
        ...style,
        backgroundColor: '',
      };
    } else if (loaded === true) {
      if (isSuccess === true) {
        return {
          ...style,
          backgroundColor: successBgColor,
        };
      } else if (isSuccess == false) {
        return {
          ...style,
          backgroundColor: failureBgColor,
        };
      }
    }
  };

  const getButtonText = () => {
    if (loaded === true) {
      if (isSuccess === true) {
        return successText;
      } else if (isSuccess == false) {
        return failureText;
      }
    } else {
      return initialText;
    }
  };

  return (
    <button
      data-testid="indicator-button"
      onClick={onClick}
      title={title}
      type={type}
      name={name}
      value={value}
      id={id}
      className={className}
      style={getButtonStyle()}
      disabled={loading}
    >
      {getButtonText()}
    </button>
  );
};

export default IndicatorButton;
