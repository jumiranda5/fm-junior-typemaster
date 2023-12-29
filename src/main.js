'use-strict';

import './styles/reset.css';
import './styles/style.css';

// shared images
import Logo from './assets/images/shared/logo.svg';
import IconBattery from './assets/images/shared/icon-battery.svg';
import IconBluetooth from './assets/images/shared/icon-bluetooth.svg';
import IconCompatible from './assets/images/shared/icon-compatible.svg';
import IconLight from './assets/images/shared/icon-light.svg';

// mobile images
import ImageKeyboard from './assets/images/mobile/image-keyboard.jpg';
import ImageKeyboardPhone from './assets/images/mobile/image-phone-and-keyboard.jpg';
import ImageKeyboardGlass from './assets/images/mobile/image-glass-and-keyboard.jpg';

// tablet images
import TabletImageKeyboard from './assets/images/tablet/image-keyboard.jpg';
import TabletImageKeyboardPhone from './assets/images/tablet/image-phone-and-keyboard.jpg';
import TabletImageKeyboardGlass from './assets/images/tablet/image-glass-and-keyboard.jpg';

// desktop images
import DesktopImageKeyboard from './assets/images/desktop/image-keyboard.jpg';
import DesktopImageKeyboardPhone from './assets/images/desktop/image-phone-and-keyboard.jpg';
import DesktopImageKeyboardGlass from './assets/images/desktop/image-glass-and-keyboard.jpg';

// set shared images sources
document.getElementById('logo').src = Logo;
document.getElementById('icon-battery').src = IconBattery;
document.getElementById('icon-bluetooth').src = IconBluetooth;
document.getElementById('icon-compatible').src = IconCompatible;
document.getElementById('icon-light').src = IconLight;

// set mobile images sources
document.getElementById('keyboard-img-mobile').src = ImageKeyboard;
document.getElementById('keyboard-img-phone-mobile').src = ImageKeyboardPhone;
document.getElementById('keyboard-img-glass-mobile').src = ImageKeyboardGlass;

// set tablet images sources
document.getElementById('keyboard-img-tablet').srcset = TabletImageKeyboard;
document.getElementById('keyboard-img-phone-tablet').srcset = TabletImageKeyboardPhone;
document.getElementById('keyboard-img-glass-tablet').srcset = TabletImageKeyboardGlass;

// set tablet images sources
document.getElementById('keyboard-img-desktop').srcset = DesktopImageKeyboard;
document.getElementById('keyboard-img-phone-desktop').srcset = DesktopImageKeyboardPhone;
document.getElementById('keyboard-img-glass-desktop').srcset = DesktopImageKeyboardGlass;