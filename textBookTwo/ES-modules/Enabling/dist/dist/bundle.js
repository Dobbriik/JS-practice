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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./math.js */ \"./src/math.js\");\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.js */ \"./src/test.js\");\n\r\n\r\n\r\n\r\nconst result = +(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.root2)(3) + +(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.root3)(3)\r\nconst result2 = +(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.pow2)(3) + +(0,_math_js__WEBPACK_IMPORTED_MODULE_0__.pow3)(3)\r\nconst all = +_math_js__WEBPACK_IMPORTED_MODULE_0__.pow2(2) + +_math_js__WEBPACK_IMPORTED_MODULE_0__.root3(4)\r\n\r\nconsole.log(result)\r\nconsole.log(result2)\r\nconsole.log(all)\r\nconsole.log(_math_js__WEBPACK_IMPORTED_MODULE_0__)\r\nconsole.log((0,_test_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])())\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pow2: () => (/* binding */ pow2),\n/* harmony export */   pow3: () => (/* binding */ pow3),\n/* harmony export */   pow4: () => (/* binding */ pow4),\n/* harmony export */   root2: () => (/* binding */ root2),\n/* harmony export */   root3: () => (/* binding */ root3)\n/* harmony export */ });\nfunction root2(num) {\r\n\treturn round(num ** (1 / 2))\r\n}\r\nfunction root3(num) {\r\n\treturn round(num ** (1 / 3))\r\n}\r\nfunction round(num) {\r\n\treturn num.toFixed(2)\r\n}\r\n\r\nfunction pow2(num) {\r\n\treturn num ** 2\r\n}\r\nfunction pow3(num) {\r\n\treturn num ** 3\r\n}\r\nfunction pow4(num) {\r\n\treturn num ** 4\r\n}\r\n\n\n//# sourceURL=webpack:///./src/math.js?");

/***/ }),

/***/ "./src/test.js":
/*!*********************!*\
  !*** ./src/test.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\r\n\treturn 'test'\r\n}\r\n\n\n//# sourceURL=webpack:///./src/test.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;