import React from 'react';
import { typeForButton } from '../types';
//import "../styles/btnStyle.css";

/**
 * A button component that returns button
 *
 * @component
 * @param {obj} props - The component props.
 * @param {Function} props.onClick - Click event handler for button.
 * @param {string} props.className - className for button.
 * @param {string} props.id - id attr for button.
 * @param {string} props.name - name attr for button.
 * @param {string} props.value - value attr for button.
 * @param {string} props.title - Title for accessibility.
 * @param {string} props.type - Type for button submit, reset..
 * @param {React.CSSProperties} props.style - Inline styles for button.
 * @param {React.ReactNode} props.children - Child components to be wrapped inside the button.
 * @returns {JSX.Element} - The rendered component.
 */
const Button: React.FC<typeForButton> = ({
  onClick,
  title,
  type,
  className,
  style,
  name,
  value,
  id,
  children,
  disabled,
}: typeForButton): JSX.Element => (
  <button
    id={id}
    name={name}
    value={value}
    className={className}
    style={style}
    onClick={onClick}
    title={title}
    type={type}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
