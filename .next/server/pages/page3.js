module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/page3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/page3.js":
/*!************************!*\
  !*** ./pages/page3.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FullPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash.throttle */ \"lodash.throttle\");\n/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.debounce */ \"lodash.debounce\");\n/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/utils */ \"./src/utils.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/dynamic */ \"next/dynamic\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/kwonjunhyuk/Documents/projects/test-next/pages/page3.js\";\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"page3__Container\",\n  componentId: \"uvv84k-0\"\n})([\"width:100%;height:100vh;overflow:hidden;\"]);\nconst Page = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({\n  displayName: \"page3__Page\",\n  componentId: \"uvv84k-1\"\n})([\"width:100%;height:100vh;background-color:\", \";transform:translateY(-\", \"px);transition:transform 0.3s ease-in;display:flex;justify-content:center;align-items:center;font-size:30px;font-weight:bold;\"], props => props.color, props => props.index * props.itemHeight); // const DynamicComponentWithNoSSR = dynamic(() => Promise.resolve(FullPage), {ssr: false});\n// export default DynamicComponentWithNoSSR;\n\nfunction FullPage() {\n  const {\n    0: currentPageIndex,\n    1: setCurrentPageIndex\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(0);\n  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])();\n  const pageRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(0);\n  const timeRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(new Date().getSeconds);\n  const positionRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(0); // const setPageIndexWithThrottle = throttle((index) => {\n  //     setCurrentPageIndex(index)\n  // }, 1500);\n  // 마우스 휠 이벤트\n\n  const handleIndex = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(lodash_throttle__WEBPACK_IMPORTED_MODULE_3___default()(e => {\n    if (new Date().getSeconds() !== timeRef.current) {\n      if (e.deltaY < 0) {\n        console.log(\"pageup\");\n        pageUp();\n      }\n\n      if (e.deltaY > 0) {\n        console.log(\"pagedown\");\n        pageDown();\n      }\n    }\n\n    timeRef.current = new Date().getSeconds();\n  }, 500), [currentPageIndex]); // 모바일 드래그 이벤트\n\n  const handleTouchStart = e => {\n    const {\n      clientY\n    } = e.changedTouches[0];\n    positionRef.current = clientY;\n  };\n\n  const handleTouchEnd = e => {\n    const {\n      clientY\n    } = e.changedTouches[0];\n    console.log(clientY, positionRef.current);\n\n    if (clientY - positionRef.current > 50) {\n      pageUp();\n    }\n\n    if (positionRef.current - clientY > 50) {\n      pageDown();\n    }\n  };\n\n  const pageUp = () => setCurrentPageIndex(currentPageIndex === 0 ? 0 : currentPageIndex - 1);\n\n  const pageDown = () => setCurrentPageIndex(currentPageIndex === 3 ? 3 : currentPageIndex + 1);\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Container, {\n    ref: containerRef,\n    onWheel: handleIndex,\n    onTouchStart: handleTouchStart,\n    onTouchEnd: handleTouchEnd,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Page, {\n      ref: pageRef,\n      color: \"green\",\n      index: currentPageIndex,\n      itemHeight: pageRef.current.offsetHeight,\n      children: currentPageIndex\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Page, {\n      color: \"yellow\",\n      index: currentPageIndex,\n      itemHeight: pageRef.current.offsetHeight,\n      children: currentPageIndex\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Page, {\n      color: \"purple\",\n      index: currentPageIndex,\n      itemHeight: pageRef.current.offsetHeight,\n      children: currentPageIndex\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Page, {\n      color: \"blue\",\n      index: currentPageIndex,\n      itemHeight: pageRef.current.offsetHeight,\n      children: currentPageIndex\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlMy5qcz8yZTBiIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIlBhZ2UiLCJwcm9wcyIsImNvbG9yIiwiaW5kZXgiLCJpdGVtSGVpZ2h0IiwiRnVsbFBhZ2UiLCJjdXJyZW50UGFnZUluZGV4Iiwic2V0Q3VycmVudFBhZ2VJbmRleCIsInVzZVN0YXRlIiwiY29udGFpbmVyUmVmIiwidXNlUmVmIiwicGFnZVJlZiIsInRpbWVSZWYiLCJEYXRlIiwiZ2V0U2Vjb25kcyIsInBvc2l0aW9uUmVmIiwiaGFuZGxlSW5kZXgiLCJ1c2VDYWxsYmFjayIsInRocm90dGxlIiwiZSIsImN1cnJlbnQiLCJkZWx0YVkiLCJjb25zb2xlIiwibG9nIiwicGFnZVVwIiwicGFnZURvd24iLCJoYW5kbGVUb3VjaFN0YXJ0IiwiY2xpZW50WSIsImNoYW5nZWRUb3VjaGVzIiwiaGFuZGxlVG91Y2hFbmQiLCJvZmZzZXRIZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsU0FBUyxHQUFHQyx3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdEQUFmO0FBS0EsTUFBTUMsSUFBSSxHQUFHRix3REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDhNQUdjRSxLQUFLLElBQUlBLEtBQUssQ0FBQ0MsS0FIN0IsRUFJbUJELEtBQUssSUFBTUEsS0FBSyxDQUFDRSxLQUFQLEdBQWlCRixLQUFLLENBQUNHLFVBSnBELENBQVYsQyxDQWFBO0FBQ0E7O0FBRWUsU0FBU0MsUUFBVCxHQUFvQjtBQUMvQixRQUFNO0FBQUEsT0FBQ0MsZ0JBQUQ7QUFBQSxPQUFtQkM7QUFBbkIsTUFBMENDLHNEQUFRLENBQUMsQ0FBRCxDQUF4RDtBQUNBLFFBQU1DLFlBQVksR0FBR0Msb0RBQU0sRUFBM0I7QUFDQSxRQUFNQyxPQUFPLEdBQUdELG9EQUFNLENBQUMsQ0FBRCxDQUF0QjtBQUNBLFFBQU1FLE9BQU8sR0FBR0Ysb0RBQU0sQ0FBQyxJQUFJRyxJQUFKLEdBQVdDLFVBQVosQ0FBdEI7QUFDQSxRQUFNQyxXQUFXLEdBQUdMLG9EQUFNLENBQUMsQ0FBRCxDQUExQixDQUwrQixDQU0vQjtBQUNBO0FBQ0E7QUFFQTs7QUFDQSxRQUFNTSxXQUFXLEdBQUdDLHlEQUFXLENBQUNDLHNEQUFRLENBQUVDLENBQUQsSUFBSztBQUMxQyxRQUFJLElBQUlOLElBQUosR0FBV0MsVUFBWCxPQUE0QkYsT0FBTyxDQUFDUSxPQUF4QyxFQUFpRDtBQUM3QyxVQUFJRCxDQUFDLENBQUNFLE1BQUYsR0FBVyxDQUFmLEVBQWtCO0FBQ2RDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVo7QUFDQUMsY0FBTTtBQUNUOztBQUNELFVBQUlMLENBQUMsQ0FBQ0UsTUFBRixHQUFXLENBQWYsRUFBa0I7QUFDZEMsZUFBTyxDQUFDQyxHQUFSLENBQVksVUFBWjtBQUNBRSxnQkFBUTtBQUNYO0FBQ0o7O0FBQ0RiLFdBQU8sQ0FBQ1EsT0FBUixHQUFrQixJQUFJUCxJQUFKLEdBQVdDLFVBQVgsRUFBbEI7QUFDSCxHQVp1QyxFQVlyQyxHQVpxQyxDQUFULEVBWXRCLENBQUNSLGdCQUFELENBWnNCLENBQS9CLENBWCtCLENBeUIvQjs7QUFDQSxRQUFNb0IsZ0JBQWdCLEdBQUlQLENBQUQsSUFBTztBQUM1QixVQUFNO0FBQUNRO0FBQUQsUUFBWVIsQ0FBQyxDQUFDUyxjQUFGLENBQWlCLENBQWpCLENBQWxCO0FBQ0FiLGVBQVcsQ0FBQ0ssT0FBWixHQUFzQk8sT0FBdEI7QUFDSCxHQUhEOztBQUlBLFFBQU1FLGNBQWMsR0FBSVYsQ0FBRCxJQUFPO0FBQzFCLFVBQU07QUFBQ1E7QUFBRCxRQUFZUixDQUFDLENBQUNTLGNBQUYsQ0FBaUIsQ0FBakIsQ0FBbEI7QUFDQU4sV0FBTyxDQUFDQyxHQUFSLENBQVlJLE9BQVosRUFBcUJaLFdBQVcsQ0FBQ0ssT0FBakM7O0FBQ0EsUUFBR08sT0FBTyxHQUFHWixXQUFXLENBQUNLLE9BQXRCLEdBQWdDLEVBQW5DLEVBQXVDO0FBQ25DSSxZQUFNO0FBQ1Q7O0FBQ0QsUUFBR1QsV0FBVyxDQUFDSyxPQUFaLEdBQXNCTyxPQUF0QixHQUFnQyxFQUFuQyxFQUF1QztBQUNuQ0YsY0FBUTtBQUNYO0FBQ0osR0FURDs7QUFXQSxRQUFNRCxNQUFNLEdBQUcsTUFBTWpCLG1CQUFtQixDQUFDRCxnQkFBZ0IsS0FBSyxDQUFyQixHQUF5QixDQUF6QixHQUE2QkEsZ0JBQWdCLEdBQUcsQ0FBakQsQ0FBeEM7O0FBQ0EsUUFBTW1CLFFBQVEsR0FBRyxNQUFNbEIsbUJBQW1CLENBQUNELGdCQUFnQixLQUFLLENBQXJCLEdBQXlCLENBQXpCLEdBQTZCQSxnQkFBZ0IsR0FBRyxDQUFqRCxDQUExQzs7QUFFQSxzQkFDSSxxRUFBQyxTQUFEO0FBQVcsT0FBRyxFQUFFRyxZQUFoQjtBQUE4QixXQUFPLEVBQUVPLFdBQXZDO0FBQW9ELGdCQUFZLEVBQUVVLGdCQUFsRTtBQUFvRixjQUFVLEVBQUVHLGNBQWhHO0FBQUEsNEJBQ0kscUVBQUMsSUFBRDtBQUFNLFNBQUcsRUFBRWxCLE9BQVg7QUFBb0IsV0FBSyxFQUFDLE9BQTFCO0FBQWtDLFdBQUssRUFBRUwsZ0JBQXpDO0FBQTJELGdCQUFVLEVBQUVLLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQlUsWUFBdkY7QUFBQSxnQkFDS3hCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBSUkscUVBQUMsSUFBRDtBQUFNLFdBQUssRUFBQyxRQUFaO0FBQXFCLFdBQUssRUFBRUEsZ0JBQTVCO0FBQThDLGdCQUFVLEVBQUVLLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQlUsWUFBMUU7QUFBQSxnQkFDQ3hCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKLGVBT0kscUVBQUMsSUFBRDtBQUFNLFdBQUssRUFBQyxRQUFaO0FBQXFCLFdBQUssRUFBRUEsZ0JBQTVCO0FBQThDLGdCQUFVLEVBQUVLLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQlUsWUFBMUU7QUFBQSxnQkFDQ3hCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBVUkscUVBQUMsSUFBRDtBQUFNLFdBQUssRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRUEsZ0JBQTFCO0FBQTRDLGdCQUFVLEVBQUVLLE9BQU8sQ0FBQ1MsT0FBUixDQUFnQlUsWUFBeEU7QUFBQSxnQkFDQ3hCO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBZ0JIIiwiZmlsZSI6Ii4vcGFnZXMvcGFnZTMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHt1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdGhyb3R0bGUgZnJvbSAnbG9kYXNoLnRocm90dGxlJztcbmltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHtzY3JvbGxTdG9wfSBmcm9tICcuLi9zcmMvdXRpbHMnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuY29uc3QgUGFnZSA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+IHByb3BzLmNvbG9yfTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSR7cHJvcHMgPT4gKChwcm9wcy5pbmRleCkgKiAocHJvcHMuaXRlbUhlaWdodCkpfXB4KTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5gO1xuXG4vLyBjb25zdCBEeW5hbWljQ29tcG9uZW50V2l0aE5vU1NSID0gZHluYW1pYygoKSA9PiBQcm9taXNlLnJlc29sdmUoRnVsbFBhZ2UpLCB7c3NyOiBmYWxzZX0pO1xuLy8gZXhwb3J0IGRlZmF1bHQgRHluYW1pY0NvbXBvbmVudFdpdGhOb1NTUjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRnVsbFBhZ2UoKSB7XG4gICAgY29uc3QgW2N1cnJlbnRQYWdlSW5kZXgsIHNldEN1cnJlbnRQYWdlSW5kZXhdID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmKCk7XG4gICAgY29uc3QgcGFnZVJlZiA9IHVzZVJlZigwKTtcbiAgICBjb25zdCB0aW1lUmVmID0gdXNlUmVmKG5ldyBEYXRlKCkuZ2V0U2Vjb25kcyk7XG4gICAgY29uc3QgcG9zaXRpb25SZWYgPSB1c2VSZWYoMCk7XG4gICAgLy8gY29uc3Qgc2V0UGFnZUluZGV4V2l0aFRocm90dGxlID0gdGhyb3R0bGUoKGluZGV4KSA9PiB7XG4gICAgLy8gICAgIHNldEN1cnJlbnRQYWdlSW5kZXgoaW5kZXgpXG4gICAgLy8gfSwgMTUwMCk7XG5cbiAgICAvLyDrp4jsmrDsiqQg7ZygIOydtOuypO2KuFxuICAgIGNvbnN0IGhhbmRsZUluZGV4ID0gdXNlQ2FsbGJhY2sodGhyb3R0bGUoKGUpPT57XG4gICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFNlY29uZHMoKSAhPT0gdGltZVJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoZS5kZWx0YVkgPCAwKSB7IFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicGFnZXVwXCIpXG4gICAgICAgICAgICAgICAgcGFnZVVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS5kZWx0YVkgPiAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwYWdlZG93blwiKVxuICAgICAgICAgICAgICAgIHBhZ2VEb3duKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGltZVJlZi5jdXJyZW50ID0gbmV3IERhdGUoKS5nZXRTZWNvbmRzKCk7XG4gICAgfSwgNTAwKSwgW2N1cnJlbnRQYWdlSW5kZXhdKTtcblxuICAgIC8vIOuqqOuwlOydvCDrk5zrnpjqt7gg7J2067Kk7Yq4XG4gICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtjbGllbnRZfSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIHBvc2l0aW9uUmVmLmN1cnJlbnQgPSBjbGllbnRZO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVUb3VjaEVuZCA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHtjbGllbnRZfSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG4gICAgICAgIGNvbnNvbGUubG9nKGNsaWVudFksIHBvc2l0aW9uUmVmLmN1cnJlbnQpO1xuICAgICAgICBpZihjbGllbnRZIC0gcG9zaXRpb25SZWYuY3VycmVudCA+IDUwKSB7XG4gICAgICAgICAgICBwYWdlVXAoKTtcbiAgICAgICAgfVxuICAgICAgICBpZihwb3NpdGlvblJlZi5jdXJyZW50IC0gY2xpZW50WSA+IDUwKSB7XG4gICAgICAgICAgICBwYWdlRG93bigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZVVwID0gKCkgPT4gc2V0Q3VycmVudFBhZ2VJbmRleChjdXJyZW50UGFnZUluZGV4ID09PSAwID8gMCA6IGN1cnJlbnRQYWdlSW5kZXggLSAxKTsgXG4gICAgY29uc3QgcGFnZURvd24gPSAoKSA9PiBzZXRDdXJyZW50UGFnZUluZGV4KGN1cnJlbnRQYWdlSW5kZXggPT09IDMgPyAzIDogY3VycmVudFBhZ2VJbmRleCArIDEpO1xuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxDb250YWluZXIgcmVmPXtjb250YWluZXJSZWZ9IG9uV2hlZWw9e2hhbmRsZUluZGV4fSBvblRvdWNoU3RhcnQ9e2hhbmRsZVRvdWNoU3RhcnR9IG9uVG91Y2hFbmQ9e2hhbmRsZVRvdWNoRW5kfT5cbiAgICAgICAgICAgIDxQYWdlIHJlZj17cGFnZVJlZn0gY29sb3I9XCJncmVlblwiIGluZGV4PXtjdXJyZW50UGFnZUluZGV4fSBpdGVtSGVpZ2h0PXtwYWdlUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0fT5cbiAgICAgICAgICAgICAgICB7Y3VycmVudFBhZ2VJbmRleH1cbiAgICAgICAgICAgIDwvUGFnZT5cbiAgICAgICAgICAgIDxQYWdlIGNvbG9yPVwieWVsbG93XCIgaW5kZXg9e2N1cnJlbnRQYWdlSW5kZXh9IGl0ZW1IZWlnaHQ9e3BhZ2VSZWYuY3VycmVudC5vZmZzZXRIZWlnaHR9PlxuICAgICAgICAgICAge2N1cnJlbnRQYWdlSW5kZXh9XG4gICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgICAgICA8UGFnZSBjb2xvcj1cInB1cnBsZVwiIGluZGV4PXtjdXJyZW50UGFnZUluZGV4fSBpdGVtSGVpZ2h0PXtwYWdlUmVmLmN1cnJlbnQub2Zmc2V0SGVpZ2h0fT5cbiAgICAgICAgICAgIHtjdXJyZW50UGFnZUluZGV4fVxuICAgICAgICAgICAgPC9QYWdlPlxuICAgICAgICAgICAgPFBhZ2UgY29sb3I9XCJibHVlXCIgaW5kZXg9e2N1cnJlbnRQYWdlSW5kZXh9IGl0ZW1IZWlnaHQ9e3BhZ2VSZWYuY3VycmVudC5vZmZzZXRIZWlnaHR9PlxuICAgICAgICAgICAge2N1cnJlbnRQYWdlSW5kZXh9XG4gICAgICAgICAgICA8L1BhZ2U+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page3.js\n");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: add, scrollStop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"scrollStop\", function() { return scrollStop; });\nfunction add(a, b) {\n  console.log(\"called add\");\n  return a + b;\n}\nfunction scrollStop(callback, refresh = 40) {\n  // Make sure a valid callback was provided\n  if (!callback || typeof callback !== 'function') return; // Setup scrolling variable\n\n  let isScrolling; // Listen for scroll events\n\n  window.addEventListener('wheel', function (event) {\n    // Clear our timeout throughout the scroll\n    window.clearTimeout(isScrolling); // Set a timeout to run after scrolling ends\n\n    isScrolling = setTimeout(callback, refresh);\n  }, false);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanM/MDI1ZSJdLCJuYW1lcyI6WyJhZGQiLCJhIiwiYiIsImNvbnNvbGUiLCJsb2ciLCJzY3JvbGxTdG9wIiwiY2FsbGJhY2siLCJyZWZyZXNoIiwiaXNTY3JvbGxpbmciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0Il0sIm1hcHBpbmdzIjoiQUFFQTtBQUFBO0FBQUE7QUFBTyxTQUFTQSxHQUFULENBQWFDLENBQWIsRUFBZ0JDLENBQWhCLEVBQW1CO0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EsU0FBT0gsQ0FBQyxHQUFDQyxDQUFUO0FBQ0g7QUFHTSxTQUFTRyxVQUFULENBQXFCQyxRQUFyQixFQUErQkMsT0FBTyxHQUFHLEVBQXpDLEVBQTZDO0FBQ2hEO0FBQ0gsTUFBSSxDQUFDRCxRQUFELElBQWEsT0FBT0EsUUFBUCxLQUFvQixVQUFyQyxFQUFpRCxPQUZFLENBSW5EOztBQUNBLE1BQUlFLFdBQUosQ0FMbUQsQ0FPbkQ7O0FBQ0FDLFFBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVUMsS0FBVixFQUFpQjtBQUVqRDtBQUNBRixVQUFNLENBQUNHLFlBQVAsQ0FBb0JKLFdBQXBCLEVBSGlELENBS2pEOztBQUNBQSxlQUFXLEdBQUdLLFVBQVUsQ0FBQ1AsUUFBRCxFQUFXQyxPQUFYLENBQXhCO0FBRUEsR0FSRCxFQVFHLEtBUkg7QUFTQSIsImZpbGUiOiIuL3NyYy91dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZnVuY3Rpb24gYWRkKGEsIGIpIHtcbiAgICBjb25zb2xlLmxvZyhcImNhbGxlZCBhZGRcIik7XG4gICAgcmV0dXJuIGErYjtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsU3RvcCAoY2FsbGJhY2ssIHJlZnJlc2ggPSA0MCkge1xuICAgIC8vIE1ha2Ugc3VyZSBhIHZhbGlkIGNhbGxiYWNrIHdhcyBwcm92aWRlZFxuXHRpZiAoIWNhbGxiYWNrIHx8IHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuO1xuXG5cdC8vIFNldHVwIHNjcm9sbGluZyB2YXJpYWJsZVxuXHRsZXQgaXNTY3JvbGxpbmc7XG5cblx0Ly8gTGlzdGVuIGZvciBzY3JvbGwgZXZlbnRzXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGZ1bmN0aW9uIChldmVudCkge1xuXG5cdFx0Ly8gQ2xlYXIgb3VyIHRpbWVvdXQgdGhyb3VnaG91dCB0aGUgc2Nyb2xsXG5cdFx0d2luZG93LmNsZWFyVGltZW91dChpc1Njcm9sbGluZyk7XG5cblx0XHQvLyBTZXQgYSB0aW1lb3V0IHRvIHJ1biBhZnRlciBzY3JvbGxpbmcgZW5kc1xuXHRcdGlzU2Nyb2xsaW5nID0gc2V0VGltZW91dChjYWxsYmFjaywgcmVmcmVzaCk7XG5cblx0fSwgZmFsc2UpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils.js\n");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.debounce\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2guZGVib3VuY2VcIj81YzdmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxvZGFzaC5kZWJvdW5jZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC5kZWJvdW5jZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash.debounce\n");

/***/ }),

/***/ "lodash.throttle":
/*!**********************************!*\
  !*** external "lodash.throttle" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash.throttle\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2gudGhyb3R0bGVcIj9iOTJmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImxvZGFzaC50aHJvdHRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvZGFzaC50aHJvdHRsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///lodash.throttle\n");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/dynamic\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIj82ZDNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvZHluYW1pYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/dynamic\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });