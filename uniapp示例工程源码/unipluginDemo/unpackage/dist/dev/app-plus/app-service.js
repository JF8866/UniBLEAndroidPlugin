(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/main.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages.json ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});
__definePage('pages/comm/comm', function () {return Vue.extend(__webpack_require__(/*! pages/comm/comm.vue?mpType=page */ 15).default);});


__definePage('pages/sample/richAlert', function () {return Vue.extend(__webpack_require__(/*! pages/sample/richAlert.vue?mpType=page */ 20).default);});

/***/ }),
/* 2 */
/*!**********************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/index/index.vue?mpType=page ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!****************************************************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c(
        "view",
        _vm._l(_vm._$s(2, "f", { forItems: _vm.devices }), function(
          item,
          index,
          $20,
          $30
        ) {
          return _c(
            "view",
            {
              key: _vm._$s(2, "f", { forIndex: $20, key: item.deviceId }),
              attrs: { _i: "2-" + $30 },
              on: {
                click: function($event) {
                  return _vm.onDeviceClick(item)
                }
              }
            },
            [
              _c("view", [
                _c("b", [
                  _vm._v(
                    _vm._$s(
                      "4-" + $30,
                      "t0-0",
                      _vm._s(item.name || item.localName || "Unknown Device")
                    )
                  )
                ])
              ]),
              _c("view", [
                _vm._v(_vm._$s("5-" + $30, "t0-0", _vm._s(item.deviceId)))
              ]),
              _c("view", [
                _vm._v(_vm._$s("6-" + $30, "t0-0", _vm._s(item.RSSI)))
              ]),
              _c(
                "view",
                {
                  staticClass: _vm._$s("7-" + $30, "sc", "text-area"),
                  attrs: { _i: "7-" + $30 }
                },
                [_vm._v(_vm._$s("7-" + $30, "t0-0", _vm._s(item.mfrData)))]
              ),
              _c("view")
            ]
          )
        }),
        0
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**********************************************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd2QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar util = __webpack_require__(/*! ../../util.js */ 8); //require这个js模块\nvar _default =\n{\n  data: function data() {\n    return {\n      devices: [] };\n\n  },\n\n  onLoad: function onLoad() {\n    var that = this;\n    __f__(\"log\", 'index.vue onLoad()', \" at pages/index/index.vue:28\");\n\n    //监听设备扫描\n    uni.onBluetoothDeviceFound(function (result) {\n      //console.log(result)\n      var devices = result.devices;\n      //E4E1120ACA0C\n      for (var i = 0; i < devices.length; i++) {\n        //console.log('############ onBluetoothDeviceFound ' + devices[i].deviceId)\n        devices[i].mfrData = util.array2Hex(devices[i].advertisData);\n        that.devices.push(devices[i]);\n      }\n    });\n\n    //初始化蓝牙适配器\n    uni.openBluetoothAdapter({\n      success: function success() {\n        __f__(\"log\", 'openBluetoothAdapter success', \" at pages/index/index.vue:45\");\n        //扫描设备\n        //uni.startPullDownRefresh()\n      },\n      fail: function fail(error) {\n        __f__(\"error\", 'openBluetoothAdapter fail', error, \" at pages/index/index.vue:50\");\n      } });\n\n  }, //onLoad\n\n  onPullDownRefresh: function onPullDownRefresh() {\n    __f__(\"log\", 'onPullDownRefresh', \" at pages/index/index.vue:56\");\n    this.devices = []; //每次扫描先清空列表\n    uni.startBluetoothDevicesDiscovery({\n      allowDuplicatesKey: false });\n\n    setTimeout(function () {\n      uni.stopPullDownRefresh();\n      uni.stopBluetoothDevicesDiscovery({\n        success: function success(result) {\n          __f__(\"info\", 'stopBluetoothDevicesDiscovery success', result, \" at pages/index/index.vue:65\");\n        },\n        fail: function fail(error) {\n          __f__(\"error\", 'stopBluetoothDevicesDiscovery fail', error, \" at pages/index/index.vue:68\");\n        } });\n\n    }, 3000);\n  }, //onPullDownRefresh\n\n  onShow: function onShow() {\n    __f__(\"log\", 'onShow()', \" at pages/index/index.vue:75\");\n  },\n  onUnload: function onUnload() {\n    __f__(\"warn\", 'onUnload', \" at pages/index/index.vue:78\");\n    uni.closeBluetoothAdapter({\n      success: function success(result) {\n        __f__(\"info\", 'closeBluetoothAdapter success', result, \" at pages/index/index.vue:81\");\n      },\n      fail: function fail(error) {\n        __f__(\"error\", 'closeBluetoothAdapter fail', error, \" at pages/index/index.vue:84\");\n      } });\n\n  },\n\n  methods: {\n    onDeviceClick: function onDeviceClick(device) {\n      //点击设备\n      __f__(\"info\", '点击设备', device, \" at pages/index/index.vue:92\");\n\n      uni.navigateTo({\n        url: '../comm/comm?deviceId=' + device.deviceId + '&deviceName=' + device.name });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEsdUQsQ0FBQTs7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGlCQURBOztBQUdBLEdBTEE7O0FBT0EsUUFQQSxvQkFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQVRBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQTtBQUNBO0FBQ0EsT0FSQTs7QUFVQSxHQWxDQSxFQWtDQTs7QUFFQSxtQkFwQ0EsK0JBb0NBO0FBQ0E7QUFDQSxzQkFGQSxDQUVBO0FBQ0E7QUFDQSwrQkFEQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxlQURBLG1CQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBLFlBSkEsZ0JBSUEsS0FKQSxFQUlBO0FBQ0E7QUFDQSxTQU5BOztBQVFBLEtBVkEsRUFVQSxJQVZBO0FBV0EsR0FyREEsRUFxREE7O0FBRUEsUUF2REEsb0JBdURBO0FBQ0E7QUFDQSxHQXpEQTtBQTBEQSxVQTFEQSxzQkEwREE7QUFDQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQSxVQUpBLGdCQUlBLEtBSkEsRUFJQTtBQUNBO0FBQ0EsT0FOQTs7QUFRQSxHQXBFQTs7QUFzRUE7QUFDQSxpQkFEQSx5QkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0ZBREE7O0FBR0EsS0FSQSxFQXRFQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHQ8IS0tIDxpbWFnZSBjbGFzcz1cImxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCI+PC9pbWFnZT4gLS0+XHJcblx0XHQ8dmlldz5cclxuXHRcdFx0PHZpZXcgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGRldmljZXNcIiA6a2V5PVwiaXRlbS5kZXZpY2VJZFwiIEBjbGljaz1cIm9uRGV2aWNlQ2xpY2soaXRlbSlcIj5cclxuXHRcdFx0XHQ8dmlldz48Yj57e2l0ZW0ubmFtZSB8fCBpdGVtLmxvY2FsTmFtZSB8fCAnVW5rbm93biBEZXZpY2UnfX08L2I+PC92aWV3PlxyXG5cdFx0XHRcdDx2aWV3Pnt7IGl0ZW0uZGV2aWNlSWQgfX08L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXc+e3tpdGVtLlJTU0l9fWRibTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInRleHQtYXJlYVwiPk1mckRhdGE6IHt7IGl0ZW0ubWZyRGF0YSB9fTwvdmlldz5cclxuXHRcdFx0XHQ8dmlldz4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTwvdmlldz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Y29uc3QgdXRpbCA9IHJlcXVpcmUoJy4uLy4uL3V0aWwuanMnKTsgLy9yZXF1aXJl6L+Z5LiqanPmqKHlnZdcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkZXZpY2VzOiBbXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG9uTG9hZCgpIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblx0XHRcdGNvbnNvbGUubG9nKCdpbmRleC52dWUgb25Mb2FkKCknKVxyXG5cclxuXHRcdFx0Ly/nm5HlkKzorr7lpIfmiavmj49cclxuXHRcdFx0dW5pLm9uQmx1ZXRvb3RoRGV2aWNlRm91bmQoZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0Ly9jb25zb2xlLmxvZyhyZXN1bHQpXHJcblx0XHRcdFx0dmFyIGRldmljZXMgPSByZXN1bHQuZGV2aWNlc1xyXG5cdFx0XHRcdC8vRTRFMTEyMEFDQTBDXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXZpY2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHQvL2NvbnNvbGUubG9nKCcjIyMjIyMjIyMjIyMgb25CbHVldG9vdGhEZXZpY2VGb3VuZCAnICsgZGV2aWNlc1tpXS5kZXZpY2VJZClcclxuXHRcdFx0XHRcdGRldmljZXNbaV0ubWZyRGF0YSA9IHV0aWwuYXJyYXkySGV4KGRldmljZXNbaV0uYWR2ZXJ0aXNEYXRhKVxyXG5cdFx0XHRcdFx0dGhhdC5kZXZpY2VzLnB1c2goZGV2aWNlc1tpXSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblxyXG5cdFx0XHQvL+WIneWni+WMluiTneeJmemAgumFjeWZqFxyXG5cdFx0XHR1bmkub3BlbkJsdWV0b290aEFkYXB0ZXIoe1xyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ29wZW5CbHVldG9vdGhBZGFwdGVyIHN1Y2Nlc3MnKVxyXG5cdFx0XHRcdFx0Ly/miavmj4/orr7lpIdcclxuXHRcdFx0XHRcdC8vdW5pLnN0YXJ0UHVsbERvd25SZWZyZXNoKClcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGVycm9yKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCdvcGVuQmx1ZXRvb3RoQWRhcHRlciBmYWlsJywgZXJyb3IpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSwgLy9vbkxvYWRcclxuXHJcblx0XHRvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ29uUHVsbERvd25SZWZyZXNoJylcclxuXHRcdFx0dGhpcy5kZXZpY2VzID0gW10gLy/mr4/mrKHmiavmj4/lhYjmuIXnqbrliJfooahcclxuXHRcdFx0dW5pLnN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XHJcblx0XHRcdFx0YWxsb3dEdXBsaWNhdGVzS2V5OiBmYWxzZVxyXG5cdFx0XHR9KVxyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVuaS5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcblx0XHRcdFx0dW5pLnN0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3MocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnc3RvcEJsdWV0b290aERldmljZXNEaXNjb3Zlcnkgc3VjY2VzcycsIHJlc3VsdClcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRmYWlsKGVycm9yKSB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ3N0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5IGZhaWwnLCBlcnJvcilcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LCAzMDAwKTtcclxuXHRcdH0sIC8vb25QdWxsRG93blJlZnJlc2hcclxuXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdvblNob3coKScpXHJcblx0XHR9LFxyXG5cdFx0b25VbmxvYWQoKSB7XHJcblx0XHRcdGNvbnNvbGUud2Fybignb25VbmxvYWQnKVxyXG5cdFx0XHR1bmkuY2xvc2VCbHVldG9vdGhBZGFwdGVyKHtcclxuXHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdjbG9zZUJsdWV0b290aEFkYXB0ZXIgc3VjY2VzcycsIHJlc3VsdClcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWwoZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2Nsb3NlQmx1ZXRvb3RoQWRhcHRlciBmYWlsJywgZXJyb3IpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9uRGV2aWNlQ2xpY2soZGV2aWNlKSB7XHJcblx0XHRcdFx0Ly/ngrnlh7vorr7lpIdcclxuXHRcdFx0XHRjb25zb2xlLmluZm8oJ+eCueWHu+iuvuWkhycsIGRldmljZSlcclxuXHJcblx0XHRcdFx0dW5pLm5hdmlnYXRlVG8oe1xyXG5cdFx0XHRcdFx0dXJsOiAnLi4vY29tbS9jb21tP2RldmljZUlkPScgKyBkZXZpY2UuZGV2aWNlSWQgKyAnJmRldmljZU5hbWU9JyArIGRldmljZS5uYW1lXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWFyZWEge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG5cdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzZycHg7XHJcblx0XHRjb2xvcjogIzhmOGY5NDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!********************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/util.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(Buffer, __f__) {function hex2Array(hex) {\n  //16进制字符串转字节数组\n  var result = [];\n  if (hex.length % 2 == 1) hex = '0' + hex;\n  for (var i = 0; i < hex.length; i += 2) {\n    result.push(parseInt(hex.substring(i, i + 2), 16));\n  }\n  result = Uint8Array.from(result);\n  return result.buffer;\n}\n\nfunction array2Hex(value) {\n  //value类型为 ArrayBuffer\n  var arr = new Uint8Array(value);\n  var hex = Buffer.from(arr).toString('hex').toUpperCase();\n  return hex;\n}\n\nfunction string2Array(str) {\n  //value类型为 ArrayBuffer\n  var arr = new Uint8Array(str.length);\n  for (var i = 0; i < str.length; i++) {\n    arr[i] = str.charCodeAt(i);\n  }\n  return arr.buffer;\n}\n\nfunction array2String(value) {\n  //value类型为 ArrayBuffer\n  var arr = new Uint8Array(value);\n  var str = String.fromCharCode.apply(null, arr);\n  __f__(\"error\", 'str=[' + str + ']', \" at util.js:32\");\n  return str;\n}\n\nfunction formatDate(fmt, date) {\n  var ret;\n  var opt = {\n    \"y+\": date.getFullYear().toString(), // 年\n    \"M+\": (date.getMonth() + 1).toString(), // 月\n    \"d+\": date.getDate().toString(), // 日\n    \"H+\": date.getHours().toString(), // 时\n    \"m+\": date.getMinutes().toString(), // 分\n    \"s+\": date.getSeconds().toString(), // 秒\n    \"S+\": date.getMilliseconds().toString() // 毫秒\n    // 有其他格式化字符需求可以继续添加，必须转化成字符串\n  };\n  for (var k in opt) {\n    ret = new RegExp(\"(\" + k + \")\").exec(fmt);\n    if (ret) {\n      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, \"0\"));\n    };\n  };\n  return fmt;\n}\n\nmodule.exports = {\n  hex2Array: hex2Array,\n  array2Hex: array2Hex,\n  string2Array: string2Array,\n  array2String: array2String,\n  formatDate: formatDate };\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 9).Buffer, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbC5qcyJdLCJuYW1lcyI6WyJoZXgyQXJyYXkiLCJoZXgiLCJyZXN1bHQiLCJsZW5ndGgiLCJpIiwicHVzaCIsInBhcnNlSW50Iiwic3Vic3RyaW5nIiwiVWludDhBcnJheSIsImZyb20iLCJidWZmZXIiLCJhcnJheTJIZXgiLCJ2YWx1ZSIsImFyciIsIkJ1ZmZlciIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJzdHJpbmcyQXJyYXkiLCJzdHIiLCJjaGFyQ29kZUF0IiwiYXJyYXkyU3RyaW5nIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiYXBwbHkiLCJmb3JtYXREYXRlIiwiZm10IiwiZGF0ZSIsInJldCIsIm9wdCIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImdldE1pbGxpc2Vjb25kcyIsImsiLCJSZWdFeHAiLCJleGVjIiwicmVwbGFjZSIsInBhZFN0YXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUEsOERBQVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQ3ZCO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJRCxHQUFHLENBQUNFLE1BQUosR0FBYSxDQUFiLElBQWtCLENBQXRCLEVBQXlCRixHQUFHLEdBQUcsTUFBTUEsR0FBWjtBQUN6QixPQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdILEdBQUcsQ0FBQ0UsTUFBeEIsRUFBZ0NDLENBQUMsSUFBSSxDQUFyQyxFQUF3QztBQUN2Q0YsVUFBTSxDQUFDRyxJQUFQLENBQVlDLFFBQVEsQ0FBQ0wsR0FBRyxDQUFDTSxTQUFKLENBQWNILENBQWQsRUFBaUJBLENBQUMsR0FBRyxDQUFyQixDQUFELEVBQTBCLEVBQTFCLENBQXBCO0FBQ0E7QUFDREYsUUFBTSxHQUFHTSxVQUFVLENBQUNDLElBQVgsQ0FBZ0JQLE1BQWhCLENBQVQ7QUFDQSxTQUFPQSxNQUFNLENBQUNRLE1BQWQ7QUFDQTs7QUFFRCxTQUFTQyxTQUFULENBQW1CQyxLQUFuQixFQUEwQjtBQUN6QjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJTCxVQUFKLENBQWVJLEtBQWYsQ0FBVjtBQUNBLE1BQUlYLEdBQUcsR0FBR2EsTUFBTSxDQUFDTCxJQUFQLENBQVlJLEdBQVosRUFBaUJFLFFBQWpCLENBQTBCLEtBQTFCLEVBQWlDQyxXQUFqQyxFQUFWO0FBQ0EsU0FBT2YsR0FBUDtBQUNBOztBQUVELFNBQVNnQixZQUFULENBQXNCQyxHQUF0QixFQUEyQjtBQUMxQjtBQUNBLE1BQUlMLEdBQUcsR0FBRyxJQUFJTCxVQUFKLENBQWVVLEdBQUcsQ0FBQ2YsTUFBbkIsQ0FBVjtBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2MsR0FBRyxDQUFDZixNQUF4QixFQUFnQ0MsQ0FBQyxFQUFqQyxFQUFxQztBQUNwQ1MsT0FBRyxDQUFDVCxDQUFELENBQUgsR0FBU2MsR0FBRyxDQUFDQyxVQUFKLENBQWVmLENBQWYsQ0FBVDtBQUNBO0FBQ0QsU0FBT1MsR0FBRyxDQUFDSCxNQUFYO0FBQ0E7O0FBRUQsU0FBU1UsWUFBVCxDQUFzQlIsS0FBdEIsRUFBNkI7QUFDNUI7QUFDQSxNQUFJQyxHQUFHLEdBQUcsSUFBSUwsVUFBSixDQUFlSSxLQUFmLENBQVY7QUFDQSxNQUFJTSxHQUFHLEdBQUdHLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsS0FBcEIsQ0FBMEIsSUFBMUIsRUFBZ0NWLEdBQWhDLENBQVY7QUFDQSxpQkFBYyxVQUFVSyxHQUFWLEdBQWdCLEdBQTlCO0FBQ0EsU0FBT0EsR0FBUDtBQUNBOztBQUVELFNBQVNNLFVBQVQsQ0FBb0JDLEdBQXBCLEVBQXlCQyxJQUF6QixFQUErQjtBQUM5QixNQUFJQyxHQUFKO0FBQ0EsTUFBTUMsR0FBRyxHQUFHO0FBQ1gsVUFBTUYsSUFBSSxDQUFDRyxXQUFMLEdBQW1CZCxRQUFuQixFQURLLEVBQzBCO0FBQ3JDLFVBQU0sQ0FBQ1csSUFBSSxDQUFDSSxRQUFMLEtBQWtCLENBQW5CLEVBQXNCZixRQUF0QixFQUZLLEVBRTZCO0FBQ3hDLFVBQU1XLElBQUksQ0FBQ0ssT0FBTCxHQUFlaEIsUUFBZixFQUhLLEVBR3NCO0FBQ2pDLFVBQU1XLElBQUksQ0FBQ00sUUFBTCxHQUFnQmpCLFFBQWhCLEVBSkssRUFJdUI7QUFDbEMsVUFBTVcsSUFBSSxDQUFDTyxVQUFMLEdBQWtCbEIsUUFBbEIsRUFMSyxFQUt5QjtBQUNwQyxVQUFNVyxJQUFJLENBQUNRLFVBQUwsR0FBa0JuQixRQUFsQixFQU5LLEVBTXlCO0FBQ3BDLFVBQU1XLElBQUksQ0FBQ1MsZUFBTCxHQUF1QnBCLFFBQXZCLEVBUEssQ0FPNkI7QUFDeEM7QUFSVyxHQUFaO0FBVUEsT0FBSyxJQUFJcUIsQ0FBVCxJQUFjUixHQUFkLEVBQW1CO0FBQ2xCRCxPQUFHLEdBQUcsSUFBSVUsTUFBSixDQUFXLE1BQU1ELENBQU4sR0FBVSxHQUFyQixFQUEwQkUsSUFBMUIsQ0FBK0JiLEdBQS9CLENBQU47QUFDQSxRQUFJRSxHQUFKLEVBQVM7QUFDUkYsU0FBRyxHQUFHQSxHQUFHLENBQUNjLE9BQUosQ0FBWVosR0FBRyxDQUFDLENBQUQsQ0FBZixFQUFxQkEsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPeEIsTUFBUCxJQUFpQixDQUFsQixHQUF3QnlCLEdBQUcsQ0FBQ1EsQ0FBRCxDQUEzQixHQUFtQ1IsR0FBRyxDQUFDUSxDQUFELENBQUgsQ0FBT0ksUUFBUCxDQUFnQmIsR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPeEIsTUFBdkIsRUFBK0IsR0FBL0IsQ0FBdkQsQ0FBTjtBQUNBO0FBQ0Q7QUFDRCxTQUFPc0IsR0FBUDtBQUNBOztBQUVEZ0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCMUMsV0FBUyxFQUFFQSxTQURLO0FBRWhCVyxXQUFTLEVBQUVBLFNBRks7QUFHaEJNLGNBQVksRUFBRUEsWUFIRTtBQUloQkcsY0FBWSxFQUFFQSxZQUpFO0FBS2hCSSxZQUFVLEVBQUVBLFVBTEksRUFBakIsQyIsImZpbGUiOiI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaGV4MkFycmF5KGhleCkge1xuXHQvLzE26L+b5Yi25a2X56ym5Liy6L2s5a2X6IqC5pWw57uEXG5cdHZhciByZXN1bHQgPSBbXTtcblx0aWYgKGhleC5sZW5ndGggJSAyID09IDEpIGhleCA9ICcwJyArIGhleFxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGhleC5sZW5ndGg7IGkgKz0gMikge1xuXHRcdHJlc3VsdC5wdXNoKHBhcnNlSW50KGhleC5zdWJzdHJpbmcoaSwgaSArIDIpLCAxNikpO1xuXHR9XG5cdHJlc3VsdCA9IFVpbnQ4QXJyYXkuZnJvbShyZXN1bHQpXG5cdHJldHVybiByZXN1bHQuYnVmZmVyXG59XG5cbmZ1bmN0aW9uIGFycmF5MkhleCh2YWx1ZSkge1xuXHQvL3ZhbHVl57G75Z6L5Li6IEFycmF5QnVmZmVyXG5cdGxldCBhcnIgPSBuZXcgVWludDhBcnJheSh2YWx1ZSlcblx0dmFyIGhleCA9IEJ1ZmZlci5mcm9tKGFycikudG9TdHJpbmcoJ2hleCcpLnRvVXBwZXJDYXNlKClcblx0cmV0dXJuIGhleFxufVxuXG5mdW5jdGlvbiBzdHJpbmcyQXJyYXkoc3RyKSB7XG5cdC8vdmFsdWXnsbvlnovkuLogQXJyYXlCdWZmZXJcblx0bGV0IGFyciA9IG5ldyBVaW50OEFycmF5KHN0ci5sZW5ndGgpXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG5cdFx0YXJyW2ldID0gc3RyLmNoYXJDb2RlQXQoaSlcblx0fVxuXHRyZXR1cm4gYXJyLmJ1ZmZlclxufVxuXG5mdW5jdGlvbiBhcnJheTJTdHJpbmcodmFsdWUpIHtcblx0Ly92YWx1Zeexu+Wei+S4uiBBcnJheUJ1ZmZlclxuXHRsZXQgYXJyID0gbmV3IFVpbnQ4QXJyYXkodmFsdWUpXG5cdHZhciBzdHIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIGFycilcblx0Y29uc29sZS5lcnJvcignc3RyPVsnICsgc3RyICsgJ10nKVxuXHRyZXR1cm4gc3RyXG59XG5cbmZ1bmN0aW9uIGZvcm1hdERhdGUoZm10LCBkYXRlKSB7XG5cdGxldCByZXQ7XG5cdGNvbnN0IG9wdCA9IHtcblx0XHRcInkrXCI6IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpLCAvLyDlubRcblx0XHRcIk0rXCI6IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpLCAvLyDmnIhcblx0XHRcImQrXCI6IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCksIC8vIOaXpVxuXHRcdFwiSCtcIjogZGF0ZS5nZXRIb3VycygpLnRvU3RyaW5nKCksIC8vIOaXtlxuXHRcdFwibStcIjogZGF0ZS5nZXRNaW51dGVzKCkudG9TdHJpbmcoKSwgLy8g5YiGXG5cdFx0XCJzK1wiOiBkYXRlLmdldFNlY29uZHMoKS50b1N0cmluZygpLCAvLyDnp5Jcblx0XHRcIlMrXCI6IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkudG9TdHJpbmcoKSAvLyDmr6vnp5Jcblx0XHQvLyDmnInlhbbku5bmoLzlvI/ljJblrZfnrKbpnIDmsYLlj6/ku6Xnu6fnu63mt7vliqDvvIzlv4XpobvovazljJbmiJDlrZfnrKbkuLJcblx0fTtcblx0Zm9yIChsZXQgayBpbiBvcHQpIHtcblx0XHRyZXQgPSBuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS5leGVjKGZtdCk7XG5cdFx0aWYgKHJldCkge1xuXHRcdFx0Zm10ID0gZm10LnJlcGxhY2UocmV0WzFdLCAocmV0WzFdLmxlbmd0aCA9PSAxKSA/IChvcHRba10pIDogKG9wdFtrXS5wYWRTdGFydChyZXRbMV0ubGVuZ3RoLCBcIjBcIikpKVxuXHRcdH07XG5cdH07XG5cdHJldHVybiBmbXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRoZXgyQXJyYXk6IGhleDJBcnJheSxcblx0YXJyYXkySGV4OiBhcnJheTJIZXgsXG5cdHN0cmluZzJBcnJheTogc3RyaW5nMkFycmF5LFxuXHRhcnJheTJTdHJpbmc6IGFycmF5MlN0cmluZyxcblx0Zm9ybWF0RGF0ZTogZm9ybWF0RGF0ZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 11)
var ieee754 = __webpack_require__(/*! ieee754 */ 12)
var isArray = __webpack_require__(/*! isarray */ 13)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 10)))

