function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ng-container>\n<!--toolbar-->\n<mat-toolbar class=\"example-header\">\n<button mat-icon-button (click)=\"sidenav.toggle()\">\n<mat-icon>menu</mat-icon>\n</button>\n<span>OPILUM</span>\n<span class=\"spacer\"></span>\n<button mat-button (click)=\"exportPng()\">DOWNLOAD</button>\n</mat-toolbar>\n<!--end toolbar-->\n\n<mat-sidenav-container class=\"example-container\">\n\n  <mat-sidenav #sidenav mode=\"side\" [position]=\"'start'\" opened class=\"sidenav-left\"\n  [fixedInViewport]=\"true\" [fixedTopGap]=\"60\"\n  [fixedBottomGap]=\"0\">\n\n  <div *ngFor=\"let n of themes; let idx=index\" (click)=\"selectTheme(idx)\" class=\"uk-width-1-2\" [ngClass]=\"{'bordered':n.selected}\" style=\"padding:3px; display: inline-block;\" >\n    <img src=\"{{n.thumb}}\" style=\"width: 100%;\">\n  </div>\n\n\n  </mat-sidenav>\n\n<mat-sidenav #sidenav mode=\"side\" [position]=\"'end'\" opened class=\"example-sidenav\"\n[fixedInViewport]=\"true\" [fixedTopGap]=\"60\"\n[fixedBottomGap]=\"0\">\n\n<!--expand panel-->\n<mat-accordion>\n<!--image config-->\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Gambar\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <!--image editor-->\n<div class=\"margin-vert\">\n<div class=\"uk-width-1-2\" style=\"display: inline-block;\" *ngFor=\"let n of theme.images; let idx=index;\">\n<img src=\"{{n.url}}\" width=\"100%\" (click)=\"uploadImage('image',n,n.rasio)\">\n</div>\n</div>\n<!--end image editor-->    \n  </mat-expansion-panel>\n<!--end image config-->\n<!--color config-->\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Warna\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n<!--warna-->\n<div class=\"margin-vert\">\n  <div class=\"uk-width-1-4\" *ngFor=\"let n of colors; let idx=index;\" \n  (click)=\"changeColor(n.name)\" style=\"display: inline-block;\" \n  [ngStyle]=\"{backgroundColor:n.data.primary.base, border:n.selected ? '3px solid black':''}\"\n  >\n  <img src=\"assets/img/transparent.png\" width=\"100%\" >\n  </div>\n  </div>\n<!--end tema warna-->\n</mat-expansion-panel>\n<!--end color config-->\n<!--pattern config-->\n<mat-expansion-panel>\n  <mat-expansion-panel-header>\n    <mat-panel-title>\n      Frame\n    </mat-panel-title>\n  </mat-expansion-panel-header>\n  <div class=\"margin-vert\">\n  <mat-slide-toggle [(ngModel)]=\"theme.pattern.show\">Tampilkan Pola</mat-slide-toggle>\n  </div>\n  <div class=\"uk-width-1-4\" style=\"float: left;\" *ngFor=\"let n of patterns; let idx=index;\" \n  (click)=\"getPatternData(n.name)\" [ngStyle]=\"{border:n.selected ? '2px solid black':''}\">\n  <img src=\"{{n.thumb}}\" width=\"100%\" >\n  </div>\n</mat-expansion-panel>\n<!--end pattern config-->\n\n</mat-accordion>\n<!--end expand panel-->\n<!--header editor-->\n<!--end header editor-->\n<mat-form-field [style.fontSize]=\"10\" style=\"width: 100%;\" hidden>  \n  <input matInput>\n  </mat-form-field>\n\n\n\n\n\n\n\n\n</mat-sidenav>\n<!--sidenav content-->\n<mat-sidenav-content style=\"padding: 20px; background-color: #ccc;\">\n<!--halaman-halaman tampil disini-->\n\n\n<div class=\"uk-margin uk-flex uk-flex-center uk-flex-middle\">\n<!--desain-->\n<div id=\"img\" [ngStyle]=\"theme.container.style\">\n<!--images-->\n<div *ngFor=\"let img of theme.images\" [ngStyle]=\"img.style\">\n<img src=\"{{img.url}}\" width=\"100%\">\n</div>\n<!--end images-->\n\n<!--header-->\n<div [ngStyle]=\"theme.header.style\" [ngClass]=\"theme.header.class\" class=\"opilum-header\">\n  <!--enditor for footer-->\n  <div class=\"header-actions\">\n    <button mat-icon-button (click)=\"addHeaderItem()\"><mat-icon>text_format</mat-icon></button>\n    <button mat-icon-button (click)=\"uploadImage('add-header',null,theme.header.imageItemRatio)\"><mat-icon>image</mat-icon></button>\n    <button mat-icon-button (click)=\"visibilityHeader()\"><mat-icon>{{theme.header.showBackground ? 'visibility':'visibility_off'}}</mat-icon></button>\n  </div>\n  <!--end editor for footer-->  \n    <div *ngFor=\"let n of theme.header.columns; let idx=index\" [ngStyle]=\"theme.header.columnStyle\" class=\"opilum-action\">\n      <!--editor for item-->\n      <div class=\"actions\">\n        <button mat-icon-button (click)=\"removeHeaderItem(idx)\"><mat-icon>close</mat-icon></button>\n      </div>\n      <!--end editor for item-->\n      <textarea matInput [ngStyle]=\"n.style\"\n  [(ngModel)]=\"n.content\" *ngIf=\"n.type == 'text'\" AutoSizeInput\n            cdkTextareaAutosize \n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"1\"></textarea>\n\n      <img *ngIf=\"n.type == 'image'\" src=\"{{n.content}}\" [ngStyle]=\"n.style\">\n    </div>\n  </div>\n<!--end header-->\n<!--content-->\n<div *ngFor=\"let content of theme.contents\" [ngStyle]=\"content.style\" [ngClass]=\"content.class\">\n\n  <textarea matInput *ngFor=\"let m of content.items\" [ngStyle]=\"m.style\" style=\"overflow: hidden;\"\n  [(ngModel)]=\"m.text\"\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"10\"></textarea>\n\n</div>\n<!--end content-->\n\n\n\n<!--footer-->\n<div [ngStyle]=\"theme.footer.style\" [ngClass]=\"theme.footer.class\" class=\"opilum-footer\">\n  <!--enditor for footer-->\n  <div class=\"footer-actions\">\n    <button mat-icon-button (click)=\"addFooterItem()\"><mat-icon>text_format</mat-icon></button>\n    <button mat-icon-button (click)=\"uploadImage('add-footer',null,theme.footer.imageItemRatio)\"><mat-icon>image</mat-icon></button>\n    <button mat-icon-button (click)=\"visibilityFooter()\"><mat-icon>{{theme.footer.showBackground ? 'visibility':'visibility_off'}}</mat-icon></button>\n  </div>\n  <!--end editor for footer-->  \n    <div *ngFor=\"let n of theme.footer.columns; let idx=index\" [ngStyle]=\"theme.footer.columnStyle\" class=\"opilum-action\">\n      <!--editor for item-->\n      <div class=\"actions\">\n        <button mat-icon-button (click)=\"removeFooterItem(idx)\"><mat-icon>close</mat-icon></button>\n      </div>\n      <!--end editor for item-->\n      <textarea matInput [ngStyle]=\"n.style\"\n  [(ngModel)]=\"n.content\" *ngIf=\"n.type == 'text'\" AutoSizeInput\n            cdkTextareaAutosize \n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"1\"></textarea>\n\n      <img *ngIf=\"n.type == 'image'\" src=\"{{n.content}}\" [ngStyle]=\"n.style\">\n    </div>\n  </div>\n<!--end footer-->\n\n<!--pattern-->\n<svg *ngIf=\"theme.pattern.show\" [ngStyle]=\"theme.pattern.containerStyle\" style=\"position: absolute; left: 0; top: 0;\"\nwidth=\"500\"\nheight=\"500\"\n[attr.viewBox]=\"selectedPattern.viewBox\">\n<g [attr.transform]=\"selectedPattern.transform\">\n<path [ngStyle]=\"theme.pattern.style\" [attr.d]=\"selectedPattern.data\" />\n</g>\n</svg>\n<!--end pattern-->\n\n<!--masking-->\n<div *ngFor=\"let mask of theme.masking\"\n[ngStyle]=\"mask.style\"\n[ngClass]=\"mask.class\">\n\n</div>\n<!---->\n\n\n</div>\n</div>\n</mat-sidenav-content>\n<!--end sidenav content-->\n</mat-sidenav-container>   \n</ng-container>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-gallery/dialog-gallery.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-gallery/dialog-gallery.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDialogGalleryDialogGalleryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 mat-dialog-title>Lampirkan Gambar</h1>\n<div mat-dialog-content>\n\n  <input type=\"file\" (change)=\"fileChangeEvent($event)\" />\n\n  <image-cropper\n      [imageChangedEvent]=\"imageChangedEvent\"\n      [maintainAspectRatio]=\"true\"\n      [aspectRatio]=\"rasio\"\n      format=\"png\"\n      (imageCropped)=\"imageCropped($event)\"\n      (imageLoaded)=\"imageLoaded()\"\n      (cropperReady)=\"cropperReady()\"\n      (loadImageFailed)=\"loadImageFailed()\"\n  ></image-cropper>\n\n</div>\n\n<div mat-dialog-actions class=\"uk-flex\">\n  <span class=\"uk-width-expand\"></span>\n  <button mat-button (click)=\"onNoClick()\">Batal</button>\n  <button mat-raised-button color=\"primary\" (click)=\"unggahGambar()\"\n    [disabled]=\"loading\">{{loading ? 'Melampirkan..':'Lampirkan'}}</button>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-container {\n  position: absolute;\n  top: 60px;\n  bottom: 0px;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n}\n\n.sidenav-left {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 200px;\n  padding: 10px;\n}\n\ntextarea {\n  background-color: transparent;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2ZhcmlkL1NVTkhPVVNFX1BST0pFQ1RTL29waWx1bS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0FDSEo7O0FETUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUNISjs7QURLRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNGSjs7QURLQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwcHg7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxuICAuc2lkZW5hdi1sZWZ0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxudGV4dGFyZWF7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG59XG5cblxuXG4gIFxuICAiLCIuZXhhbXBsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uZXhhbXBsZS1zaWRlbmF2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLnNpZGVuYXYtbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMjAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbnRleHRhcmVhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! html2canvas */
    "./node_modules/html2canvas/dist/html2canvas.js");
    /* harmony import */


    var html2canvas__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_pattern_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/pattern.service */
    "./src/app/services/pattern.service.ts");
    /* harmony import */


    var _dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialog-gallery/dialog-gallery.component */
    "./src/app/dialog-gallery/dialog-gallery.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(patternService, dialog) {
        _classCallCheck(this, AppComponent);

        this.patternService = patternService;
        this.dialog = dialog;
        this.title = 'opilum';
        this.pages = [];
        this.selectedPattern = {}; // 

        this.theme = {
          type: '',
          colorScheme: {},
          container: {},
          contents: [],
          images: [],
          pattern: {},
          footer: {},
          header: {},
          masking: []
        };
        this.themes = [];
        this.selectedTheme = 1; //footer editor

        this.footerForm = {};
        this.getColors();
        this.getPatterns();
      } //get colors


      _createClass(AppComponent, [{
        key: "getColors",
        value: function getColors() {
          var _this = this;

          this.patternService.get('assets/color/color.json').subscribe(function (data) {
            _this.colors = data;
          });
        } //get patterns

      }, {
        key: "getPatterns",
        value: function getPatterns() {
          var _this2 = this;

          this.patternService.get('assets/patterns/patterns.json').subscribe(function (data) {
            _this2.patterns = data;

            _this2.getTheme();
          });
        } //parse xml data 

      }, {
        key: "getPatternData",
        value: function getPatternData(name) {
          var _this3 = this;

          console.log(name);
          var url = 'assets/patterns/data/' + name + '.json';
          this.patterns.forEach(function (res) {
            res.selected = false;
          });
          var idx = this.patterns.map(function (e) {
            return e.name;
          }).indexOf(name);
          this.patterns[idx].selected = true;
          this.patternService.get(url).subscribe(function (res) {
            _this3.parsePattern(res);
          });
        }
      }, {
        key: "parsePattern",
        value: function parsePattern(data) {
          this.selectedPattern = data;
        }
      }, {
        key: "getTheme",
        value: function getTheme() {
          var _this4 = this;

          this.patternService.get('assets/themes/_themes.json').subscribe(function (data) {
            _this4.themes = data;

            _this4.getDefaultTheme();
          });
        }
      }, {
        key: "getDefaultTheme",
        value: function getDefaultTheme() {
          this.themes[this.selectedTheme].selected = true;
          this.getThemeData(this.themes[this.selectedTheme].theme);
        }
      }, {
        key: "getThemeData",
        value: function getThemeData(url) {
          var _this5 = this;

          this.patternService.get(url).subscribe(function (data) {
            _this5.theme = Object.assign({}, data);

            _this5.pages.push(_this5.theme);

            _this5.getPatternData(_this5.theme.pattern.name);

            _this5.changeColor(_this5.theme.colorScheme);
          });
        }
      }, {
        key: "selectTheme",
        value: function selectTheme(idx) {
          this.selectedTheme = idx;
          this.themes.forEach(function (dt) {
            dt.selected = false;
          });
          this.getDefaultTheme();
        }
      }, {
        key: "changeColor",
        value: function changeColor(name) {
          this.theme.colorScheme = name;
          var idx = this.colors.map(function (e) {
            return e.name;
          }).indexOf(name);
          var color = this.colors[idx].data;
          this.colors.forEach(function (r) {
            r.selected = false;
          });
          this.colors[idx].selected = true;
          var keys = Object.keys(this.theme); //console.log(keys);

          for (var i = 0; i < keys.length; i++) {
            //console.log(this.theme.masking.length);
            if (keys[i] == 'footer') {
              var clr = this.theme.footer.backgroundColor;
              var txtClr = this.theme.footer.textColor;
              var clrval = color[clr[0]][clr[1]];

              if (this.theme.footer.showBackground) {
                this.theme.footer.style.backgroundColor = clrval;
              } else {
                this.theme.footer.style.backgroundColor = 'transparent';
              }

              this.theme.footer.style.color = color[txtClr[0]][txtClr[1]];
            }

            if (keys[i] == 'header') {
              var clr = this.theme.header.backgroundColor;
              var txtClr = this.theme.header.textColor;
              var clrval = color[clr[0]][clr[1]];

              if (this.theme.header.showBackground) {
                this.theme.header.style.backgroundColor = clrval;
              } else {
                this.theme.header.style.backgroundColor = 'transparent';
              }

              this.theme.header.style.color = color[txtClr[0]][txtClr[1]];
            }

            if (keys[i] == 'container') {
              var clr = this.theme.container.color;
              var clrval = color[clr[0]][clr[1]];
              this.theme.container.style.backgroundColor = clrval;
            }

            if (keys[i] == 'masking') {
              for (var j = 0; j < this.theme.masking.length; j++) {
                //console.log(j)
                var clr = this.theme.masking[j].color;
                var clrval = color[clr[0]][clr[1]]; //console.log(clr);

                if (this.theme.masking[j].gradient) {
                  this.theme.masking[j].style.background = "linear-gradient(" + this.theme.masking[j].direction + "," + clrval + ", transparent)";
                } else {
                  this.theme.masking[j].style.backgroundColor = clrval;
                }
              }
            }

            if (keys[i] == 'pattern') {
              var clr = this.theme.pattern.color;
              var clrval = color[clr[0]][clr[1]];
              this.theme.pattern.style.fill = clrval;
            }

            if (keys[i] == 'contents') {
              //show background option
              for (var j = 0; j < this.theme.contents.length; j++) {
                //background
                if (this.theme.contents[j].showBackground) {
                  var clr = this.theme.contents[j].backgroundColor;
                  var clrval = color[clr[0]][clr[1]];
                  this.theme.contents[j].style.backgroundColor = clrval;
                } else {
                  this.theme.contents[j].style.backgroundColor = 'transparent';
                }

                for (var k = 0; k < this.theme.contents[j].items.length; k++) {
                  var clr = this.theme.contents[j].items[k].color;
                  var clrval = color[clr[0]][clr[1]];
                  this.theme.contents[j].items[k].style.color = clrval;
                }
              }
            }
          }
        }
      }, {
        key: "removeFooterItem",
        value: function removeFooterItem(idx) {
          this.theme.footer.columns.splice(idx, 1);
        }
      }, {
        key: "addFooterItem",
        value: function addFooterItem() {
          var dt = {
            type: 'text',
            content: 'Write text here'
          };
          this.theme.footer.columns.push(dt);
        }
      }, {
        key: "visibilityFooter",
        value: function visibilityFooter() {
          this.theme.footer.showBackground = this.theme.footer.showBackground ? false : true;
          this.changeColor(this.theme.colorScheme);
        } //header editor

      }, {
        key: "removeHeaderItem",
        value: function removeHeaderItem(idx) {
          this.theme.header.columns.splice(idx, 1);
        }
      }, {
        key: "addHeaderItem",
        value: function addHeaderItem() {
          var dt = {
            type: 'text',
            content: 'Write text here'
          };
          this.theme.header.columns.push(dt);
        }
      }, {
        key: "visibilityHeader",
        value: function visibilityHeader() {
          this.theme.header.showBackground = this.theme.header.showBackground ? false : true;
          this.changeColor(this.theme.colorScheme);
        } //insert image

      }, {
        key: "uploadImage",
        value: function uploadImage(type, data, rasio) {
          var _this6 = this;

          var dialogRef = this.dialog.open(_dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_4__["DialogGalleryComponent"], {
            width: '450px',
            data: {
              rasio: rasio
            }
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
              if (type == 'image') {
                data.url = result;
              }

              if (type == 'header' || type == 'footer') {
                data.content = result;
              }

              if (type == 'add-header') {
                var dt = {
                  type: 'image',
                  content: result,
                  style: {
                    width: _this6.theme.header.imageItemWidht
                  }
                };

                _this6.theme.header.columns.push(dt);
              }

              if (type == 'add-footer') {
                var dt = {
                  type: 'image',
                  content: result,
                  style: {
                    width: _this6.theme.footer.imageItemWidht
                  }
                };

                _this6.theme.footer.columns.push(dt);
              }
            }
          });
        }
      }, {
        key: "exportPng",
        value: function exportPng() {
          html2canvas__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#img')).then(function (canvas) {
            //canvas.width=800;
            //canvas.height=800;
            canvas.toBlob(function (blob) {
              // To download directly on browser default 'downloads' location
              var link = document.createElement("a");
              link.download = "image.png";
              link.href = URL.createObjectURL(blob);
              link.click(); // To save manually somewhere in file explorer
              //window.saveAs(blob, 'image.png');
            }, 'image/png');
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_pattern_service__WEBPACK_IMPORTED_MODULE_3__["PatternService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var ngx_autosize_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-autosize-input */
    "./node_modules/ngx-autosize-input/fesm2015/ngx-autosize-input.js");
    /* harmony import */


    var _material_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./material/material */
    "./src/app/material/material.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dialog-gallery/dialog-gallery.component */
    "./src/app/dialog-gallery/dialog-gallery.component.ts"); //image cropper
    //material design


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_11__["DialogGalleryComponent"]],
      entryComponents: [_dialog_gallery_dialog_gallery_component__WEBPACK_IMPORTED_MODULE_11__["DialogGalleryComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _material_material__WEBPACK_IMPORTED_MODULE_8__["MaterialDesign"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"], ngx_autosize_input__WEBPACK_IMPORTED_MODULE_7__["AutoSizeInputModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dialog-gallery/dialog-gallery.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/dialog-gallery/dialog-gallery.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDialogGalleryDialogGalleryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy1nYWxsZXJ5L2RpYWxvZy1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/dialog-gallery/dialog-gallery.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/dialog-gallery/dialog-gallery.component.ts ***!
    \************************************************************/

  /*! exports provided: DialogGalleryComponent */

  /***/
  function srcAppDialogGalleryDialogGalleryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogGalleryComponent", function () {
      return DialogGalleryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var DialogGalleryComponent = /*#__PURE__*/function () {
      function DialogGalleryComponent(dialogRef, sourceData) {
        _classCallCheck(this, DialogGalleryComponent);

        this.dialogRef = dialogRef;
        this.sourceData = sourceData;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.rasio = sourceData.rasio;
      }

      _createClass(DialogGalleryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.imageChangedEvent = event;
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {// show cropper
        }
      }, {
        key: "cropperReady",
        value: function cropperReady() {// cropper ready
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {// show message
        }
      }, {
        key: "unggahGambar",
        value: function unggahGambar() {
          this.dialogRef.close(this.croppedImage);
        }
      }, {
        key: "onNoClick",
        value: function onNoClick() {
          this.dialogRef.close(false);
        }
      }]);

      return DialogGalleryComponent;
    }();

    DialogGalleryComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-gallery',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-gallery.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog-gallery/dialog-gallery.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-gallery.component.scss */
      "./src/app/dialog-gallery/dialog-gallery.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DialogGalleryComponent);
    /***/
  },

  /***/
  "./src/app/material/material.ts":
  /*!**************************************!*\
    !*** ./src/app/material/material.ts ***!
    \**************************************/

  /*! exports provided: MaterialDesign */

  /***/
  function srcAppMaterialMaterialTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialDesign", function () {
      return MaterialDesign;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");

    var MaterialDesign = [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_14__["MatGridListModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_17__["MatTabsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_19__["MatButtonToggleModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_20__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_22__["MatProgressSpinnerModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__["MatProgressBarModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_24__["MatDialogModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_27__["MatTableModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"]];
    /***/
  },

  /***/
  "./src/app/services/pattern.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/pattern.service.ts ***!
    \*********************************************/

  /*! exports provided: PatternService */

  /***/
  function srcAppServicesPatternServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatternService", function () {
      return PatternService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var PatternService = /*#__PURE__*/function () {
      function PatternService(http) {
        _classCallCheck(this, PatternService);

        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'text/xml'
          }),
          responseType: 'text'
        };
      }

      _createClass(PatternService, [{
        key: "loadXML",
        value: function loadXML(url) {
          return this.http.get(url, this.httpOptions);
        }
      }, {
        key: "get",
        value: function get(url) {
          return this.http.get(url);
        }
      }]);

      return PatternService;
    }();

    PatternService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PatternService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PatternService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/farid/SUNHOUSE_PROJECTS/opilum/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map