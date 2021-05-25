webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/canvas.js":
/*!******************************!*\
  !*** ./components/canvas.js ***!
  \******************************/
/*! exports provided: useKeyPressed, Canvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useKeyPressed\", function() { return useKeyPressed; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Canvas\", function() { return Canvas; });\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n/* harmony import */ var _Users_doctorzen_Projects_Summer2021_COMP202_teaching_python_comp202_lectures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_sketch_canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-sketch-canvas */ \"./node_modules/react-sketch-canvas/dist/react-sketch-canvas.m.js\");\n\n\n\nvar _jsxFileName = \"/Users/doctorzen/Projects/Summer2021/COMP202/teaching_python/comp202_lectures/components/canvas.js\",\n    _s = $RefreshSig$(),\n    _this = undefined,\n    _s2 = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_Users_doctorzen_Projects_Summer2021_COMP202_teaching_python_comp202_lectures_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nfunction useKeyPressed(keyLookup) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      keyPressed = _useState[0],\n      setKeyPressed = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {}, [keyLookup]);\n  return keyPressed;\n}\n\n_s(useKeyPressed, \"vmDSD7h68k9Z7B48/eX82jyokKU=\");\n\nvar styles = {\n  zIndex: -1000000,\n  position: \"absolute\",\n  top: 0,\n  left: 0,\n  width: \"100%\",\n  height: \"100%\",\n  border: \"none\"\n};\nvar Canvas = function Canvas() {\n  _s2();\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      show = _useState2[0],\n      setShow = _useState2[1]; //   const [eraseMode, setEraseMode] = useState(false);\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(\"red\"),\n      color = _useState3[0],\n      setColor = _useState3[1];\n\n  var canvasRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  console.log(\"Entering canvas\");\n  var downHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (ev) {\n    if (ev.ctrlKey && ev.key == \"z\") {\n      setShow(true);\n      canvasRef.current.eraseMode(true);\n    } else if (ev.ctrlKey && ev.key == \"x\") {\n      canvasRef.current.clearCanvas();\n    } else if (ev.ctrlKey && ev.key == \"1\") {\n      setColor(\"red\");\n    } else if (ev.ctrlKey && ev.key == \"2\") {\n      setColor(\"green\");\n    } else if (ev.ctrlKey && ev.key == \"3\") {\n      setColor(\"blue\");\n    } else if (ev.ctrlKey && ev.key == \"4\") {\n      setColor(\"orange\");\n    } else if (ev.key == \"Alt\") {\n      setShow(true); //   setEraseMode((prevEraseMode) => !prevEraseMode);\n    }\n  }, []);\n  var upHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (ev) {\n    if (ev.key == \"Alt\") {\n      setShow(false); //   canvasRef.current.clearCanvas();\n    }\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    canvasRef.current.eraseMode(false);\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    console.log(\"adding listerners\");\n    window.addEventListener(\"keydown\", downHandler);\n    window.addEventListener(\"keyup\", upHandler);\n    return function () {\n      console.log(\"removing listerners\");\n      window.removeEventListener(\"keydown\", downHandler);\n      window.removeEventListener(\"keyup\", upHandler);\n    };\n  }, []);\n  return Object(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_sketch_canvas__WEBPACK_IMPORTED_MODULE_3__[\"ReactSketchCanvas\"], {\n    ref: canvasRef,\n    canvasColor: \"#f0e9df\",\n    background: \"transparent\",\n    style: _objectSpread(_objectSpread({}, styles), {}, {\n      zIndex: show ? 1000000 : -1000000\n    }),\n    width: \"100%\",\n    height: \"100%\",\n    strokeWidth: 1.5,\n    strokeColor: color\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 75,\n    columnNumber: 5\n  }, _this);\n};\n\n_s2(Canvas, \"mnl6j/tBrIfQRgXNv8npp2PKVo4=\");\n\n_c = Canvas;\n\nvar _c;\n\n$RefreshReg$(_c, \"Canvas\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYW52YXMuanM/ZWRhYyJdLCJuYW1lcyI6WyJ1c2VLZXlQcmVzc2VkIiwia2V5TG9va3VwIiwidXNlU3RhdGUiLCJrZXlQcmVzc2VkIiwic2V0S2V5UHJlc3NlZCIsInVzZUVmZmVjdCIsInN0eWxlcyIsInpJbmRleCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiQ2FudmFzIiwic2hvdyIsInNldFNob3ciLCJjb2xvciIsInNldENvbG9yIiwiY2FudmFzUmVmIiwidXNlUmVmIiwiY29uc29sZSIsImxvZyIsImRvd25IYW5kbGVyIiwidXNlQ2FsbGJhY2siLCJldiIsImN0cmxLZXkiLCJrZXkiLCJjdXJyZW50IiwiZXJhc2VNb2RlIiwiY2xlYXJDYW52YXMiLCJ1cEhhbmRsZXIiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRU8sU0FBU0EsYUFBVCxDQUF1QkMsU0FBdkIsRUFBa0M7QUFBQTs7QUFBQSxrQkFDSEMsc0RBQVEsQ0FBQyxLQUFELENBREw7QUFBQSxNQUNoQ0MsVUFEZ0M7QUFBQSxNQUNwQkMsYUFEb0I7O0FBR3ZDQyx5REFBUyxDQUFDLFlBQU0sQ0FBRSxDQUFULEVBQVcsQ0FBQ0osU0FBRCxDQUFYLENBQVQ7QUFFQSxTQUFPRSxVQUFQO0FBQ0Q7O0dBTmVILGE7O0FBUWhCLElBQU1NLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUUsQ0FBQyxPQURJO0FBRWJDLFVBQVEsRUFBRSxVQUZHO0FBR2JDLEtBQUcsRUFBRSxDQUhRO0FBSWJDLE1BQUksRUFBRSxDQUpPO0FBS2JDLE9BQUssRUFBRSxNQUxNO0FBTWJDLFFBQU0sRUFBRSxNQU5LO0FBT2JDLFFBQU0sRUFBRTtBQVBLLENBQWY7QUFVTyxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsbUJBQ0ZaLHNEQUFRLENBQUMsS0FBRCxDQUROO0FBQUEsTUFDbkJhLElBRG1CO0FBQUEsTUFDYkMsT0FEYSxrQkFFNUI7OztBQUY0QixtQkFHQWQsc0RBQVEsQ0FBQyxLQUFELENBSFI7QUFBQSxNQUduQmUsS0FIbUI7QUFBQSxNQUdaQyxRQUhZOztBQUkxQixNQUFNQyxTQUFTLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF4QjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUVBLE1BQU1DLFdBQVcsR0FBR0MseURBQVcsQ0FBQyxVQUFDQyxFQUFELEVBQVE7QUFDdEMsUUFBSUEsRUFBRSxDQUFDQyxPQUFILElBQWNELEVBQUUsQ0FBQ0UsR0FBSCxJQUFVLEdBQTVCLEVBQWlDO0FBQzdCWCxhQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FHLGVBQVMsQ0FBQ1MsT0FBVixDQUFrQkMsU0FBbEIsQ0FBNEIsSUFBNUI7QUFDSCxLQUhELE1BR08sSUFBSUosRUFBRSxDQUFDQyxPQUFILElBQWNELEVBQUUsQ0FBQ0UsR0FBSCxJQUFVLEdBQTVCLEVBQWlDO0FBQ3RDUixlQUFTLENBQUNTLE9BQVYsQ0FBa0JFLFdBQWxCO0FBQ0QsS0FGTSxNQUVBLElBQUlMLEVBQUUsQ0FBQ0MsT0FBSCxJQUFjRCxFQUFFLENBQUNFLEdBQUgsSUFBVSxHQUE1QixFQUFpQztBQUN0Q1QsY0FBUSxDQUFDLEtBQUQsQ0FBUjtBQUNELEtBRk0sTUFFQSxJQUFJTyxFQUFFLENBQUNDLE9BQUgsSUFBY0QsRUFBRSxDQUFDRSxHQUFILElBQVUsR0FBNUIsRUFBaUM7QUFDdENULGNBQVEsQ0FBQyxPQUFELENBQVI7QUFDRCxLQUZNLE1BRUEsSUFBSU8sRUFBRSxDQUFDQyxPQUFILElBQWNELEVBQUUsQ0FBQ0UsR0FBSCxJQUFVLEdBQTVCLEVBQWlDO0FBQ3RDVCxjQUFRLENBQUMsTUFBRCxDQUFSO0FBQ0QsS0FGTSxNQUVBLElBQUlPLEVBQUUsQ0FBQ0MsT0FBSCxJQUFjRCxFQUFFLENBQUNFLEdBQUgsSUFBVSxHQUE1QixFQUFpQztBQUN0Q1QsY0FBUSxDQUFDLFFBQUQsQ0FBUjtBQUNELEtBRk0sTUFFQSxJQUFJTyxFQUFFLENBQUNFLEdBQUgsSUFBVSxLQUFkLEVBQXFCO0FBQzFCWCxhQUFPLENBQUMsSUFBRCxDQUFQLENBRDBCLENBRTFCO0FBQ0Q7QUFDRixHQWxCOEIsRUFrQjVCLEVBbEI0QixDQUEvQjtBQW9CQSxNQUFNZSxTQUFTLEdBQUdQLHlEQUFXLENBQUMsVUFBQ0MsRUFBRCxFQUFRO0FBQ3BDLFFBQUlBLEVBQUUsQ0FBQ0UsR0FBSCxJQUFVLEtBQWQsRUFBcUI7QUFDbkJYLGFBQU8sQ0FBQyxLQUFELENBQVAsQ0FEbUIsQ0FFbkI7QUFDRDtBQUNGLEdBTDRCLEVBSzFCLEVBTDBCLENBQTdCO0FBT0FYLHlEQUFTLENBQUMsWUFBTTtBQUNkYyxhQUFTLENBQUNTLE9BQVYsQ0FBa0JDLFNBQWxCLENBQTRCLEtBQTVCO0FBQ0QsR0FGUSxFQUVOLEVBRk0sQ0FBVDtBQUlBeEIseURBQVMsQ0FBQyxZQUFNO0FBQ2RnQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBVSxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DVixXQUFuQztBQUNBUyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDRixTQUFqQztBQUVBLFdBQU8sWUFBTTtBQUNYVixhQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWjtBQUNBVSxZQUFNLENBQUNFLG1CQUFQLENBQTJCLFNBQTNCLEVBQXNDWCxXQUF0QztBQUNBUyxZQUFNLENBQUNFLG1CQUFQLENBQTJCLE9BQTNCLEVBQW9DSCxTQUFwQztBQUNELEtBSkQ7QUFLRCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBWUEsU0FDRSw4RUFBQyxxRUFBRDtBQUNFLE9BQUcsRUFBRVosU0FEUDtBQUVFLGVBQVcsRUFBQyxTQUZkO0FBR0UsY0FBVSxFQUFDLGFBSGI7QUFJRSxTQUFLLGtDQUFPYixNQUFQO0FBQWVDLFlBQU0sRUFBRVEsSUFBSSxHQUFHLE9BQUgsR0FBYSxDQUFDO0FBQXpDLE1BSlA7QUFLRSxTQUFLLEVBQUMsTUFMUjtBQU1FLFVBQU0sRUFBQyxNQU5UO0FBT0UsZUFBVyxFQUFFLEdBUGY7QUFRRSxlQUFXLEVBQUVFO0FBUmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBWUQsQ0EvRE07O0lBQU1ILE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL2NhbnZhcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZUNhbGxiYWNrIH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCB7IFJlYWN0U2tldGNoQ2FudmFzIH0gZnJvbSBcInJlYWN0LXNrZXRjaC1jYW52YXNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUtleVByZXNzZWQoa2V5TG9va3VwKSB7XG4gIGNvbnN0IFtrZXlQcmVzc2VkLCBzZXRLZXlQcmVzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge30sIFtrZXlMb29rdXBdKTtcblxuICByZXR1cm4ga2V5UHJlc3NlZDtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICB6SW5kZXg6IC0xMDAwMDAwLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICB0b3A6IDAsXG4gIGxlZnQ6IDAsXG4gIHdpZHRoOiBcIjEwMCVcIixcbiAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgYm9yZGVyOiBcIm5vbmVcIixcbn07XG5cbmV4cG9ydCBjb25zdCBDYW52YXMgPSAoKSA9PiB7XG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgW2VyYXNlTW9kZSwgc2V0RXJhc2VNb2RlXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcInJlZFwiKTtcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnNvbGUubG9nKFwiRW50ZXJpbmcgY2FudmFzXCIpO1xuXG4gIGNvbnN0IGRvd25IYW5kbGVyID0gdXNlQ2FsbGJhY2soKGV2KSA9PiB7XG4gICAgaWYgKGV2LmN0cmxLZXkgJiYgZXYua2V5ID09IFwielwiKSB7XG4gICAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgICAgIGNhbnZhc1JlZi5jdXJyZW50LmVyYXNlTW9kZSh0cnVlKTtcbiAgICB9IGVsc2UgaWYgKGV2LmN0cmxLZXkgJiYgZXYua2V5ID09IFwieFwiKSB7XG4gICAgICBjYW52YXNSZWYuY3VycmVudC5jbGVhckNhbnZhcygpO1xuICAgIH0gZWxzZSBpZiAoZXYuY3RybEtleSAmJiBldi5rZXkgPT0gXCIxXCIpIHtcbiAgICAgIHNldENvbG9yKFwicmVkXCIpO1xuICAgIH0gZWxzZSBpZiAoZXYuY3RybEtleSAmJiBldi5rZXkgPT0gXCIyXCIpIHtcbiAgICAgIHNldENvbG9yKFwiZ3JlZW5cIik7XG4gICAgfSBlbHNlIGlmIChldi5jdHJsS2V5ICYmIGV2LmtleSA9PSBcIjNcIikge1xuICAgICAgc2V0Q29sb3IoXCJibHVlXCIpO1xuICAgIH0gZWxzZSBpZiAoZXYuY3RybEtleSAmJiBldi5rZXkgPT0gXCI0XCIpIHtcbiAgICAgIHNldENvbG9yKFwib3JhbmdlXCIpO1xuICAgIH0gZWxzZSBpZiAoZXYua2V5ID09IFwiQWx0XCIpIHtcbiAgICAgIHNldFNob3codHJ1ZSk7XG4gICAgICAvLyAgIHNldEVyYXNlTW9kZSgocHJldkVyYXNlTW9kZSkgPT4gIXByZXZFcmFzZU1vZGUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHVwSGFuZGxlciA9IHVzZUNhbGxiYWNrKChldikgPT4ge1xuICAgIGlmIChldi5rZXkgPT0gXCJBbHRcIikge1xuICAgICAgc2V0U2hvdyhmYWxzZSk7XG4gICAgICAvLyAgIGNhbnZhc1JlZi5jdXJyZW50LmNsZWFyQ2FudmFzKCk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjYW52YXNSZWYuY3VycmVudC5lcmFzZU1vZGUoZmFsc2UpO1xuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImFkZGluZyBsaXN0ZXJuZXJzXCIpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB1cEhhbmRsZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZpbmcgbGlzdGVybmVyc1wiKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBkb3duSGFuZGxlcik7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIHVwSGFuZGxlcik7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0U2tldGNoQ2FudmFzXG4gICAgICByZWY9e2NhbnZhc1JlZn1cbiAgICAgIGNhbnZhc0NvbG9yPVwiI2YwZTlkZlwiXG4gICAgICBiYWNrZ3JvdW5kPVwidHJhbnNwYXJlbnRcIlxuICAgICAgc3R5bGU9e3sgLi4uc3R5bGVzLCB6SW5kZXg6IHNob3cgPyAxMDAwMDAwIDogLTEwMDAwMDAgfX1cbiAgICAgIHdpZHRoPVwiMTAwJVwiXG4gICAgICBoZWlnaHQ9XCIxMDAlXCJcbiAgICAgIHN0cm9rZVdpZHRoPXsxLjV9XG4gICAgICBzdHJva2VDb2xvcj17Y29sb3J9XG4gICAgLz5cbiAgKTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/canvas.js\n");

/***/ })

})