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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_main_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_main_css__);


$(document).ready(function () {

    // Logo
    var $logo = $('#logo');
    if (location.href.indexOf("#") != -1) {
        if (location.href.substr(location.href.indexOf("#")) != '#about') {
            $logo.show();
        }
    }

    // Show logo 
    $('#tab-container .tab a').click(function () {
        $logo.slideDown('slow');
    });
    // Hide logo
    $('#tab-about').click(function () {
        $logo.slideUp('slow');
    });
    function animMeter() {
        $(".meter > span").each(function () {
            $(this).data("origWidth", $(this).width()).width(0).animate({
                width: $(this).data("origWidth")
            }, 1200);
        });
    }
    animMeter();

    $('#tab-container').easytabs({
        animate: true,
        updateHash: true,
        transitionIn: 'slideDown',
        transitionOut: 'slideUp',
        animationSpeed: 600,
        tabActiveClass: 'active' }).bind('easytabs:midTransition', function (event, $clicked, $targetPanel) {
        if ($targetPanel.selector == '#resume') {
            animMeter();
        }
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/lib/index.js!./main.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?importLoaders=1!../../node_modules/postcss-loader/lib/index.js!./main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Open+Sans:400,700);", ""]);
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Lato:400,700);", ""]);

// module
exports.push([module.i, "*, *:before, *:after { box-sizing: border-box;\n}\n\n/* HTML5 DECLARATIONS */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section, dialog {display: block}\naudio[controls],canvas,video {display: inline-block; *display: inline; zoom: 1}\n\n/* BASE */\nhtml {height: 100%; font-size: 100%; overflow-y: scroll; -webkit-text-size-adjust: 100%} /* Force scrollbar in non-IE and Remove iOS text size adjust without disabling user zoom */\nbody {margin: 0; min-height: 100%; -webkit-font-smoothing:antialiased; font-smoothing:antialiased; text-rendering:optimizeLegibility;color: #666} /* Improve default text rendering, handling of kerning pairs and ligatures */\n\n/* DEFAULT FONT SETTINGS */\n/* 16px base font size with 150% (24px) friendly, unitless line height and margin for vertical rhythm */\n/* Font-size percentage is based on 16px browser default size */\nbody, button, input, select, textarea {font: 100%  'Lato', sans-serif; *font-size: 1em; color: #555} /* IE7 and older can't resize px based text */\np, blockquote, q, pre, address, hr, code, samp, dl, ol, ul, form, table, fieldset, menu, img {margin: 0 0 1.5em; padding: 0}\n\n/* TYPOGRAPHY */\n/* Composed to a scale of 12px, 14px, 16px, 18px, 21px, 24px, 36px, 48px, 60px and 72px */\nh1, h2, h3, h4, h5, h6 {font-family:'Open Sans', sans-serif;color:#444;}\nh1 {margin: 0; font-size: 3.75em; line-height: 1.2em; margin-bottom: 0.4em} /* 60px / 72px */\nh2 {margin: 0; font-size: 3em; line-height: 1em; margin-bottom: 0.5em} /* 48px / 48px */\nh3 {margin: 0; font-size: 2.25em; line-height: 1.3333333333333333333333333333333em; margin-bottom: 0.6667em} /* 36px / 48px */ \nh4 {margin: 0; font-size: 1.5em; line-height: 1em; margin-bottom: 1em} /* 24px / 24px */\nh5 {margin: 0; font-size: 1.3125em; line-height: 1.1428571428571428571428571428571em; margin-bottom: 1.1428571428571428571428571428571em} /* 21px / 24px */\nh6 {margin: 0; font-size: 1.125em; line-height: 1.3333333333333333333333333333333em; margin-bottom: 1.3333333333333333333333333333333em} /* 18px / 24px */\np, ul, blockquote, pre, td, th, label {margin: 0; font-size: 1em; line-height: 1.5em; margin-bottom: 1.5em} /* 16px / 24px */\nsmall, p.small {margin: 0; font-size: 0.875em; line-height: 1.7142857142857142857142857142857em; margin-bottom: 1.7142857142857142857142857142857em} /* 14px / 24px */\n\n/* CODE */\npre {white-space: pre; white-space: pre-wrap; word-wrap: break-word} /* Allow line wrapping of 'pre' */\npre, code, kbd, samp {font-size: 1em; line-height: 1.5em; margin-bottom: 1.5em; font-family: Menlo, Consolas, 'DejaVu Sans Mono', Monaco, monospace}\n\n/* TABLES */\ntable {border-collapse: collapse; border-spacing: 0; margin-bottom: 1.5em}\nth {text-align: left}\ntr, th, td {padding-right: 1.5em; border-bottom: 0 solid #333}\n\n/* FORMS */\nform {margin: 0}\nfieldset {border: 0;padding: 0}\ntextarea {overflow: auto; vertical-align: top}\nlegend {*margin-left: -.75em}\nbutton, input, select, textarea {vertical-align: baseline; *vertical-align: middle} /* IE7 and older */\nbutton, input {line-height: normal; *overflow: visible}\nbutton, input[type=\"button\"], input[type=\"reset\"], input[type=\"submit\"] {cursor: pointer;-webkit-appearance: button}\ninput[type=\"checkbox\"], input[type=\"radio\"] {box-sizing: border-box}\ninput[type=\"search\"] {-webkit-appearance: textfield; box-sizing: content-box}\ninput[type=\"search\"]::-webkit-search-decoration {-webkit-appearance: none}\nbutton::-moz-focus-inner, input::-moz-focus-inner {border: 0; padding: 0}\n\n/* QUOTES */\nblockquote, q {quotes: none}\nblockquote:before, blockquote:after, q:before, q:after {content: ''; content: none}\nblockquote, q, cite {font-style: italic}\nblockquote {padding-left: 1.5em; border-left: 3px solid #ccc}\nblockquote > p {padding: 0}\n\n/* LISTS */\nul, ol {list-style-position: inside; padding: 0}\nli ul, li ol {margin: 0 1.5em}\ndl dd {margin-left: 1.5em}\ndt {font-family:Futura, \"Century Gothic\", AppleGothic, sans-serif}\n\n/* HYPERLINKS */\na { \n  text-decoration: none;\n  color: #E74C3C;\n  transition: color 0.1s linear, border 0.1s linear, opacity 0.1s linear, background-color 0.1s linear;\n}\na:hover, a:focus, a:active { text-decoration: none; border: none;color: #C0392B }\n/* MEDIA */\nfigure {margin: 0}\nimg, object, embed, video {max-width: 100%; _width: 100%} /* Fluid images */\nimg {border: 0; -ms-interpolation-mode: bicubic} /* Improve IE's resizing of images */\nsvg:not(:root) {overflow: hidden} /* Correct IE9 overflow */\n\n/* ABBREVIATION */\nabbr[title], dfn[title] {border-bottom: 1px dotted #333; cursor: help}\n\n/* MARKED/INSERTED/DELETED AND SELECTED TEXT */\nins, mark {text-decoration: none}\nmark {background: #c47529}\nins {background: #d49855}\ndel {text-decoration: line-through}\n::-moz-selection {background: #E74C3C; color: #fff; text-shadow: none} /* selected text */\n::-moz-selection {background: #E74C3C; color: #fff; text-shadow: none}\n::selection {background: #E74C3C; color: #fff; text-shadow: none} /* selected text */\n\n/* OTHERS */\nstrong, b, dt { font-weight: bold}\ndfn {font-style: italic}\nvar, address {font-style: normal}\nsub, sup {font-size: 75%; line-height: 0; position: relative; vertical-align: baseline} /* Position 'sub' and 'sup' without affecting line-height */\nsup {top: -0.5em} /* Move superscripted text up */\nsub {bottom: -0.25em} /* Move subscripted text down */\nspan.amp{font-family:Adobe Caslon Pro,Baskerville,\"Goudy Old Style\",\"Palatino\",\"Palatino Linotype\",\"Book Antiqua\",Georgia,\"Times New Roman\",Times,serif;font-style:italic;font-size:110%;line-height:0;position:relative;vertical-align:baseline} /* Best available ampersand */\n\n/* MICRO CLEARFIX HACK */\n.cf:before, .cf:after {content:\"\";display:table} /* For modern browsers */\n.cf:after {clear:both}\n.cf {zoom:1} /* For IE 6/7 (trigger hasLayout) */\n\n/* DEFAULT MOBILE STYLE */\nbody {width: 92%; margin: 0 auto} /* Center page without wrapper */\n/* column grid */\n.g1,.g2,.g3{display:block; position: relative; margin-left: 1%; margin-right: 1%}\n/* 1 column grid */\n.g1,.g2,.g3{width:98.0%}\n\n/* Wrapper */\n.main{\n  padding-top: 50px;\n  max-width: 1020px;\n}\n.wrapper{\n  margin: 0 auto;\n}\n\n\n/* Utility */\n.chromeframe {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n.clear{\n  clear:both;\n}\n.bg-fixed {\n  background-repeat: repeat;\n  background-attachment: fixed;\n  background-position: center center;\n}\n.clearfix:after { \n content: \".\"; \n visibility: hidden; \n display: block; \n height: 0; \n clear: both;\n}\n.no-list{\n  margin: 0px;\n  padding: 0px;\n  list-style: none;\n}\n.break{\n  padding-bottom: 1em;\n  clear: both;\n}\n/* Backgrounds */\n\n.bg-1{\n  background-image: url(" + __webpack_require__(4) + ");\n}\n\n/* Header */\n#header{\n  margin-bottom: 2em;\n}\n#header #logo{\n  text-align: center;\n\n  display: none;\n}\n#header h4{\n  margin-bottom:0px; \n}\n#header .visible{\n  opacity: 1;\n}\n\n/* Tabs */\n.etabs{\n  margin: 0;\n  padding: 0px;\n  text-align: center;\n}\n.etabs li span{\n  display: none;\n}\n#tab-data-wrap{\n  padding: 30px 20px;\n  background: #fff;\n  border: 1px solid #f1f1f1;\n  box-shadow: 0px 6px #c0392b;\n  border-radius: 0px 0px 4px 4px;\n}\n\n\n.tab {\n  display: inline-block;\n  zoom: 1;\n  *display: inline;\n  background: #fff;\n  border: solid 1px #f1f1f1;\n  border-bottom: 0px;\n  -moz-border-radius: 4px 4px 0 0;\n  -webkit-border-radius: 4px 4px 0 0;\n  margin-right:10px; \n}\n\n.tab a {\n  font-weight: bold;\n  text-transform: uppercase;\n  font-size: 14px;\n  display: block;\n  padding: 2px 10px;\n  outline: none;\n  color: #888;\n  text-decoration: none;\n}\n\n.tab a:hover {\n  text-decoration: none;\n}\n\n.tab.active {\n  background: #fff;\n  position: relative;\n  top: 1px;\n  border-color: #f1f1f1;\n  border-bottom: none;\n}\n\n.tab a.active {\n  padding-top: 10px;\n  color: #e74c3c;\n}\n.tab a i{\n  font-size: 16px;\n  margin-right: 0px;\n}\n\n/* INFO */\n.info-wrap{\n\n}\n/* Photo */\n.photo{\n  float: left;\n  height: 200px;\n  width: 200px;\n  margin-right: 20px;\n  overflow: hidden;\n}\n.photo img{\n border-radius: 4px;\n width: 100%;\n}\n.info{\n\n}\n.info h2, #header h2{\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  margin-bottom: .3em;\n}\n.info h4, #header h4{\n  color: #999;\n}\n/* Contact */\n.main-links{\n\n}\n.main-links ul{\n  list-style: none outside none;\n  margin: 0;\n  padding: 0;\n}\n.main-links ul li{\n  border-bottom: 1px solid #F1F1F1;\n  padding: 10px 0;\n}\n.main-links ul li a{\n\n  font-size: 14px;\n\n} \n/* Contact-info */\n.contact-info{\n\n}\n.contact-info i{\n\n}\n\n/* Icon Styling */\n.contact-info i{\n\n  color: #333;\n  font-size: 46px;\n\n}\n/* Item Box */\n\n.item-box{\n  padding: 6px 6px 6px 10px;\n  border: 1px solid #f1f1f1;\n  border-radius: 4px;\n}\n.item-box i{\n  float: left;\n  margin-right: 12px;\n}\n.item-box i.icon-envelope{\n\n}\n.item-box .item-data{\n margin-top: 6px;\n}\n.item-box .item-data h3{\n  line-height: 1em;\n  margin: 3px 0px 0px 0px;\n  font-size: 1em;\n\n}\n.item-box .item-data p{\n  margin: 0px;\n  font-size: 12px;\n  color: #999;\n}\n\n/* WorkExperience */\n.work li{\n  border-bottom: 1px solid #f1f1f1;\n  margin-bottom: 2em;\n}\n.work li span{\n  float: right;\n}\n.work li h5{\n  float: left;\n}\n.work li p{\n  clear: both;\n}\n\n/* Portfolio */\n.image{\n  position: relative;\n}\n.image img{\n  margin: 0px;\n  width: 100%;\n}\n.image-overlay {\n  position: absolute;\n  z-index: 5;\n  top: 0;\n  overflow: hidden;\n  width: 100%;\n  height: 99%;\n  background-color: rgba(231, 76, 60,.6);\n  text-align: center;\n  opacity:0;\n  filter: alpha(opacity=0);\n  transition: all 450ms ease-out 0s;\n  -webkit-transform: rotateY(180deg);\n  transform: rotateY(180deg);\n}\n.image:hover .image-overlay{\n  opacity: 1;\n  filter: alpha(opacity=100);\n  -webkit-transform: rotateY(0deg);\n  transform: rotateY(0deg);\n}\n.image-overlay .image-link{\n  position: relative;\n  top: 50%;\n  display: inline-block;\n  margin-top: -20px;\n}\n/* Icon Box */\n.sny-icon{\n  display: block;\n  margin-bottom: 1em;\n  text-align: center;\n}\n.sny-icon i{\n  display: inline-block;\n  font-size: 60px;\n}\n.sny-icon-content{\n  text-align: center;\n}\n.sny-icon-content h4{\n  margin-bottom:6px; \n}\n.sny-icon-content p{\n  margin-bottom: 0px;\n}\n/* Buttons */\n.btn{\n  display:inline-block;\n  margin: 0 10px 10px 0;    \n  padding: 14px 20px;  \n  background: #E74C3C;\n  color: #fff;\n  font-weight: bold;\n  font-size: 13px;\n  font-family:'Open Sans', sans-serif;\n  line-height: 1;\n  *display:inline;\n  *zoom:1;\n  position: relative;\n  text-transform: uppercase;\n  transition: all 0.3s;\n}\n.btn:hover{\n  color: #ccc;\n}\n\n/* Labels */\n.label {\n  display: inline;\n  padding: .25em .6em;\n  font-size: 75%;\n  font-weight: 500;\n  line-height: 1;\n  color: #ffffff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label[href]:hover,\n.label[href]:focus {\n  color: #ffffff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.label-default {\n  background-color: #999999;\n}\n\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #808080;\n}\n\n.label-danger {\n  background-color: #d9534f;\n}\n\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n\n.label-success {\n  background-color: #5cb85c;\n}\n\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n\n.label-warning {\n  background-color: #f0ad4e;\n}\n\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n\n/* Meters */\n.meter { \n  height: 24px;  /* Can be anything */\n  position: relative;\n  border: 1px solid #f1f1f1;\n  border-radius: 4px;\n  margin-bottom: 1em;\n}\n.meter > span {\n  display: block;\n  height: 100%;\n  border-radius: 4px;\n\n\n  position: relative;\n  overflow: hidden;\n}\n.meter > span  > span{\n  margin-left: 4px;\n  color: #fff;\n}\n.meter > span:after, .animate > span > span {\n  content: \"\";\n  position: absolute;\n  top: 0; left: 0; bottom: 0; right: 0;\n  background-image: \n  -moz-linear-gradient(\n    -45deg, \n    rgba(255, 255, 255, .2) 25%, \n    transparent 25%, \n    transparent 50%, \n    rgba(255, 255, 255, .2) 50%, \n    rgba(255, 255, 255, .2) 75%, \n    transparent 75%, \n    transparent\n    );\n  z-index: 1;\n  -webkit-background-size: 50px 50px;\n  -moz-background-size: 50px 50px;\n  -webkit-animation: move 2s linear infinite;\n  -webkit-border-top-right-radius: 8px;\n  -webkit-border-bottom-right-radius: 8px;\n  -moz-border-radius-topright: 8px;\n  -moz-border-radius-bottomright: 8px;\n  border-top-right-radius: 8px;\n  border-bottom-right-radius: 8px;\n  -webkit-border-top-left-radius: 20px;\n  -webkit-border-bottom-left-radius: 20px;\n  -moz-border-radius-topleft: 20px;\n  -moz-border-radius-bottomleft: 20px;\n  border-top-left-radius: 20px;\n  border-bottom-left-radius: 20px;\n  overflow: hidden;\n}\n\n.animate > span:after {\n  display: none;\n}\n\n@-webkit-keyframes move {\n  0% {\n   background-position: 0 0;\n }\n 100% {\n   background-position: 50px 50px;\n }\n}\n\n.emerald > span {\n  background-color: #2ecc71;\n\n}\n\n.carrot > span {\n  background-color: #e67e22;\n\n}\n.wisteria > span{\n  background-color: #8e44ad;\n}\n.sunflower > span{\n  background-color: #f1c40f;\n}\n.midnight > span{\n  background-color: #2c3e50;\n}\n.pomengrate > span{\n  background-color: #c0392b;\n}\n.asbestos > span{\n  background-color: #7f8c8d;\n}\n.nostripes > span > span, .nostripes > span:after {\n  -webkit-animation: none;\n  background-image: none;\n}\n/* Footer */\nfooter{\n  text-align: center;\n  margin-top: 2em;\n  padding: 10px;\n  background: rgba(255, 255, 255,.8);\n  box-shadow: 0px 4px #ccc;\n  color: #333;\n  border-radius: 4px;\n}\nfooter p{\n  margin-bottom: 0px;\n}\n\n/* media Queries\n\nFOLDING FLUID GRID\n< 767px         - 1-Column Fluid Grid\n768px - 1023px  - 2-Column Fluid Grid\n> 1024px            - 3-Column Fluid Grid\nChange widths as necessary\n------------------------------------------- */\n\n/* MOBILE PORTRAIT */\n@media only screen and (min-width: 320px) {\n  body {\n\n  }\n}\n\n/* MOBILE LANDSCAPE */\n@media only screen and (min-width: 480px) {\n  body {\n\n  }\n}\n\n/* SMALL TABLET */\n@media only screen and (min-width: 600px) {\n  body {\n\n  }\n  .etabs >li span{\n    display: block;\n  }\n}\n\n/* TABLET/NETBOOK */\n@media only screen and (min-width: 768px) { \n  body {\n\n  }\n\n  /* Sidebar */\n  .sidebar{\n   padding-left: 20px;\n   border-left: 1px solid #f1f1f1;\n }\n /* COLUMN GRID */\n .g1,.g2,.g3 {display:inline; float: left}\n\n /* 2 COLUMN GRID */\n .g1 {width:48.0%}\n .g2 {width:48.0%}\n .g3 {width:98.0%}\n}\n\n/* LANDSCAPE TABLET/NETBOOK/LAPTOP */\n@media only screen and (min-width: 1024px) { \n  body {\n\n  }\n  .etabs >li span{\n    display: inline;\n  }\n  .tab a i{\n  font-size: 16px;\n  margin-right: 6px;\n}\n  .tab a{\n    padding: 10px 40px 10px 40px;\n  }\n.tab a.active{\n  padding-top: 20px;\n}\n  /* 3 COLUMN GRID */\n  .g1 {width:31.333%}\n  .g2 {width:64.667%;}\n  .g3 {width:98.0%}\n}\n\n.post-article-1 {\n  border-top: 1px;\n}\n\n.post-article-2, .post-article-3, .post-article-4, .post-article-5, .post-article-6, .post-article-7 {\n  border-top: 0;\n}\n\n.post-article-1, .post-article-2, .post-article-3, .post-article-4, .post-article-5, .post-article-6, .post-article-7 {\n  clear: both;\n  border-bottom: 1px;\n  border-left: 0;\n  border-right: 0;\n  border-style: solid;\n  border-color: #ddd;\n  padding: 10px;\n  overflow: auto;\n  transition: 0.4s;\n}\n\n.post-article-1:hover, .post-article-2:hover, .post-article-3:hover, .post-article-4:hover, .post-article-5:hover, .post-article-6:hover, .post-article-7:hover {\n  background-color: #FAF0E6;\n}\n\n.item-img {\n  width: 400px;\n  float: left;\n  text-align: center;\n}\n\n.item-text {\n  margin-left: 410px;\n  padding-top: 10px;\n}\n\n.tag-text {\n  background-color: #c6cbe9;\n  border-radius: 4px;\n  color: #fff;\n  display: inline;\n}\n\n@media only screen and (min-width: 1280px) { \n  /* DESKTOP */\n  body {\n\n  }\n}\n\n/* WIDESCREEN */\n/* Increased body size for legibility */\n@media only screen and (min-width: 1400px) { \n  body {} /* 18.5px / 28px */\n}\n\n\n/* PRINT */\n@media print {\n  * {background: transparent !important; color: black !important; text-shadow: none !important; -webkit-filter:none !important; filter:none !important; -ms-filter: none !important} /* Black prints faster */\n  a, a:visited {color: #444 !important; text-decoration: underline}\n  a[href]:after {content: \" (\" attr(href) \")\"}\n  abbr[title]:after {content: \" (\" attr(title) \")\"}\n  .ir a:after, a[href^=\"javascript:\"]:after, a[href^=\"#\"]:after {content: \"\"}  /* Don't print links for images, javascript or internal links */\n  pre, blockquote {border: 1px solid #999; page-break-inside: avoid; }\n  thead {display: table-header-group; } /* Repeat header row at top of each printed page */\n  tr, img {page-break-inside: avoid; }\n  img {max-width: 100% !important; }\n  @page {margin: 0.5cm}\n  p, h2, h3 {orphans: 3; widows: 3}\n  h2, h3{page-break-after: avoid}\n}", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dist/assets/bg.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);