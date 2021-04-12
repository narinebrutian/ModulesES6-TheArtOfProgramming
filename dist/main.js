/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/format.js":
/*!***********************!*\
  !*** ./src/format.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"format\": () => (/* binding */ format)\n/* harmony export */ });\nfunction format(prefix, result) {\n  return \"The value of \".concat(prefix, \" is: \").concat(result);\n}\n\n//# sourceURL=webpack://moduleses/./src/format.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ \"./src/math.js\");\n/* harmony import */ var _format_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./format.js */ \"./src/format.js\");\n\n\nconsole.log((0,_format_js__WEBPACK_IMPORTED_MODULE_1__.format)(\"pow\", (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.pow)(5, 9)));\nconsole.log((0,_format_js__WEBPACK_IMPORTED_MODULE_1__.format)(\"hypotenuse\", (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.hypotenuse)(8, 11).hypotenuse));\nconsole.log((0,_format_js__WEBPACK_IMPORTED_MODULE_1__.format)(\"circleArea\", (0,_math_js__WEBPACK_IMPORTED_MODULE_0__.circleArea)(8)));\n\n//# sourceURL=webpack://moduleses/./src/main.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pow\": () => (/* binding */ pow),\n/* harmony export */   \"hypotenuse\": () => (/* binding */ hypotenuse),\n/* harmony export */   \"circleArea\": () => (/* binding */ circleArea)\n/* harmony export */ });\n//function 1\nfunction pow(base, exponent) {\n  if (exponent === 0) {\n    return 1;\n  } else if (exponent < 0) {\n    return 1 / base * pow(1 / base, -exponent - 1);\n  }\n\n  return base * pow(base, exponent - 1);\n} //function 2\n\nfunction hypotenuse(adjacent, opposite) {\n  var hypotenuse = Math.sqrt(Math.pow(adjacent, 2) + Math.pow(opposite, 2));\n  return {\n    adjacent: +adjacent,\n    opposite: +opposite,\n    hypotenuse: hypotenuse\n  };\n} //function 3\n//the required constant \n\nvar PI = 3.14;\nfunction circleArea(radius) {\n  //A = π r²\n  return PI * Math.pow(radius, 2);\n}\n\n//# sourceURL=webpack://moduleses/./src/math.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;