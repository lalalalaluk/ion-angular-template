(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/@ion-phaser/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ion-phaser/core/dist/esm-es5 lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-phaser.entry.js": [
		"./node_modules/@ion-phaser/core/dist/esm-es5/ion-phaser.entry.js",
		0
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ion-phaser/core/dist/esm-es5 lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('')\">\r\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n    <mat-accordion>\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            basic\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-list>\r\n          <mat-list-item>\r\n            <p><button routerLinkActive=\"active-link\" mat-button (click)=\"close('BasicWorld')\">BasicWorld</button></p>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <p><button routerLinkActive=\"active-link\" mat-button (click)=\"close('BasicSprite')\">BasicSprite</button></p>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <p><button routerLinkActive=\"active-link\" mat-button\r\n                (click)=\"close('BasicFixedSize')\">BasicFixedSize</button></p>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            example\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n\r\n        <mat-list>\r\n          <mat-list-item>\r\n            <p><button routerLinkActive=\"active-link\" mat-button (click)=\"close('AlphaAdjust')\">AlphaAdjust</button></p>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <p><button routerLinkActive=\"active-link\" mat-button (click)=\"close('CoinChaser')\">CoinChaser</button></p>\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <p><button routerLinkActive=\"active-link\" mat-button (click)=\"close('FlappyBird')\">FlappyBird</button></p>\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </mat-expansion-panel>\r\n\r\n    </mat-accordion>\r\n\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n    <button mat-button class=\"floatRight\" (click)=\"sidenav.open()\">+</button>\r\n\r\n    <router-outlet></router-outlet>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-fixed-size/basic-fixed-size.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-fixed-size/basic-fixed-size.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"both-center\" *ngIf=\"game\">\n    <h1>basic fixed size</h1>\n    <ion-phaser [game]=\"game\"></ion-phaser>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-sprite/basic-sprite.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-sprite/basic-sprite.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"both-center\" *ngIf=\"game\">\n    <ion-phaser [game]=\"game\"></ion-phaser>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-world/basic-world.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-world/basic-world.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"both-center\" *ngIf=\"game\">\n    <ion-phaser [game]=\"game\"></ion-phaser>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/example/alpha-adjust/alpha-adjust.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/example/alpha-adjust/alpha-adjust.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"both-center\" *ngIf=\"game\">\n    <ion-phaser [game]=\"game\"></ion-phaser>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/example/coin-chaser/coin-chaser.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/example/coin-chaser/coin-chaser.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"both-center\" *ngIf=\"game\">\n    <ion-phaser [game]=\"game\"></ion-phaser>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/example/flappy-bird/flappy-bird.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/example/flappy-bird/flappy-bird.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"both-center\" *ngIf=\"game\">\n    <ion-phaser [game]=\"game\"></ion-phaser>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".floatRight{\r\n    position: absolute;\r\n    bottom: 2%;\r\n    right:1%;\r\n    height: 50px;\r\n    width: 10px;\r\n    background: oldlace;\r\n    border-radius: 30px;\r\n}\r\n\r\n.example-container {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\n  a, abbr, acronym, address, big, cite, code,\r\n  del, dfn, em, img, ins, kbd, q, s, samp,\r\n  small, strike, strong, sub, sup, tt, var,\r\n  b, u, i, center,\r\n  dl, dt, dd, ol, ul, li,\r\n  fieldset, form, label, legend,\r\n  table, caption, tbody, tfoot, thead, tr, th, td,\r\n  article, aside, canvas, details, embed, \r\n  figure, figcaption, footer, header, hgroup, \r\n  menu, nav, output, ruby, section, summary,\r\n  time, mark, audio, video {\r\n\t  margin: 0;\r\n\t  padding: 0;\r\n\t  border: 0;\r\n\t  font-size: 100%;\r\n\t  font: inherit;\r\n\t  vertical-align: baseline;\r\n  }\r\n\r\n/* HTML5 display-role reset for older browsers */\r\n\r\narticle, aside, details, figcaption, figure, \r\n  footer, header, hgroup, menu, nav, section {\r\n\t  display: block;\r\n  }\r\n\r\nbody {\r\n\t  line-height: 1;\r\n  }\r\n\r\nol, ul {\r\n\t  list-style: none;\r\n  }\r\n\r\nblockquote, q {\r\n\t  quotes: none;\r\n  }\r\n\r\nblockquote:before, blockquote:after,\r\n  q:before, q:after {\r\n\t  content: '';\r\n\t  content: none;\r\n  }\r\n\r\ntable {\r\n\t  border-collapse: collapse;\r\n\t  border-spacing: 0;\r\n  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtFQUNWOztBQUVBOzs7Ozs7Ozs7Ozs7O0dBYUMsU0FBUztHQUNULFVBQVU7R0FDVixTQUFTO0dBQ1QsZUFBZTtHQUNmLGFBQWE7R0FDYix3QkFBd0I7RUFDekI7O0FBQ0EsZ0RBQWdEOztBQUNoRDs7R0FFQyxjQUFjO0VBQ2Y7O0FBQ0E7R0FDQyxjQUFjO0VBQ2Y7O0FBQ0E7R0FDQyxnQkFBZ0I7RUFDakI7O0FBQ0E7R0FDQyxZQUFZO0VBQ2I7O0FBQ0E7O0dBRUMsV0FBVztHQUNYLGFBQWE7RUFDZDs7QUFDQTtHQUNDLHlCQUF5QjtHQUN6QixpQkFBaUI7RUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG9hdFJpZ2h0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyJTtcclxuICAgIHJpZ2h0OjElO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBvbGRsYWNlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuICBhLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbiAgZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxyXG4gIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbiAgYiwgdSwgaSwgY2VudGVyLFxyXG4gIGRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXHJcbiAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbiAgdGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbiAgYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxyXG4gIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXHJcbiAgbWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbiAgdGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcclxuXHQgIG1hcmdpbjogMDtcclxuXHQgIHBhZGRpbmc6IDA7XHJcblx0ICBib3JkZXI6IDA7XHJcblx0ICBmb250LXNpemU6IDEwMCU7XHJcblx0ICBmb250OiBpbmhlcml0O1xyXG5cdCAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG4gIH1cclxuICAvKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcbiAgYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXHJcbiAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuXHQgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICBib2R5IHtcclxuXHQgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICBvbCwgdWwge1xyXG5cdCAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgYmxvY2txdW90ZSwgcSB7XHJcblx0ICBxdW90ZXM6IG5vbmU7XHJcbiAgfVxyXG4gIGJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxyXG4gIHE6YmVmb3JlLCBxOmFmdGVyIHtcclxuXHQgIGNvbnRlbnQ6ICcnO1xyXG5cdCAgY29udGVudDogbm9uZTtcclxuICB9XHJcbiAgdGFibGUge1xyXG5cdCAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuXHQgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG4gIH1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.panelOpenState = false;
    }
    AppComponent.prototype.close = function (component) {
        if (component) {
            this.router.navigate([component]);
        }
        this.sidenav.close();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: false })
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _app_routing_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing.model */ "./src/app/app.routing.model.ts");
/* harmony import */ var _basic_basic_world_basic_world_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./basic/basic-world/basic-world.component */ "./src/app/basic/basic-world/basic-world.component.ts");
/* harmony import */ var _basic_basic_sprite_basic_sprite_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./basic/basic-sprite/basic-sprite.component */ "./src/app/basic/basic-sprite/basic-sprite.component.ts");
/* harmony import */ var _basic_basic_fixed_size_basic_fixed_size_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./basic/basic-fixed-size/basic-fixed-size.component */ "./src/app/basic/basic-fixed-size/basic-fixed-size.component.ts");
/* harmony import */ var _example_alpha_adjust_alpha_adjust_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./example/alpha-adjust/alpha-adjust.component */ "./src/app/example/alpha-adjust/alpha-adjust.component.ts");
/* harmony import */ var _example_coin_chaser_coin_chaser_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./example/coin-chaser/coin-chaser.component */ "./src/app/example/coin-chaser/coin-chaser.component.ts");
/* harmony import */ var _example_flappy_bird_flappy_bird_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./example/flappy-bird/flappy-bird.component */ "./src/app/example/flappy-bird/flappy-bird.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _basic_basic_world_basic_world_component__WEBPACK_IMPORTED_MODULE_10__["BasicWorldComponent"],
                _basic_basic_sprite_basic_sprite_component__WEBPACK_IMPORTED_MODULE_11__["BasicSpriteComponent"],
                _basic_basic_fixed_size_basic_fixed_size_component__WEBPACK_IMPORTED_MODULE_12__["BasicFixedSizeComponent"],
                _example_alpha_adjust_alpha_adjust_component__WEBPACK_IMPORTED_MODULE_13__["AlphaAdjustComponent"],
                _example_coin_chaser_coin_chaser_component__WEBPACK_IMPORTED_MODULE_14__["CoinChaserComponent"],
                _example_flappy_bird_flappy_bird_component__WEBPACK_IMPORTED_MODULE_15__["FlappyBirdComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _app_routing_model__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
            ],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.model.ts":
