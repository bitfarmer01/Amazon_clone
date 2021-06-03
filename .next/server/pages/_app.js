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
/* harmony import */ var _slices_cartSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../slices/cartSlice */ "./src/slices/cartSlice.js");


const store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({
  reducer: {
    cart: _slices_cartSlice__WEBPACK_IMPORTED_MODULE_1__.default
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

/***/ "./src/slices/cartSlice.js":
/*!*********************************!*\
  !*** ./src/slices/cartSlice.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cartSlice": function() { return /* binding */ cartSlice; },
/* harmony export */   "addToCart": function() { return /* binding */ addToCart; },
/* harmony export */   "removeFromCart": function() { return /* binding */ removeFromCart; },
/* harmony export */   "selectItems": function() { return /* binding */ selectItems; }
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "@reduxjs/toolkit");
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  items: []
};
const cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(cartItem => cartItem.id === action.payload.id);
      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      }

      state.items = newCart;
    }
  }
});
const {
  addToCart,
  removeFromCart
} = cartSlice.actions; // Selectors - This is how we pull information from the Global store slice

const selectItems = state => state.cart.items;
/* harmony default export */ __webpack_exports__["default"] = (cartSlice.reducer);

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbWF6b24tY2xvbmUvLi9zcmMvYXBwL3N0b3JlLmpzIiwid2VicGFjazovL2FtYXpvbi1jbG9uZS8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2FtYXpvbi1jbG9uZS8uL3NyYy9zbGljZXMvY2FydFNsaWNlLmpzIiwid2VicGFjazovL2FtYXpvbi1jbG9uZS9leHRlcm5hbCBcIkByZWR1eGpzL3Rvb2xraXRcIiIsIndlYnBhY2s6Ly9hbWF6b24tY2xvbmUvZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vYW1hem9uLWNsb25lL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly9hbWF6b24tY2xvbmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsImNhcnQiLCJjYXJ0UmVkdWNlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2Vzc2lvbiIsImluaXRpYWxTdGF0ZSIsIml0ZW1zIiwiY2FydFNsaWNlIiwiY3JlYXRlU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRUb0NhcnQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJyZW1vdmVGcm9tQ2FydCIsImluZGV4IiwiZmluZEluZGV4IiwiY2FydEl0ZW0iLCJpZCIsIm5ld0NhcnQiLCJzcGxpY2UiLCJhY3Rpb25zIiwic2VsZWN0SXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLE1BQU1BLEtBQUssR0FBR0MsZ0VBQWMsQ0FBQztBQUNsQ0MsU0FBTyxFQUFFO0FBQ1BDLFFBQUksRUFBRUMsc0RBQVdBO0FBRFY7QUFEeUIsQ0FBRCxDQUE1QixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIUDtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxLQUFLLEdBQUcsQ0FBQztBQUFFQyxXQUFGO0FBQWFDO0FBQWIsQ0FBRCxLQUE4QjtBQUMxQyxzQkFDRSw4REFBQyxzREFBRDtBQUFjLFdBQU8sRUFBRUEsU0FBUyxDQUFDQyxPQUFqQztBQUFBLDJCQUNFLDhEQUFDLGlEQUFEO0FBQVUsV0FBSyxFQUFFUiw2Q0FBakI7QUFBQSw2QkFDRSw4REFBQyxTQUFELG9CQUFlTyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FSRDs7QUFVQSwrREFBZUYsS0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBRUEsTUFBTUksWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUU7QUFEWSxDQUFyQjtBQUlPLE1BQU1DLFNBQVMsR0FBR0MsNkRBQVcsQ0FBQztBQUNuQ0MsTUFBSSxFQUFFLE1BRDZCO0FBRW5DSixjQUZtQztBQUduQ0ssVUFBUSxFQUFFO0FBQ1JDLGFBQVMsRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsS0FBbUI7QUFDNUJELFdBQUssQ0FBQ04sS0FBTixHQUFjLENBQUMsR0FBR00sS0FBSyxDQUFDTixLQUFWLEVBQWlCTyxNQUFNLENBQUNDLE9BQXhCLENBQWQ7QUFDRCxLQUhPO0FBSVJDLGtCQUFjLEVBQUUsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFlBQU1HLEtBQUssR0FBR0osS0FBSyxDQUFDTixLQUFOLENBQVlXLFNBQVosQ0FDWEMsUUFBRCxJQUFjQSxRQUFRLENBQUNDLEVBQVQsS0FBZ0JOLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSyxFQURqQyxDQUFkO0FBR0EsVUFBSUMsT0FBTyxHQUFHLENBQUMsR0FBR1IsS0FBSyxDQUFDTixLQUFWLENBQWQ7O0FBRUEsVUFBSVUsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZEksZUFBTyxDQUFDQyxNQUFSLENBQWVMLEtBQWYsRUFBc0IsQ0FBdEI7QUFDRDs7QUFDREosV0FBSyxDQUFDTixLQUFOLEdBQWNjLE9BQWQ7QUFDRDtBQWRPO0FBSHlCLENBQUQsQ0FBN0I7QUFxQkEsTUFBTTtBQUFFVCxXQUFGO0FBQWFJO0FBQWIsSUFBZ0NSLFNBQVMsQ0FBQ2UsT0FBaEQsQyxDQUVQOztBQUNPLE1BQU1DLFdBQVcsR0FBSVgsS0FBRCxJQUFXQSxLQUFLLENBQUNiLElBQU4sQ0FBV08sS0FBMUM7QUFFUCwrREFBZUMsU0FBUyxDQUFDVCxPQUF6QixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0EsOEM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gXCIuLi9zbGljZXMvY2FydFNsaWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgY2FydDogY2FydFJlZHVjZXIsXHJcbiAgfSxcclxufSk7XHJcbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSBcIi4uL2FwcC9zdG9yZVwiO1xyXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcclxuaW1wb3J0IHsgUHJvdmlkZXIgYXMgQXV0aFByb3ZpZGVyIH0gZnJvbSBcIm5leHQtYXV0aC9jbGllbnRcIjtcclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoUHJvdmlkZXIgc2Vzc2lvbj17cGFnZVByb3BzLnNlc3Npb259PlxyXG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgICA8L0F1dGhQcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY2FydFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiY2FydFwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkVG9DYXJ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5pdGVtcyA9IFsuLi5zdGF0ZS5pdGVtcywgYWN0aW9uLnBheWxvYWRdO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZUZyb21DYXJ0OiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHN0YXRlLml0ZW1zLmZpbmRJbmRleChcclxuICAgICAgICAoY2FydEl0ZW0pID0+IGNhcnRJdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZFxyXG4gICAgICApO1xyXG4gICAgICBsZXQgbmV3Q2FydCA9IFsuLi5zdGF0ZS5pdGVtc107XHJcblxyXG4gICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIG5ld0NhcnQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgfVxyXG4gICAgICBzdGF0ZS5pdGVtcyA9IG5ld0NhcnQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgYWRkVG9DYXJ0LCByZW1vdmVGcm9tQ2FydCB9ID0gY2FydFNsaWNlLmFjdGlvbnM7XHJcblxyXG4vLyBTZWxlY3RvcnMgLSBUaGlzIGlzIGhvdyB3ZSBwdWxsIGluZm9ybWF0aW9uIGZyb20gdGhlIEdsb2JhbCBzdG9yZSBzbGljZVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0SXRlbXMgPSAoc3RhdGUpID0+IHN0YXRlLmNhcnQuaXRlbXM7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXJ0U2xpY2UucmVkdWNlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1hdXRoL2NsaWVudFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVkdXhcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==