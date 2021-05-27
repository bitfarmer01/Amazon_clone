(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 533:
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
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/outline/esm/index.js + 230 modules
var esm = __webpack_require__(49);
;// CONCATENATED MODULE: ./src/components/Header.js





const Header = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center bg-amazon_blue p-1 flex-grow py-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-2 flex items-center flex-grow  sm:flex-grow-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "http://pngimg.com/uploads/amazon/amazon_PNG11.png",
          width: 150,
          height: 40,
          objectFit: "contain",
          className: "cursor-pointer"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "hidden sm:flex items-center h-10 flex-grow cursor-pointer rounded-md bg-yellow-400 hover:bg-yellow-500  ",
        children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
          className: "p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 ",
          type: "text",
          placeholder: "search items"
        }), /*#__PURE__*/jsx_runtime_.jsx(esm/* SearchIcon */.W1M, {
          className: "h-12 p-4"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "text-white flex items-center text-xs space-x-6  mx-6 whitespace-nowrap",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "link",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Hello Rajath"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: "Account and lists"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "link",
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            children: "Returns "
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "font-extrabold md:text-sm",
            children: "and orders"
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "relative link flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold",
            children: "4"
          }), /*#__PURE__*/jsx_runtime_.jsx(esm/* ShoppingCartIcon */.Q1y, {
            className: "h-10"
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: " hidden md:inline font-extrabold md:text-sm mt-2",
            children: "Basket"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-gray-50  text-sm mb-1",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "link flex items-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(esm/* MenuIcon */.Oqj, {
          className: "h-6 mr-1"
        }), "All"]
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Prime video"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Today's deals"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link",
        children: "Amazon pay"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden lg:inline-flex",
        children: "Electronics "
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden lg:inline-flex",
        children: "Fashion"
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "link hidden lg:inline-flex",
        children: "New releases "
      })]
    })]
  });
};

/* harmony default export */ var components_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Product.js





const Product = ({
  id,
  title,
  price,
  description,
  category,
  image
}) => {
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
      className: "mt-auto button",
      children: "Add to cart"
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
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Header, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
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

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [943,383], function() { return __webpack_exec__(533); });
module.exports = __webpack_exports__;

})();