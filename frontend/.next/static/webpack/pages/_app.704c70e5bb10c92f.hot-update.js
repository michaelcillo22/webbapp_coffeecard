"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Landing.js":
/*!*******************************!*\
  !*** ./components/Landing.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card */ \"./components/Card.js\");\n/* harmony import */ var _ProfileHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProfileHeader */ \"./components/ProfileHeader.js\");\n\n\n\n\n\nconst Landing = ()=>{\n    const loggedIn = true;\n    const subs = [\n        {\n            type: \"Espresso\",\n            store: \"Froth\",\n            // imageSrc: 'https://coffeecard.nyc/images/froth_logo.jpg',\n            bgColor: \" #6a513b\"\n        },\n        {\n            type: \"Cappuchino\",\n            store: \"Bean\",\n            // imageSrc: 'https://coffeecard.nyc/images/bean_logo.jpg',\n            bgColor: \"#40312e\"\n        }\n    ];\n    switch(loggedIn){\n        case false:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row align-items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col-md-12 p-0 bg-img shadow-lg rounded\",\n                                style: {\n                                    height: \"450px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"col text-col mt-5\",\n                                style: {\n                                    fontSize: \"18px\",\n                                    letterSpacing: \".1rem\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: \"Your most refined ritual yet.\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"about-text-2\",\n                                                children: \"CoffeeCard empowers local coffee shops to turn their customers into reoccuring subscribers.\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"d-sm-flex flex-column align-items-center justify-content-around\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: \"/login\",\n                                                        className: \"nav-item nav-link col-lg-12\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"btn col-md-12 col-lg-4 mt-4\",\n                                                            style: {\n                                                                backgroundColor: \"#40312e\",\n                                                                color: \"white\"\n                                                            },\n                                                            children: \"Log In\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                                            lineNumber: 46,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                        href: \"/register\",\n                                                        className: \"nav-item nav-link col-lg-12\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                            className: \"btn col-md-12 col-lg-4 mt-4\",\n                                                            style: {\n                                                                backgroundColor: \"#40312e\",\n                                                                color: \"white\"\n                                                            },\n                                                            children: \"Join\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                                            lineNumber: 57,\n                                                            columnNumber: 23\n                                                        }, undefined)\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                                        lineNumber: 53,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                lineNumber: 33,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                        lineNumber: 28,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, undefined);\n        default:\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProfileHeader__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"d-md-flex flex-column align-items-center justify-content-around \",\n                        children: \"Your Subscriptions:\"\n                    }, void 0, false, {\n                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-lg-1\",\n                        children: subs.map((sub, index)=>{\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                sub: sub\n                            }, index, false, {\n                                fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                                lineNumber: 83,\n                                columnNumber: 22\n                            }, undefined);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/andor/Projects/CoffeeCard/webapp_coffeecard/frontend/components/Landing.js\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true);\n    }\n};\n_c = Landing;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Landing);\nvar _c;\n$RefreshReg$(_c, \"Landing\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDRztBQUNGO0FBQ2lCO0FBRTNDLE1BQU1JLFVBQVUsSUFBTTtJQUNwQixNQUFNQyxXQUFXLElBQUk7SUFDckIsTUFBTUMsT0FBTztRQUNYO1lBQ0VDLE1BQU07WUFDTkMsT0FBTztZQUNQLDREQUE0RDtZQUM1REMsU0FBUztRQUNYO1FBQ0E7WUFDRUYsTUFBTTtZQUNOQyxPQUFPO1lBQ1AsMkRBQTJEO1lBQzNEQyxTQUFTO1FBQ1g7S0FDRDtJQUVELE9BQVFKO1FBQ04sS0FBSyxLQUFLO1lBQ1IscUJBQ0UsOERBQUNLOzBCQUNDLDRFQUFDQzs4QkFDQyw0RUFBQ0E7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FDQ0MsV0FBVTtnQ0FDVkMsT0FBTztvQ0FBRUMsUUFBUTtnQ0FBUTs7Ozs7OzBDQUUzQiw4REFBQ0g7Z0NBQ0NDLFdBQVU7Z0NBQ1ZDLE9BQU87b0NBQUVFLFVBQVU7b0NBQVFDLGVBQWU7Z0NBQVE7O2tEQUVsRCw4REFBQ0M7a0RBQUc7Ozs7OztrREFDSiw4REFBQ0M7Ozs7O2tEQUNELDhEQUFDUDs7MERBQ0MsOERBQUNRO2dEQUFFUCxXQUFVOzBEQUFlOzs7Ozs7MERBSTVCLDhEQUFDRDtnREFBSUMsV0FBVTs7a0VBQ2IsOERBQUNYLGtEQUFJQTt3REFBQ21CLE1BQUs7d0RBQVNSLFdBQVU7a0VBQzVCLDRFQUFDUzs0REFDQ1QsV0FBVTs0REFDVkMsT0FBTztnRUFBRVMsaUJBQWlCO2dFQUFXQyxPQUFPOzREQUFRO3NFQUNyRDs7Ozs7Ozs7Ozs7a0VBSUgsOERBQUN0QixrREFBSUE7d0RBQ0htQixNQUFLO3dEQUNMUixXQUFVO2tFQUVWLDRFQUFDUzs0REFDQ1QsV0FBVTs0REFDVkMsT0FBTztnRUFBRVMsaUJBQWlCO2dFQUFXQyxPQUFPOzREQUFRO3NFQUNyRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBWW5CO1lBQ0UscUJBQ0U7O2tDQUNFLDhEQUFDYjtrQ0FDQyw0RUFBQ1Asc0RBQWFBOzs7Ozs7Ozs7O2tDQUVoQiw4REFBQ3FCO3dCQUFHWixXQUFVO2tDQUFtRTs7Ozs7O2tDQUdqRiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1pOLEtBQUttQixHQUFHLENBQUMsQ0FBQ0MsS0FBS0MsUUFBVTs0QkFDeEIscUJBQU8sOERBQUN6Qiw2Q0FBS0E7Z0NBQWF3QixLQUFLQTsrQkFBWkM7Ozs7O3dCQUNyQjs7Ozs7Ozs7SUFJVjtBQUNGO0tBbkZNdkI7QUFxRk4sK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nLmpzPzViN2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IENhcmRzIGZyb20gJy4vQ2FyZCdcbmltcG9ydCBQcm9maWxlSGVhZGVyIGZyb20gJy4vUHJvZmlsZUhlYWRlcidcblxuY29uc3QgTGFuZGluZyA9ICgpID0+IHtcbiAgY29uc3QgbG9nZ2VkSW4gPSB0cnVlXG4gIGNvbnN0IHN1YnMgPSBbXG4gICAge1xuICAgICAgdHlwZTogJ0VzcHJlc3NvJyxcbiAgICAgIHN0b3JlOiAnRnJvdGgnLFxuICAgICAgLy8gaW1hZ2VTcmM6ICdodHRwczovL2NvZmZlZWNhcmQubnljL2ltYWdlcy9mcm90aF9sb2dvLmpwZycsXG4gICAgICBiZ0NvbG9yOiAnICM2YTUxM2InLFxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogJ0NhcHB1Y2hpbm8nLFxuICAgICAgc3RvcmU6ICdCZWFuJyxcbiAgICAgIC8vIGltYWdlU3JjOiAnaHR0cHM6Ly9jb2ZmZWVjYXJkLm55Yy9pbWFnZXMvYmVhbl9sb2dvLmpwZycsXG4gICAgICBiZ0NvbG9yOiAnIzQwMzEyZScsXG4gICAgfSxcbiAgXVxuXG4gIHN3aXRjaCAobG9nZ2VkSW4pIHtcbiAgICBjYXNlIGZhbHNlOlxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cgYWxpZ24taXRlbXMtY2VudGVyJz5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sLW1kLTEyIHAtMCBiZy1pbWcgc2hhZG93LWxnIHJvdW5kZWQnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAnNDUwcHgnIH19XG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sIHRleHQtY29sIG10LTUnXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6ICcxOHB4JywgbGV0dGVyU3BhY2luZzogJy4xcmVtJyB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGgyPllvdXIgbW9zdCByZWZpbmVkIHJpdHVhbCB5ZXQuPC9oMj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhYm91dC10ZXh0LTInPlxuICAgICAgICAgICAgICAgICAgICBDb2ZmZWVDYXJkIGVtcG93ZXJzIGxvY2FsIGNvZmZlZSBzaG9wcyB0byB0dXJuIHRoZWlyXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbWVycyBpbnRvIHJlb2NjdXJpbmcgc3Vic2NyaWJlcnMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC1zbS1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kJz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL2xvZ2luJyBjbGFzc05hbWU9J25hdi1pdGVtIG5hdi1saW5rIGNvbC1sZy0xMic+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdidG4gY29sLW1kLTEyIGNvbC1sZy00IG10LTQnXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICcjNDAzMTJlJywgY29sb3I6ICd3aGl0ZScgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICBMb2cgSW5cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgIGhyZWY9Jy9yZWdpc3RlcidcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J25hdi1pdGVtIG5hdi1saW5rIGNvbC1sZy0xMidcbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nYnRuIGNvbC1tZC0xMiBjb2wtbGctNCBtdC00J1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnIzQwMzEyZScsIGNvbG9yOiAnd2hpdGUnIH19XG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgSm9pblxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKVxuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8UHJvZmlsZUhlYWRlciAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPSdkLW1kLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1hcm91bmQgJz5cbiAgICAgICAgICAgIFlvdXIgU3Vic2NyaXB0aW9uczpcbiAgICAgICAgICA8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctMSc+XG4gICAgICAgICAgICB7c3Vicy5tYXAoKHN1YiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxDYXJkcyBrZXk9e2luZGV4fSBzdWI9e3N1Yn0gLz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiQ2FyZHMiLCJQcm9maWxlSGVhZGVyIiwiTGFuZGluZyIsImxvZ2dlZEluIiwic3VicyIsInR5cGUiLCJzdG9yZSIsImJnQ29sb3IiLCJzZWN0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJoZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJoMiIsImJyIiwicCIsImhyZWYiLCJidXR0b24iLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImg1IiwibWFwIiwic3ViIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Landing.js\n"));

/***/ })

});