/*!**************************************!*\
  !*** ./src/app/app.routing.model.ts ***!
  \**************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _basic_basic_world_basic_world_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basic/basic-world/basic-world.component */ "./src/app/basic/basic-world/basic-world.component.ts");
/* harmony import */ var _basic_basic_sprite_basic_sprite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./basic/basic-sprite/basic-sprite.component */ "./src/app/basic/basic-sprite/basic-sprite.component.ts");
/* harmony import */ var _basic_basic_fixed_size_basic_fixed_size_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basic/basic-fixed-size/basic-fixed-size.component */ "./src/app/basic/basic-fixed-size/basic-fixed-size.component.ts");
/* harmony import */ var _example_alpha_adjust_alpha_adjust_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./example/alpha-adjust/alpha-adjust.component */ "./src/app/example/alpha-adjust/alpha-adjust.component.ts");
/* harmony import */ var _example_coin_chaser_coin_chaser_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example/coin-chaser/coin-chaser.component */ "./src/app/example/coin-chaser/coin-chaser.component.ts");
/* harmony import */ var _example_flappy_bird_flappy_bird_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example/flappy-bird/flappy-bird.component */ "./src/app/example/flappy-bird/flappy-bird.component.ts");









var routes = [
    { path: '', redirectTo: 'FlappyBird', pathMatch: 'full' },
    { path: 'BasicWorld', component: _basic_basic_world_basic_world_component__WEBPACK_IMPORTED_MODULE_3__["BasicWorldComponent"] },
    { path: 'BasicSprite', component: _basic_basic_sprite_basic_sprite_component__WEBPACK_IMPORTED_MODULE_4__["BasicSpriteComponent"] },
    { path: 'BasicFixedSize', component: _basic_basic_fixed_size_basic_fixed_size_component__WEBPACK_IMPORTED_MODULE_5__["BasicFixedSizeComponent"] },
    { path: 'AlphaAdjust', component: _example_alpha_adjust_alpha_adjust_component__WEBPACK_IMPORTED_MODULE_6__["AlphaAdjustComponent"] },
    { path: 'CoinChaser', component: _example_coin_chaser_coin_chaser_component__WEBPACK_IMPORTED_MODULE_7__["CoinChaserComponent"] },
    { path: 'FlappyBird', component: _example_flappy_bird_flappy_bird_component__WEBPACK_IMPORTED_MODULE_8__["FlappyBirdComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/basic/basic-fixed-size/basic-fixed-size.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/basic/basic-fixed-size/basic-fixed-size.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face{\r\n    font-family:\"Connection\";src:url('Connection.ttf') \r\nformat(\"truetype\")}\r\n\r\nh1{font-family:\"Connection\",cursive;padding:0;font-size:50px}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFzaWMvYmFzaWMtZml4ZWQtc2l6ZS9iYXNpYy1maXhlZC1zaXplLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0IsQ0FBQztrQkFDWDs7QUFFbEIsR0FBRyxnQ0FBZ0MsQ0FBQyxTQUFTLENBQUMsY0FBYyIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljL2Jhc2ljLWZpeGVkLXNpemUvYmFzaWMtZml4ZWQtc2l6ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OlwiQ29ubmVjdGlvblwiO3NyYzp1cmwoXCIuLi8uLi8uLi9hc3NldHMvZm9udC9Db25uZWN0aW9uLnR0ZlwiKSBcclxuZm9ybWF0KFwidHJ1ZXR5cGVcIil9XHJcblxyXG5oMXtmb250LWZhbWlseTpcIkNvbm5lY3Rpb25cIixjdXJzaXZlO3BhZGRpbmc6MDtmb250LXNpemU6NTBweH0iXX0= */");

/***/ }),

/***/ "./src/app/basic/basic-fixed-size/basic-fixed-size.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/basic/basic-fixed-size/basic-fixed-size.component.ts ***!
  \**********************************************************************/
