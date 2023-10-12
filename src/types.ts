import { CSSProperties, ReactNode, MouseEventHandler } from 'react';
import { IconType } from 'react-icons';

//Icon
interface IconProps {
  iconComponent: IconType;
  id?: string;
  className?: string;
  style?: CSSProperties;
}

type typeForIcon = IconProps;

//Button
interface ButtonProps {
  title: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: MouseEventHandler<HTMLButtonElement>;
  name?: string;
  value?: string;
  id?: string;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  children: ReactNode;
}

type typeForButton = ButtonProps;

//Loading Button
interface CommonButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title: string;
  type: 'submit' | 'reset' | 'button';
  className?: string;
  style?: React.CSSProperties;
  name?: string;
  value?: string;
  id?: string;
  disabled?: boolean;
}

interface TextButtonProps extends CommonButtonProps {
  variant: 'text';
  text: string;
  loading?: boolean;
  loaded?: boolean;
  loadingText?: string;
  loadedText?: string;
}

interface IconButtonProps extends CommonButtonProps {
  variant: 'icon';
  icon: React.ReactNode;
  loadingIcon?: React.ReactNode;
  loadedIcon?: React.ReactNode;
  loading?: boolean;
  loaded?: boolean;
}

interface IconTextButtonProps extends CommonButtonProps {
  variant: 'icontext';
  icon: React.ReactNode;
  loadingIcon?: React.ReactNode;
  loadedIcon?: React.ReactNode;
  text: string;
  loadingText?: string;
  loadedText?: string;
  loading?: boolean;
  loaded?: boolean;
}

type typeForLB = TextButtonProps | IconButtonProps | IconTextButtonProps;

//IndicatorButton
interface IndicatorButtonProps extends CommonButtonProps {
  successBgColor: string;
  failureBgColor: string;
  isSuccess: boolean;
  loading?: boolean;
  loaded?: boolean;
  initialText: string;
  successText: string;
  failureText: string;
}

type typeforIndBtn = IndicatorButtonProps;

interface DLButtonProps extends CommonButtonProps {
  buttonText: string;
  progressText?: string;
  fileUrl: string;
  fileName: string;
  showProgress?: boolean;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  placeProgress?: 'top' | 'bottom';
  loading?: boolean;
}

type typeforDLBtn = DLButtonProps;

interface PBButtonProps extends CommonButtonProps {
  loading?: boolean;
  placeProgress?: 'top' | 'bottom';
  progressText?: string;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined;
  useType: 'linear' | 'circular';
  icon?: React.ReactNode;
  size?: number;
  buttonText?: string;
}

type typeforPBBtn = PBButtonProps;

//Container
interface ContainerProps {
  className?: string;
  style?: CSSProperties;
  id?: string;
  children: ReactNode;
}

type typeForContainer = ContainerProps;

export {
  ContainerProps,
  ButtonProps,
  IconProps,
  CommonButtonProps,
  DLButtonProps,
  IndicatorButtonProps,
  PBButtonProps,
  typeForContainer,
  typeForIcon,
  typeForButton,
  typeForLB,
  typeforDLBtn,
  typeforPBBtn,
  typeforIndBtn,
};