/***/ }),
/* 10 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 12 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 13 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */
/*!********************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/comm/comm.vue?mpType=page ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comm.vue?vue&type=template&id=3b379e54&filter-modules=eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ%3D%3D&mpType=page */ 16);\n/* harmony import */ var _comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comm.vue?vue&type=script&lang=js&mpType=page */ 18);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/comm/comm.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb1M7QUFDcFM7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxrUUFBTTtBQUNSLEVBQUUsMlFBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc1FBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2NvbW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiMzc5ZTU0JmZpbHRlci1tb2R1bGVzPWV5SjJZMjl1YzI5c1pTSTZleUowZVhCbElqb2ljbVZ1WkdWeWFuTWlMQ0pqYjI1MFpXNTBJam9pSWl3aWMzUmhjblFpT2pZME9Dd2lZWFIwY25NaU9uc2liVzlrZFd4bElqb2lkbU52Ym5OdmJHVWlMQ0pzWVc1bklqb2lhbk1pZlN3aVpXNWtJam8zTVRWOWZRJTNEJTNEJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb21tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9jb21tLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2NvbW0vY29tbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/comm/comm.vue?vue&type=template&id=3b379e54&filter-modules=eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ%3D%3D&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./comm.vue?vue&type=template&id=3b379e54&filter-modules=eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ%3D%3D&mpType=page */ 17);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_template_id_3b379e54_filter_modules_eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ_3D_3D_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 17 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/comm/comm.vue?vue&type=template&id=3b379e54&filter-modules=eyJ2Y29uc29sZSI6eyJ0eXBlIjoicmVuZGVyanMiLCJjb250ZW50IjoiIiwic3RhcnQiOjY0OCwiYXR0cnMiOnsibW9kdWxlIjoidmNvbnNvbGUiLCJsYW5nIjoianMifSwiZW5kIjo3MTV9fQ%3D%3D&mpType=page ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c("view", [_vm._v(_vm._$s(1, "t0-0", _vm._s(_vm.deviceName)))]),
    _c("view", [_vm._v(_vm._$s(2, "t0-0", _vm._s(_vm.deviceId)))]),
    _c("view", [_vm._v(_vm._$s(3, "t0-0", _vm._s(_vm.connectionState)))]),
    _c(
      "scroll-view",
      {
        staticClass: _vm._$s(4, "sc", "logArea"),
        attrs: {
          "scroll-top": _vm._$s(4, "a-scroll-top", _vm.scrollTop),
          _i: 4
        }
      },
      _vm._l(_vm._$s(5, "f", { forItems: _vm.log }), function(
        item,
        index,
        $20,
        $30
      ) {
        return _c(
          "view",
          { key: _vm._$s(5, "f", { forIndex: $20, key: item.deviceId }) },
          [_c("view", [_vm._v(_vm._$s("6-" + $30, "t0-0", _vm._s(item)))])]
        )
      }),
      0
    ),
    _c("textarea", {
      staticClass: _vm._$s(7, "sc", "tx-input"),
      attrs: { _i: 7 },
      on: { input: _vm.bindTextAreaInput, confirm: _vm.bindTextAreaConfirm }
    }),
    _c("button", {
      attrs: { _i: 8 },
      on: {
        click: function($event) {
          return _vm.send(_vm.txHexValue)
        }
      }
    }),
    _c("button", {
      attrs: { _i: 9 },
      on: {
        click: function($event) {
          return _vm.connect()
        }
      }
    })
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 18 */
/*!********************************************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/comm/comm.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./comm.vue?vue&type=script&lang=js&mpType=page */ 19);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_comm_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV2QixDQUFnQixxdEJBQUcsRUFBQyIsImZpbGUiOiIxOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/comm/comm.vue?vue&type=script&lang=js&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n// 获取 module \nvar ttcBle = uni.requireNativePlugin(\"TestModule\");\nvar util = __webpack_require__(/*! ../../util.js */ 8); //require这个js模块\n\nvar SERVICE_UUID = '00001000-0000-1000-8000-00805F9B34FB'; //APP收发数据的服务UUID\nvar WRITE_UUID = '00001001-0000-1000-8000-00805F9B34FB'; //APP发数据的特征UUID\nvar NOTIFY_UUID = '00001002-0000-1000-8000-00805F9B34FB'; //APP收数据的特征UUID\nvar REG_WRITE_UUID = '00001003-0000-1000-8000-00805F9B34FB'; //写入寄存器的特征UUID\nvar REG_UUID = '00001005-0000-1000-8000-00805F9B34FB'; //切换寄存器的特征UUID\nvar _default =\n{\n  data: function data() {\n    return {\n      deviceId: '',\n      deviceName: '',\n      connectionState: '未连接',\n      log: [],\n      scrollTop: 0,\n      txHexValue: '313233343536' };\n\n  },\n  onLoad: function onLoad(option) {\n    var that = this;\n\n    __f__(\"log\", 'onLoad()', option, \" at pages/comm/comm.vue:46\");\n    this.deviceId = option.deviceId;\n    this.deviceName = option.deviceName;\n\n    //监听蓝牙交互事件\n    ttcBle.init(function (res) {\n      __f__(\"log\", res, \" at pages/comm/comm.vue:52\");\n      switch (res.bleEvent) {\n        case 'onServicesDiscovered':\n          that.appendLog('连接成功，准备更新MTU');\n          ttcBle.requestMtu({\n            deviceId: res.deviceId,\n            mtu: 251 });\n\n          break;\n        case 'onMtuChanged':\n          if (res.status == 0) {\n            // MTU更新成功\n            that.appendLog('MTU更新成功，准备开启Notify');\n          }\n          ttcBle.notifyCharacteristic({\n            deviceId: res.deviceId,\n            serviceId: SERVICE_UUID,\n            characteristicId: NOTIFY_UUID,\n            enable: true,\n            callback: function callback(res) {\n              __f__(\"log\", res, \" at pages/comm/comm.vue:72\");\n            } });\n\n          break;\n        case 'onDescriptorWrite':\n          if (res.status == 0) {\n            //notify开成功，可以进行数据交互了\n            that.appendLog('notify开成功，可以进行数据交互了');\n          }\n          break;}\n\n    });\n  },\n  onShow: function onShow() {\n    var that = this;\n    uni.getSystemInfo({\n      success: function success(result) {\n        __f__(\"info\", 'getSystemInfo success', result, \" at pages/comm/comm.vue:89\");\n        that.txAreaWidth = result.screenWidth * result.pixelRatio - 4; // border宽度2px\n      },\n      fail: function fail(error) {\n        __f__(\"error\", 'getSystemInfo fail', error, \" at pages/comm/comm.vue:93\");\n      } });\n\n  },\n  onUnload: function onUnload() {\n    __f__(\"warn\", 'onUnload()', \" at pages/comm/comm.vue:98\");\n    ttcBle.disconnect({\n      deviceId: this.deviceId,\n      callback: function callback(result) {\n        __f__(\"info\", 'disconnect', result, \" at pages/comm/comm.vue:102\");\n      } });\n\n  },\n  methods: {\n    connect: function connect() {\n      //连接设备\n      this.appendLog('开始连接设备...');\n      ttcBle.connect({\n        deviceId: this.deviceId });\n\n    },\n    bindTextAreaInput: function bindTextAreaInput(e) {\n      this.txHexValue = e.detail.value;\n      __f__(\"log\", '输入数据: ' + this.txHexValue, \" at pages/comm/comm.vue:116\");\n    },\n    bindTextAreaConfirm: function bindTextAreaConfirm(e) {\n      __f__(\"log\", '输入Confirm: ' + e.detail.value, \" at pages/comm/comm.vue:119\");\n      this.writeData(e.detail.value);\n    },\n    send: function send(hexStr) {\n      __f__(\"log\", '发送数据: ' + hexStr, \" at pages/comm/comm.vue:123\");\n      this.writeData(hexStr);\n    },\n    writeData: function writeData(hexStr) {\n      ttcBle.writeCharacteristic({\n        deviceId: this.deviceId,\n        serviceId: SERVICE_UUID,\n        characteristicId: WRITE_UUID,\n        value: util.hex2Array(hexStr),\n        callback: function callback(result) {\n          __f__(\"info\", 'writeCharacteristic', result, \" at pages/comm/comm.vue:133\");\n        } });\n\n    },\n    writeBeaconPassword: function writeBeaconPassword(password) {\n      var that = this;\n      /* console.log('SERVICE_UUID=' + SERVICE_UUID)\n                       console.log('REG_UUID=' + REG_UUID)\n                       const buffer = new ArrayBuffer(1)\n                       const dataView = new DataView(buffer)\n                       dataView.setUint8(0, 0x0F) */\n      uni.writeBLECharacteristicValue({\n        deviceId: this.deviceId,\n        serviceId: SERVICE_UUID, // 1000\n        characteristicId: REG_UUID, // 1005\n        value: util.hex2Array('0F'), // 写入密码寄存器地址\n        success: function success(result) {\n          __f__(\"info\", 'writeBLECharacteristicValue success', result, \" at pages/comm/comm.vue:150\");\n          that.appendLog('写入1005成功');\n          // 1005写入成功再写入1003\n          setTimeout(function () {\n            //发送 Beacon 密码\n            uni.writeBLECharacteristicValue({\n              deviceId: that.deviceId,\n              serviceId: SERVICE_UUID, // 1000\n              characteristicId: REG_WRITE_UUID, // 1003\n              value: util.hex2Array(password),\n              success: function success() {\n                that.appendLog('写入1003成功');\n              },\n              fail: function fail() {\n                that.appendLog('写入1003失败' + JSON.stringify(error));\n              } });\n\n          }, 100);\n\n        },\n        fail: function fail(error) {\n          __f__(\"error\", 'writeBLECharacteristicValue fail', error, \" at pages/comm/comm.vue:171\");\n          that.appendLog('写入1005失败' + JSON.stringify(error));\n        } });\n\n    },\n    appendLog: function appendLog(msg) {\n      if (this.log.length > 20) this.log.splice(0, 1);\n      __f__(\"error\", 'this.log.length=' + this.log.length, \" at pages/comm/comm.vue:178\");\n      this.log.push(util.formatDate('HH:mm:ss.SSS', new Date()) + ' - ' + msg);\n      this.scrollTop = 100 * this.log.length;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvY29tbS9jb21tLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQTtBQUNBLHVELENBQUE7O0FBRUEsMEQsQ0FBQTtBQUNBLHdELENBQUE7QUFDQSx5RCxDQUFBO0FBQ0EsNEQsQ0FBQTtBQUNBLHNELENBQUE7O0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLG9CQUZBO0FBR0EsNEJBSEE7QUFJQSxhQUpBO0FBS0Esa0JBTEE7QUFNQSxnQ0FOQTs7QUFRQSxHQVZBO0FBV0EsUUFYQSxrQkFXQSxNQVhBLEVBV0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLG9CQUZBOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSxtQ0FGQTtBQUdBLHlDQUhBO0FBSUEsd0JBSkE7QUFLQSxvQkFMQSxvQkFLQSxHQUxBLEVBS0E7QUFDQTtBQUNBLGFBUEE7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBNUJBOztBQThCQSxLQWhDQTtBQWlDQSxHQXBEQTtBQXFEQSxRQXJEQSxvQkFxREE7QUFDQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBLHNFQUZBLENBRUE7QUFDQSxPQUpBO0FBS0EsVUFMQSxnQkFLQSxLQUxBLEVBS0E7QUFDQTtBQUNBLE9BUEE7O0FBU0EsR0FoRUE7QUFpRUEsVUFqRUEsc0JBaUVBO0FBQ0E7QUFDQTtBQUNBLDZCQURBO0FBRUEsY0FGQSxvQkFFQSxNQUZBLEVBRUE7QUFDQTtBQUNBLE9BSkE7O0FBTUEsR0F6RUE7QUEwRUE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBREE7O0FBR0EsS0FQQTtBQVFBLHFCQVJBLDZCQVFBLENBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQSxLQVhBO0FBWUEsdUJBWkEsK0JBWUEsQ0FaQSxFQVlBO0FBQ0E7QUFDQTtBQUNBLEtBZkE7QUFnQkEsUUFoQkEsZ0JBZ0JBLE1BaEJBLEVBZ0JBO0FBQ0E7QUFDQTtBQUNBLEtBbkJBO0FBb0JBLGFBcEJBLHFCQW9CQSxNQXBCQSxFQW9CQTtBQUNBO0FBQ0EsK0JBREE7QUFFQSwrQkFGQTtBQUdBLG9DQUhBO0FBSUEscUNBSkE7QUFLQSxnQkFMQSxvQkFLQSxNQUxBLEVBS0E7QUFDQTtBQUNBLFNBUEE7O0FBU0EsS0E5QkE7QUErQkEsdUJBL0JBLCtCQStCQSxRQS9CQSxFQStCQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQSwrQkFEQTtBQUVBLCtCQUZBLEVBRUE7QUFDQSxrQ0FIQSxFQUdBO0FBQ0EsbUNBSkEsRUFJQTtBQUNBLGVBTEEsbUJBS0EsTUFMQSxFQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBREE7QUFFQSxxQ0FGQSxFQUVBO0FBQ0EsOENBSEEsRUFHQTtBQUNBLDZDQUpBO0FBS0EscUJBTEEscUJBS0E7QUFDQTtBQUNBLGVBUEE7QUFRQSxrQkFSQSxrQkFRQTtBQUNBO0FBQ0EsZUFWQTs7QUFZQSxXQWRBLEVBY0EsR0FkQTs7QUFnQkEsU0F6QkE7QUEwQkEsWUExQkEsZ0JBMEJBLEtBMUJBLEVBMEJBO0FBQ0E7QUFDQTtBQUNBLFNBN0JBOztBQStCQSxLQXJFQTtBQXNFQSxhQXRFQSxxQkFzRUEsR0F0RUEsRUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0VBLEVBMUVBLEUiLCJmaWxlIjoiMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dmlldz57e2RldmljZU5hbWV9fTwvdmlldz5cclxuXHRcdDx2aWV3Pnt7ZGV2aWNlSWR9fTwvdmlldz5cclxuXHRcdDx2aWV3Pnt7Y29ubmVjdGlvblN0YXRlfX08L3ZpZXc+XHJcblx0XHQ8c2Nyb2xsLXZpZXcgY2xhc3M9XCJsb2dBcmVhXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgOnNob3ctc2Nyb2xsYmFyPVwidHJ1ZVwiIDpzY3JvbGwtdG9wPVwic2Nyb2xsVG9wXCI+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBsb2dcIiA6a2V5PVwiaXRlbS5kZXZpY2VJZFwiPlxyXG5cdFx0XHRcdDx2aWV3Pnt7aXRlbX19PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0PHRleHRhcmVhIGNsYXNzPVwidHgtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIuWcqOatpOi+k+WFpTE26L+b5Yi25pWw5o2uXCIgQGlucHV0PVwiYmluZFRleHRBcmVhSW5wdXRcIiBjb25maXJtLXR5cGU9XCJzZW5kXCJcclxuXHRcdFx0QGNvbmZpcm09XCJiaW5kVGV4dEFyZWFDb25maXJtXCIgdmFsdWU9XCIzMTMyMzMzNDM1MzZcIiAvPlxyXG5cdFx0PGJ1dHRvbiBAY2xpY2s9XCJzZW5kKHR4SGV4VmFsdWUpXCI+5Y+R6YCBPC9idXR0b24+XHJcblx0XHQ8YnV0dG9uIEBjbGljaz1cImNvbm5lY3QoKVwiPui/nuaOpTwvYnV0dG9uPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdCBtb2R1bGU9XCJ2Y29uc29sZVwiIGxhbmc9XCJyZW5kZXJqc1wiPlxyXG5cdGltcG9ydCBWQ29uc29sZSBmcm9tICcuLi8uLi92Y29uc29sZS5taW4uanMnXHJcblx0bmV3IFZDb25zb2xlKCk7XHJcbjwvc2NyaXB0PlxyXG48c2NyaXB0PlxyXG5cdC8vIOiOt+WPliBtb2R1bGUgXHJcblx0Y29uc3QgdHRjQmxlID0gdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4oXCJUZXN0TW9kdWxlXCIpO1xyXG5cdGNvbnN0IHV0aWwgPSByZXF1aXJlKCcuLi8uLi91dGlsLmpzJyk7IC8vcmVxdWlyZei/meS4qmpz5qih5Z2XXHJcblxyXG5cdGNvbnN0IFNFUlZJQ0VfVVVJRCA9ICcwMDAwMTAwMC0wMDAwLTEwMDAtODAwMC0wMDgwNUY5QjM0RkInIC8vQVBQ5pS25Y+R5pWw5o2u55qE5pyN5YqhVVVJRFxyXG5cdGNvbnN0IFdSSVRFX1VVSUQgPSAnMDAwMDEwMDEtMDAwMC0xMDAwLTgwMDAtMDA4MDVGOUIzNEZCJyAvL0FQUOWPkeaVsOaNrueahOeJueW+gVVVSURcclxuXHRjb25zdCBOT1RJRllfVVVJRCA9ICcwMDAwMTAwMi0wMDAwLTEwMDAtODAwMC0wMDgwNUY5QjM0RkInIC8vQVBQ5pS25pWw5o2u55qE54m55b6BVVVJRFxyXG5cdGNvbnN0IFJFR19XUklURV9VVUlEID0gJzAwMDAxMDAzLTAwMDAtMTAwMC04MDAwLTAwODA1RjlCMzRGQicgLy/lhpnlhaXlr4TlrZjlmajnmoTnibnlvoFVVUlEXHJcblx0Y29uc3QgUkVHX1VVSUQgPSAnMDAwMDEwMDUtMDAwMC0xMDAwLTgwMDAtMDA4MDVGOUIzNEZCJyAvL+WIh+aNouWvhOWtmOWZqOeahOeJueW+gVVVSURcclxuXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHRkZXZpY2VJZDogJycsXHJcblx0XHRcdFx0ZGV2aWNlTmFtZTogJycsXHJcblx0XHRcdFx0Y29ubmVjdGlvblN0YXRlOiAn5pyq6L+e5o6lJyxcclxuXHRcdFx0XHRsb2c6IFtdLFxyXG5cdFx0XHRcdHNjcm9sbFRvcDogMCxcclxuXHRcdFx0XHR0eEhleFZhbHVlOiAnMzEzMjMzMzQzNTM2JyxcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG9uTG9hZChvcHRpb24pIHtcclxuXHRcdFx0dmFyIHRoYXQgPSB0aGlzXHJcblxyXG5cdFx0XHRjb25zb2xlLmxvZygnb25Mb2FkKCknLCBvcHRpb24pXHJcblx0XHRcdHRoaXMuZGV2aWNlSWQgPSBvcHRpb24uZGV2aWNlSWRcclxuXHRcdFx0dGhpcy5kZXZpY2VOYW1lID0gb3B0aW9uLmRldmljZU5hbWVcclxuXHJcblx0XHRcdC8v55uR5ZCs6JOd54mZ5Lqk5LqS5LqL5Lu2XHJcblx0XHRcdHR0Y0JsZS5pbml0KGZ1bmN0aW9uKHJlcykge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XHJcblx0XHRcdFx0c3dpdGNoIChyZXMuYmxlRXZlbnQpIHtcclxuXHRcdFx0XHRcdGNhc2UgJ29uU2VydmljZXNEaXNjb3ZlcmVkJzpcclxuXHRcdFx0XHRcdFx0dGhhdC5hcHBlbmRMb2coJ+i/nuaOpeaIkOWKn++8jOWHhuWkh+abtOaWsE1UVScpO1xyXG5cdFx0XHRcdFx0XHR0dGNCbGUucmVxdWVzdE10dSh7XHJcblx0XHRcdFx0XHRcdFx0ZGV2aWNlSWQ6IHJlcy5kZXZpY2VJZCxcclxuXHRcdFx0XHRcdFx0XHRtdHU6IDI1MVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlICdvbk10dUNoYW5nZWQnOlxyXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1cyA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gTVRV5pu05paw5oiQ5YqfXHJcblx0XHRcdFx0XHRcdFx0dGhhdC5hcHBlbmRMb2coJ01UVeabtOaWsOaIkOWKn++8jOWHhuWkh+W8gOWQr05vdGlmeScpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHR0Y0JsZS5ub3RpZnlDaGFyYWN0ZXJpc3RpYyh7XHJcblx0XHRcdFx0XHRcdFx0ZGV2aWNlSWQ6IHJlcy5kZXZpY2VJZCxcclxuXHRcdFx0XHRcdFx0XHRzZXJ2aWNlSWQ6IFNFUlZJQ0VfVVVJRCxcclxuXHRcdFx0XHRcdFx0XHRjaGFyYWN0ZXJpc3RpY0lkOiBOT1RJRllfVVVJRCxcclxuXHRcdFx0XHRcdFx0XHRlbmFibGU6IHRydWUsXHJcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2socmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0Y2FzZSAnb25EZXNjcmlwdG9yV3JpdGUnOlxyXG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1cyA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly9ub3RpZnnlvIDmiJDlip/vvIzlj6/ku6Xov5vooYzmlbDmja7kuqTkupLkuoZcclxuXHRcdFx0XHRcdFx0XHR0aGF0LmFwcGVuZExvZygnbm90aWZ55byA5oiQ5Yqf77yM5Y+v5Lul6L+b6KGM5pWw5o2u5Lqk5LqS5LqGJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRvblNob3coKSB7XHJcblx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHR1bmkuZ2V0U3lzdGVtSW5mbyh7XHJcblx0XHRcdFx0c3VjY2VzcyhyZXN1bHQpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuaW5mbygnZ2V0U3lzdGVtSW5mbyBzdWNjZXNzJywgcmVzdWx0KVxyXG5cdFx0XHRcdFx0dGhhdC50eEFyZWFXaWR0aCA9IHJlc3VsdC5zY3JlZW5XaWR0aCAqIHJlc3VsdC5waXhlbFJhdGlvIC0gNCAvLyBib3JkZXLlrr3luqYycHhcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWwoZXJyb3IpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2dldFN5c3RlbUluZm8gZmFpbCcsIGVycm9yKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRvblVubG9hZCgpIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKCdvblVubG9hZCgpJylcclxuXHRcdFx0dHRjQmxlLmRpc2Nvbm5lY3Qoe1xyXG5cdFx0XHRcdGRldmljZUlkOiB0aGlzLmRldmljZUlkLFxyXG5cdFx0XHRcdGNhbGxiYWNrKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0Y29uc29sZS5pbmZvKCdkaXNjb25uZWN0JywgcmVzdWx0KVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGNvbm5lY3QoKSB7XHJcblx0XHRcdFx0Ly/ov57mjqXorr7lpIdcclxuXHRcdFx0XHR0aGlzLmFwcGVuZExvZygn5byA5aeL6L+e5o6l6K6+5aSHLi4uJylcclxuXHRcdFx0XHR0dGNCbGUuY29ubmVjdCh7XHJcblx0XHRcdFx0XHRkZXZpY2VJZDogdGhpcy5kZXZpY2VJZFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kVGV4dEFyZWFJbnB1dChlKSB7XHJcblx0XHRcdFx0dGhpcy50eEhleFZhbHVlID0gZS5kZXRhaWwudmFsdWVcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6L6T5YWl5pWw5o2uOiAnICsgdGhpcy50eEhleFZhbHVlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRiaW5kVGV4dEFyZWFDb25maXJtKGUpIHtcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6L6T5YWlQ29uZmlybTogJyArIGUuZGV0YWlsLnZhbHVlKVxyXG5cdFx0XHRcdHRoaXMud3JpdGVEYXRhKGUuZGV0YWlsLnZhbHVlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzZW5kKGhleFN0cikge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCflj5HpgIHmlbDmja46ICcgKyBoZXhTdHIpXHJcblx0XHRcdFx0dGhpcy53cml0ZURhdGEoaGV4U3RyKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR3cml0ZURhdGEoaGV4U3RyKSB7XHJcblx0XHRcdFx0dHRjQmxlLndyaXRlQ2hhcmFjdGVyaXN0aWMoe1xyXG5cdFx0XHRcdFx0ZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXHJcblx0XHRcdFx0XHRzZXJ2aWNlSWQ6IFNFUlZJQ0VfVVVJRCxcclxuXHRcdFx0XHRcdGNoYXJhY3RlcmlzdGljSWQ6IFdSSVRFX1VVSUQsXHJcblx0XHRcdFx0XHR2YWx1ZTogdXRpbC5oZXgyQXJyYXkoaGV4U3RyKSxcclxuXHRcdFx0XHRcdGNhbGxiYWNrKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmluZm8oJ3dyaXRlQ2hhcmFjdGVyaXN0aWMnLCByZXN1bHQpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0d3JpdGVCZWFjb25QYXNzd29yZChwYXNzd29yZCkge1xyXG5cdFx0XHRcdHZhciB0aGF0ID0gdGhpc1xyXG5cdFx0XHRcdC8qIGNvbnNvbGUubG9nKCdTRVJWSUNFX1VVSUQ9JyArIFNFUlZJQ0VfVVVJRClcclxuXHRcdFx0XHRjb25zb2xlLmxvZygnUkVHX1VVSUQ9JyArIFJFR19VVUlEKVxyXG5cdFx0XHRcdGNvbnN0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigxKVxyXG5cdFx0XHRcdGNvbnN0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcilcclxuXHRcdFx0XHRkYXRhVmlldy5zZXRVaW50OCgwLCAweDBGKSAqL1xyXG5cdFx0XHRcdHVuaS53cml0ZUJMRUNoYXJhY3RlcmlzdGljVmFsdWUoe1xyXG5cdFx0XHRcdFx0ZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXHJcblx0XHRcdFx0XHRzZXJ2aWNlSWQ6IFNFUlZJQ0VfVVVJRCwgLy8gMTAwMFxyXG5cdFx0XHRcdFx0Y2hhcmFjdGVyaXN0aWNJZDogUkVHX1VVSUQsIC8vIDEwMDVcclxuXHRcdFx0XHRcdHZhbHVlOiB1dGlsLmhleDJBcnJheSgnMEYnKSwgLy8g5YaZ5YWl5a+G56CB5a+E5a2Y5Zmo5Zyw5Z2AXHJcblx0XHRcdFx0XHRzdWNjZXNzKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmluZm8oJ3dyaXRlQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSBzdWNjZXNzJywgcmVzdWx0KVxyXG5cdFx0XHRcdFx0XHR0aGF0LmFwcGVuZExvZygn5YaZ5YWlMTAwNeaIkOWKnycpXHJcblx0XHRcdFx0XHRcdC8vIDEwMDXlhpnlhaXmiJDlip/lho3lhpnlhaUxMDAzXHJcblx0XHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly/lj5HpgIEgQmVhY29uIOWvhueggVxyXG5cdFx0XHRcdFx0XHRcdHVuaS53cml0ZUJMRUNoYXJhY3RlcmlzdGljVmFsdWUoe1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGV2aWNlSWQ6IHRoYXQuZGV2aWNlSWQsXHJcblx0XHRcdFx0XHRcdFx0XHRzZXJ2aWNlSWQ6IFNFUlZJQ0VfVVVJRCwgLy8gMTAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2hhcmFjdGVyaXN0aWNJZDogUkVHX1dSSVRFX1VVSUQsIC8vIDEwMDNcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB1dGlsLmhleDJBcnJheShwYXNzd29yZCksXHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGF0LmFwcGVuZExvZygn5YaZ5YWlMTAwM+aIkOWKnycpXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0ZmFpbCgpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5hcHBlbmRMb2coJ+WGmeWFpTEwMDPlpLHotKUnICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdH0sIDEwMClcclxuXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZmFpbChlcnJvcikge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKCd3cml0ZUJMRUNoYXJhY3RlcmlzdGljVmFsdWUgZmFpbCcsIGVycm9yKVxyXG5cdFx0XHRcdFx0XHR0aGF0LmFwcGVuZExvZygn5YaZ5YWlMTAwNeWksei0pScgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0YXBwZW5kTG9nKG1zZykge1xyXG5cdFx0XHRcdGlmICh0aGlzLmxvZy5sZW5ndGggPiAyMCkgdGhpcy5sb2cuc3BsaWNlKDAsIDEpXHJcblx0XHRcdFx0Y29uc29sZS5lcnJvcigndGhpcy5sb2cubGVuZ3RoPScgKyB0aGlzLmxvZy5sZW5ndGgpXHJcblx0XHRcdFx0dGhpcy5sb2cucHVzaCh1dGlsLmZvcm1hdERhdGUoJ0hIOm1tOnNzLlNTUycsIG5ldyBEYXRlKCkpICsgJyAtICcgKyBtc2cpXHJcblx0XHRcdFx0dGhpcy5zY3JvbGxUb3AgPSAxMDAgKiB0aGlzLmxvZy5sZW5ndGhcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC50eC1pbnB1dCB7XHJcblx0XHR3aWR0aDogOTguNCU7XHJcblx0XHRtYXJnaW46IDZweCAwcHg7XHJcblx0XHRib3JkZXI6IDJweCBzb2xpZCAjNENEOTY0O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdH1cclxuXHJcblx0LmxvZ0FyZWEge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IDMwMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!***************************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/sample/richAlert.vue?mpType=page ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./richAlert.vue?vue&type=template&id=2b618e04&mpType=page */ 21);\n/* harmony import */ var _richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./richAlert.vue?vue&type=script&lang=js&mpType=page */ 23);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/sample/richAlert.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUk7QUFDakk7QUFDd0U7QUFDTDs7O0FBR25FO0FBQ3NOO0FBQ3ROLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsbUdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3JpY2hBbGVydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmI2MThlMDQmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3JpY2hBbGVydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmljaEFsZXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL3NhbXBsZS9yaWNoQWxlcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/sample/richAlert.vue?vue&type=template&id=2b618e04&mpType=page ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./richAlert.vue?vue&type=template&id=2b618e04&mpType=page */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_template_id_2b618e04_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/sample/richAlert.vue?vue&type=template&id=2b618e04&mpType=page ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "button-sp-area"), attrs: { _i: 0 } },
    [
      _c("button", {
        attrs: { _i: 1 },
        on: {
          click: function($event) {
            return _vm.showRichAlert()
          }
        }
      })
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!***************************************************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/sample/richAlert.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./richAlert.vue?vue&type=script&lang=js&mpType=page */ 24);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_richAlert_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR2QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiIyMy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JpY2hBbGVydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmljaEFsZXJ0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/pages/sample/richAlert.vue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n\nvar modal = uni.requireNativePlugin('modal');\nvar dcRichAlert = uni.requireNativePlugin('DCloud-RichAlert');var _default =\n{\n  data: function data() {\n    return {\n      title: '' };\n\n  },\n  onLoad: function onLoad() {\n\n  },\n  methods: {\n    showRichAlert: function showRichAlert() {\n      dcRichAlert.show({\n        position: 'bottom',\n        title: \"提示信息\",\n        titleColor: '#FF0000',\n        content: \"<a href='https://uniapp.dcloud.io/' value='Hello uni-app'>uni-app</a> 是一个使用 Vue.js 开发跨平台应用的前端框架!\\n免费的\\n免费的\\n免费的\\n重要的事情说三遍\",\n        contentAlign: 'left',\n        checkBox: {\n          title: '不再提示',\n          isSelected: true },\n\n        buttons: [{\n          title: '取消' },\n\n        {\n          title: '否' },\n\n        {\n          title: '确认',\n          titleColor: '#3F51B5' }] },\n\n\n      function (result) {\n        var msg = JSON.stringify(result);\n        modal.toast({\n          message: msg,\n          duration: 1.5 });\n\n        switch (result.type) {\n          case 'button':\n            __f__(\"log\", \"callback---button--\" + result.index, \" at pages/sample/richAlert.vue:50\");\n            break;\n          case 'checkBox':\n            __f__(\"log\", \"callback---checkBox--\" + result.isSelected, \" at pages/sample/richAlert.vue:53\");\n            break;\n          case 'a':\n            __f__(\"log\", \"callback---a--\" + JSON.stringify(result), \" at pages/sample/richAlert.vue:56\");\n            break;\n          case 'backCancel':\n            __f__(\"log\", \"callback---backCancel--\", \" at pages/sample/richAlert.vue:59\");\n            break;}\n\n      });\n    }\n\n    // \t\t\tnvueclick() {\n    // \t\t\t\tuni.navigateTo({\n    // \t\t\t\t\turl: '/pages/nvue/index2'\n    // \t\t\t\t});\n    // \t\t\t}\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvc2FtcGxlL3JpY2hBbGVydC52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU9BO0FBQ0EsOEQ7QUFDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGVBREE7O0FBR0EsR0FMQTtBQU1BLFFBTkEsb0JBTUE7O0FBRUEsR0FSQTtBQVNBO0FBQ0EsaUJBREEsMkJBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEscUJBRkE7QUFHQSw2QkFIQTtBQUlBLDRJQUpBO0FBS0EsNEJBTEE7QUFNQTtBQUNBLHVCQURBO0FBRUEsMEJBRkEsRUFOQTs7QUFVQTtBQUNBLHFCQURBOztBQUdBO0FBQ0Esb0JBREEsRUFIQTs7QUFNQTtBQUNBLHFCQURBO0FBRUEsK0JBRkEsRUFOQSxDQVZBOzs7QUFxQkE7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx1QkFGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFaQTs7QUFjQSxPQXpDQTtBQTBDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbERBLEdBVEEsRSIsImZpbGUiOiIyNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJidXR0b24tc3AtYXJlYVwiPlxuXHRcdDxidXR0b24gdHlwZT1cInByaW1hcnlcIiBwbGFpbj1cInRydWVcIiBAY2xpY2s9XCJzaG93UmljaEFsZXJ0KClcIj7ngrnlh7vmmL7npLrlvLnnqpc8L2J1dHRvbj5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0Y29uc3QgbW9kYWwgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignbW9kYWwnKTtcblx0Y29uc3QgZGNSaWNoQWxlcnQgPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignRENsb3VkLVJpY2hBbGVydCcpO1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHRpdGxlOiAnJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0b25Mb2FkKCkge1xuXG5cdFx0fSxcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRzaG93UmljaEFsZXJ0KCkge1xuXHRcdFx0XHRkY1JpY2hBbGVydC5zaG93KHtcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2JvdHRvbScsXG5cdFx0XHRcdFx0dGl0bGU6IFwi5o+Q56S65L+h5oGvXCIsXG5cdFx0XHRcdFx0dGl0bGVDb2xvcjogJyNGRjAwMDAnLFxuXHRcdFx0XHRcdGNvbnRlbnQ6IFwiPGEgaHJlZj0naHR0cHM6Ly91bmlhcHAuZGNsb3VkLmlvLycgdmFsdWU9J0hlbGxvIHVuaS1hcHAnPnVuaS1hcHA8L2E+IOaYr+S4gOS4quS9v+eUqCBWdWUuanMg5byA5Y+R6Leo5bmz5Y+w5bqU55So55qE5YmN56uv5qGG5p62IVxcbuWFjei0ueeahFxcbuWFjei0ueeahFxcbuWFjei0ueeahFxcbumHjeimgeeahOS6i+aDheivtOS4iemBjVwiLFxuXHRcdFx0XHRcdGNvbnRlbnRBbGlnbjogJ2xlZnQnLFxuXHRcdFx0XHRcdGNoZWNrQm94OiB7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+S4jeWGjeaPkOekuicsXG5cdFx0XHRcdFx0XHRpc1NlbGVjdGVkOiB0cnVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRidXR0b25zOiBbe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+WPlua2iCdcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5ZCmJ1xuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfnoa7orqQnLFxuXHRcdFx0XHRcdFx0XHR0aXRsZUNvbG9yOiAnIzNGNTFCNSdcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sIHJlc3VsdCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgbXNnID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcblx0XHRcdFx0XHRtb2RhbC50b2FzdCh7XG5cdFx0XHRcdFx0XHRtZXNzYWdlOiBtc2csXG5cdFx0XHRcdFx0XHRkdXJhdGlvbjogMS41XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c3dpdGNoIChyZXN1bHQudHlwZSkge1xuXHRcdFx0XHRcdFx0Y2FzZSAnYnV0dG9uJzpcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjYWxsYmFjay0tLWJ1dHRvbi0tXCIgKyByZXN1bHQuaW5kZXgpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ2NoZWNrQm94Jzpcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjYWxsYmFjay0tLWNoZWNrQm94LS1cIiArIHJlc3VsdC5pc1NlbGVjdGVkKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRjYXNlICdhJzpcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJjYWxsYmFjay0tLWEtLVwiICsgSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0Y2FzZSAnYmFja0NhbmNlbCc6XG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiY2FsbGJhY2stLS1iYWNrQ2FuY2VsLS1cIik7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBcdFx0XHRudnVlY2xpY2soKSB7XG5cdFx0XHQvLyBcdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcblx0XHRcdC8vIFx0XHRcdFx0XHR1cmw6ICcvcGFnZXMvbnZ1ZS9pbmRleDInXG5cdFx0XHQvLyBcdFx0XHRcdH0pO1xuXHRcdFx0Ly8gXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0YnV0dG9uIHtcblx0XHRtYXJnaW4tdG9wOiAzMHVweDtcblx0XHRtYXJnaW4tYm90dG9tOiAzMHVweDtcblx0fVxuXG5cdC5idXR0b24tc3AtYXJlYSB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdFx0d2lkdGg6IDYwJTtcblx0fVxuXG5cdC5jb250ZW50IHtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiA0MDB1cHg7XG5cdH1cblxuXHQud3JhcHBlciB7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0fVxuXG5cdC5idXR0b24ge1xuXHRcdHdpZHRoOiAyMDBweDtcblx0XHRtYXJnaW4tdG9wOiAzMHB4O1xuXHRcdG1hcmdpbi1sZWZ0OiAyMHB4O1xuXHRcdHBhZGRpbmctdG9wOiAyMHB4O1xuXHRcdHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXHRcdGJvcmRlci13aWR0aDogMnB4O1xuXHRcdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdFx0Ym9yZGVyLWNvbG9yOiAjNDU4QjAwO1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0NThCMDA7XG5cdH1cblxuXHQudGV4dCB7XG5cdFx0Zm9udC1zaXplOiAzMHB4O1xuXHRcdGNvbG9yOiAjNjY2NjY2O1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxuPC9zdHlsZT5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 26 */
/*!********************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/App.vue ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 27);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDZ047QUFDaE4sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJBcHAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*********************************************************************************************************************************************!*\
  !*** /Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 28);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW10QixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiIyNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Volumes/dev/uni-app/Android-SDK@3.3.13.81245_20220315/UniPlugin-Hello-AS/uniapp示例工程源码/unipluginDemo/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ })
],[[0,"app-config"]]]);