/*! exports provided: BasicFixedSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicFixedSizeComponent", function() { return BasicFixedSizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);



var BootScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BootScene, _super);
    function BootScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BootScene.prototype.create = function () {
        var _this = this;
        this.helloWorld = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Hello World', {
            fontFamily: 'Connection',
            fontSize: 50,
            stroke: '#000000',
            strokeThickness: 8,
            fill: '#ffffff'
        }).setInteractive();
        this.helloWorld.setOrigin(0.5, 0.5);
        this.helloWorld.on('pointerup', function () {
            _this.scale.startFullscreen();
        }, this);
    };
    return BootScene;
}(phaser__WEBPACK_IMPORTED_MODULE_2__["Scene"]));
var BasicFixedSizeComponent = /** @class */ (function () {
    function BasicFixedSizeComponent() {
        this.game = {
            width: 800,
            height: 600,
            type: phaser__WEBPACK_IMPORTED_MODULE_2__["AUTO"],
            scene: BootScene,
            render: { pixelArt: true, antialias: false },
            scale: {
                mode: phaser__WEBPACK_IMPORTED_MODULE_2__["Scale"].FIT,
                autoCenter: phaser__WEBPACK_IMPORTED_MODULE_2__["Scale"].CENTER_BOTH
            },
        };
    }
    BasicFixedSizeComponent.prototype.ngOnInit = function () {
        console.log('game', this.game);
    };
    BasicFixedSizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-fixed-size',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-fixed-size.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-fixed-size/basic-fixed-size.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-fixed-size.component.css */ "./src/app/basic/basic-fixed-size/basic-fixed-size.component.css")).default]
        })
    ], BasicFixedSizeComponent);
    return BasicFixedSizeComponent;
}());



/***/ }),

/***/ "./src/app/basic/basic-sprite/animation/animation.ts":
/*!***********************************************************!*\
  !*** ./src/app/basic/basic-sprite/animation/animation.ts ***!
  \***********************************************************/
/*! exports provided: animationConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animationConfig", function() { return animationConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var animationConfig = {
    // boyJump: {
    //     key: 'jump',
    //     frames: this.anims.generateFrameNumbers('jump_sheet', { start: 0, end: 14, first: 0 }),
    //     frameRate: 12,
    //     repeat: -1
    // },
    boyDead: {
        key: 'dead',
        frames: [
            { key: 'dead0', frame: 0 },
            { key: 'dead1', frame: 1 },
            { key: 'dead2', frame: 2 },
            { key: 'dead3', frame: 3 },
            { key: 'dead4', frame: 4 },
            { key: 'dead5', frame: 5 },
            { key: 'dead6', frame: 6 },
            { key: 'dead7', frame: 7 },
            { key: 'dead8', frame: 8 },
            { key: 'dead9', frame: 9 },
            { key: 'dead10', frame: 10 },
            { key: 'dead11', frame: 11 },
            { key: 'dead12', frame: 12 },
            { key: 'dead13', frame: 13 },
            { key: 'dead14', frame: 14 },
        ],
        frameRate: 12,
        repeat: -1
    }
};


/***/ }),

/***/ "./src/app/basic/basic-sprite/basic-sprite.component.css":
/*!***************************************************************!*\
  !*** ./src/app/basic/basic-sprite/basic-sprite.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljL2Jhc2ljLXNwcml0ZS9iYXNpYy1zcHJpdGUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/basic/basic-sprite/basic-sprite.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/basic/basic-sprite/basic-sprite.component.ts ***!
  \**************************************************************/
/*! exports provided: BasicSpriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicSpriteComponent", function() { return BasicSpriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scenes_BootScene__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scenes/BootScene */ "./src/app/basic/basic-sprite/scenes/BootScene.ts");




var BasicSpriteComponent = /** @class */ (function () {
    function BasicSpriteComponent() {
        this.game = {
            width: '100',
            height: '100',
            type: phaser__WEBPACK_IMPORTED_MODULE_2__["AUTO"],
            scene: _scenes_BootScene__WEBPACK_IMPORTED_MODULE_3__["BootScene"],
            scale: {
                mode: phaser__WEBPACK_IMPORTED_MODULE_2__["Scale"].FIT,
                autoCenter: phaser__WEBPACK_IMPORTED_MODULE_2__["Scale"].CENTER_BOTH
            },
        };
    }
    BasicSpriteComponent.prototype.ngOnInit = function () {
        console.log('game', this.game);
    };
    BasicSpriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-sprite',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-sprite.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-sprite/basic-sprite.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-sprite.component.css */ "./src/app/basic/basic-sprite/basic-sprite.component.css")).default]
        })
    ], BasicSpriteComponent);
    return BasicSpriteComponent;
}());



/***/ }),

/***/ "./src/app/basic/basic-sprite/scenes/BootScene.ts":
/*!********************************************************!*\
  !*** ./src/app/basic/basic-sprite/scenes/BootScene.ts ***!
  \********************************************************/
/*! exports provided: BootScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootScene", function() { return BootScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animation_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animation/animation */ "./src/app/basic/basic-sprite/animation/animation.ts");



var BootScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BootScene, _super);
    function BootScene() {
        return _super.call(this, {
            key: 'BootScene'
        }) || this;
        // document.addEventListener('resize', () => {
        //     alert('iiiiiii')
        //     this.resize();
        // }, false);
        // window.focus();
        // this.resize();
        // window.addEventListener('resize', this.resize, false);
    }
    // resize() {
    //     alert('ini')
    //     const canvas = document.querySelector('canvas');
    //     const windowWidth = window.innerWidth;
    //     const windowHeight = window.innerHeight;
    //     const windowRatio = windowWidth / windowHeight;
    //     const gameRatio = this.sys.canvas.width / this.sys.canvas.height;;
    //     if (windowRatio < gameRatio) {
    //         canvas.style.width = windowWidth + 'px';
    //         canvas.style.height = (windowWidth / gameRatio) + 'px';
    //     } else {
    //         canvas.style.width = (windowHeight * gameRatio) + 'px';
    //         canvas.style.height = windowHeight + 'px';
    //     }
    // }
    BootScene.prototype.preload = function () {
        this.load.image('img1', 'assets/boy/Idle (1).png');
        this.load.image('dead0', 'assets/boy/dead01.png');
        this.load.image('dead1', 'assets/boy/dead02.png');
        this.load.image('dead2', 'assets/boy/dead03.png');
        this.load.image('dead3', 'assets/boy/dead04.png');
        this.load.image('dead4', 'assets/boy/dead05.png');
        this.load.image('dead5', 'assets/boy/dead06.png');
        this.load.image('dead6', 'assets/boy/dead07.png');
        this.load.image('dead7', 'assets/boy/dead08.png');
        this.load.image('dead8', 'assets/boy/dead09.png');
        this.load.image('dead9', 'assets/boy/dead10.png');
        this.load.image('dead10', 'assets/boy/dead11.png');
        this.load.image('dead11', 'assets/boy/dead12.png');
        this.load.image('dead12', 'assets/boy/dead13.png');
        this.load.image('dead13', 'assets/boy/dead14.png');
        this.load.image('dead14', 'assets/boy/dead15.png');
        this.load.spritesheet('jump_sheet', 'assets/boy/tttt.png', { frameWidth: 616, frameHeight: 566, endFrame: 10 });
    };
    BootScene.prototype.create = function () {
        var cellWidth = this.cameras.main.width / 100;
        var cellHeight = this.cameras.main.height / 100;
        // image 跟 sprite 最大的差別就是 sprite 可以sprite sheet
        this.img1 = this.add.image(cellWidth * 30, cellHeight * 30, 'img1');
        this.img1.displayWidth = cellWidth * 30;
        this.img1.displayHeight = this.img1.height * this.img1.displayWidth / this.
            img1.width;
        // // sprite animation by imgs
        this.anims.create(_animation_animation__WEBPACK_IMPORTED_MODULE_2__["animationConfig"].boyDead);
        var animate1 = this.add.sprite(cellWidth * 50, cellHeight * 30, 'dead0').play('dead');
        animate1.displayWidth = cellWidth * 30;
        animate1.displayHeight = animate1.height * animate1.displayWidth / animate1.width;
        // andorid瀏覽器有MAX_TEXTURE_SIZE限制，spritesheet不能太長
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('jump_sheet', { start: 0, end: 10, first: 0 }),
            frameRate: 12,
            repeat: -1
        });
        var jump = this.add.sprite(cellWidth * 70, cellHeight * 30, 'jump_sheet');
        jump.displayWidth = cellWidth * 30;
        jump.displayHeight = jump.height * jump.displayWidth / jump.width;
        jump.anims.play('jump', false);
    };
    return BootScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));



