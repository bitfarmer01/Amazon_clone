(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 997:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
;// CONCATENATED MODULE: external "next/head"
var head_namespaceObject = require("next/head");;
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
;// CONCATENATED MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_namespaceObject = require("react-responsive-carousel");;
;// CONCATENATED MODULE: ./src/components/Banner.js






const Banner = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_responsive_carousel_namespaceObject.Carousel, {
      axis: "horizontal",
      autoPlay: true,
      infiniteLoop: true,
      showStatus: false,
      showIndicators: false,
      showThumbs: false,
      interval: 2000,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/PSS/Personal-Safety_1500x600._CB668022827_.jpg",
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/May21/fresh-pc_021x._CB670987717_.jpg",
          alt: ""
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          loading: "lazy",
          src: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Gateway/Flip/Essentials_Experience_May21/Revised_EE_Graphics/GW_PC_BUNK_1500x600._CB668893605_.jpg",
          alt: ""
        })
      })]
    })]
  });
};

/* harmony default export */ var components_Banner = (Banner);
// EXTERNAL MODULE: ./src/components/Header.js
var Header = __webpack_require__(38);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./src/slices/cartSlice.js
var cartSlice = __webpack_require__(608);
;// CONCATENATED MODULE: external "react-toastify"
var external_react_toastify_namespaceObject = require("react-toastify");;
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(819);
;// CONCATENATED MODULE: ./src/components/Product.js









const Product = ({
  id,
  title,
  price,
  description,
  category,
  image
}) => {
  const dispatch = (0,external_react_redux_.useDispatch)();

  const addItemBasket = () => {
    external_react_toastify_namespaceObject.toast.warning("Added to cart!");
    const product = {
      id,
      title,
      price,
      description,
      category,
      image
    };
    dispatch((0,cartSlice/* addToCart */.Xq)(product));
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative flex flex-col m-5 bg-white z-30 p-10",
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
      src: image,
      height: 200,
      width: 200,
      objectFit: "contain"
    }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "my-2  text-xl line-clamp-2",
      children: title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-xs mt-2 mb-2 line-clamp-2",
      children: description
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "font-bold text-lg mb-5 ",
      children: ["\u20B9", Math.floor(price * 75)]
    }), /*#__PURE__*/jsx_runtime_.jsx("button", {
      onClick: addItemBasket,
      className: "mt-auto button",
      children: "Add to cart"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_namespaceObject.ToastContainer, {
      position: "top-right",
      autoClose: 1000,
      transition: external_react_toastify_namespaceObject.Flip,
      hideProgressBar: false,
      newestOnTop: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true
    })]
  });
};

/* harmony default export */ var components_Product = (Product);
;// CONCATENATED MODULE: ./src/components/ProductList.js




const ProductList = ({
  products
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 mx-auto md:-mt-50  ",
    children: products.map(({
      id,
      title,
      price,
      description,
      category,
      image
    }) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(components_Product, {
        id: id,
        title: title,
        price: price,
        description: description,
        category: category,
        image: image
      }, id)
    }))
  });
};

/* harmony default export */ var components_ProductList = (ProductList);
;// CONCATENATED MODULE: ./src/pages/index.js






function Home({
  products
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-gray-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Amazon 2.0"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      className: "max-w-5xl mx-auto",
      children: [/*#__PURE__*/jsx_runtime_.jsx(components_Banner, {}), /*#__PURE__*/jsx_runtime_.jsx(components_ProductList, {
        products: products
      })]
    })]
  });
}
async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(res => res.json());
  return {
    props: {
      products
    }
  };
}

/***/ }),

/***/ 819:
/***/ (function() {



/***/ }),

/***/ 139:
/***/ (function(module) {

"use strict";
module.exports = require("@reduxjs/toolkit");;

/***/ }),

/***/ 104:
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ 273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 79:
/***/ (function(module) {

"use strict";
module.exports = require("react-redux");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [943,383,38], function() { return __webpack_exec__(997); });
module.exports = __webpack_exports__;

})();