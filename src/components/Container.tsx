import React from 'react';
import { typeForContainer } from '../types';

/**
 * A container component that wraps Button and Icon components.
 *
 * @component
 * @param {obj} props - The component props.
 * @param {string} props.className - className attr for container.
 * @param {string} props.id - id attr for container.
 * @param {React.CSSProperties} props.style - Inline styles for container.
 * @param {React.ReactNode} props.children - Child components to be wrapped.
 * @returns {JSX.Element} - The rendered component.
 */
const Container: React.FC<typeForContainer> = ({
  className,
  style,
  id,
  children,
}: typeForContainer): JSX.Element => (
  <div id={id} className={className} style={style}>
    {children}
  </div>
);
export default Container;
