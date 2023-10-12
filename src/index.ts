import Icon from './components/Icon';
import Button from './components/Button';
import Container from './components/Container';
import LoadingButton from './components/LoadingButton';
import IndicatorButton from './components/IndicatorButton';
import DLButton from './components/DLButton';
import PBButton from './components/PBButton';
import {
  fbShare,
  sendToTelegram,
  sendWAMessage,
  shareToLinkedIn,
  shareToPinterest,
  shareToReddit,
  twitterShare,
} from './utils/shareFunctions';

//ESM - React
//import dependency from 'dependency';
export { default as Container } from './components/Container';
export { default as Button } from './components/Button';
export { default as Icon } from './components/Icon';
export { default as LoadingButton } from './components/LoadingButton';
export { default as IndicatorButton } from './components/IndicatorButton';
export { default as DLButton } from './components/DLButton';
export { default as PBButton } from './components/PBButton';
export {
  fbShare,
  twitterShare,
  shareToLinkedIn,
  shareToPinterest,
  shareToReddit,
  sendToTelegram,
  sendWAMessage,
} from './utils/shareFunctions';
export {
  ContainerProps,
  ButtonProps,
  IconProps,
  CommonButtonProps,
  DLButtonProps,
  IndicatorButtonProps,
  PBButtonProps,
  typeForLB,
  typeForContainer,
  typeForIcon,
  typeForButton,
  typeforDLBtn,
  typeforPBBtn,
  typeforIndBtn,
} from './types';

//cjs - node, vanillaJS supports function only
//const dependency = require('dependency');
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Container,
    Button,
    Icon,
    LoadingButton,
    IndicatorButton,
    DLButton,
    PBButton,
    fbShare,
    twitterShare,
    shareToLinkedIn,
    shareToPinterest,
    shareToReddit,
    sendToTelegram,
    sendWAMessage,
  };
}

declare global {
  interface Window {
    iconshare: any;
  }
}

if (typeof window !== 'undefined' && window.iconshare) {
  window.iconshare = window.iconshare || {};
  window.iconshare = {
    fbShare,
    twitterShare,
    shareToLinkedIn,
    shareToPinterest,
    shareToReddit,
    sendToTelegram,
    sendWAMessage,
    Button,
    LoadingButton,
    IndicatorButton,
    DLButton,
    Container,
    Icon,
    PBButton,
  };
}