/***/ }),

/***/ "./src/app/basic/basic-world/basic-world.component.css":
/*!*************************************************************!*\
  !*** ./src/app/basic/basic-world/basic-world.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhc2ljL2Jhc2ljLXdvcmxkL2Jhc2ljLXdvcmxkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/basic/basic-world/basic-world.component.ts":
/*!************************************************************!*\
  !*** ./src/app/basic/basic-world/basic-world.component.ts ***!
  \************************************************************/
/*! exports provided: BasicWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicWorldComponent", function() { return BasicWorldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_2__);



var BootScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BootScene, _super);
    function BootScene() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BootScene.prototype.create = function () {
        var _this = this;
        this.helloWorld = this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, 'Hello World', {
            font: '40px Arial',
            fill: '#ffffff'
        }).setInteractive();
        this.helloWorld.setOrigin(0.5, 0.5);
        this.helloWorld.on('pointerup', function () {
            _this.scale.startFullscreen();
        }, this);
    };
    return BootScene;
}(phaser__WEBPACK_IMPORTED_MODULE_2__["Scene"]));
var BasicWorldComponent = /** @class */ (function () {
    function BasicWorldComponent() {
        this.game = {
            width: '100vw',
            height: '100vh',
            scale: {
                mode: phaser__WEBPACK_IMPORTED_MODULE_2__["Scale"].FIT,
                autoCenter: phaser__WEBPACK_IMPORTED_MODULE_2__["Scale"].CENTER_BOTH
            },
            scene: BootScene,
        };
        document.addEventListener('keyup', function () {
            alert('keys pressed');
        });
    }
    BasicWorldComponent.prototype.ngOnInit = function () {
        console.log('game', this.game);
    };
    BasicWorldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic-world',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./basic-world.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/basic/basic-world/basic-world.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./basic-world.component.css */ "./src/app/basic/basic-world/basic-world.component.css")).default]
        })
    ], BasicWorldComponent);
    return BasicWorldComponent;
}());



/***/ }),

/***/ "./src/app/example/alpha-adjust/alpha-adjust.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/example/alpha-adjust/alpha-adjust.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face{\r\n    font-family:\"Connection\";\r\n    src:url('Connection.ttf') \r\nformat(\"truetype\")}\r\n\r\nh3{font-family:\"Connection\",cursive;padding:0;font-size:30px}\r\n\r\ndiv{\r\n    font-family:\"Connection\";\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS9hbHBoYS1hZGp1c3QvYWxwaGEtYWRqdXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEI7a0JBQ2M7O0FBRWxCLEdBQUcsZ0NBQWdDLENBQUMsU0FBUyxDQUFDLGNBQWM7O0FBRTVEO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvZXhhbXBsZS9hbHBoYS1hZGp1c3QvYWxwaGEtYWRqdXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNle1xyXG4gICAgZm9udC1mYW1pbHk6XCJDb25uZWN0aW9uXCI7XHJcbiAgICBzcmM6dXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ZvbnQvQ29ubmVjdGlvbi50dGZcIikgXHJcbmZvcm1hdChcInRydWV0eXBlXCIpfVxyXG5cclxuaDN7Zm9udC1mYW1pbHk6XCJDb25uZWN0aW9uXCIsY3Vyc2l2ZTtwYWRkaW5nOjA7Zm9udC1zaXplOjMwcHh9XHJcblxyXG5kaXZ7XHJcbiAgICBmb250LWZhbWlseTpcIkNvbm5lY3Rpb25cIjtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/example/alpha-adjust/alpha-adjust.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/example/alpha-adjust/alpha-adjust.component.ts ***!
  \****************************************************************/
/*! exports provided: AlphaAdjustComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlphaAdjustComponent", function() { return AlphaAdjustComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scene_GameScene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/GameScene */ "./src/app/example/alpha-adjust/scene/GameScene.ts");



var AlphaAdjustComponent = /** @class */ (function () {
    function AlphaAdjustComponent() {
        this.game = {
            width: 800,
            height: 600,
            version: '1.0',
            type: Phaser.AUTO,
            scene: _scene_GameScene__WEBPACK_IMPORTED_MODULE_2__["GameScene"],
            render: { pixelArt: true, antialias: false },
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
        };
    }
    AlphaAdjustComponent.prototype.ngOnInit = function () {
        console.log('game', this.game);
    };
    AlphaAdjustComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-alpha-adjust',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alpha-adjust.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/example/alpha-adjust/alpha-adjust.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alpha-adjust.component.css */ "./src/app/example/alpha-adjust/alpha-adjust.component.css")).default]
        })
    ], AlphaAdjustComponent);
    return AlphaAdjustComponent;
}());



/***/ }),

/***/ "./src/app/example/alpha-adjust/objects/clone-crystal.ts":
/*!***************************************************************!*\
  !*** ./src/app/example/alpha-adjust/objects/clone-crystal.ts ***!
  \***************************************************************/
/*! exports provided: CloneCrystal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneCrystal", function() { return CloneCrystal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var CloneCrystal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CloneCrystal, _super);
    function CloneCrystal(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.key) || this;
        _this.initVariables();
        _this.initImage();
        _this.scene.add.existing(_this);
        return _this;
    }
    CloneCrystal.prototype.initVariables = function () {
        this.increaseAlpha = false;
    };
    CloneCrystal.prototype.initImage = function () {
        this.setOrigin(0.5);
        this.setScale(2);
        this.setAlpha(1);
    };
    CloneCrystal.prototype.update = function () {
        this.updateAlphaOfCloneCrystal();
        this.checkIfAlphaOutOfRange();
    };
    CloneCrystal.prototype.updateAlphaOfCloneCrystal = function () {
        if (this.increaseAlpha) {
            this.alpha += 0.01;
        }
        else {
            this.alpha -= 0.01;
        }
    };
    CloneCrystal.prototype.checkIfAlphaOutOfRange = function () {
        if (this.alpha === 0) {
            this.increaseAlpha = true;
            this.alpha = 0;
        }
        else if (this.alpha === 1) {
            this.increaseAlpha = false;
            this.alpha = 1;
        }
    };
    return CloneCrystal;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["GameObjects"].Image));



/***/ }),

