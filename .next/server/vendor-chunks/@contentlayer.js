"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@contentlayer";
exports.ids = ["vendor-chunks/@contentlayer"];
exports.modules = {

/***/ "(ssr)/./node_modules/@contentlayer/client/dist/guards.js":
/*!**********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/guards.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guards: () => (/* binding */ guards),\n/* harmony export */   isType: () => (/* binding */ isType)\n/* harmony export */ });\nfunction is(typeName, _) {\n    if (_) {\n        if (Array.isArray(typeName)) {\n            // TODO make type field name dynamic (probably will require to code-gen the guard function)\n            return typeName.some((typeName_) => _?.type === typeName_);\n        }\n        else {\n            return typeName === _?.type;\n        }\n    }\n    else {\n        return (_) => is(typeName, _);\n    }\n}\nconst isType = is;\nconst guards = {\n    is,\n    // isType,\n    // hasAllFields,\n    // allFields,\n    hasField,\n    // withField,\n};\nfunction hasField(_, property) {\n    return _.hasOwnProperty(property);\n}\n//# sourceMappingURL=guards.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9ndWFyZHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDQTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWlsaGVybWVmcmVpdGFzLmNvbS8uL25vZGVfbW9kdWxlcy9AY29udGVudGxheWVyL2NsaWVudC9kaXN0L2d1YXJkcy5qcz85YzU5Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGlzKHR5cGVOYW1lLCBfKSB7XG4gICAgaWYgKF8pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodHlwZU5hbWUpKSB7XG4gICAgICAgICAgICAvLyBUT0RPIG1ha2UgdHlwZSBmaWVsZCBuYW1lIGR5bmFtaWMgKHByb2JhYmx5IHdpbGwgcmVxdWlyZSB0byBjb2RlLWdlbiB0aGUgZ3VhcmQgZnVuY3Rpb24pXG4gICAgICAgICAgICByZXR1cm4gdHlwZU5hbWUuc29tZSgodHlwZU5hbWVfKSA9PiBfPy50eXBlID09PSB0eXBlTmFtZV8pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVOYW1lID09PSBfPy50eXBlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKF8pID0+IGlzKHR5cGVOYW1lLCBfKTtcbiAgICB9XG59XG5leHBvcnQgY29uc3QgaXNUeXBlID0gaXM7XG5leHBvcnQgY29uc3QgZ3VhcmRzID0ge1xuICAgIGlzLFxuICAgIC8vIGlzVHlwZSxcbiAgICAvLyBoYXNBbGxGaWVsZHMsXG4gICAgLy8gYWxsRmllbGRzLFxuICAgIGhhc0ZpZWxkLFxuICAgIC8vIHdpdGhGaWVsZCxcbn07XG5mdW5jdGlvbiBoYXNGaWVsZChfLCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBfLmhhc093blByb3BlcnR5KHByb3BlcnR5KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWd1YXJkcy5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@contentlayer/client/dist/guards.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@contentlayer/client/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   guards: () => (/* reexport safe */ _guards_js__WEBPACK_IMPORTED_MODULE_0__.guards),\n/* harmony export */   isType: () => (/* reexport safe */ _guards_js__WEBPACK_IMPORTED_MODULE_0__.isType),\n/* harmony export */   pick: () => (/* reexport safe */ _utils_js__WEBPACK_IMPORTED_MODULE_1__.pick)\n/* harmony export */ });\n/* harmony import */ var _guards_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards.js */ \"(ssr)/./node_modules/@contentlayer/client/dist/guards.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"(ssr)/./node_modules/@contentlayer/client/dist/utils.js\");\n\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QjtBQUNEO0FBQzNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VpbGhlcm1lZnJlaXRhcy5jb20vLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC9pbmRleC5qcz83ODdhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCAqIGZyb20gJy4vZ3VhcmRzLmpzJztcbmV4cG9ydCAqIGZyb20gJy4vdXRpbHMuanMnO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@contentlayer/client/dist/index.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/@contentlayer/client/dist/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/@contentlayer/client/dist/utils.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pick: () => (/* binding */ pick)\n/* harmony export */ });\nconst pick = (obj, keys) => {\n    return keys.reduce((acc, key) => {\n        acc[key] = obj[key];\n        return acc;\n    }, {});\n};\n//# sourceMappingURL=utils.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC91dGlscy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLLElBQUk7QUFDVDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VpbGhlcm1lZnJlaXRhcy5jb20vLi9ub2RlX21vZHVsZXMvQGNvbnRlbnRsYXllci9jbGllbnQvZGlzdC91dGlscy5qcz9kZTU4Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBwaWNrID0gKG9iaiwga2V5cykgPT4ge1xuICAgIHJldHVybiBrZXlzLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXRpbHMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@contentlayer/client/dist/utils.js\n");

/***/ })

};
;