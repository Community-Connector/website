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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MyApp; }\n/* harmony export */ });\n/* harmony import */ var _Users_rise_teacher_Desktop_Kumel_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_rise_teacher_Desktop_Kumel_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_rise_teacher_Desktop_Kumel_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ \"./node_modules/next/app.js\");\n/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var components_PageChange_PageChange_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/PageChange/PageChange.js */ \"./components/PageChange/PageChange.js\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ \"./node_modules/@fortawesome/fontawesome-free/css/all.min.css\");\n/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var styles_tailwind_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styles/tailwind.css */ \"./styles/tailwind.css\");\n/* harmony import */ var styles_tailwind_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styles_tailwind_css__WEBPACK_IMPORTED_MODULE_9__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nnext_router__WEBPACK_IMPORTED_MODULE_6___default().events.on(\"routeChangeStart\", function(url) {\n    console.log(\"Loading: \".concat(url));\n    document.body.classList.add(\"body-page-transition\");\n    react_dom__WEBPACK_IMPORTED_MODULE_3___default().render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(components_PageChange_PageChange_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        path: url\n    }, void 0, false, {\n        fileName: \"/Users/rise_teacher/Desktop/Kumel/website/pages/_app.js\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, _this), document.getElementById(\"page-transition\"));\n});\nnext_router__WEBPACK_IMPORTED_MODULE_6___default().events.on(\"routeChangeComplete\", function() {\n    react_dom__WEBPACK_IMPORTED_MODULE_3___default().unmountComponentAtNode(document.getElementById(\"page-transition\"));\n    document.body.classList.remove(\"body-page-transition\");\n});\nnext_router__WEBPACK_IMPORTED_MODULE_6___default().events.on(\"routeChangeError\", function() {\n    react_dom__WEBPACK_IMPORTED_MODULE_3___default().unmountComponentAtNode(document.getElementById(\"page-transition\"));\n    document.body.classList.remove(\"body-page-transition\");\n});\nvar MyApp = /*#__PURE__*/ function(App1) {\n    \"use strict\";\n    _inherits(MyApp, App1);\n    var _super = _createSuper(MyApp);\n    function MyApp() {\n        _classCallCheck(this, MyApp);\n        return _super.apply(this, arguments);\n    }\n    _createClass(MyApp, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var comment = document.createComment(\"\\n\\n=========================================================\\n* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim\\n=========================================================\\n\\n* Product Page: https://www.creative-tim.com/product/notus-nextjs\\n* Copyright 2021 Creative Tim (https://www.creative-tim.com)\\n* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)\\n\\n* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation\\n\\n* Coded by Creative Tim\\n\\n=========================================================\\n\\n* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\\n\\n\");\n                document.insertBefore(comment, document.documentElement);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _props = this.props, Component = _props.Component, pageProps = _props.pageProps;\n                var Layout = Component.layout || function(param) {\n                    var children = param.children;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                        children: children\n                    }, void 0, false);\n                };\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                                    name: \"viewport\",\n                                    content: \"width=device-width, initial-scale=1, shrink-to-fit=no\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rise_teacher/Desktop/Kumel/website/pages/_app.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                                    children: \"Community Connector\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rise_teacher/Desktop/Kumel/website/pages/_app.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"script\", {\n                                    src: \"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rise_teacher/Desktop/Kumel/website/pages/_app.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 11\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rise_teacher/Desktop/Kumel/website/pages/_app.js\",\n                            lineNumber: 67,\n                            columnNumber: 9\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Layout, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {\n                                fileName: \"/Users/rise_teacher/Desktop/Kumel/website/pages/_app.js\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/rise_teacher/Desktop/Kumel/website/pages/_app.js\",\n                            lineNumber: 75,\n                            columnNumber: 9\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/rise_teacher/Desktop/Kumel/website/pages/_app.js\",\n                    lineNumber: 66,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ], [\n        {\n            key: \"getInitialProps\",\n            value: function getInitialProps(param) {\n                var Component = param.Component, router = param.router, ctx = param.ctx;\n                return _asyncToGenerator(_Users_rise_teacher_Desktop_Kumel_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    var pageProps;\n                    return _Users_rise_teacher_Desktop_Kumel_website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                pageProps = {};\n                                if (!Component.getInitialProps) {\n                                    _ctx.next = 5;\n                                    break;\n                                }\n                                _ctx.next = 4;\n                                return Component.getInitialProps(ctx);\n                            case 4:\n                                pageProps = _ctx.sent;\n                            case 5:\n                                return _ctx.abrupt(\"return\", {\n                                    pageProps: pageProps\n                                });\n                            case 6:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                }))();\n            }\n        }\n    ]);\n    return MyApp;\n}((next_app__WEBPACK_IMPORTED_MODULE_4___default()));\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFYLEtBQTBCLENBQXhCQSxTQUFTLEVBQUVhLE1BQU0sR0FBbkIsS0FBMEIsQ0FBYkEsTUFBTSxFQUFFQyxHQUFHLEdBQXhCLEtBQTBCLENBQUxBLEdBQUc7dUJBQXJELDBMQUF5RDt3QkFDbkRiLFNBQVM7Ozs7Z0NBQVRBLFNBQVMsR0FBRyxFQUFFLENBQUM7b0NBRWZELENBQUFBLFNBQVMsQ0FBQ1ksZUFBZTs7Ozs7dUNBQ1RaLFNBQVMsQ0FBQ1ksZUFBZSxDQUFDRSxHQUFHLENBQUM7O2dDQUFoRGIsU0FBUyxZQUF1Qzs7NkRBRzNDO29DQUFFQSxTQUFTLEVBQVRBLFNBQVM7aUNBQUU7Ozs7OztpQkFDckI7YUFBQTs7OztDQXNCRixDQXJEa0MxQixpREFBRyxDQXFEckM7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCBBcHAgZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgUGFnZUNoYW5nZSBmcm9tIFwiY29tcG9uZW50cy9QYWdlQ2hhbmdlL1BhZ2VDaGFuZ2UuanNcIjtcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2Nzcy9hbGwubWluLmNzc1wiO1xuaW1wb3J0IFwic3R5bGVzL3RhaWx3aW5kLmNzc1wiO1xuXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAodXJsKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMb2FkaW5nOiAke3VybH1gKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwiYm9keS1wYWdlLXRyYW5zaXRpb25cIik7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UGFnZUNoYW5nZSBwYXRoPXt1cmx9IC8+LFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZS10cmFuc2l0aW9uXCIpXG4gICk7XG59KTtcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IHtcbiAgUmVhY3RET00udW5tb3VudENvbXBvbmVudEF0Tm9kZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZ2UtdHJhbnNpdGlvblwiKSk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShcImJvZHktcGFnZS10cmFuc2l0aW9uXCIpO1xufSk7XG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiB7XG4gIFJlYWN0RE9NLnVubW91bnRDb21wb25lbnRBdE5vZGUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWdlLXRyYW5zaXRpb25cIikpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJib2R5LXBhZ2UtdHJhbnNpdGlvblwiKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBjb21tZW50ID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudChgXG5cbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKiBOb3R1cyBOZXh0SlMgLSB2MS4xLjAgYmFzZWQgb24gVGFpbHdpbmQgU3RhcnRlciBLaXQgYnkgQ3JlYXRpdmUgVGltXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuKiBQcm9kdWN0IFBhZ2U6IGh0dHBzOi8vd3d3LmNyZWF0aXZlLXRpbS5jb20vcHJvZHVjdC9ub3R1cy1uZXh0anNcbiogQ29weXJpZ2h0IDIwMjEgQ3JlYXRpdmUgVGltIChodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tKVxuKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS9jcmVhdGl2ZXRpbW9mZmljaWFsL25vdHVzLW5leHRqcy9ibG9iL21haW4vTElDRU5TRS5tZClcblxuKiBUYWlsd2luZCBTdGFydGVyIEtpdCBQYWdlOiBodHRwczovL3d3dy5jcmVhdGl2ZS10aW0uY29tL2xlYXJuaW5nLWxhYi90YWlsd2luZC1zdGFydGVyLWtpdC9wcmVzZW50YXRpb25cblxuKiBDb2RlZCBieSBDcmVhdGl2ZSBUaW1cblxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cbmApO1xuICAgIGRvY3VtZW50Lmluc2VydEJlZm9yZShjb21tZW50LCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICB9XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBDb21wb25lbnQsIHJvdXRlciwgY3R4IH0pIHtcbiAgICBsZXQgcGFnZVByb3BzID0ge307XG5cbiAgICBpZiAoQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgcGFnZVByb3BzID0gYXdhaXQgQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuICAgIH1cblxuICAgIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgTGF5b3V0ID0gQ29tcG9uZW50LmxheW91dCB8fCAoKHsgY2hpbGRyZW4gfSkgPT4gPD57Y2hpbGRyZW59PC8+KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxtZXRhXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxuICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0aXRsZT5Db21tdW5pdHkgQ29ubmVjdG9yPC90aXRsZT5cbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9WU9VUl9LRVlfSEVSRVwiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVhY3RET00iLCJBcHAiLCJIZWFkIiwiUm91dGVyIiwiUGFnZUNoYW5nZSIsImV2ZW50cyIsIm9uIiwidXJsIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsInJlbmRlciIsInBhdGgiLCJnZXRFbGVtZW50QnlJZCIsInVubW91bnRDb21wb25lbnRBdE5vZGUiLCJyZW1vdmUiLCJNeUFwcCIsImNvbXBvbmVudERpZE1vdW50IiwiY29tbWVudCIsImNyZWF0ZUNvbW1lbnQiLCJpbnNlcnRCZWZvcmUiLCJkb2N1bWVudEVsZW1lbnQiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkxheW91dCIsImxheW91dCIsImNoaWxkcmVuIiwiRnJhZ21lbnQiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJ0aXRsZSIsInNjcmlwdCIsInNyYyIsImdldEluaXRpYWxQcm9wcyIsInJvdXRlciIsImN0eCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ })

});