/***/ "./src/app/example/alpha-adjust/objects/original-crystal.ts":
/*!******************************************************************!*\
  !*** ./src/app/example/alpha-adjust/objects/original-crystal.ts ***!
  \******************************************************************/
/*! exports provided: OriginalCrystal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OriginalCrystal", function() { return OriginalCrystal; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var OriginalCrystal = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OriginalCrystal, _super);
    function OriginalCrystal(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.key) || this;
        _this.initVariables(params);
        _this.initImage();
        _this.scene.add.existing(_this);
        return _this;
    }
    OriginalCrystal.prototype.initVariables = function (params) {
        this.randomAlpha = params.alpha;
    };
    OriginalCrystal.prototype.initImage = function () {
        this.setOrigin(0.5);
        this.setScale(2);
        this.setAlpha(this.randomAlpha);
    };
    return OriginalCrystal;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["GameObjects"].Image));



/***/ }),

/***/ "./src/app/example/alpha-adjust/scene/GameScene.ts":
/*!*********************************************************!*\
  !*** ./src/app/example/alpha-adjust/scene/GameScene.ts ***!
  \*********************************************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScene", function() { return GameScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _objects_clone_crystal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../objects/clone-crystal */ "./src/app/example/alpha-adjust/objects/clone-crystal.ts");
/* harmony import */ var _objects_original_crystal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../objects/original-crystal */ "./src/app/example/alpha-adjust/objects/original-crystal.ts");




var GameScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GameScene, _super);
    function GameScene() {
        return _super.call(this, {
            key: 'GameScene'
        }) || this;
    }
    GameScene.prototype.preload = function () {
        this.load.image('crystal', 'assets/alpha-adjust/crystal.png');
    };
    GameScene.prototype.init = function () {
        this.playerHasClicked = false;
        this.alphaDifferenceText = null;
        this.feedbackText = null;
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.cloneCrystal = new _objects_clone_crystal__WEBPACK_IMPORTED_MODULE_2__["CloneCrystal"]({
            scene: this,
            x: this.sys.canvas.width / 2 + 150,
            y: this.sys.canvas.height / 2 - 30,
            key: 'crystal',
        });
        this.originalCrystal = new _objects_original_crystal__WEBPACK_IMPORTED_MODULE_3__["OriginalCrystal"]({
            scene: this,
            x: this.sys.canvas.width / 2 - 150,
            y: this.sys.canvas.height / 2 - 30,
            key: 'crystal',
            alpha: phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Between(0, 100) / 100
        });
        this.input.on('pointerdown', function (pointer) {
            if (!_this.playerHasClicked) {
                _this.playerHasClicked = true;
            }
            else {
                _this.scene.restart();
            }
        }, this);
    };
    GameScene.prototype.update = function () {
        if (!this.playerHasClicked) {
            this.cloneCrystal.update();
            this.showResult = false;
        }
        else {
            if (!this.showResult) {
                var difference = this.clculateAlphaDifference();
                this.createResultTexts(difference);
            }
        }
    };
    GameScene.prototype.clculateAlphaDifference = function () {
        return Math.abs(this.cloneCrystal.alpha - this.originalCrystal.alpha);
    };
    GameScene.prototype.createResultTexts = function (difference) {
        this.alphaDifferenceText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 + 120, 'You : ' + this.cloneCrystal.alpha.toFixed(2), {
            fontFamily: 'Connection',
            fontSize: 80,
            stroke: '#000000',
            strokeThickness: 8,
            fill: '#ffffff'
        });
        this.alphaDifferenceText.setOrigin(0.5);
        this.alphaDifferenceText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 + 220, 'Actual : ' + this.originalCrystal.alpha.toFixed(2), {
            fontFamily: 'Connection',
            fontSize: 80,
            stroke: '#000000',
            strokeThickness: 8,
            fill: '#ffffff'
        });
        this.alphaDifferenceText.setOrigin(0.5);
        var textConfig = {
            fontFamily: 'Connection',
            fontSize: 50,
            stroke: '#000000',
            strokeThickness: 8,
            fill: '#ffffff'
        };
        var commentText;
        if (difference >= 0.5) {
            commentText = 'You can do better!';
        }
        else if (difference < 0.5 && difference >= 0.3) {
            commentText = 'OK!';
        }
        else if (difference < 0.3 && difference >= 0.1) {
            commentText = 'Great!';
        }
        else if (difference < 0.1) {
            commentText = 'Wonderful!';
        }
        this.feedbackText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 - 150, commentText, textConfig);
        this.feedbackText.setOrigin(0.5);
        this.showResult = true;
    };
    return GameScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));



/***/ }),

/***/ "./src/app/example/coin-chaser/coin-chaser.component.css":
/*!***************************************************************!*\
  !*** ./src/app/example/coin-chaser/coin-chaser.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGUvY29pbi1jaGFzZXIvY29pbi1jaGFzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/example/coin-chaser/coin-chaser.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/example/coin-chaser/coin-chaser.component.ts ***!
  \**************************************************************/
/*! exports provided: CoinChaserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoinChaserComponent", function() { return CoinChaserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scene_game_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/game-scene */ "./src/app/example/coin-chaser/scene/game-scene.ts");



var CoinChaserComponent = /** @class */ (function () {
    function CoinChaserComponent() {
        this.game = {
            width: 768,
            height: 576,
            type: Phaser.AUTO,
            scene: _scene_game_scene__WEBPACK_IMPORTED_MODULE_2__["GameScene"],
            render: { pixelArt: true, antialias: false },
            scale: {
                mode: Phaser.Scale.FIT,
                autoCenter: Phaser.Scale.CENTER_BOTH
            },
            input: {
                keyboard: true
            },
            backgroundColor: '#3A99D9',
        };
    }
    CoinChaserComponent.prototype.ngOnInit = function () {
    };
    CoinChaserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coin-chaser',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coin-chaser.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/example/coin-chaser/coin-chaser.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coin-chaser.component.css */ "./src/app/example/coin-chaser/coin-chaser.component.css")).default]
        })
    ], CoinChaserComponent);
    return CoinChaserComponent;
}());



/***/ }),

