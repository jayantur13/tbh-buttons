import React, { useState, useEffect } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';
import { PBButtonProps } from 'types';

/**
 * A button with linear/circular indeterminate progress
 *
 * @component
 * @param {obj} props - The component props.
 * @param {string} props.buttonText - Initial text to display on button
 * @param {string} props.placeProgress - Place at top/bottom of button
 * @param {string} props.progressText - Returns progressText
 * @param {string} props.useType - linear/circular respectively
 * @param {boolean} props.loading - Set/Get status of method
 * @param {ReactNode} props.icon - Like <React.ReactNode/>
 * @param {string} props.color - Optional color param, defaults to 'primary'
 * @param {number} props.size - Default 24,for circular progress
 * @returns {JSX.Element} - The rendered component.
 */
const PBButton: React.FC<PBButtonProps> = (props: PBButtonProps): JSX.Element => {
  const {
    className,
    style,
    title,
    type,
    name,
    value,
    id,
    buttonText,
    progressText,
    onClick,
    useType,
    placeProgress,
    icon: Icon,
    color,
    size,
  } = props;

  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    setLoading(props.loading);
  }, [props.loading]);

  if (useType === 'linear') {
    return (
      <div
        style={{ display: 'inline-block', position: 'relative' }}
        data-testid="progress-container"
      >
        {loading && placeProgress === 'top' && (
          <LinearProgress variant="indeterminate" color={color} data-testid="linear-progress" />
        )}
        <button
          onClick={onClick}
          className={className}
          disabled={loading}
          title={title}
          type={type}
          name={name}
          value={value}
          id={id}
          style={style}
        >
          {loading ? progressText : buttonText}
        </button>
        {loading && placeProgress === 'bottom' && (
          <LinearProgress variant="indeterminate" color={color} data-testid="linear-progress" />
        )}
      </div>
    );
  } else {
    return (
      <div
        style={{ display: 'inline-block', position: 'relative' }}
        data-testid="progress-container"
      >
        <button
          onClick={onClick}
          disabled={loading}
          className={className}
          title={title}
          type={type}
          name={name}
          value={value}
          id={id}
          style={style}
        >
          {loading ? (
            <CircularProgress
              size={size}
              color={color}
              variant="indeterminate"
              data-testid="circular-progress"
            />
          ) : (
            Icon
          )}
        </button>
      </div>
    );
  }
};

export default PBButton;
