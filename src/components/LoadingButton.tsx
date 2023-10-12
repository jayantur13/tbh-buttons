import { typeForLB } from 'types';
import React, { useEffect, useState } from 'react';

/**
 * Loading button with useful power
 *
 * @component
 * @param {obj} props - The component props.
 * @param {string} props.variant - icon/text/icontext
 * @param {ReactNode} props.icon - Default icon (icon/icontext)
 * @param {string} props.text - Default text (text/icontext)
 * @param {boolean} props.loading - Check method loading is T/F
 * @param {boolean} props.loaded - Check method is loaded,T/F
 * @param {string} props.loadingText - Text during loading
 * @param {string} props.loadedText - Text after loaded
 * @param {ReactNode} props.loadingIcon - Icon during loading
 * @param {ReactNode} props.loadedIcon - Icon after loaded
 * @returns {JSX.Element} - The rendered component.
 */
const LoadingButton: React.FC<typeForLB> = (props: typeForLB): JSX.Element => {
  const { onClick, title, type, className, style, name, value, id, variant } = props;

  const [loading, setLoading] = useState(props.loading);
  const [loaded, setLoaded] = useState(props.loaded);

  useEffect(() => {
    setLoading(props.loading);
    setLoaded(props.loaded);
  }, [props.loading, props.loaded]);

  if (variant === 'icon') {
    return (
      <button
        onClick={onClick}
        title={title}
        type={type}
        className={className}
        style={style}
        name={name}
        value={value}
        id={id}
        disabled={loading}
      >
        {loading ? <>{props.loadingIcon}</> : loaded ? <>{props.loadedIcon}</> : <>{props.icon}</>}
      </button>
    );
  } else if (variant === 'icontext') {
    return (
      <button
        onClick={onClick}
        title={title}
        type={type}
        className={className}
        style={style}
        name={name}
        value={value}
        id={id}
        disabled={loading}
      >
        {loading ? (
          <>
            {props.loadingIcon}
            {props.loadingText}
          </>
        ) : loaded ? (
          <>
            {props.loadedIcon}
            {props.loadedText}
          </>
        ) : (
          <>
            {props.icon}
            {props.text}
          </>
        )}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        title={title}
        type={type}
        className={className}
        style={style}
        name={name}
        value={value}
        id={id}
        disabled={loading}
      >
        {loading ? <>{props.loadingText}</> : loaded ? <>{props.loadedText}</> : <>{props.text}</>}
      </button>
    );
  }
};

export default LoadingButton;
