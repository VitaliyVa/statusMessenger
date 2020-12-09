/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../components/common_componentc/footer/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/footer/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/footer/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/footer/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/footer/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/header/index.js":
/*!*******************************************************!*\
  !*** ../components/common_componentc/header/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/header/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/header/index.scss":
/*!*********************************************************!*\
  !*** ../components/common_componentc/header/index.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/common_componentc/normalize/index.js":
/*!**********************************************************!*\
  !*** ../components/common_componentc/normalize/index.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/common_componentc/normalize/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/common_componentc/normalize/index.scss":
/*!************************************************************!*\
  !*** ../components/common_componentc/normalize/index.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/interface/grid/index.js":
/*!*********************************************!*\
  !*** ../components/interface/grid/index.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/interface/grid/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "../components/interface/grid/index.scss":
/*!***********************************************!*\
  !*** ../components/interface/grid/index.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "../components/pages/index/index.js":
/*!******************************************!*\
  !*** ../components/pages/index/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ "../components/pages/index/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_0__);

create_status_messenger({
  block: '.status_messenger_indicator__block',
  indicator: '.status_messenger_indicator'
});

function create_status_messenger(_ref) {
  var block = _ref.block,
      indicator = _ref.indicator;
  var all_status_messenger = $(block);
  all_status_messenger.map(function (index, name) {
    var all_indicators = $(name).find(indicator);
    var quantity_indicators = all_indicators.length;
    $(indicator).css('width', "".concat(100 / quantity_indicators, "%"));
  });
}

function add_content_in_popup(_ref2) {
  var popup = _ref2.popup,
      status = _ref2.status,
      date = _ref2.date,
      title = _ref2.title,
      text = _ref2.text,
      error_name = _ref2.error_name,
      error_minute = _ref2.error_minute,
      error_hour = _ref2.error_hour,
      error_link = _ref2.error_link;
  $(popup).find('.status_messenger_popup__block').removeClass('bad');
  $(popup).find('.status_messenger_popup__block').removeClass('normal');
  $(popup).find('.status_messenger_popup__block').removeClass('good');
  $(popup).find('.status_messenger_popup__block').addClass(status);
  $(popup).find('.status_messenger_popup_date').text(date);
  $(popup).find('.status_messenger_popup_title').text(title);
  $(popup).find('.status_messenger_popup_text').text(text);
  $(popup).find('.status_messenger_popup_error_title').text(error_name);
  $(popup).find('.status_messenger_popup_error_minutes').text(error_minute);
  $(popup).find('.status_messenger_popup_error_hours').text(error_hour);
  $('.popup_error_link').remove();
  error_link.map(function (index, name) {
    $(popup).find('.status_messenger_popup__block')[0].appendChild(create_error_link($(name).val(), $(name).attr('data-href')));
  });
}

function create_error_link(text, href) {
  var popup_error_link = document.createElement('a');
  popup_error_link.classList.add('popup_error_link', 'sub_title', 'sub_title_0', 'color_black');
  popup_error_link.setAttribute("href", href);
  popup_error_link.setAttribute("target", '_blank');
  popup_error_link.textContent = text;
  return popup_error_link;
}

$('.status_messenger_indicator').on('mouseover', function () {
  var absolute_arrow = $(this).parents('.status_messenger_indicator__block').find('.status_messenger_popup__block_absolute_arrow');
  $(absolute_arrow).removeClass('hidden');
  var popup = $(this).parents('.status_messenger_indicator__block').find('.status_messenger_popup__block');
  var indicator_width = $(this).innerWidth();
  var popup_width = $(popup).innerWidth();
  var indicator__block_width = $(this).parents('.status_messenger_indicator__block').innerWidth();
  var position_indicator = $(this).position().left;
  var current_position_popup;
  var popup_left_border = position_indicator - popup_width / 2;
  var popup_right_border = position_indicator + popup_width;
  var arrow = $(popup).find('.status_messenger_popup__block_arrow');

  if (popup_left_border <= 0) {
    current_position_popup = '-10px';
    $(arrow).css('display', "none");
    $(absolute_arrow).css('display', "block");
    $(absolute_arrow).css('left', "calc(".concat(position_indicator + indicator_width / 2, "px + 2px)"));
  } else if (popup_right_border >= indicator__block_width) {
    current_position_popup = "calc(100% - ".concat(popup_width, "px + 10px)");
    $(arrow).css('display', "none");
    $(absolute_arrow).css('display', "block");
    $(absolute_arrow).css('left', "calc(".concat(position_indicator + indicator_width / 2, "px + 2px)"));
  } else {
    current_position_popup = position_indicator - popup_width / 2 + indicator_width / 2;
    $(absolute_arrow).css('display', "none");
    $(arrow).css('display', "block");
  }

  $(popup).addClass('active');
  $(popup).css('width', "".concat(popup_width, "px"));
  $(popup).css('left', current_position_popup);
  add_content_in_popup({
    popup: $(this).parents('.status_messenger_indicator__block'),
    status: $(this).attr('data-status'),
    date: $(this).attr('data-date'),
    title: $(this).attr('data-title'),
    text: $(this).attr('data-text'),
    error_name: $(this).attr('data-error-name'),
    error_minute: $(this).attr('data-error-minute'),
    error_hour: $(this).attr('data-error-hour'),
    error_link: $(this).find('.error_link')
  });
});
$('.status_messenger_btn').on('click', function () {
  var wrapper = $(this).parents('.status_messenger_optional');
  $(wrapper).toggleClass('show');
});
$('.status_messenger_indicator').on('mouseout', function () {
  $('.status_messenger_popup__block').removeClass('active');
  $('.status_messenger_popup__block_absolute_arrow').addClass('hidden');
});
$('.status_messenger_popup__block').on('mouseout', function () {
  $('.status_messenger_popup__block').removeClass('active');
  $('.status_messenger_popup__block_absolute_arrow').addClass('hidden');
});
$('.status_messenger_popup__block').on('mouseover', function () {
  var popup = $(this).parents('.status_messenger_indicator__block').find('.status_messenger_popup__block');
  var absolute_arrow = $(this).parents('.status_messenger_indicator__block').find('.status_messenger_popup__block_absolute_arrow');
  $(absolute_arrow).removeClass('hidden');
  $(popup).addClass('active');
});

/***/ }),

/***/ "../components/pages/index/index.scss":
/*!********************************************!*\
  !*** ../components/pages/index/index.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_common_componentc_normalize_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/common_componentc/normalize/index */ "../components/common_componentc/normalize/index.js");
/* harmony import */ var _components_interface_grid_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/interface/grid/index */ "../components/interface/grid/index.js");
/* harmony import */ var _components_common_componentc_header_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/common_componentc/header/index */ "../components/common_componentc/header/index.js");
/* harmony import */ var _components_common_componentc_footer_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/common_componentc/footer/index */ "../components/common_componentc/footer/index.js");
/* harmony import */ var _components_pages_index_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/pages/index/index */ "../components/pages/index/index.js");
// script interface

 // script pages





/***/ })

/******/ });
//# sourceMappingURL=index.js.map