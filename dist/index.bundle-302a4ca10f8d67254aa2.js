/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/images/shared/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/logo-59dff8e2243f1e55c520.svg";
;// CONCATENATED MODULE: ./src/assets/images/shared/icon-battery.svg
const icon_battery_namespaceObject = __webpack_require__.p + "images/icon-battery-aac4e71bb65a6278a439.svg";
;// CONCATENATED MODULE: ./src/assets/images/shared/icon-bluetooth.svg
const icon_bluetooth_namespaceObject = __webpack_require__.p + "images/icon-bluetooth-671d67b852a91e7e522e.svg";
;// CONCATENATED MODULE: ./src/assets/images/shared/icon-compatible.svg
const icon_compatible_namespaceObject = __webpack_require__.p + "images/icon-compatible-460c5f05e1b3bca7bc6a.svg";
;// CONCATENATED MODULE: ./src/assets/images/shared/icon-light.svg
const icon_light_namespaceObject = __webpack_require__.p + "images/icon-light-762c82d2ae2c9bc79ce7.svg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-keyboard.jpg
const image_keyboard_namespaceObject = __webpack_require__.p + "images/image-keyboard-ca937b233ad392d71bf8.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-phone-and-keyboard.jpg
const image_phone_and_keyboard_namespaceObject = __webpack_require__.p + "images/image-phone-and-keyboard-fc1d24b4ddd3514ebf68.jpg";
;// CONCATENATED MODULE: ./src/assets/images/mobile/image-glass-and-keyboard.jpg
const image_glass_and_keyboard_namespaceObject = __webpack_require__.p + "images/image-glass-and-keyboard-510df35f48177d489b47.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-keyboard.jpg
const tablet_image_keyboard_namespaceObject = __webpack_require__.p + "images/image-keyboard-43fad146ba9c2fa2f02f.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-phone-and-keyboard.jpg
const tablet_image_phone_and_keyboard_namespaceObject = __webpack_require__.p + "images/image-phone-and-keyboard-621e44423b571eb89258.jpg";
;// CONCATENATED MODULE: ./src/assets/images/tablet/image-glass-and-keyboard.jpg
const tablet_image_glass_and_keyboard_namespaceObject = __webpack_require__.p + "images/image-glass-and-keyboard-bedbcd1b450c1cb8bdf5.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-keyboard.jpg
const desktop_image_keyboard_namespaceObject = __webpack_require__.p + "images/image-keyboard-0e539a1d3ae3e7c536c4.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-phone-and-keyboard.jpg
const desktop_image_phone_and_keyboard_namespaceObject = __webpack_require__.p + "images/image-phone-and-keyboard-baf2dd6d524345792e4a.jpg";
;// CONCATENATED MODULE: ./src/assets/images/desktop/image-glass-and-keyboard.jpg
const desktop_image_glass_and_keyboard_namespaceObject = __webpack_require__.p + "images/image-glass-and-keyboard-adbfb8244266d570a7ad.jpg";
;// CONCATENATED MODULE: ./src/main.js
'use-strict';




// shared images






// mobile images




// tablet images




// desktop images




// set shared images sources
document.getElementById('logo').src = logo_namespaceObject;
document.getElementById('icon-battery').src = icon_battery_namespaceObject;
document.getElementById('icon-bluetooth').src = icon_bluetooth_namespaceObject;
document.getElementById('icon-compatible').src = icon_compatible_namespaceObject;
document.getElementById('icon-light').src = icon_light_namespaceObject;

// set mobile images sources
document.getElementById('keyboard-img-mobile').src = image_keyboard_namespaceObject;
document.getElementById('keyboard-img-phone-mobile').src = image_phone_and_keyboard_namespaceObject;
document.getElementById('keyboard-img-glass-mobile').src = image_glass_and_keyboard_namespaceObject;

// set tablet images sources
document.getElementById('keyboard-img-tablet').srcset = tablet_image_keyboard_namespaceObject;
document.getElementById('keyboard-img-phone-tablet').srcset = tablet_image_phone_and_keyboard_namespaceObject;
document.getElementById('keyboard-img-glass-tablet').srcset = tablet_image_glass_and_keyboard_namespaceObject;

// set tablet images sources
document.getElementById('keyboard-img-desktop').srcset = desktop_image_keyboard_namespaceObject;
document.getElementById('keyboard-img-phone-desktop').srcset = desktop_image_phone_and_keyboard_namespaceObject;
document.getElementById('keyboard-img-glass-desktop').srcset = desktop_image_glass_and_keyboard_namespaceObject;
/******/ })()
;
//# sourceMappingURL=index.bundle-302a4ca10f8d67254aa2.js.map