/***/ "./src/app/example/coin-chaser/object/Player.ts":
/*!******************************************************!*\
  !*** ./src/app/example/coin-chaser/object/Player.ts ***!
  \******************************************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var Player = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Player, _super);
    function Player(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.key) || this;
        _this.initVariables();
        _this.initImage();
        _this.initInput();
        _this.scene.add.existing(_this);
        return _this;
    }
    Player.prototype.initVariables = function () {
        this.walkingSpeed = 5;
    };
    Player.prototype.initImage = function () {
        this.setOrigin(0.5, 0.5);
    };
    Player.prototype.initInput = function () {
        this.cursors = this.scene.input.keyboard.createCursorKeys();
    };
    Player.prototype.update = function () {
        this.handleInput();
    };
    Player.prototype.handleInput = function () {
        if (this.cursors.right.isDown || this.way === 'right') {
            this.x += this.walkingSpeed;
            this.setFlipX(false);
        }
        else if (this.cursors.left.isDown || this.way === 'left') {
            this.x -= this.walkingSpeed;
            this.setFlipX(true);
        }
        else if (this.cursors.up.isDown || this.way === 'up') {
            this.y -= this.walkingSpeed;
        }
        else if (this.cursors.down.isDown || this.way === 'down') {
            this.y += this.walkingSpeed;
        }
    };
    return Player;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["GameObjects"].Image));



/***/ }),

/***/ "./src/app/example/coin-chaser/object/coin.ts":
/*!****************************************************!*\
  !*** ./src/app/example/coin-chaser/object/coin.ts ***!
  \****************************************************/
/*! exports provided: Coin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coin", function() { return Coin; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var Coin = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Coin, _super);
    function Coin(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.key) || this;
        _this.initVariables();
        _this.initImage();
        _this.initEvents();
        _this.scene.add.existing(_this);
        return _this;
    }
    Coin.prototype.initVariables = function () {
        this.centerOfScreen = this.scene.sys.canvas.width / 2;
        this.changePositionTimer = null;
        this.setFieldSide();
    };
    Coin.prototype.initImage = function () {
        this.setOrigin(0.5, 0.5);
    };
    Coin.prototype.initEvents = function () {
        this.changePositionTimer = this.scene.time.addEvent({
            delay: 2000,
            callback: this.changePosition,
            callbackScope: this,
            loop: true
        });
    };
    Coin.prototype.changePosition = function () {
        this.setNewPosition();
        this.setFieldSide();
        this.changePositionTimer.reset({
            delay: 2000,
            callback: this.changePosition,
            callbackScope: this,
            loop: true
        });
    };
    Coin.prototype.setNewPosition = function () {
        if (this.lastPosition === 'right') {
            this.x = phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Between(100, this.centerOfScreen);
        }
        else {
            this.x = phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Between(385, 700);
        }
        this.y = phaser__WEBPACK_IMPORTED_MODULE_1__["Math"].Between(100, 500);
    };
    Coin.prototype.setFieldSide = function () {
        if (this.x <= this.centerOfScreen) {
            this.lastPosition = 'left';
        }
        else {
            this.lastPosition = 'right';
        }
    };
    return Coin;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["GameObjects"].Image));



/***/ }),

/***/ "./src/app/example/coin-chaser/scene/game-scene.ts":
/*!*********************************************************!*\
  !*** ./src/app/example/coin-chaser/scene/game-scene.ts ***!
  \*********************************************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScene", function() { return GameScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _object_coin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../object/coin */ "./src/app/example/coin-chaser/object/coin.ts");
/* harmony import */ var _object_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/Player */ "./src/app/example/coin-chaser/object/Player.ts");



var GameScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GameScene, _super);
    function GameScene() {
        return _super.call(this, {
            key: 'GameScene'
        }) || this;
    }
    GameScene.prototype.preload = function () {
        this.load.image('background', './assets/coin-chaser/background.png');
        this.load.image('player', './assets/coin-chaser/player.png');
        this.load.image('coin', './assets/coin-chaser/coin.png');
        this.load.image('arrowUp', './assets/gameicons/PNG/Black/1x/arrowUp.png');
        this.load.image('arrowDown', './assets/gameicons/PNG/Black/1x/arrowDown.png');
        this.load.image('arrowLeft', './assets/gameicons/PNG/Black/1x/arrowLeft.png');
        this.load.image('arrowRight', './assets/gameicons/PNG/Black/1x/arrowRight.png');
    };
    GameScene.prototype.init = function () {
        this.collectedCoins = 0;
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.background = this.add.image(0, 0, 'background');
        this.background.setOrigin(0, 0);
        this.coin = new _object_coin__WEBPACK_IMPORTED_MODULE_1__["Coin"]({
            scene: this,
            x: Phaser.Math.Between(100, 700),
            y: Phaser.Math.Between(100, 500),
            key: 'coin',
        });
        this.player = new _object_Player__WEBPACK_IMPORTED_MODULE_2__["Player"]({
            scene: this,
            x: this.sys.canvas.width / 2,
            y: this.sys.canvas.height / 2,
            key: 'player',
        });
        this.arrowUp = this.add.image(640, 430, 'arrowUp').setInteractive();
        this.arrowDown = this.add.image(640, 530, 'arrowDown').setInteractive();
        this.arrowLeft = this.add.image(580, 480, 'arrowLeft').setInteractive();
        this.arrowRight = this.add.image(700, 480, 'arrowRight').setInteractive();
        this.arrowUp.on('pointerdown', function () {
            _this.player.way = 'up';
        });
        this.arrowUp.on('pointerup', function () {
            _this.player.way = 'stop';
        });
        this.arrowDown.on('pointerdown', function () {
            _this.player.way = 'down';
        });
        this.arrowDown.on('pointerup', function () {
            _this.player.way = 'stop';
        });
        this.arrowLeft.on('pointerdown', function () {
            _this.player.way = 'left';
        });
        this.arrowLeft.on('pointerup', function () {
            _this.player.way = 'stop';
        });
        this.arrowRight.on('pointerdown', function () {
            _this.player.way = 'right';
        });
        this.arrowRight.on('pointerup', function () {
            _this.player.way = 'stop';
        });
        // create texts
        this.coinsCollectedText = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height - 50, this.collectedCoins + '', {
            fontFamily: 'Connection',
            fontSize: 38,
            stroke: '#fff',
            strokeThickness: 6,
            fill: '#000000'
        });
        this.pointer = this.input.activePointer;
        this.text = this.add.text(10, 10, 'Move the mouse', { font: '16px Courier', fill: '#00ff00' });
    };
    GameScene.prototype.update = function () {
        this.player.update();
        this.coin.update();
        // do the collision check
        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.coin.getBounds())) {
            this.updateCoinStatus();
        }
        this.text.setText([
            'x: ' + this.pointer.x,
            'y: ' + this.pointer.y,
            'mid x: ' + this.pointer.midPoint.x,
            'mid y: ' + this.pointer.midPoint.y,
            'velocity x: ' + this.pointer.velocity.x,
            'velocity y: ' + this.pointer.velocity.y,
            'movementX: ' + this.pointer.movementX,
            'movementY: ' + this.pointer.movementY
        ]);
    };
    GameScene.prototype.updateCoinStatus = function () {
        this.collectedCoins++;
        this.coinsCollectedText.setText(this.collectedCoins + '');
        this.coin.changePosition();
    };
    return GameScene;
}(Phaser.Scene));



