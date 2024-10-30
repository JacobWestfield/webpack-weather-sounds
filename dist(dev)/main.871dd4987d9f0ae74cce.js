/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/sounds/rain.mp3":
/*!********************************!*\
  !*** ./assets/sounds/rain.mp3 ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b7ee8a84e7ecf1112c277ea4ef4a91eb.mp3");

/***/ }),

/***/ "./assets/sounds/summer.mp3":
/*!**********************************!*\
  !*** ./assets/sounds/summer.mp3 ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ba837e3ecc073286cbc4b9d797bbd762.mp3");

/***/ }),

/***/ "./assets/sounds/winter.mp3":
/*!**********************************!*\
  !*** ./assets/sounds/winter.mp3 ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "24f5c09b90641ef35477fed9b0f10650.mp3");

/***/ }),

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./index.css");
/* harmony import */ var _assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sounds/summer.mp3 */ "./assets/sounds/summer.mp3");
/* harmony import */ var _assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/sounds/rain.mp3 */ "./assets/sounds/rain.mp3");
/* harmony import */ var _assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/sounds/winter.mp3 */ "./assets/sounds/winter.mp3");






class Sound {
    constructor(sound, soundControl) {
        this.sound = sound;
        this.isOn = false;
        this.soundControl = soundControl;
    }

    togglePlay() {
        if (this.isOn) {
            this.sound.pause();
            this.isOn = false;
            this.soundControl.classList.add("hidden");
        } else {
            this.sound.play();
            this.isOn = true;
            this.soundControl.classList.remove("hidden");
        }
    }

    adjustVolume(value) {
        this.sound.volume = value;
    }
}

// function togglePlay(sound) {
//     let isOn = false;

//     return function () {
//         if (isOn) {
//             sound.pause();
//             isOn = false;
//         } else {
//             sound.play();
//             isOn = true;
//         }
//     };
// }

const bgClasses = ["bg-summer", "bg-rainy", "bg-winter"];

const bgImage = document.getElementById("bg-image");

const summerBtn = document.getElementById("summer");
const rainBtn = document.getElementById("rainy");
const winterBtn = document.getElementById("winter");

const summerAudio = new Audio(_assets_sounds_summer_mp3__WEBPACK_IMPORTED_MODULE_1__["default"]);
const rainAudio = new Audio(_assets_sounds_rain_mp3__WEBPACK_IMPORTED_MODULE_2__["default"]);
const winterAudio = new Audio(_assets_sounds_winter_mp3__WEBPACK_IMPORTED_MODULE_3__["default"]);

const summerVolumeControl = document.getElementById("summer-volume");
const rainVolumeControl = document.getElementById("rain-volume");
const winterVolumeControl = document.getElementById("winter-volume");

summerVolumeControl.addEventListener("input", (e) => {
    summerSoundObject.adjustVolume(e.target.value);
});
rainVolumeControl.addEventListener("input", (e) => {
    rainSoundObject.adjustVolume(e.target.value);
});
winterVolumeControl.addEventListener("input", (e) => {
    winterSoundObject.adjustVolume(e.target.value);
});

const summerSoundObject = new Sound(summerAudio, summerVolumeControl);
const rainSoundObject = new Sound(rainAudio, rainVolumeControl);
const winterSoundObject = new Sound(winterAudio, winterVolumeControl);

summerBtn.addEventListener("click", () => {
    if (rainSoundObject.isOn) rainSoundObject.togglePlay();
    if (winterSoundObject.isOn) winterSoundObject.togglePlay();
    summerSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-summer");
});

rainBtn.addEventListener("click", () => {
    if (summerSoundObject.isOn) summerSoundObject.togglePlay();
    if (winterSoundObject.isOn) winterSoundObject.togglePlay();
    rainSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-rainy");
});

