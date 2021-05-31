(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/app/store.js":
/*!**************************!*\
  !*** ./src/app/store.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": function() { return /* binding */ store; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/basketSlice */ "./src/slices/basketSlice.js");


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    basket: _slices_basketSlice__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/store */ "./src/app/store.js");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ "./src/styles/globals.css");
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\rajath\\Documents\\aaaProjects\\Amazon_clone\\src\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_client__WEBPACK_IMPORTED_MODULE_4__.Provider, {
    session: pageProps.session,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
      store: _app_store__WEBPACK_IMPORTED_MODULE_2__.store,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function() {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["src_slices_basketSlice_js"], function() { return __webpack_exec__("./src/pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWF6b24tY2xvbmUvLi9zcmMvYXBwL3N0b3JlLmpzIiwid2VicGFjazovL2FtYXpvbi1jbG9uZS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2FtYXpvbi1jbG9uZS9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9hbWF6b24tY2xvbmUvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vYW1hem9uLWNsb25lL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9hbWF6b24tY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsImJhc2tldCIsImJhc2tldFJlZHVjZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLEtBQUssR0FBR0MsZ0VBQWMsQ0FBQztBQUNsQ0MsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRUMsd0RBQWFBO0FBRGQ7QUFEeUIsQ0FBRCxDQUE1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMxQyxzQkFDRSw4REFBQyxzREFBRDtBQUFjLFdBQU8sRUFBRUEsU0FBUyxDQUFDQyxPQUFqQztBQUFBLDJCQUNFLDhEQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFFUiw2Q0FBakI7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlTyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FSRDs7QUFVQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYmFza2V0UmVkdWNlciBmcm9tIFwiLi4vc2xpY2VzL2Jhc2tldFNsaWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgYmFza2V0OiBiYXNrZXRSZWR1Y2VyLFxyXG4gIH0sXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBzdG9yZSB9IGZyb20gXCIuLi9hcHAvc3RvcmVcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCB7IFByb3ZpZGVyIGFzIEF1dGhQcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCI7XHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8L1Byb3ZpZGVyPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9