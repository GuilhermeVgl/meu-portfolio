"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@vercel";
exports.ids = ["vendor-chunks/@vercel"];
exports.modules = {

/***/ "(ssr)/./node_modules/@vercel/analytics/dist/react/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@vercel/analytics/dist/react/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Analytics: () => (/* binding */ Analytics),\n/* harmony export */   track: () => (/* binding */ track)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\"use client\";\n\n// src/react.tsx\n\n\n// package.json\nvar name = \"@vercel/analytics\";\nvar version = \"1.1.1\";\n\n// src/queue.ts\nvar initQueue = () => {\n  if (window.va)\n    return;\n  window.va = function a(...params) {\n    (window.vaq = window.vaq || []).push(params);\n  };\n};\n\n// src/utils.ts\nfunction isBrowser() {\n  return typeof window !== \"undefined\";\n}\nfunction detectEnvironment() {\n  try {\n    const env = \"development\";\n    if (env === \"development\" || env === \"test\") {\n      return \"development\";\n    }\n  } catch (e) {\n  }\n  return \"production\";\n}\nfunction setMode(mode = \"auto\") {\n  if (mode === \"auto\") {\n    window.vam = detectEnvironment();\n    return;\n  }\n  window.vam = mode;\n}\nfunction getMode() {\n  const mode = isBrowser() ? window.vam : detectEnvironment();\n  return mode || \"production\";\n}\nfunction isProduction() {\n  return getMode() === \"production\";\n}\nfunction isDevelopment() {\n  return getMode() === \"development\";\n}\nfunction removeKey(key, { [key]: _, ...rest }) {\n  return rest;\n}\nfunction parseProperties(properties, options) {\n  if (!properties)\n    return void 0;\n  let props = properties;\n  const errorProperties = [];\n  for (const [key, value] of Object.entries(properties)) {\n    if (typeof value === \"object\" && value !== null) {\n      if (options.strip) {\n        props = removeKey(key, props);\n      } else {\n        errorProperties.push(key);\n      }\n    }\n  }\n  if (errorProperties.length > 0 && !options.strip) {\n    throw Error(\n      `The following properties are not valid: ${errorProperties.join(\n        \", \"\n      )}. Only strings, numbers, booleans, and null are allowed.`\n    );\n  }\n  return props;\n}\n\n// src/generic.ts\nfunction inject(props = {\n  debug: true\n}) {\n  var _a;\n  if (!isBrowser())\n    return;\n  setMode(props.mode);\n  initQueue();\n  if (props.beforeSend) {\n    (_a = window.va) == null ? void 0 : _a.call(window, \"beforeSend\", props.beforeSend);\n  }\n  const src = isDevelopment() ? \"https://va.vercel-scripts.com/v1/script.debug.js\" : \"/_vercel/insights/script.js\";\n  if (document.head.querySelector(`script[src*=\"${src}\"]`))\n    return;\n  const script = document.createElement(\"script\");\n  script.src = src;\n  script.defer = true;\n  script.setAttribute(\"data-sdkn\", name);\n  script.setAttribute(\"data-sdkv\", version);\n  script.onerror = () => {\n    const errorMessage = isDevelopment() ? \"Please check if any ad blockers are enabled and try again.\" : \"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";\n    console.log(\n      `[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`\n    );\n  };\n  if (isDevelopment() && props.debug === false) {\n    script.setAttribute(\"data-debug\", \"false\");\n  }\n  document.head.appendChild(script);\n}\nfunction track(name2, properties) {\n  var _a, _b;\n  if (!isBrowser()) {\n    const msg = \"[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment\";\n    if (isProduction()) {\n      console.warn(msg);\n    } else {\n      throw new Error(msg);\n    }\n    return;\n  }\n  if (!properties) {\n    (_a = window.va) == null ? void 0 : _a.call(window, \"event\", { name: name2 });\n    return;\n  }\n  try {\n    const props = parseProperties(properties, {\n      strip: isProduction()\n    });\n    (_b = window.va) == null ? void 0 : _b.call(window, \"event\", {\n      name: name2,\n      data: props\n    });\n  } catch (err) {\n    if (err instanceof Error && isDevelopment()) {\n      console.error(err);\n    }\n  }\n}\n\n// src/react.tsx\nfunction Analytics({\n  beforeSend,\n  debug = true,\n  mode = \"auto\"\n}) {\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    inject({ beforeSend, debug, mode });\n  }, [beforeSend, debug, mode]);\n  return null;\n}\n\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7QUFDa0M7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixhQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtQkFBbUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxJQUFJO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxJQUFJLElBQUksYUFBYTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FLGFBQWE7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxFQUFFLGdEQUFTO0FBQ1gsYUFBYSx5QkFBeUI7QUFDdEMsR0FBRztBQUNIO0FBQ0E7QUFJRTtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3VpbGhlcm1lZnJlaXRhcy5jb20vLi9ub2RlX21vZHVsZXMvQHZlcmNlbC9hbmFseXRpY3MvZGlzdC9yZWFjdC9pbmRleC5qcz9lZTUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG4vLyBzcmMvcmVhY3QudHN4XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gcGFja2FnZS5qc29uXG52YXIgbmFtZSA9IFwiQHZlcmNlbC9hbmFseXRpY3NcIjtcbnZhciB2ZXJzaW9uID0gXCIxLjEuMVwiO1xuXG4vLyBzcmMvcXVldWUudHNcbnZhciBpbml0UXVldWUgPSAoKSA9PiB7XG4gIGlmICh3aW5kb3cudmEpXG4gICAgcmV0dXJuO1xuICB3aW5kb3cudmEgPSBmdW5jdGlvbiBhKC4uLnBhcmFtcykge1xuICAgICh3aW5kb3cudmFxID0gd2luZG93LnZhcSB8fCBbXSkucHVzaChwYXJhbXMpO1xuICB9O1xufTtcblxuLy8gc3JjL3V0aWxzLnRzXG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiO1xufVxuZnVuY3Rpb24gZGV0ZWN0RW52aXJvbm1lbnQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlY7XG4gICAgaWYgKGVudiA9PT0gXCJkZXZlbG9wbWVudFwiIHx8IGVudiA9PT0gXCJ0ZXN0XCIpIHtcbiAgICAgIHJldHVybiBcImRldmVsb3BtZW50XCI7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gIH1cbiAgcmV0dXJuIFwicHJvZHVjdGlvblwiO1xufVxuZnVuY3Rpb24gc2V0TW9kZShtb2RlID0gXCJhdXRvXCIpIHtcbiAgaWYgKG1vZGUgPT09IFwiYXV0b1wiKSB7XG4gICAgd2luZG93LnZhbSA9IGRldGVjdEVudmlyb25tZW50KCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHdpbmRvdy52YW0gPSBtb2RlO1xufVxuZnVuY3Rpb24gZ2V0TW9kZSgpIHtcbiAgY29uc3QgbW9kZSA9IGlzQnJvd3NlcigpID8gd2luZG93LnZhbSA6IGRldGVjdEVudmlyb25tZW50KCk7XG4gIHJldHVybiBtb2RlIHx8IFwicHJvZHVjdGlvblwiO1xufVxuZnVuY3Rpb24gaXNQcm9kdWN0aW9uKCkge1xuICByZXR1cm4gZ2V0TW9kZSgpID09PSBcInByb2R1Y3Rpb25cIjtcbn1cbmZ1bmN0aW9uIGlzRGV2ZWxvcG1lbnQoKSB7XG4gIHJldHVybiBnZXRNb2RlKCkgPT09IFwiZGV2ZWxvcG1lbnRcIjtcbn1cbmZ1bmN0aW9uIHJlbW92ZUtleShrZXksIHsgW2tleV06IF8sIC4uLnJlc3QgfSkge1xuICByZXR1cm4gcmVzdDtcbn1cbmZ1bmN0aW9uIHBhcnNlUHJvcGVydGllcyhwcm9wZXJ0aWVzLCBvcHRpb25zKSB7XG4gIGlmICghcHJvcGVydGllcylcbiAgICByZXR1cm4gdm9pZCAwO1xuICBsZXQgcHJvcHMgPSBwcm9wZXJ0aWVzO1xuICBjb25zdCBlcnJvclByb3BlcnRpZXMgPSBbXTtcbiAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocHJvcGVydGllcykpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBpZiAob3B0aW9ucy5zdHJpcCkge1xuICAgICAgICBwcm9wcyA9IHJlbW92ZUtleShrZXksIHByb3BzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVycm9yUHJvcGVydGllcy5wdXNoKGtleSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChlcnJvclByb3BlcnRpZXMubGVuZ3RoID4gMCAmJiAhb3B0aW9ucy5zdHJpcCkge1xuICAgIHRocm93IEVycm9yKFxuICAgICAgYFRoZSBmb2xsb3dpbmcgcHJvcGVydGllcyBhcmUgbm90IHZhbGlkOiAke2Vycm9yUHJvcGVydGllcy5qb2luKFxuICAgICAgICBcIiwgXCJcbiAgICAgICl9LiBPbmx5IHN0cmluZ3MsIG51bWJlcnMsIGJvb2xlYW5zLCBhbmQgbnVsbCBhcmUgYWxsb3dlZC5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gcHJvcHM7XG59XG5cbi8vIHNyYy9nZW5lcmljLnRzXG5mdW5jdGlvbiBpbmplY3QocHJvcHMgPSB7XG4gIGRlYnVnOiB0cnVlXG59KSB7XG4gIHZhciBfYTtcbiAgaWYgKCFpc0Jyb3dzZXIoKSlcbiAgICByZXR1cm47XG4gIHNldE1vZGUocHJvcHMubW9kZSk7XG4gIGluaXRRdWV1ZSgpO1xuICBpZiAocHJvcHMuYmVmb3JlU2VuZCkge1xuICAgIChfYSA9IHdpbmRvdy52YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9hLmNhbGwod2luZG93LCBcImJlZm9yZVNlbmRcIiwgcHJvcHMuYmVmb3JlU2VuZCk7XG4gIH1cbiAgY29uc3Qgc3JjID0gaXNEZXZlbG9wbWVudCgpID8gXCJodHRwczovL3ZhLnZlcmNlbC1zY3JpcHRzLmNvbS92MS9zY3JpcHQuZGVidWcuanNcIiA6IFwiL192ZXJjZWwvaW5zaWdodHMvc2NyaXB0LmpzXCI7XG4gIGlmIChkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmMqPVwiJHtzcmN9XCJdYCkpXG4gICAgcmV0dXJuO1xuICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICBzY3JpcHQuc3JjID0gc3JjO1xuICBzY3JpcHQuZGVmZXIgPSB0cnVlO1xuICBzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS1zZGtuXCIsIG5hbWUpO1xuICBzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS1zZGt2XCIsIHZlcnNpb24pO1xuICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBpc0RldmVsb3BtZW50KCkgPyBcIlBsZWFzZSBjaGVjayBpZiBhbnkgYWQgYmxvY2tlcnMgYXJlIGVuYWJsZWQgYW5kIHRyeSBhZ2Fpbi5cIiA6IFwiQmUgc3VyZSB0byBlbmFibGUgV2ViIEFuYWx5dGljcyBmb3IgeW91ciBwcm9qZWN0IGFuZCBkZXBsb3kgYWdhaW4uIFNlZSBodHRwczovL3ZlcmNlbC5jb20vZG9jcy9hbmFseXRpY3MvcXVpY2tzdGFydCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cIjtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGBbVmVyY2VsIFdlYiBBbmFseXRpY3NdIEZhaWxlZCB0byBsb2FkIHNjcmlwdCBmcm9tICR7c3JjfS4gJHtlcnJvck1lc3NhZ2V9YFxuICAgICk7XG4gIH07XG4gIGlmIChpc0RldmVsb3BtZW50KCkgJiYgcHJvcHMuZGVidWcgPT09IGZhbHNlKSB7XG4gICAgc2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtZGVidWdcIiwgXCJmYWxzZVwiKTtcbiAgfVxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59XG5mdW5jdGlvbiB0cmFjayhuYW1lMiwgcHJvcGVydGllcykge1xuICB2YXIgX2EsIF9iO1xuICBpZiAoIWlzQnJvd3NlcigpKSB7XG4gICAgY29uc3QgbXNnID0gXCJbVmVyY2VsIFdlYiBBbmFseXRpY3NdIFBsZWFzZSBpbXBvcnQgYHRyYWNrYCBmcm9tIGBAdmVyY2VsL2FuYWx5dGljcy9zZXJ2ZXJgIHdoZW4gdXNpbmcgdGhpcyBmdW5jdGlvbiBpbiBhIHNlcnZlciBlbnZpcm9ubWVudFwiO1xuICAgIGlmIChpc1Byb2R1Y3Rpb24oKSkge1xuICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihtc2cpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCFwcm9wZXJ0aWVzKSB7XG4gICAgKF9hID0gd2luZG93LnZhKSA9PSBudWxsID8gdm9pZCAwIDogX2EuY2FsbCh3aW5kb3csIFwiZXZlbnRcIiwgeyBuYW1lOiBuYW1lMiB9KTtcbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBjb25zdCBwcm9wcyA9IHBhcnNlUHJvcGVydGllcyhwcm9wZXJ0aWVzLCB7XG4gICAgICBzdHJpcDogaXNQcm9kdWN0aW9uKClcbiAgICB9KTtcbiAgICAoX2IgPSB3aW5kb3cudmEpID09IG51bGwgPyB2b2lkIDAgOiBfYi5jYWxsKHdpbmRvdywgXCJldmVudFwiLCB7XG4gICAgICBuYW1lOiBuYW1lMixcbiAgICAgIGRhdGE6IHByb3BzXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIgaW5zdGFuY2VvZiBFcnJvciAmJiBpc0RldmVsb3BtZW50KCkpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gc3JjL3JlYWN0LnRzeFxuZnVuY3Rpb24gQW5hbHl0aWNzKHtcbiAgYmVmb3JlU2VuZCxcbiAgZGVidWcgPSB0cnVlLFxuICBtb2RlID0gXCJhdXRvXCJcbn0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbmplY3QoeyBiZWZvcmVTZW5kLCBkZWJ1ZywgbW9kZSB9KTtcbiAgfSwgW2JlZm9yZVNlbmQsIGRlYnVnLCBtb2RlXSk7XG4gIHJldHVybiBudWxsO1xufVxuZXhwb3J0IHtcbiAgQW5hbHl0aWNzLFxuICB0cmFja1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@vercel/analytics/dist/react/index.js\n");

/***/ })

};
;