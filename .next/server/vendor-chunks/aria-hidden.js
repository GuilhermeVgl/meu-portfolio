"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/aria-hidden";
exports.ids = ["vendor-chunks/aria-hidden"];
exports.modules = {

/***/ "(ssr)/./node_modules/aria-hidden/dist/es5/index.js":
/*!****************************************************!*\
  !*** ./node_modules/aria-hidden/dist/es5/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.suppressOthers = exports.supportsInert = exports.inertOthers = exports.hideOthers = void 0;\nvar getDefaultParent = function (originalTarget) {\n    if (typeof document === 'undefined') {\n        return null;\n    }\n    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;\n    return sampleTarget.ownerDocument.body;\n};\nvar counterMap = new WeakMap();\nvar uncontrolledNodes = new WeakMap();\nvar markerMap = {};\nvar lockCount = 0;\nvar unwrapHost = function (node) {\n    return node && (node.host || unwrapHost(node.parentNode));\n};\nvar correctTargets = function (parent, targets) {\n    return targets\n        .map(function (target) {\n        if (parent.contains(target)) {\n            return target;\n        }\n        var correctedTarget = unwrapHost(target);\n        if (correctedTarget && parent.contains(correctedTarget)) {\n            return correctedTarget;\n        }\n        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');\n        return null;\n    })\n        .filter(function (x) { return Boolean(x); });\n};\n/**\n * Marks everything except given node(or nodes) as aria-hidden\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @param {String} [controlAttribute] - html Attribute to control\n * @return {Undo} undo command\n */\nvar applyAttributeToOthers = function (originalTarget, parentNode, markerName, controlAttribute) {\n    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [originalTarget]);\n    if (!markerMap[markerName]) {\n        markerMap[markerName] = new WeakMap();\n    }\n    var markerCounter = markerMap[markerName];\n    var hiddenNodes = [];\n    var elementsToKeep = new Set();\n    var elementsToStop = new Set(targets);\n    var keep = function (el) {\n        if (!el || elementsToKeep.has(el)) {\n            return;\n        }\n        elementsToKeep.add(el);\n        keep(el.parentNode);\n    };\n    targets.forEach(keep);\n    var deep = function (parent) {\n        if (!parent || elementsToStop.has(parent)) {\n            return;\n        }\n        Array.prototype.forEach.call(parent.children, function (node) {\n            if (elementsToKeep.has(node)) {\n                deep(node);\n            }\n            else {\n                var attr = node.getAttribute(controlAttribute);\n                var alreadyHidden = attr !== null && attr !== 'false';\n                var counterValue = (counterMap.get(node) || 0) + 1;\n                var markerValue = (markerCounter.get(node) || 0) + 1;\n                counterMap.set(node, counterValue);\n                markerCounter.set(node, markerValue);\n                hiddenNodes.push(node);\n                if (counterValue === 1 && alreadyHidden) {\n                    uncontrolledNodes.set(node, true);\n                }\n                if (markerValue === 1) {\n                    node.setAttribute(markerName, 'true');\n                }\n                if (!alreadyHidden) {\n                    node.setAttribute(controlAttribute, 'true');\n                }\n            }\n        });\n    };\n    deep(parentNode);\n    elementsToKeep.clear();\n    lockCount++;\n    return function () {\n        hiddenNodes.forEach(function (node) {\n            var counterValue = counterMap.get(node) - 1;\n            var markerValue = markerCounter.get(node) - 1;\n            counterMap.set(node, counterValue);\n            markerCounter.set(node, markerValue);\n            if (!counterValue) {\n                if (!uncontrolledNodes.has(node)) {\n                    node.removeAttribute(controlAttribute);\n                }\n                uncontrolledNodes.delete(node);\n            }\n            if (!markerValue) {\n                node.removeAttribute(markerName);\n            }\n        });\n        lockCount--;\n        if (!lockCount) {\n            // clear\n            counterMap = new WeakMap();\n            counterMap = new WeakMap();\n            uncontrolledNodes = new WeakMap();\n            markerMap = {};\n        }\n    };\n};\n/**\n * Marks everything except given node(or nodes) as aria-hidden\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */\nvar hideOthers = function (originalTarget, parentNode, markerName) {\n    if (markerName === void 0) { markerName = 'data-aria-hidden'; }\n    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [originalTarget]);\n    var activeParentNode = parentNode || getDefaultParent(originalTarget);\n    if (!activeParentNode) {\n        return function () { return null; };\n    }\n    // we should not hide ariaLive elements - https://github.com/theKashey/aria-hidden/issues/10\n    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live]')));\n    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');\n};\nexports.hideOthers = hideOthers;\n/**\n * Marks everything except given node(or nodes) as inert\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */\nvar inertOthers = function (originalTarget, parentNode, markerName) {\n    if (markerName === void 0) { markerName = 'data-inert-ed'; }\n    var activeParentNode = parentNode || getDefaultParent(originalTarget);\n    if (!activeParentNode) {\n        return function () { return null; };\n    }\n    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');\n};\nexports.inertOthers = inertOthers;\n/**\n * @returns if current browser supports inert\n */\nvar supportsInert = function () {\n    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');\n};\nexports.supportsInert = supportsInert;\n/**\n * Automatic function to \"suppress\" DOM elements - _hide_ or _inert_ in the best possible way\n * @param {Element | Element[]} originalTarget - elements to keep on the page\n * @param [parentNode] - top element, defaults to document.body\n * @param {String} [markerName] - a special attribute to mark every node\n * @return {Undo} undo command\n */\nvar suppressOthers = function (originalTarget, parentNode, markerName) {\n    if (markerName === void 0) { markerName = 'data-suppressed'; }\n    return ((0, exports.supportsInert)() ? exports.inertOthers : exports.hideOthers)(originalTarget, parentNode, markerName);\n};\nexports.suppressOthers = suppressOthers;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvYXJpYS1oaWRkZW4vZGlzdC9lczUvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsc0JBQXNCLEdBQUcscUJBQXFCLEdBQUcsbUJBQW1CLEdBQUcsa0JBQWtCO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsK0JBQStCLG9CQUFvQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFCQUFxQjtBQUNoQztBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLFdBQVcscUJBQXFCO0FBQ2hDO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsV0FBVyxxQkFBcUI7QUFDaEM7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLHNCQUFzQiIsInNvdXJjZXMiOlsid2VicGFjazovL2d1aWxoZXJtZWZyZWl0YXMuY29tLy4vbm9kZV9tb2R1bGVzL2FyaWEtaGlkZGVuL2Rpc3QvZXM1L2luZGV4LmpzP2VlNDUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN1cHByZXNzT3RoZXJzID0gZXhwb3J0cy5zdXBwb3J0c0luZXJ0ID0gZXhwb3J0cy5pbmVydE90aGVycyA9IGV4cG9ydHMuaGlkZU90aGVycyA9IHZvaWQgMDtcbnZhciBnZXREZWZhdWx0UGFyZW50ID0gZnVuY3Rpb24gKG9yaWdpbmFsVGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHZhciBzYW1wbGVUYXJnZXQgPSBBcnJheS5pc0FycmF5KG9yaWdpbmFsVGFyZ2V0KSA/IG9yaWdpbmFsVGFyZ2V0WzBdIDogb3JpZ2luYWxUYXJnZXQ7XG4gICAgcmV0dXJuIHNhbXBsZVRhcmdldC5vd25lckRvY3VtZW50LmJvZHk7XG59O1xudmFyIGNvdW50ZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xudmFyIHVuY29udHJvbGxlZE5vZGVzID0gbmV3IFdlYWtNYXAoKTtcbnZhciBtYXJrZXJNYXAgPSB7fTtcbnZhciBsb2NrQ291bnQgPSAwO1xudmFyIHVud3JhcEhvc3QgPSBmdW5jdGlvbiAobm9kZSkge1xuICAgIHJldHVybiBub2RlICYmIChub2RlLmhvc3QgfHwgdW53cmFwSG9zdChub2RlLnBhcmVudE5vZGUpKTtcbn07XG52YXIgY29ycmVjdFRhcmdldHMgPSBmdW5jdGlvbiAocGFyZW50LCB0YXJnZXRzKSB7XG4gICAgcmV0dXJuIHRhcmdldHNcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGlmIChwYXJlbnQuY29udGFpbnModGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29ycmVjdGVkVGFyZ2V0ID0gdW53cmFwSG9zdCh0YXJnZXQpO1xuICAgICAgICBpZiAoY29ycmVjdGVkVGFyZ2V0ICYmIHBhcmVudC5jb250YWlucyhjb3JyZWN0ZWRUYXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29ycmVjdGVkVGFyZ2V0O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2FyaWEtaGlkZGVuJywgdGFyZ2V0LCAnaW4gbm90IGNvbnRhaW5lZCBpbnNpZGUnLCBwYXJlbnQsICcuIERvaW5nIG5vdGhpbmcnKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSlcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4gQm9vbGVhbih4KTsgfSk7XG59O1xuLyoqXG4gKiBNYXJrcyBldmVyeXRoaW5nIGV4Y2VwdCBnaXZlbiBub2RlKG9yIG5vZGVzKSBhcyBhcmlhLWhpZGRlblxuICogQHBhcmFtIHtFbGVtZW50IHwgRWxlbWVudFtdfSBvcmlnaW5hbFRhcmdldCAtIGVsZW1lbnRzIHRvIGtlZXAgb24gdGhlIHBhZ2VcbiAqIEBwYXJhbSBbcGFyZW50Tm9kZV0gLSB0b3AgZWxlbWVudCwgZGVmYXVsdHMgdG8gZG9jdW1lbnQuYm9keVxuICogQHBhcmFtIHtTdHJpbmd9IFttYXJrZXJOYW1lXSAtIGEgc3BlY2lhbCBhdHRyaWJ1dGUgdG8gbWFyayBldmVyeSBub2RlXG4gKiBAcGFyYW0ge1N0cmluZ30gW2NvbnRyb2xBdHRyaWJ1dGVdIC0gaHRtbCBBdHRyaWJ1dGUgdG8gY29udHJvbFxuICogQHJldHVybiB7VW5kb30gdW5kbyBjb21tYW5kXG4gKi9cbnZhciBhcHBseUF0dHJpYnV0ZVRvT3RoZXJzID0gZnVuY3Rpb24gKG9yaWdpbmFsVGFyZ2V0LCBwYXJlbnROb2RlLCBtYXJrZXJOYW1lLCBjb250cm9sQXR0cmlidXRlKSB7XG4gICAgdmFyIHRhcmdldHMgPSBjb3JyZWN0VGFyZ2V0cyhwYXJlbnROb2RlLCBBcnJheS5pc0FycmF5KG9yaWdpbmFsVGFyZ2V0KSA/IG9yaWdpbmFsVGFyZ2V0IDogW29yaWdpbmFsVGFyZ2V0XSk7XG4gICAgaWYgKCFtYXJrZXJNYXBbbWFya2VyTmFtZV0pIHtcbiAgICAgICAgbWFya2VyTWFwW21hcmtlck5hbWVdID0gbmV3IFdlYWtNYXAoKTtcbiAgICB9XG4gICAgdmFyIG1hcmtlckNvdW50ZXIgPSBtYXJrZXJNYXBbbWFya2VyTmFtZV07XG4gICAgdmFyIGhpZGRlbk5vZGVzID0gW107XG4gICAgdmFyIGVsZW1lbnRzVG9LZWVwID0gbmV3IFNldCgpO1xuICAgIHZhciBlbGVtZW50c1RvU3RvcCA9IG5ldyBTZXQodGFyZ2V0cyk7XG4gICAgdmFyIGtlZXAgPSBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgaWYgKCFlbCB8fCBlbGVtZW50c1RvS2VlcC5oYXMoZWwpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudHNUb0tlZXAuYWRkKGVsKTtcbiAgICAgICAga2VlcChlbC5wYXJlbnROb2RlKTtcbiAgICB9O1xuICAgIHRhcmdldHMuZm9yRWFjaChrZWVwKTtcbiAgICB2YXIgZGVlcCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKCFwYXJlbnQgfHwgZWxlbWVudHNUb1N0b3AuaGFzKHBhcmVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHBhcmVudC5jaGlsZHJlbiwgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgIGlmIChlbGVtZW50c1RvS2VlcC5oYXMobm9kZSkpIHtcbiAgICAgICAgICAgICAgICBkZWVwKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHIgPSBub2RlLmdldEF0dHJpYnV0ZShjb250cm9sQXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB2YXIgYWxyZWFkeUhpZGRlbiA9IGF0dHIgIT09IG51bGwgJiYgYXR0ciAhPT0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICB2YXIgY291bnRlclZhbHVlID0gKGNvdW50ZXJNYXAuZ2V0KG5vZGUpIHx8IDApICsgMTtcbiAgICAgICAgICAgICAgICB2YXIgbWFya2VyVmFsdWUgPSAobWFya2VyQ291bnRlci5nZXQobm9kZSkgfHwgMCkgKyAxO1xuICAgICAgICAgICAgICAgIGNvdW50ZXJNYXAuc2V0KG5vZGUsIGNvdW50ZXJWYWx1ZSk7XG4gICAgICAgICAgICAgICAgbWFya2VyQ291bnRlci5zZXQobm9kZSwgbWFya2VyVmFsdWUpO1xuICAgICAgICAgICAgICAgIGhpZGRlbk5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJWYWx1ZSA9PT0gMSAmJiBhbHJlYWR5SGlkZGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHVuY29udHJvbGxlZE5vZGVzLnNldChub2RlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1hcmtlclZhbHVlID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0QXR0cmlidXRlKG1hcmtlck5hbWUsICd0cnVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUhpZGRlbikge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShjb250cm9sQXR0cmlidXRlLCAndHJ1ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBkZWVwKHBhcmVudE5vZGUpO1xuICAgIGVsZW1lbnRzVG9LZWVwLmNsZWFyKCk7XG4gICAgbG9ja0NvdW50Kys7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaGlkZGVuTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgdmFyIGNvdW50ZXJWYWx1ZSA9IGNvdW50ZXJNYXAuZ2V0KG5vZGUpIC0gMTtcbiAgICAgICAgICAgIHZhciBtYXJrZXJWYWx1ZSA9IG1hcmtlckNvdW50ZXIuZ2V0KG5vZGUpIC0gMTtcbiAgICAgICAgICAgIGNvdW50ZXJNYXAuc2V0KG5vZGUsIGNvdW50ZXJWYWx1ZSk7XG4gICAgICAgICAgICBtYXJrZXJDb3VudGVyLnNldChub2RlLCBtYXJrZXJWYWx1ZSk7XG4gICAgICAgICAgICBpZiAoIWNvdW50ZXJWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmICghdW5jb250cm9sbGVkTm9kZXMuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGNvbnRyb2xBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bmNvbnRyb2xsZWROb2Rlcy5kZWxldGUobm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW1hcmtlclZhbHVlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5yZW1vdmVBdHRyaWJ1dGUobWFya2VyTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBsb2NrQ291bnQtLTtcbiAgICAgICAgaWYgKCFsb2NrQ291bnQpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyXG4gICAgICAgICAgICBjb3VudGVyTWFwID0gbmV3IFdlYWtNYXAoKTtcbiAgICAgICAgICAgIGNvdW50ZXJNYXAgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICAgICAgdW5jb250cm9sbGVkTm9kZXMgPSBuZXcgV2Vha01hcCgpO1xuICAgICAgICAgICAgbWFya2VyTWFwID0ge307XG4gICAgICAgIH1cbiAgICB9O1xufTtcbi8qKlxuICogTWFya3MgZXZlcnl0aGluZyBleGNlcHQgZ2l2ZW4gbm9kZShvciBub2RlcykgYXMgYXJpYS1oaWRkZW5cbiAqIEBwYXJhbSB7RWxlbWVudCB8IEVsZW1lbnRbXX0gb3JpZ2luYWxUYXJnZXQgLSBlbGVtZW50cyB0byBrZWVwIG9uIHRoZSBwYWdlXG4gKiBAcGFyYW0gW3BhcmVudE5vZGVdIC0gdG9wIGVsZW1lbnQsIGRlZmF1bHRzIHRvIGRvY3VtZW50LmJvZHlcbiAqIEBwYXJhbSB7U3RyaW5nfSBbbWFya2VyTmFtZV0gLSBhIHNwZWNpYWwgYXR0cmlidXRlIHRvIG1hcmsgZXZlcnkgbm9kZVxuICogQHJldHVybiB7VW5kb30gdW5kbyBjb21tYW5kXG4gKi9cbnZhciBoaWRlT3RoZXJzID0gZnVuY3Rpb24gKG9yaWdpbmFsVGFyZ2V0LCBwYXJlbnROb2RlLCBtYXJrZXJOYW1lKSB7XG4gICAgaWYgKG1hcmtlck5hbWUgPT09IHZvaWQgMCkgeyBtYXJrZXJOYW1lID0gJ2RhdGEtYXJpYS1oaWRkZW4nOyB9XG4gICAgdmFyIHRhcmdldHMgPSBBcnJheS5mcm9tKEFycmF5LmlzQXJyYXkob3JpZ2luYWxUYXJnZXQpID8gb3JpZ2luYWxUYXJnZXQgOiBbb3JpZ2luYWxUYXJnZXRdKTtcbiAgICB2YXIgYWN0aXZlUGFyZW50Tm9kZSA9IHBhcmVudE5vZGUgfHwgZ2V0RGVmYXVsdFBhcmVudChvcmlnaW5hbFRhcmdldCk7XG4gICAgaWYgKCFhY3RpdmVQYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9O1xuICAgIH1cbiAgICAvLyB3ZSBzaG91bGQgbm90IGhpZGUgYXJpYUxpdmUgZWxlbWVudHMgLSBodHRwczovL2dpdGh1Yi5jb20vdGhlS2FzaGV5L2FyaWEtaGlkZGVuL2lzc3Vlcy8xMFxuICAgIHRhcmdldHMucHVzaC5hcHBseSh0YXJnZXRzLCBBcnJheS5mcm9tKGFjdGl2ZVBhcmVudE5vZGUucXVlcnlTZWxlY3RvckFsbCgnW2FyaWEtbGl2ZV0nKSkpO1xuICAgIHJldHVybiBhcHBseUF0dHJpYnV0ZVRvT3RoZXJzKHRhcmdldHMsIGFjdGl2ZVBhcmVudE5vZGUsIG1hcmtlck5hbWUsICdhcmlhLWhpZGRlbicpO1xufTtcbmV4cG9ydHMuaGlkZU90aGVycyA9IGhpZGVPdGhlcnM7XG4vKipcbiAqIE1hcmtzIGV2ZXJ5dGhpbmcgZXhjZXB0IGdpdmVuIG5vZGUob3Igbm9kZXMpIGFzIGluZXJ0XG4gKiBAcGFyYW0ge0VsZW1lbnQgfCBFbGVtZW50W119IG9yaWdpbmFsVGFyZ2V0IC0gZWxlbWVudHMgdG8ga2VlcCBvbiB0aGUgcGFnZVxuICogQHBhcmFtIFtwYXJlbnROb2RlXSAtIHRvcCBlbGVtZW50LCBkZWZhdWx0cyB0byBkb2N1bWVudC5ib2R5XG4gKiBAcGFyYW0ge1N0cmluZ30gW21hcmtlck5hbWVdIC0gYSBzcGVjaWFsIGF0dHJpYnV0ZSB0byBtYXJrIGV2ZXJ5IG5vZGVcbiAqIEByZXR1cm4ge1VuZG99IHVuZG8gY29tbWFuZFxuICovXG52YXIgaW5lcnRPdGhlcnMgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpIHtcbiAgICBpZiAobWFya2VyTmFtZSA9PT0gdm9pZCAwKSB7IG1hcmtlck5hbWUgPSAnZGF0YS1pbmVydC1lZCc7IH1cbiAgICB2YXIgYWN0aXZlUGFyZW50Tm9kZSA9IHBhcmVudE5vZGUgfHwgZ2V0RGVmYXVsdFBhcmVudChvcmlnaW5hbFRhcmdldCk7XG4gICAgaWYgKCFhY3RpdmVQYXJlbnROb2RlKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7IHJldHVybiBudWxsOyB9O1xuICAgIH1cbiAgICByZXR1cm4gYXBwbHlBdHRyaWJ1dGVUb090aGVycyhvcmlnaW5hbFRhcmdldCwgYWN0aXZlUGFyZW50Tm9kZSwgbWFya2VyTmFtZSwgJ2luZXJ0Jyk7XG59O1xuZXhwb3J0cy5pbmVydE90aGVycyA9IGluZXJ0T3RoZXJzO1xuLyoqXG4gKiBAcmV0dXJucyBpZiBjdXJyZW50IGJyb3dzZXIgc3VwcG9ydHMgaW5lcnRcbiAqL1xudmFyIHN1cHBvcnRzSW5lcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgSFRNTEVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdpbmVydCcpO1xufTtcbmV4cG9ydHMuc3VwcG9ydHNJbmVydCA9IHN1cHBvcnRzSW5lcnQ7XG4vKipcbiAqIEF1dG9tYXRpYyBmdW5jdGlvbiB0byBcInN1cHByZXNzXCIgRE9NIGVsZW1lbnRzIC0gX2hpZGVfIG9yIF9pbmVydF8gaW4gdGhlIGJlc3QgcG9zc2libGUgd2F5XG4gKiBAcGFyYW0ge0VsZW1lbnQgfCBFbGVtZW50W119IG9yaWdpbmFsVGFyZ2V0IC0gZWxlbWVudHMgdG8ga2VlcCBvbiB0aGUgcGFnZVxuICogQHBhcmFtIFtwYXJlbnROb2RlXSAtIHRvcCBlbGVtZW50LCBkZWZhdWx0cyB0byBkb2N1bWVudC5ib2R5XG4gKiBAcGFyYW0ge1N0cmluZ30gW21hcmtlck5hbWVdIC0gYSBzcGVjaWFsIGF0dHJpYnV0ZSB0byBtYXJrIGV2ZXJ5IG5vZGVcbiAqIEByZXR1cm4ge1VuZG99IHVuZG8gY29tbWFuZFxuICovXG52YXIgc3VwcHJlc3NPdGhlcnMgPSBmdW5jdGlvbiAob3JpZ2luYWxUYXJnZXQsIHBhcmVudE5vZGUsIG1hcmtlck5hbWUpIHtcbiAgICBpZiAobWFya2VyTmFtZSA9PT0gdm9pZCAwKSB7IG1hcmtlck5hbWUgPSAnZGF0YS1zdXBwcmVzc2VkJzsgfVxuICAgIHJldHVybiAoKDAsIGV4cG9ydHMuc3VwcG9ydHNJbmVydCkoKSA/IGV4cG9ydHMuaW5lcnRPdGhlcnMgOiBleHBvcnRzLmhpZGVPdGhlcnMpKG9yaWdpbmFsVGFyZ2V0LCBwYXJlbnROb2RlLCBtYXJrZXJOYW1lKTtcbn07XG5leHBvcnRzLnN1cHByZXNzT3RoZXJzID0gc3VwcHJlc3NPdGhlcnM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/aria-hidden/dist/es5/index.js\n");

/***/ })

};
;