winterBtn.addEventListener("click", () => {
    if (rainSoundObject.isOn) rainSoundObject.togglePlay();
    if (summerSoundObject.isOn) summerSoundObject.togglePlay();
    winterSoundObject.togglePlay();
    bgImage.classList.remove(...bgClasses);
    bgImage.classList.add("bg-winter");
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NzFkZDQ5ODdkOWYwYWU3NGNjZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7Ozs7O0FDQS9FLGlFQUFlLHFCQUF1Qix5Q0FBeUM7Ozs7Ozs7Ozs7O0FDQS9FOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCYTtBQUNRO0FBQ2dDO0FBQ0o7QUFDSTtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpRUFBVztBQUN6Qyw0QkFBNEIsK0RBQVM7QUFDckMsOEJBQThCLGlFQUFXO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zb3VuZHMvcmFpbi5tcDMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zb3VuZHMvd2ludGVyLm1wMyIsIndlYnBhY2s6Ly8vLi9pbmRleC5jc3M/YmYzOSIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI3ZWU4YTg0ZTdlY2YxMTEyYzI3N2VhNGVmNGE5MWViLm1wM1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiYTgzN2UzZWNjMDczMjg2Y2JjNGI5ZDc5N2JiZDc2Mi5tcDNcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjRmNWMwOWI5MDY0MWVmMzU0NzdmZWQ5YjBmMTA2NTAubXAzXCI7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCAmJiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnRhZ05hbWUudG9VcHBlckNhc2UoKSA9PT0gJ1NDUklQVCcpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIlwidXNlIHN0cmljdFwiO1xyXG5pbXBvcnQgXCIuL2luZGV4LmNzc1wiO1xyXG5pbXBvcnQgc3VtbWVyU291bmQgZnJvbSBcIi4vYXNzZXRzL3NvdW5kcy9zdW1tZXIubXAzXCI7XHJcbmltcG9ydCByYWluU291bmQgZnJvbSBcIi4vYXNzZXRzL3NvdW5kcy9yYWluLm1wM1wiO1xyXG5pbXBvcnQgd2ludGVyU291bmQgZnJvbSBcIi4vYXNzZXRzL3NvdW5kcy93aW50ZXIubXAzXCI7XHJcblxyXG5jbGFzcyBTb3VuZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihzb3VuZCwgc291bmRDb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5zb3VuZCA9IHNvdW5kO1xyXG4gICAgICAgIHRoaXMuaXNPbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc291bmRDb250cm9sID0gc291bmRDb250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZVBsYXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNPbikge1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kLnBhdXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNPbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQ29udHJvbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc291bmQucGxheSgpO1xyXG4gICAgICAgICAgICB0aGlzLmlzT24gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNvdW5kQ29udHJvbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhZGp1c3RWb2x1bWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNvdW5kLnZvbHVtZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB0b2dnbGVQbGF5KHNvdW5kKSB7XHJcbi8vICAgICBsZXQgaXNPbiA9IGZhbHNlO1xyXG5cclxuLy8gICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICAgICAgaWYgKGlzT24pIHtcclxuLy8gICAgICAgICAgICAgc291bmQucGF1c2UoKTtcclxuLy8gICAgICAgICAgICAgaXNPbiA9IGZhbHNlO1xyXG4vLyAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgIHNvdW5kLnBsYXkoKTtcclxuLy8gICAgICAgICAgICAgaXNPbiA9IHRydWU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfTtcclxuLy8gfVxyXG5cclxuY29uc3QgYmdDbGFzc2VzID0gW1wiYmctc3VtbWVyXCIsIFwiYmctcmFpbnlcIiwgXCJiZy13aW50ZXJcIl07XHJcblxyXG5jb25zdCBiZ0ltYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZy1pbWFnZVwiKTtcclxuXHJcbmNvbnN0IHN1bW1lckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VtbWVyXCIpO1xyXG5jb25zdCByYWluQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyYWlueVwiKTtcclxuY29uc3Qgd2ludGVyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW50ZXJcIik7XHJcblxyXG5jb25zdCBzdW1tZXJBdWRpbyA9IG5ldyBBdWRpbyhzdW1tZXJTb3VuZCk7XHJcbmNvbnN0IHJhaW5BdWRpbyA9IG5ldyBBdWRpbyhyYWluU291bmQpO1xyXG5jb25zdCB3aW50ZXJBdWRpbyA9IG5ldyBBdWRpbyh3aW50ZXJTb3VuZCk7XHJcblxyXG5jb25zdCBzdW1tZXJWb2x1bWVDb250cm9sID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdW1tZXItdm9sdW1lXCIpO1xyXG5jb25zdCByYWluVm9sdW1lQ29udHJvbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmFpbi12b2x1bWVcIik7XHJcbmNvbnN0IHdpbnRlclZvbHVtZUNvbnRyb2wgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbnRlci12b2x1bWVcIik7XHJcblxyXG5zdW1tZXJWb2x1bWVDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgc3VtbWVyU291bmRPYmplY3QuYWRqdXN0Vm9sdW1lKGUudGFyZ2V0LnZhbHVlKTtcclxufSk7XHJcbnJhaW5Wb2x1bWVDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgcmFpblNvdW5kT2JqZWN0LmFkanVzdFZvbHVtZShlLnRhcmdldC52YWx1ZSk7XHJcbn0pO1xyXG53aW50ZXJWb2x1bWVDb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoZSkgPT4ge1xyXG4gICAgd2ludGVyU291bmRPYmplY3QuYWRqdXN0Vm9sdW1lKGUudGFyZ2V0LnZhbHVlKTtcclxufSk7XHJcblxyXG5jb25zdCBzdW1tZXJTb3VuZE9iamVjdCA9IG5ldyBTb3VuZChzdW1tZXJBdWRpbywgc3VtbWVyVm9sdW1lQ29udHJvbCk7XHJcbmNvbnN0IHJhaW5Tb3VuZE9iamVjdCA9IG5ldyBTb3VuZChyYWluQXVkaW8sIHJhaW5Wb2x1bWVDb250cm9sKTtcclxuY29uc3Qgd2ludGVyU291bmRPYmplY3QgPSBuZXcgU291bmQod2ludGVyQXVkaW8sIHdpbnRlclZvbHVtZUNvbnRyb2wpO1xyXG5cclxuc3VtbWVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBpZiAocmFpblNvdW5kT2JqZWN0LmlzT24pIHJhaW5Tb3VuZE9iamVjdC50b2dnbGVQbGF5KCk7XHJcbiAgICBpZiAod2ludGVyU291bmRPYmplY3QuaXNPbikgd2ludGVyU291bmRPYmplY3QudG9nZ2xlUGxheSgpO1xyXG4gICAgc3VtbWVyU291bmRPYmplY3QudG9nZ2xlUGxheSgpO1xyXG4gICAgYmdJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmJnQ2xhc3Nlcyk7XHJcbiAgICBiZ0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJiZy1zdW1tZXJcIik7XHJcbn0pO1xyXG5cclxucmFpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgaWYgKHN1bW1lclNvdW5kT2JqZWN0LmlzT24pIHN1bW1lclNvdW5kT2JqZWN0LnRvZ2dsZVBsYXkoKTtcclxuICAgIGlmICh3aW50ZXJTb3VuZE9iamVjdC5pc09uKSB3aW50ZXJTb3VuZE9iamVjdC50b2dnbGVQbGF5KCk7XHJcbiAgICByYWluU291bmRPYmplY3QudG9nZ2xlUGxheSgpO1xyXG4gICAgYmdJbWFnZS5jbGFzc0xpc3QucmVtb3ZlKC4uLmJnQ2xhc3Nlcyk7XHJcbiAgICBiZ0ltYWdlLmNsYXNzTGlzdC5hZGQoXCJiZy1yYWlueVwiKTtcclxufSk7XHJcblxyXG53aW50ZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGlmIChyYWluU291bmRPYmplY3QuaXNPbikgcmFpblNvdW5kT2JqZWN0LnRvZ2dsZVBsYXkoKTtcclxuICAgIGlmIChzdW1tZXJTb3VuZE9iamVjdC5pc09uKSBzdW1tZXJTb3VuZE9iamVjdC50b2dnbGVQbGF5KCk7XHJcbiAgICB3aW50ZXJTb3VuZE9iamVjdC50b2dnbGVQbGF5KCk7XHJcbiAgICBiZ0ltYWdlLmNsYXNzTGlzdC5yZW1vdmUoLi4uYmdDbGFzc2VzKTtcclxuICAgIGJnSW1hZ2UuY2xhc3NMaXN0LmFkZChcImJnLXdpbnRlclwiKTtcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==