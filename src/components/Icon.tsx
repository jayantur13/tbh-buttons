import React from 'react';
import { typeForIcon } from '../types';
//import "../styles/iconStyle.css";

/**
 * A component for rendering an icon i.e svg
 *
 * @component
 * @param {obj} props - The component props.
 * @param {IconType} props.iconComponent - The React icon component to render.
 * @param {string} props.id - id attr for icon.
 * @param {string} props.className - className for icon container.
 * @param {CSSProperties} props.style - Inline styles for icon container.
 * @returns {JSX.Element} The rendered icon component.
 */
const Icon: React.FC<typeForIcon> = ({
  iconComponent: IconComponent,
  className,
  id,
  style,
}: typeForIcon): JSX.Element | null => (
  <div id={id} className={className} style={style}>
    {IconComponent && <IconComponent />}
  </div>
);

export default Icon;