/***/ }),

/***/ "./src/app/example/flappy-bird/flappy-bird.component.css":
/*!***************************************************************!*\
  !*** ./src/app/example/flappy-bird/flappy-bird.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face{\r\n    font-family:\"Connection\";\r\n    src:url('Connection.ttf') \r\nformat(\"truetype\")}\r\n\r\n\r\n\r\ndiv{\r\n    font-family:\"Connection\",cursive;\r\n    padding:0;\r\n    font-size:30px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZS9mbGFwcHktYmlyZC9mbGFwcHktYmlyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCO2tCQUNjOzs7O0FBSWxCO0lBQ0ksZ0NBQWdDO0lBQ2hDLFNBQVM7SUFDVDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZXhhbXBsZS9mbGFwcHktYmlyZC9mbGFwcHktYmlyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZXtcclxuICAgIGZvbnQtZmFtaWx5OlwiQ29ubmVjdGlvblwiO1xyXG4gICAgc3JjOnVybChcIi4uLy4uLy4uL2Fzc2V0cy9mb250L0Nvbm5lY3Rpb24udHRmXCIpIFxyXG5mb3JtYXQoXCJ0cnVldHlwZVwiKX1cclxuXHJcblxyXG5cclxuZGl2e1xyXG4gICAgZm9udC1mYW1pbHk6XCJDb25uZWN0aW9uXCIsY3Vyc2l2ZTtcclxuICAgIHBhZGRpbmc6MDtcclxuICAgIGZvbnQtc2l6ZTozMHB4XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/example/flappy-bird/flappy-bird.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/example/flappy-bird/flappy-bird.component.ts ***!
  \**************************************************************/
/*! exports provided: FlappyBirdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlappyBirdComponent", function() { return FlappyBirdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _scene_boot_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scene/boot-scene */ "./src/app/example/flappy-bird/scene/boot-scene.ts");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_3__);




var FlappyBirdComponent = /** @class */ (function () {
    function FlappyBirdComponent() {
        this.game = {
            width: 390,
            height: 600,
            type: phaser__WEBPACK_IMPORTED_MODULE_3__["AUTO"],
            scene: [_scene_boot_scene__WEBPACK_IMPORTED_MODULE_2__["BootScene"]],
            render: { pixelArt: true, antialias: false },
            scale: {
                mode: phaser__WEBPACK_IMPORTED_MODULE_3__["Scale"].FIT,
                autoCenter: phaser__WEBPACK_IMPORTED_MODULE_3__["Scale"].CENTER_BOTH
            },
            input: {
                keyboard: true
            },
            physics: {
                default: 'arcade',
                arcade: {
                    gravity: { y: 300 }
                }
            },
            backgroundColor: '#98d687',
        };
    }
    FlappyBirdComponent.prototype.ngOnInit = function () {
    };
    FlappyBirdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flappy-bird',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flappy-bird.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/example/flappy-bird/flappy-bird.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flappy-bird.component.css */ "./src/app/example/flappy-bird/flappy-bird.component.css")).default]
        })
    ], FlappyBirdComponent);
    return FlappyBirdComponent;
}());



/***/ }),

/***/ "./src/app/example/flappy-bird/object/bird.ts":
/*!****************************************************!*\
  !*** ./src/app/example/flappy-bird/object/bird.ts ***!
  \****************************************************/
/*! exports provided: Bird */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bird", function() { return Bird; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var Bird = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Bird, _super);
    function Bird(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.key) || this;
        _this.pressDown = false;
        // image
        _this.setScale(3);
        _this.setOrigin(0, 0);
        // variables
        _this.isDead = false;
        _this.isFlapping = false;
        // physics
        _this.scene.physics.world.enable(_this);
        _this.body.setGravityY(1000);
        _this.body.setSize(17, 12);
        params.scene.input.on('pointerdown', function (pointer) {
            _this.pressDown = true;
        }, _this);
        params.scene.input.on('pointerup', function (pointer) {
            _this.pressDown = false;
        }, _this);
        _this.scene.add.existing(_this);
        return _this;
    }
    Bird.prototype.getDead = function () {
        return this.isDead;
    };
    Bird.prototype.setDead = function (dead) {
        this.isDead = dead;
    };
    Bird.prototype.update = function () {
        if (this.pressDown && !this.isFlapping) {
            this.isFlapping = false;
            this.body.setVelocityY(-350);
            this.scene.tweens.add({
                targets: this,
                props: { angle: -20 },
                duration: 150,
                ease: 'Power0'
            });
        }
        else if (!this.pressDown && this.isFlapping) {
            this.isFlapping = false;
        }
        // check if off the screen
        if (this.y + this.height > this.scene.sys.canvas.height) {
            this.isDead = true;
        }
    };
    return Bird;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["GameObjects"].Image));



/***/ }),

/***/ "./src/app/example/flappy-bird/object/pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/example/flappy-bird/object/pipe.ts ***!
  \****************************************************/
/*! exports provided: Pipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pipe", function() { return Pipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var Pipe = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Pipe, _super);
    function Pipe(params) {
        var _this = _super.call(this, params.scene, params.x, params.y, params.key, params.frame) || this;
        // image
        _this.setScale(3);
        _this.setOrigin(0, 0);
        // physics
        _this.scene.physics.world.enable(_this);
        _this.body.allowGravity = false;
        _this.body.setVelocityX(-200);
        _this.body.setSize(20, 20);
        _this.scene.add.existing(_this);
        return _this;
    }
    return Pipe;
}(Phaser.GameObjects.Image));



/***/ }),

/***/ "./src/app/example/flappy-bird/scene/boot-scene.ts":
/*!*********************************************************!*\
  !*** ./src/app/example/flappy-bird/scene/boot-scene.ts ***!
  \*********************************************************/
/*! exports provided: BootScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootScene", function() { return BootScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _main_menu_scene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-menu-scene */ "./src/app/example/flappy-bird/scene/main-menu-scene.ts");
/* harmony import */ var _game_scene__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-scene */ "./src/app/example/flappy-bird/scene/game-scene.ts");



var BootScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BootScene, _super);
    function BootScene() {
        return _super.call(this, {
            key: 'BootScene',
        }) || this;
    }
    BootScene.prototype.preload = function () {
        var _this = this;
        // set the background and create loading bar
        this.cameras.main.setBackgroundColor(0x98d687);
        this.createLoadingbar();
        this.scene.add('MainMenuScene', _main_menu_scene__WEBPACK_IMPORTED_MODULE_1__["MainMenuScene"], false);
        this.scene.add('GameScene', _game_scene__WEBPACK_IMPORTED_MODULE_2__["GameScene"], false);
        var title = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 - 100, 'loading...', {
            fontFamily: 'Connection',
            fontSize: 20
        });
        title.setOrigin(0.5);
        // pass value to change the loading bar fill
        this.load.on('progress', function (value) {
            _this.progressBar.clear();
            _this.progressBar.fillStyle(0xfff6d3, 1);
            _this.progressBar.fillRect(_this.cameras.main.width / 4, _this.cameras.main.height / 2 - 16, (_this.cameras.main.width / 2) * value, 16);
        }, this);
        // delete bar graphics, when loading complete
        this.load.on('complete', function () {
            _this.progressBar.destroy();
            _this.loadingBar.destroy();
            title.setVisible(false);
        }, this);
        // load out package
        this.load.pack('preload', './assets/flappy-bird/pack.json', 'preload');
    };
    BootScene.prototype.update = function () {
        this.scene.start('MainMenuScene');
    };
    BootScene.prototype.createLoadingbar = function () {
        this.loadingBar = this.add.graphics();
        this.loadingBar.fillStyle(0x5dae47, 1);
        this.loadingBar.fillRect(this.cameras.main.width / 4 - 2, this.cameras.main.height / 2 - 18, this.cameras.main.width / 2 + 4, 20);
        this.progressBar = this.add.graphics();
    };
    return BootScene;
}(Phaser.Scene));



/***/ }),

/***/ "./src/app/example/flappy-bird/scene/game-scene.ts":
/*!*********************************************************!*\
  !*** ./src/app/example/flappy-bird/scene/game-scene.ts ***!
  \*********************************************************/
/*! exports provided: GameScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameScene", function() { return GameScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _object_bird__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../object/bird */ "./src/app/example/flappy-bird/object/bird.ts");
/* harmony import */ var _object_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../object/pipe */ "./src/app/example/flappy-bird/object/pipe.ts");




var GameScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](GameScene, _super);
    function GameScene() {
        return _super.call(this, {
            key: 'GameScene'
        }) || this;
    }
    GameScene.prototype.init = function () {
        this.registry.set('score', -1);
    };
    GameScene.prototype.create = function () {
        this.background = this.add
            .tileSprite(0, 0, 390, 600, 'background')
            .setOrigin(0, 0);
        this.bird = new _object_bird__WEBPACK_IMPORTED_MODULE_2__["Bird"]({
            scene: this,
            x: 50,
            y: 100,
            key: 'bird'
        });
        this.scoreText = this.add.text(this.sys.canvas.width / 2 - 14, 30, this.registry.values.score, {
            fontFamily: 'Connection',
            fontSize: 30,
            stroke: '#000000',
            strokeThickness: 5,
            fill: '#ffffff'
        });
        this.pipes = this.add.group({});
        this.addNewRowOfPipes();
        this.timer = this.time.addEvent({
            delay: 1500,
            callback: this.addNewRowOfPipes,
            callbackScope: this,
            loop: true
        });
    };
    GameScene.prototype.update = function () {
        var _this = this;
        if (!this.bird.getDead()) {
            this.background.tilePositionX += 4;
            this.bird.update();
            this.physics.overlap(this.bird, this.pipes, function () {
                _this.bird.setDead(true);
            }, null, this);
        }
        else {
            phaser__WEBPACK_IMPORTED_MODULE_1__["Actions"].Call(this.pipes.getChildren(), function (pipe) {
                pipe.body.setVelocityX(0);
            }, this);
            if (this.bird.y > this.sys.canvas.height) {
                this.scene.start('MainMenuScene');
            }
        }
    };
    GameScene.prototype.addNewRowOfPipes = function () {
        // update the score
        this.registry.values.score += 1;
        this.scoreText.setText(this.registry.values.score);
        // randomly pick a number between 1 and 5
        var hole = Math.floor(Math.random() * 5) + 1;
        // add 6 pipes with one big hole at position hole and hole + 1
        for (var i = 0; i < 10; i++) {
            if (i !== hole && i !== hole + 1 && i !== hole + 2) {
                if (i === hole - 1) {
                    this.addPipe(400, i * 60, 0);
                }
                else if (i === hole + 3) {
                    this.addPipe(400, i * 60, 1);
                }
                else {
                    this.addPipe(400, i * 60, 2);
                }
            }
        }
    };
    GameScene.prototype.addPipe = function (x, y, frame) {
        // create a new pipe at the position x and y and add it to group
        this.pipes.add(new _object_pipe__WEBPACK_IMPORTED_MODULE_3__["Pipe"]({
            scene: this,
            x: x,
            y: y,
            key: 'pipe',
            frame: frame,
        }));
    };
    return GameScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));



/***/ }),

/***/ "./src/app/example/flappy-bird/scene/main-menu-scene.ts":
/*!**************************************************************!*\
  !*** ./src/app/example/flappy-bird/scene/main-menu-scene.ts ***!
  \**************************************************************/
/*! exports provided: MainMenuScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainMenuScene", function() { return MainMenuScene; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phaser */ "./node_modules/phaser/src/phaser.js");
/* harmony import */ var phaser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phaser__WEBPACK_IMPORTED_MODULE_1__);


var MainMenuScene = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MainMenuScene, _super);
    function MainMenuScene() {
        return _super.call(this, {
            key: 'mainMenuScene',
        }) || this;
    }
    MainMenuScene.prototype.init = function () {
        var _this = this;
        this.input.on('pointerdown', function (pointer) {
            _this.scene.start('GameScene');
        }, this);
    };
    MainMenuScene.prototype.create = function () {
        this.background = this.add
            .tileSprite(0, 0, 390, 600, 'background')
            .setOrigin(0, 0);
        var title = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2 - 100, 'FLAPPY BIRD', {
            fontFamily: 'Connection',
            fontSize: 50,
            stroke: '#000000',
            strokeThickness: 8,
            fill: '#ffffff'
        });
        title.setOrigin(0.5);
        var content = this.add.text(this.sys.canvas.width / 2, this.sys.canvas.height / 2, 'Press To PLAY', {
            fontFamily: 'Connection',
            fontSize: 20,
            stroke: '#000000',
            strokeThickness: 5,
            fill: '#ffffff'
        });
        content.setOrigin(0.5);
    };
    MainMenuScene.prototype.update = function () {
        this.background.tilePositionX += 1;
    };
    return MainMenuScene;
}(phaser__WEBPACK_IMPORTED_MODULE_1__["Scene"]));



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ion_phaser_core_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ion-phaser/core/loader */ "./node_modules/@ion-phaser/core/loader/index.mjs");







if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(function (err) { return console.error(err); });
Object(_ion_phaser_core_loader__WEBPACK_IMPORTED_MODULE_6__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\phaser\angular\ion-template\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map