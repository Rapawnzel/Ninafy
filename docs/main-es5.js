(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n<sidebar></sidebar>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<div id=\"songListComponent\">\n\n    <div id=\"songListContent\">\n        <ul id=\"topNavbar\">\n            <li class=\"selectedNavbarElement\"><a routerLink=\"/home\">seleccionados</a></li>\n            <li>podcasts</li>\n            <li>listas de éxitos</li>\n            <li>géneros y estados de ánimo</li>\n            <li>novedades</li>\n            <li>descubrir</li>\n        </ul>\n        <div class=\"list\">\n            <div class=\"listHeader\">\n                <img class=\"img-fluid\" src=\"{{songList[id].cover}}\">\n                <div class=\"songTitle\">{{songList[id][\"name\"]}}</div>\n                <div class=\"songArtist\">{{songList[id].artist}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n<div class=\"music-player\">\n        <div class=\"music-player__now-playing\">\n          <div class=\"music-player__song-info\">\n            <div class=\"music-player__song-info-cover\">\n              <img class=\"music-player__song-info-cover-img\" [src]=\"songList[id].cover\" alt=\"\">\n            </div>\n            <div class=\"music-player__song-info-about\">\n              <div class=\"music-player__song-info-name\">\n              <a class=\"music-player__song-info-link music-player__song-info-link--song-name\" href=\"#\">{{songList[id].name}}</a>\n              </div>\n              <div class=\"music-player__song-info-artist\">\n                <a class=\"music-player__song-info-link music-player__song-info-link--artist-name\" href=\"#\">{{songList[id].artist}}</a>\n              </div>\n            </div>\n          </div>\n          <button class=\"music-player__add-to-library control-button\"></button>\n        </div> \n        <div class=\"music-player__controls\">\n          <div class=\"music-player__controls-buttons\">\n            <button class=\"music-player__controls-button music-player__controls-button--shuffle control-button\"></button>\n            <button (click)=\"playPreviousSong()\" class=\"music-player__controls-button music-player__controls-button--previous control-button\"></button>\n            <button (click)=\"playSong()\" class=\"music-player__controls-button music-player__controls-button--play control-button\"></button>\n            <button (click)=\"playNextSong()\" class=\"music-player__controls-button music-player__controls-button--next control-button\"></button>\n            <button class=\"music-player__controls-button music-player__controls-button--repeat control-button\"></button>\n          </div>\n          <div class=\"music-player__playback-bar\">\n            <div class=\"music-player__playback-bar-curent-time\">0:00</div>\n            <div (click)=\"handChangeCurrentSongTime($event)\" #progressBar class=\"music-player__playback-bar-progress-bar\">\n              <div #progressBarStatus class=\"music-player__playback-bar-progress-bar-state\"></div>\n            </div>\n            <div class=\"music-player__playback-bar-time-left\">{{playingSong.duration}}</div>\n          </div>\n        </div>\n        <div class=\"music-player__playback-settings\">\n          <button class=\"music-player__playback-settings-song-list-button control-button\"></button>\n          <button (click)=\"muteSong()\" class=\"music-player__playback-settings-volume-button control-button\"></button>\n          <div #volumeBar (click)=\"handChangeVolume($event)\" class=\"music-player__playback-settings-volume-progress-bar\">\n            <div #volumeStatus class=\"music-player__playback-settings-volume-progress-bar-state\"></div>\n          </div>\n        </div>\n      </div>\n      \n      <audio #audio class=\"music-player__audio-container\" [src]=\"playingSong.src\"></audio>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"navbar\">\n    <div id=\"spotiLogo\"> <a routerLink=\"/home\">\n            <svg viewBox=\"0 0 1134 340\" class=\"spotify-logo\">\n                <title>Spotify</title>\n                <path fill=\"currentColor\"\n                    d=\"M8 171c0 92 76 168 168 168s168-76 168-168S268 4 176 4 8 79 8 171zm230 78c-39-24-89-30-147-17-14 2-16-18-4-20 64-15 118-8 162 19 11 7 0 24-11 18zm17-45c-45-28-114-36-167-20-17 5-23-21-7-25 61-18 136-9 188 23 14 9 0 31-14 22zM80 133c-17 6-28-23-9-30 59-18 159-15 221 22 17 9 1 37-17 27-54-32-144-35-195-19zm379 91c-17 0-33-6-47-20-1 0-1 1-1 1l-16 19c-1 1-1 2 0 3 18 16 40 24 64 24 34 0 55-19 55-47 0-24-15-37-50-46-29-7-34-12-34-22s10-16 23-16 25 5 39 15c0 0 1 1 2 1s1-1 1-1l14-20c1-1 1-1 0-2-16-13-35-20-56-20-31 0-53 19-53 46 0 29 20 38 52 46 28 6 32 12 32 22 0 11-10 17-25 17zm95-77v-13c0-1-1-2-2-2h-26c-1 0-2 1-2 2v147c0 1 1 2 2 2h26c1 0 2-1 2-2v-46c10 11 21 16 36 16 27 0 54-21 54-61s-27-60-54-60c-15 0-26 5-36 17zm30 78c-18 0-31-15-31-35s13-34 31-34 30 14 30 34-12 35-30 35zm68-34c0 34 27 60 62 60s62-27 62-61-26-60-61-60-63 27-63 61zm30-1c0-20 13-34 32-34s33 15 33 35-13 34-32 34-33-15-33-35zm140-58v-29c0-1 0-2-1-2h-26c-1 0-2 1-2 2v29h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v58c0 23 11 35 34 35 9 0 18-2 25-6 1 0 1-1 1-2v-21c0-1 0-2-1-2h-2c-5 3-11 4-16 4-8 0-12-4-12-12v-54h30c1 0 2-1 2-2v-22c0-1-1-2-2-2h-30zm129-3c0-11 4-15 13-15 5 0 10 0 15 2h1s1-1 1-2V93c0-1 0-2-1-2-5-2-12-3-22-3-24 0-36 14-36 39v5h-13c-1 0-2 1-2 2v22c0 1 1 2 2 2h13v89c0 1 1 2 2 2h26c1 0 1-1 1-2v-89h25l37 89c-4 9-8 11-14 11-5 0-10-1-15-4h-1l-1 1-9 19c0 1 0 3 1 3 9 5 17 7 27 7 19 0 30-9 39-33l45-116v-2c0-1-1-1-2-1h-27c-1 0-1 1-1 2l-28 78-30-78c0-1-1-2-2-2h-44v-3zm-83 3c-1 0-2 1-2 2v113c0 1 1 2 2 2h26c1 0 1-1 1-2V134c0-1 0-2-1-2h-26zm-6-33c0 10 9 19 19 19s18-9 18-19-8-18-18-18-19 8-19 18zm245 69c10 0 19-8 19-18s-9-18-19-18-18 8-18 18 8 18 18 18zm0-34c9 0 17 7 17 16s-8 16-17 16-16-7-16-16 7-16 16-16zm4 18c3-1 5-3 5-6 0-4-4-6-8-6h-8v19h4v-6h4l4 6h5zm-3-9c2 0 4 1 4 3s-2 3-4 3h-4v-6h4z\">\n                </path>\n            </svg>\n        </a>\n    </div>\n    <!--Main Menu-->\n    <div id=\"menuBar\">\n        <div class=\"menuItem selectedItem\">\n            <svg class=\"selectedMenuItem\" viewBox=\"0 0 512 512\" width=\"24\" height=\"24\"\n                xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M448 463.746h-149.333v-149.333h-85.334v149.333h-149.333v-315.428l192-111.746 192 110.984v316.19z\"\n                    fill=\"currentColor\"></path>\n            </svg>\n            <span class=\"menuItemText\"><a routerLink=\"/home\">Inicio</a></span>\n        </div>\n        <div class=\"menuItem\">\n            <svg viewBox=\"0 0 512 512\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z\"\n                    fill=\"currentColor\" fill-rule=\"evenodd\"></path>\n            </svg>\n            <span class=\"menuItemText\">Buscar</span>\n        </div>\n        <div class=\"menuItem\">\n            <svg viewBox=\"0 0 512 512\" width=\"24\" height=\"24\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path\n                    d=\"M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z\"\n                    fill=\"currentColor\"></path>\n            </svg>\n            <span class=\"menuItemText\">Tu biblioteca</span>\n        </div>\n    </div>\n    <!--Playlist Menu-->\n    <div class=\"playlistMenu\">\n        <div class=\"playlistMenuTitle\">\n            Playlists\n        </div>\n        <div class=\"addPlaylist\">\n            <svg style=\"color:white;\" viewBox=\"0 0 36 36\" width=\"24\" height=\"24\">\n                <path d=\"m28 20h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z\"></path>\n            </svg>\n            <span class=\"menuItemText\">Crear Playlist</span>\n        </div>\n        <div class=\"playlistListItem\">\n            {{songList.name}}\n        </div>\n        <div class=\"playlistListItem\">\n            {{songListTwo.name}}\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div id=\"songListComponent\">\n    <!--Top Menu-->\n    <div id=\"songListContent\">\n        <ul id=\"topNavbar\">\n            <li class=\"selectedNavbarElement\">seleccionados</li>\n            <li>podcasts</li>\n            <li>listas de éxitos</li>\n            <li>géneros y estados de ánimo</li>\n            <li>novedades</li>\n            <li>descubrir</li>\n        </ul>\n        <!--Lists-->\n        <div class=\"list\">\n            <div class=\"listHeader\">\n                <div class=\"listTitle\">\n                    {{songList[\"name\"]}}\n                </div>\n            </div>\n            <div class=\"listElement col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 float-left\"\n                *ngFor=\"let song of songList['listOfSongs']\">\n                <div>\n                    <a routerLink=\"/play/{{song['id']}}\"><img\n                            class=\"img-fluid col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2\" src=\"{{song.imgurl}}\"></a>\n                </div>\n                <div class=\"songTitle\">{{song.name}}</div>\n                <div class=\"songArtist\">{{song.artist}}</div>\n            </div>\n            <div class=\"listHeader\">\n                <div class=\"listTitle\">\n                    {{songListTwo[\"name\"]}}\n                </div>\n            </div>\n            <div class=\"listElement col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2 float-left\"\n                *ngFor=\"let song of songListTwo['listOfSongs']\">\n                <div>\n                    <a routerLink=\"/play/{{song['id']}}\"><img\n                            class=\"img-fluid col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2\" src=\"{{song.imgurl}}\"></a>\n                </div>\n                <div class=\"songTitle\">{{song.name}}</div>\n                <div class=\"songArtist\">{{song.artist}}</div>\n            </div>\n        </div>\n    </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
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
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
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
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#navbar{\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    width:230px;\r\n    height: 100vh;\r\n    padding-top: 24px;\r\n    background: #050505;\r\n}\r\n\r\n.spotify-logo{\r\n    width: 131px;\r\n    color:white\r\n}\r\n\r\n#spotiLogo{\r\n\r\n    padding: 0 0 18px 24px;\r\n}\r\n\r\n.menuItem{\r\n    vertical-align: middle;\r\n    height: 40px;\r\n    padding: 0 0 0 24px;\r\n    color: #9D9C9C;\r\n}\r\n\r\n.selectedItem{\r\n    border-left: 4px solid #3EAD55;\r\n}\r\n\r\n.selectedMenuItem{\r\n    color:white;\r\n}\r\n\r\n.menuItemText{\r\n    font-family: 'MazzardL', sans-serif;\r\n    font-size: 18px;\r\n    margin-left:16px;\r\n    color: #9D9C9C;\r\n}\r\n\r\n.playlistMenu{\r\n    margin: 24px 20px 0 24px;\r\n    font-family: 'MazzardL', sans-serif;\r\n    color: #9D9C9C;\r\n}\r\n\r\n.playlistMenuTitle{\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    font-size: 12px;\r\n}\r\n\r\n.addPlaylist{\r\n    margin-top:10px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE1BQU07SUFDTixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNuYXZiYXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MDtcclxuICAgIGxlZnQ6MDtcclxuICAgIHdpZHRoOjIzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzA1MDUwNTtcclxufVxyXG5cclxuLnNwb3RpZnktbG9nb3tcclxuICAgIHdpZHRoOiAxMzFweDtcclxuICAgIGNvbG9yOndoaXRlXHJcbn1cclxuXHJcbiNzcG90aUxvZ297XHJcblxyXG4gICAgcGFkZGluZzogMCAwIDE4cHggMjRweDtcclxufVxyXG5cclxuLm1lbnVJdGVte1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDI0cHg7XHJcbiAgICBjb2xvcjogIzlEOUM5QztcclxufVxyXG5cclxuLnNlbGVjdGVkSXRlbXtcclxuICAgIGJvcmRlci1sZWZ0OiA0cHggc29saWQgIzNFQUQ1NTtcclxufVxyXG4uc2VsZWN0ZWRNZW51SXRlbXtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4ubWVudUl0ZW1UZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXp6YXJkTCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxNnB4O1xyXG4gICAgY29sb3I6ICM5RDlDOUM7XHJcbn1cclxuXHJcbi5wbGF5bGlzdE1lbnV7XHJcbiAgICBtYXJnaW46IDI0cHggMjBweCAwIDI0cHg7XHJcbiAgICBmb250LWZhbWlseTogJ01henphcmRMJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjOUQ5QzlDO1xyXG59XHJcblxyXG4ucGxheWxpc3RNZW51VGl0bGV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmFkZFBsYXlsaXN0e1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                    this.title = 'Ninafy';
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./song-list/song-list.component */ "./src/app/song-list/song-list.component.ts");
            /* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var routerConfig = [
                { "path": "", "component": _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] },
                { "path": "home", "component": _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] },
                { "path": "play/:id", "component": _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"] },
                { "path": "**", "component": _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"] }
            ];
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                        _song_list_song_list_component__WEBPACK_IMPORTED_MODULE_4__["SongListComponent"],
                        _player_player_component__WEBPACK_IMPORTED_MODULE_5__["PlayerComponent"],
                        _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routerConfig, { useHash: true })
                    ],
                    providers: [_service_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/player/player.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/player/player.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ul{\r\n    list-style-type:none;\r\n}\r\n\r\n\r\n#songListComponent{\r\n    font-family: 'MazzardL', sans-serif;\r\n    font-size: 13px;\r\n    letter-spacing: 2px;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: #181818;\r\n    padding: 0 32px;\r\n}\r\n\r\n\r\nli{\r\n    padding: 5px 10px;\r\n    margin: 10px;\r\n    float: left;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #9D9C9C;\r\n}\r\n\r\n\r\n.selectedNavbarElement{\r\n    color: white;\r\n    border-bottom: 1px solid #3EAD55;\r\n}\r\n\r\n\r\n#songListContent{\r\n    padding: 20px 0px 12px 0px;\r\n    margin-left: 230px;\r\n}\r\n\r\n\r\n.listElement{\r\n    padding: 0 8px;\r\n}\r\n\r\n\r\n.songTitle{\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    margin: 12px 0 4px 0;\r\n    color: white;\r\n}\r\n\r\n\r\n.songArtist{\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: #9D9C9C;\r\n}\r\n\r\n\r\n.listTitle{\r\n    letter-spacing: 1px;\r\n    padding-left: 8px;\r\n    font-size: 44px;\r\n    color: white;\r\n}\r\n\r\n\r\n.list{\r\n    clear:both;\r\n}\r\n\r\n\r\n.listHeader{\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    margin:auto;\r\n    padding-top: 70px;\r\n}\r\n\r\n\r\nimg{\r\n    padding: 0;\r\n    max-width: 500px;\r\n}\r\n\r\n\r\na{\r\n    color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL3BsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7OztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOzs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbn1cclxuXHJcblxyXG4jc29uZ0xpc3RDb21wb25lbnR7XHJcbiAgICBmb250LWZhbWlseTogJ01henphcmRMJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogIzE4MTgxODtcclxuICAgIHBhZGRpbmc6IDAgMzJweDtcclxufVxyXG5cclxubGl7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICM5RDlDOUM7XHJcbn1cclxuXHJcbi5zZWxlY3RlZE5hdmJhckVsZW1lbnR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzNFQUQ1NTtcclxufVxyXG5cclxuI3NvbmdMaXN0Q29udGVudHtcclxuICAgIHBhZGRpbmc6IDIwcHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIzMHB4O1xyXG59XHJcblxyXG4ubGlzdEVsZW1lbnR7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxufVxyXG5cclxuLnNvbmdUaXRsZXtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDEycHggMCA0cHggMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNvbmdBcnRpc3R7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM5RDlDOUM7XHJcbn1cclxuXHJcbi5saXN0VGl0bGV7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICBmb250LXNpemU6IDQ0cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmxpc3R7XHJcbiAgICBjbGVhcjpib3RoO1xyXG59XHJcbi5saXN0SGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDcwcHg7XHJcbn1cclxuaW1ne1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/player/player.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/player/player.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".music-player {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: 90px;\n  background-color: #282828;\n  display: flex;\n  align-items: center;\n  z-index: 200; }\n  .music-player__now-playing {\n    width: 30%;\n    display: flex;\n    align-items: center; }\n  .music-player__song-info {\n    display: flex;\n    align-items: center;\n    color: #fff; }\n  .music-player__song-info-cover {\n      width: 60px;\n      height: 60px;\n      background-color: #181818;\n      margin: 0 16px; }\n  .music-player__song-info-cover-img {\n        display: block;\n        width: 60px;\n        height: 60px; }\n  .music-player__song-info-about {\n      margin-right: 10px; }\n  .music-player__song-info-link {\n      text-decoration: none;\n      color: #fff;\n      letter-spacing: 0.21px;\n      font-weight: 200; }\n  .music-player__song-info-link--song-name {\n        font-size: 14px; }\n  .music-player__song-info-link--artist-name {\n        color: #b3b3b3;\n        font-size: 11px;\n        letter-spacing: 0.165px; }\n  .music-player__song-info-link:hover {\n        color: #fff;\n        text-decoration: underline; }\n  .music-player__add-to-library {\n    position: relative; }\n  .music-player__add-to-library:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 32px;\n      height: 32px;\n      background-size: contain;\n      background-image: url(\"/assets/images/icons/add.svg\"); }\n  .music-player__controls {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 40%; }\n  .music-player__controls-buttons {\n    display: flex;\n    justify-content: space-between;\n    width: 224px;\n    height: 32px;\n    margin-bottom: 12px; }\n  .music-player__controls-button {\n    position: relative; }\n  .music-player__controls-button--shuffle:after, .music-player__controls-button--previous:after, .music-player__controls-button--play:after, .music-player__controls-button--next:after, .music-player__controls-button--repeat:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 32px;\n      height: 32px;\n      background-size: contain; }\n  .music-player__controls-button--shuffle:after {\n      background-image: url(\"/assets/images/icons/random.svg\"); }\n  .music-player__controls-button--previous:after {\n      background-image: url(\"/assets/images/icons/left.svg\"); }\n  .music-player__controls-button--play:after {\n      background-image: url(\"/assets/images/icons/play.png\"); }\n  .music-player__controls-button--next:after {\n      background-image: url(\"/assets/images/icons/right.svg\"); }\n  .music-player__controls-button--repeat:after {\n      background-image: url(\"/assets/images/icons/repeat.svg\"); }\n  .music-player__playback-bar {\n    width: 100%;\n    display: flex;\n    align-items: center; }\n  .music-player__playback-bar-progress-bar {\n      position: relative;\n      width: 100%;\n      height: 4px;\n      border-radius: 2px;\n      background-color: #404040; }\n  .music-player__playback-bar-progress-bar-state {\n        position: absolute;\n        left: 0;\n        top: 0;\n        height: 4px;\n        border-radius: 2px;\n        max-width: 100%;\n        width: 10%;\n        background-color: #fff; }\n  .music-player__playback-bar-curent-time, .music-player__playback-bar-time-left {\n      font-size: 11px;\n      line-height: 16px;\n      letter-spacing: .015em;\n      min-width: 40px;\n      text-align: center;\n      color: rgba(255, 255, 255, 0.6);\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none; }\n  .music-player__playback-bar:hover .music-player__playback-bar-progress-bar-state {\n      background-color: #1DB954; }\n  .music-player__playback-settings {\n    width: 30%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    margin-right: 16px; }\n  .music-player__playback-settings-song-list-button, .music-player__playback-settings-volume-button {\n      position: relative; }\n  .music-player__playback-settings-song-list-button:after, .music-player__playback-settings-volume-button:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 32px;\n      height: 32px;\n      background-size: contain; }\n  .music-player__playback-settings-song-list-button:after {\n      background-image: url(\"/assets/images/icons/library.svg\"); }\n  .music-player__playback-settings-volume-button:after {\n      background-image: url(\"/assets/images/icons/volume.svg\"); }\n  .music-player__playback-settings-volume-progress-bar {\n      position: relative;\n      width: 82px;\n      height: 4px;\n      border-radius: 2px;\n      background-color: #404040;\n      margin-left: 2px;\n      cursor: pointer; }\n  .music-player__playback-settings-volume-progress-bar-state {\n        position: absolute;\n        left: 0;\n        top: 0;\n        height: 4px;\n        border-radius: 2px;\n        max-width: 100%;\n        width: 100%;\n        background-color: #fff; }\n  .music-player__playback-settings-volume-progress-bar:hover .music-player__playback-settings-volume-progress-bar-state {\n        background-color: #1DB954; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxheWVyL0M6XFxVc2Vyc1xcYW5uZHJcXERvY3VtZW50c1xcRnVsbHN0YWNrXFxBbmd1bGFyXFxOaW5hZnkvc3JjXFxhcHBcXHBsYXllclxccGxheWVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtCQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZLEVBQUE7RUFFWjtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUFHckI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBeEJhLEVBQUE7RUEwQmI7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLHlCQXpDaUI7TUEwQ2pCLGNBQWMsRUFBQTtFQUVkO1FBQ0UsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZLEVBQUE7RUFJaEI7TUFDRSxrQkFBa0IsRUFBQTtFQUdwQjtNQUNFLHFCQUFxQjtNQUNyQixXQTdDVztNQThDWCxzQkFBc0I7TUFDdEIsZ0JBQWdCLEVBQUE7RUFFaEI7UUFDRSxlQUFlLEVBQUE7RUFHakI7UUFDRSxjQXJEd0I7UUFzRHhCLGVBQWU7UUFDZix1QkFBdUIsRUFBQTtFQWIxQjtRQWlCRyxXQTVEUztRQTZEVCwwQkFBMEIsRUFBQTtFQUtoQztJQUNFLGtCQUFrQixFQUFBO0VBRG5CO01BSUcsV0FBVztNQUNYLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxXQUFXO01BQ1gsWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixxREFBb0QsRUFBQTtFQUl4RDtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFVBQVUsRUFBQTtFQUdaO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQixFQUFBO0VBSXJCO0lBQ0Usa0JBQWtCLEVBQUE7RUFFbEI7TUFLRSxXQUFXO01BQ1gsY0FBYztNQUNkLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sT0FBTztNQUNQLFdBQVc7TUFDWCxZQUFZO01BQ1osd0JBQXdCLEVBQUE7RUFHMUI7TUFDRSx3REFBd0QsRUFBQTtFQUcxRDtNQUNFLHNEQUFzRCxFQUFBO0VBR3hEO01BQ0Usc0RBQXNELEVBQUE7RUFHeEQ7TUFDRSx1REFBc0QsRUFBQTtFQUd4RDtNQUNFLHdEQUF1RCxFQUFBO0VBSTNEO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtFQUVuQjtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQjtNQUNsQix5QkF2SmdCLEVBQUE7RUF5SmhCO1FBQ0Usa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxNQUFNO1FBQ04sV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsVUFBVTtRQUNWLHNCQUFzQixFQUFBO0VBSTFCO01BRUUsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQiwrQkF0S21DO01BdUtuQyx5QkFBaUI7U0FBakIsc0JBQWlCO1VBQWpCLHFCQUFpQjtjQUFqQixpQkFBaUIsRUFBQTtFQWhDcEI7TUFvQ0cseUJBeEwwQixFQUFBO0VBNkw5QjtJQUNFLFVBQVU7SUFDVixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixrQkFBa0IsRUFBQTtFQUVsQjtNQUVFLGtCQUFrQixFQUFBO0VBR3BCO01BRUUsV0FBVztNQUNYLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLE9BQU87TUFDUCxXQUFXO01BQ1gsWUFBWTtNQUNaLHdCQUF3QixFQUFBO0VBRzFCO01BQ0MseURBQXlELEVBQUE7RUFHMUQ7TUFDQSx3REFBdUQsRUFBQTtFQUd2RDtNQUNFLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQjtNQUNsQix5QkEzTmdCO01BNE5oQixnQkFBZ0I7TUFDaEIsZUFBZSxFQUFBO0VBRWY7UUFDRSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLE1BQU07UUFDTixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixXQUFXO1FBQ1gsc0JBQXNCLEVBQUE7RUFqQnpCO1FBcUJHLHlCQWxQd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiRwcmltYXJ5LWNvbG9yOiAjMTgxODE4O1xuJHByaW1hcnktY29sb3ItY29udHJhc3Q6ICMxREI5NTQ7XG5cbiRwcmltYXJ5LXBsYXllci1jb2xvcjogIzI4MjgyODtcblxuJGNvbnRyb2xzLWJ1dHRvbnMtY29sb3I6IGhzbGEoMCwwJSwxMDAlLC42KTtcbiRjb250cm9scy1hY3RpdmUtYnV0dG9ucy1jb2xvcjogI2ZmZjtcblxuJHByb2dyZXNzLWJhcjogIzQwNDA0MDtcbiRwcm9ncmVzcy1iYXItZmlsbDogI2EwYTBhMDtcbiRwcm9ncmVzcy1iYXItYWN0aXZlOiAjMURCOTU0O1xuXG4kZm9udC1jb2xvcjogI2ZmZjtcbiRmb250LWFydGlzdC1uYW1lLWNvbG9yOiAjYjNiM2IzO1xuJGZvbnQtc29uZy10aW1lLWNvbG9yOiBoc2xhKDAsMCUsMTAwJSwuNik7XG4kZm9udC1zb25nLXVuYWN0aXZlLWNvbG9yOiBoc2xhKDAsMCUsMTAwJSwuNik7XG5cbi5tdXNpYy1wbGF5ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4MjgyODtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgei1pbmRleDogMjAwO1xuICBcbiAgJl9fbm93LXBsYXlpbmcge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAmX19zb25nLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGZvbnQtY29sb3I7XG4gICAgXG4gICAgJi1jb3ZlciB7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgbWFyZ2luOiAwIDE2cHg7XG5cbiAgICAgICYtaW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgICYtYWJvdXQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAgXG4gICAgfVxuICAgIFxuICAgICYtbGluayB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogJGZvbnQtY29sb3I7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4yMXB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgIFxuICAgICAgJi0tc29uZy1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICAmLS1hcnRpc3QtbmFtZSB7XG4gICAgICAgIGNvbG9yOiAkZm9udC1hcnRpc3QtbmFtZS1jb2xvcjtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4xNjVweDtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAkZm9udC1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fYWRkLXRvLWxpYnJhcnkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltYWdlcy9pY29ucy9hZGQuc3ZnJylcbiAgICB9XG4gIH1cbiAgXG4gICZfX2NvbnRyb2xzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogNDAlO1xuICB9XG4gIFxuICAmX19jb250cm9scy1idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB3aWR0aDogMjI0cHg7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgfVxuXG4gICZfX2NvbnRyb2xzLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJi0tc2h1ZmZsZTphZnRlcixcbiAgICAmLS1wcmV2aW91czphZnRlcixcbiAgICAmLS1wbGF5OmFmdGVyLFxuICAgICYtLW5leHQ6YWZ0ZXIsXG4gICAgJi0tcmVwZWF0OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgfVxuXG4gICAgJi0tc2h1ZmZsZTphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ljb25zL3JhbmRvbS5zdmcnKTtcbiAgICB9XG5cbiAgICAmLS1wcmV2aW91czphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ljb25zL2xlZnQuc3ZnJyk7XG4gICAgfVxuXG4gICAgJi0tcGxheTphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ljb25zL3BsYXkucG5nJyk7XG4gICAgfVxuXG4gICAgJi0tbmV4dDphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnL2Fzc2V0cy9pbWFnZXMvaWNvbnMvcmlnaHQuc3ZnJyk7XG4gICAgfVxuXG4gICAgJi0tcmVwZWF0OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKCcvYXNzZXRzL2ltYWdlcy9pY29ucy9yZXBlYXQuc3ZnJyk7XG4gICAgfVxuICB9XG5cbiAgJl9fcGxheWJhY2stYmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgJi1wcm9ncmVzcy1iYXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcm9ncmVzcy1iYXI7XG4gICAgICBcbiAgICAgICYtc3RhdGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgfVxuICAgIH1cblxuICAgICYtY3VyZW50LXRpbWUsXG4gICAgJi10aW1lLWxlZnQge1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogLjAxNWVtO1xuICAgICAgbWluLXdpZHRoOiA0MHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6ICRmb250LXNvbmctdGltZS1jb2xvcjtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIH1cblxuICAgICY6aG92ZXIgJi1wcm9ncmVzcy1iYXItc3RhdGUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3ItY29udHJhc3Q7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgJl9fcGxheWJhY2stc2V0dGluZ3Mge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIFxuICAgICYtc29uZy1saXN0LWJ1dHRvbixcbiAgICAmLXZvbHVtZS1idXR0b24ge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cblxuICAgICYtc29uZy1saXN0LWJ1dHRvbjphZnRlcixcbiAgICAmLXZvbHVtZS1idXR0b246YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMzJweDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB9XG5cbiAgICAmLXNvbmctbGlzdC1idXR0b246YWZ0ZXIge1xuICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkuc3ZnJyk7XG4gICAgfVxuICAgIFxuICAgICYtdm9sdW1lLWJ1dHRvbjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy9hc3NldHMvaW1hZ2VzL2ljb25zL3ZvbHVtZS5zdmcnKTtcbiAgICB9XG5cbiAgICAmLXZvbHVtZS1wcm9ncmVzcy1iYXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDgycHg7XG4gICAgICBoZWlnaHQ6IDRweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcm9ncmVzcy1iYXI7XG4gICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmLXN0YXRlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgICY6aG92ZXIgJi1zdGF0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yLWNvbnRyYXN0O1xuICAgICAgfVxuICAgIH1cbiAgfX1cbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/player/player.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/player/player.component.ts ***!
          \********************************************/
        /*! exports provided: PlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function () { return PlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /*
            import { Component, OnInit } from '@angular/core';
            import { DataService } from '../service/data.service';
            import { ActivatedRoute } from '@angular/router';
            
            @Component({
              selector: 'player',
              templateUrl: './player.component.html',
              styleUrls: ['./player.component.css']
            })
            export class PlayerComponent {
            
              id : number;
              songList: object[];
              
              constructor(public _path: ActivatedRoute, public _data: DataService) {
                this.id = this._path.snapshot.params.id;
                this.songList = this._data.playlistOne["listOfSongs"];
                console.log(this.songList[this.id]["name"])
              }
            
            }
            
            */
            var PlayerComponent = /** @class */ (function () {
                function PlayerComponent(_data, _path) {
                    this._data = _data;
                    this._path = _path;
                    this.isPlaying = false;
                    this.currentVolume = 1;
                    this.songList = [
                        {
                            "id": 0,
                            "name": "Hurt Again",
                            "artist": "Julia Michaels",
                            "cover": "/assets/images/hurt-again.png",
                            "src": "/assets/music/hurt-again.mp3"
                        },
                        {
                            "id": 1,
                            "name": "We Are ...",
                            "artist": "Noah Cyrus, MØ",
                            "cover": "/assets/images/we-are.jpg",
                            "src": "/assets/music/we-are.mp3"
                        },
                        {
                            "id": 2,
                            "name": "Older",
                            "artist": "Sasha Sloan",
                            "cover": "/assets/images/older.jpg",
                            "src": "/assets/music/older.mp3"
                        },
                        {
                            "id": 3,
                            "name": "Worst In Me",
                            "artist": "Julia Michaels",
                            "cover": "/assets/images/worst-in-me.jpg",
                            "src": "/assets/music/worst-in-me.mp3"
                        },
                        {
                            "id": 4,
                            "name": "Memories",
                            "artist": "Maroon 5",
                            "cover": "/assets/images/memories.jpg",
                            "src": "/assets/music/memories.mp3"
                        },
                        {
                            "id": 5,
                            "name": "July",
                            "artist": "Noah Cyrus",
                            "cover": "/assets/images/july.jpg",
                            "src": "/assets/music/july.mp3"
                        }
                    ];
                    this.id = this._path.snapshot.params.id;
                    //this.playingSong = this._data.playlistOne;
                    this.playingSong = this.songList[this.id];
                }
                /*
                 id:number;
                listOfSongs : object;
                public playingSong: object;
              
                constructor(public _data: DataService, public _path: ActivatedRoute) {
                  this.id = this._path.snapshot.params.id;
                  this.listOfSongs = this._data.playlistOne["listOfSongs"];
                  //this.playingSong = this._data.playlistOne["id"]
                  this.playingSong = this.songList["id"];
                }*/
                PlayerComponent.prototype.ngOnInit = function () {
                    //songTime
                    this.progressBar = this.progress.nativeElement;
                    this.progressBarStatus = this.progressStatus.nativeElement;
                    // volume
                    this.volumeBar = this.volume.nativeElement;
                    this.volumeStatusBar = this.volumeStatus.nativeElement;
                    // song
                    this.audioContainer = this.audio.nativeElement;
                    this.setSongInfo();
                };
                PlayerComponent.prototype.playSong = function () {
                    var _this = this;
                    if (this.isPlaying) {
                        this.pauseSong();
                        return;
                    }
                    this.isPlaying = true;
                    setTimeout(function () {
                        _this.audioContainer.play();
                    });
                };
                PlayerComponent.prototype.pauseSong = function () {
                    this.audioContainer.pause();
                    this.isPlaying = false;
                };
                PlayerComponent.prototype.setSongInfo = function (id) {
                    if (id === void 0) { id = 0; }
                    this.nowPlayingSongId = id;
                    this.playingSong = this.songList[id];
                    this.playingSong.duration = this.audioContainer.duration;
                    // this.playingSong.currentTime = this.audioContainer.currentTime;
                };
                PlayerComponent.prototype.playNextSong = function () {
                    this.pauseSong();
                    if (this.nowPlayingSongId < this.songList.length) {
                        this.setSongInfo(++this.nowPlayingSongId);
                    }
                    else {
                        this.setSongInfo();
                    }
                    this.playSong();
                };
                PlayerComponent.prototype.playPreviousSong = function () {
                    this.pauseSong();
                    if (this.nowPlayingSongId > 0) {
                        this.setSongInfo(--this.nowPlayingSongId);
                    }
                    else {
                        this.setSongInfo();
                    }
                    this.playSong();
                };
                PlayerComponent.prototype.playSelectedSong = function (selectedSongId) {
                    this.pauseSong();
                    this.setSongInfo(selectedSongId);
                    this.playSong();
                };
                PlayerComponent.prototype.setVolume = function (volume) {
                    this.audioContainer.volume = volume;
                };
                PlayerComponent.prototype.setCurrentVolume = function (volume) {
                    this.currentVolume = volume;
                };
                PlayerComponent.prototype.muteSong = function () {
                    if (this.audioContainer.volume) {
                        this.setVolume(0);
                        this.changeVolumeBarStatus(0);
                    }
                    else {
                        this.setVolume(this.currentVolume);
                        this.changeVolumeBarStatus(this.currentVolume * 100);
                    }
                };
                PlayerComponent.prototype.changeVolumeBarStatus = function (persentage) {
                    this.volumeStatusBar.style.width = persentage + "%";
                };
                PlayerComponent.prototype.handChangeVolume = function (event) {
                    var volumeBarProperty = this.volumeBar.getBoundingClientRect();
                    var mousePosition = event.pageX - volumeBarProperty.left + pageXOffset;
                    var volumePersentage = mousePosition * 100 / volumeBarProperty.width;
                    this.changeVolumeBarStatus(volumePersentage);
                    this.setCurrentVolume(volumePersentage / 100);
                    this.setVolume(this.currentVolume);
                };
                PlayerComponent.prototype.getCurrentSongDuration = function () {
                    return this.audioContainer.duration;
                };
                PlayerComponent.prototype.setCurrentSongTime = function (time) {
                    this.audioContainer.currentTime = time;
                };
                PlayerComponent.prototype.getCurrentSongTime = function () {
                    return this.audioContainer.currentTime;
                };
                PlayerComponent.prototype.changeSongBarStatus = function (persentage) {
                    this.progressBarStatus.style.width = persentage + "%";
                };
                PlayerComponent.prototype.handChangeCurrentSongTime = function (event) {
                    var progressBarProperty = this.progressBar.getBoundingClientRect();
                    var mousePosition = event.pageX - progressBarProperty.left + pageXOffset;
                    var currentSongTimePersentage = mousePosition * 100 / progressBarProperty.width;
                    this.changeSongBarStatus(currentSongTimePersentage);
                    this.setCurrentSongTime(this.playingSong.duration * currentSongTimePersentage / 100);
                };
                return PlayerComponent;
            }());
            PlayerComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('progressBar', { static: true })
            ], PlayerComponent.prototype, "progress", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('progressBarStatus', { static: true })
            ], PlayerComponent.prototype, "progressStatus", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('volumeBar', { static: true })
            ], PlayerComponent.prototype, "volume", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('volumeStatus', { static: true })
            ], PlayerComponent.prototype, "volumeStatus", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audio', { static: true })
            ], PlayerComponent.prototype, "audio", void 0);
            PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'player',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/player/player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player.component.css */ "./src/app/player/player.component.css")).default]
                })
            ], PlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/service/data.service.ts": 
        /*!*****************************************!*\
          !*** ./src/app/service/data.service.ts ***!
          \*****************************************/
        /*! exports provided: DataService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function () { return DataService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var DataService = /** @class */ (function () {
                function DataService() {
                    this.playlistOne = {
                        "name": "Recently played",
                        "listOfSongs": [
                            {
                                "id": 0,
                                "name": "Hurt Again",
                                "artist": "Julia Michaels",
                                "imgurl": "/assets/images/hurt-again.png",
                                "src": "/assets/music/july.mp3"
                            },
                            {
                                "id": 1,
                                "name": "We Are ...",
                                "artist": "Noah Cyrus, MØ",
                                "imgurl": "/assets/images/we-are.jpg",
                                "src": "/assets/music/july.mp3"
                            },
                            {
                                "id": 2,
                                "name": "Older",
                                "artist": "Sasha Sloan",
                                "imgurl": "/assets/images/older.jpg",
                                "src": "/assets/music/july.mp3"
                            },
                            {
                                "id": 3,
                                "name": "Worst In Me",
                                "artist": "Julia Michaels",
                                "imgurl": "/assets/images/worst-in-me.jpg",
                                "src": "/assets/music/july.mp3"
                            },
                            {
                                "id": 4,
                                "name": "Memories",
                                "artist": "Maroon 5",
                                "imgurl": "/assets/images/memories.jpg",
                                "src": "/assets/music/july.mp3"
                            },
                            {
                                "id": 5,
                                "name": "July",
                                "artist": "Noah Cyrus",
                                "imgurl": "/assets/images/july.jpg",
                                "src": "/assets/music/july.mp3"
                            }
                        ]
                    };
                    this.playlistTwo = {
                        "name": "Tu música de uso intensivo",
                        "listOfSongs": [
                            {
                                "id": 0,
                                "name": "Jealous",
                                "artist": "Labrinth",
                                "imgurl": "/assets/images/jealous.jpg",
                                "fileurl": ""
                            },
                            {
                                "id": 1,
                                "name": "If The World Was Ending",
                                "artist": "JP Saxe",
                                "imgurl": "/assets/images/if-the-world.jpg",
                                "fileurl": ""
                            },
                            {
                                "id": 2,
                                "name": "Lose You To Love Me",
                                "artist": "Selena Gomez",
                                "imgurl": "/assets/images/lose-you.jpg",
                                "fileurl": ""
                            },
                            {
                                "id": 3,
                                "name": "Loved You Once",
                                "artist": "Clara Mae",
                                "imgurl": "/assets/images/loved-you.jpg",
                                "fileurl": ""
                            },
                            {
                                "id": 4,
                                "name": "Deep End",
                                "artist": "Birdy",
                                "imgurl": "/assets/images/deep-end.jpg",
                                "fileurl": ""
                            },
                            {
                                "id": 5,
                                "name": "Things I Say When You Sleep",
                                "artist": "Nina Nesbitt",
                                "imgurl": "/assets/images/things-i-say.jpg",
                                "fileurl": ""
                            }
                        ]
                    };
                }
                return DataService;
            }());
            DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], DataService);
            /***/ 
        }),
        /***/ "./src/app/sidebar/sidebar.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/sidebar/sidebar.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#navbar{\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    width:230px;\r\n    height: 100vh;\r\n    padding-top: 24px;\r\n    background: #050505;\r\n}\r\n\r\n.spotify-logo{\r\n    width: 131px;\r\n    color:white\r\n}\r\n\r\n#spotiLogo{\r\n\r\n    padding: 0 0 18px 24px;\r\n}\r\n\r\n.menuItem{\r\n    vertical-align: middle;\r\n    height: 40px;\r\n    padding: 0 0 0 24px;\r\n    color: #9D9C9C;\r\n}\r\n\r\n.selectedItem{\r\n    border-left: 4px solid #3EAD55;\r\n}\r\n\r\n.selectedMenuItem{\r\n    color:white;\r\n}\r\n\r\n.menuItemText{\r\n    font-family: 'MazzardL', sans-serif;\r\n    font-size: 18px;\r\n    margin-left:16px;\r\n    color: #9D9C9C;\r\n}\r\n\r\n.playlistMenu{\r\n    margin: 24px 20px 0 24px;\r\n    font-family: 'MazzardL', sans-serif;\r\n    color: #9D9C9C;\r\n}\r\n\r\n.playlistMenuTitle{\r\n    text-transform: uppercase;\r\n    letter-spacing: 2px;\r\n    font-size: 12px;\r\n}\r\n\r\n.addPlaylist{\r\n    margin-top:10px\r\n}\r\n\r\na{\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLE1BQU07SUFDTixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1o7QUFDSjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixtQ0FBbUM7SUFDbkMsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2YmFye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICB3aWR0aDoyMzBweDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgIGJhY2tncm91bmQ6ICMwNTA1MDU7XHJcbn1cclxuXHJcbi5zcG90aWZ5LWxvZ297XHJcbiAgICB3aWR0aDogMTMxcHg7XHJcbiAgICBjb2xvcjp3aGl0ZVxyXG59XHJcblxyXG4jc3BvdGlMb2dve1xyXG5cclxuICAgIHBhZGRpbmc6IDAgMCAxOHB4IDI0cHg7XHJcbn1cclxuXHJcbi5tZW51SXRlbXtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDAgMCAyNHB4O1xyXG4gICAgY29sb3I6ICM5RDlDOUM7XHJcbn1cclxuXHJcbi5zZWxlY3RlZEl0ZW17XHJcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMzRUFENTU7XHJcbn1cclxuLnNlbGVjdGVkTWVudUl0ZW17XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuLm1lbnVJdGVtVGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTWF6emFyZEwnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MTZweDtcclxuICAgIGNvbG9yOiAjOUQ5QzlDO1xyXG59XHJcblxyXG4ucGxheWxpc3RNZW51e1xyXG4gICAgbWFyZ2luOiAyNHB4IDIwcHggMCAyNHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXp6YXJkTCcsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzlEOUM5QztcclxufVxyXG5cclxuLnBsYXlsaXN0TWVudVRpdGxle1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5hZGRQbGF5bGlzdHtcclxuICAgIG1hcmdpbi10b3A6MTBweFxyXG59XHJcblxyXG5he1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/sidebar/sidebar.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/sidebar/sidebar.component.ts ***!
          \**********************************************/
        /*! exports provided: SidebarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () { return SidebarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var SidebarComponent = /** @class */ (function () {
                function SidebarComponent(_data) {
                    this._data = _data;
                    this.songList = this._data.playlistOne;
                    this.songListTwo = this._data.playlistTwo;
                }
                return SidebarComponent;
            }());
            SidebarComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'sidebar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sidebar/sidebar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")).default]
                })
            ], SidebarComponent);
            /***/ 
        }),
        /***/ "./src/app/song-list/song-list.component.css": 
        /*!***************************************************!*\
          !*** ./src/app/song-list/song-list.component.css ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("ul{\r\n    list-style-type:none;\r\n}\r\n\r\n\r\n#songListComponent{\r\n    font-family: 'MazzardL', sans-serif;\r\n    font-size: 13px;\r\n    letter-spacing: 2px;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background: #181818;\r\n    padding: 0 32px;\r\n}\r\n\r\n\r\nli{\r\n    padding: 5px 10px;\r\n    margin: 10px;\r\n    float: left;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    color: #9D9C9C;\r\n}\r\n\r\n\r\n.selectedNavbarElement{\r\n    color: white;\r\n    border-bottom: 1px solid #3EAD55;\r\n}\r\n\r\n\r\n#songListContent{\r\n    padding: 20px 0px 12px 0px;\r\n    margin-left: 230px;\r\n}\r\n\r\n\r\n.listElement{\r\n    padding: 0 8px;\r\n}\r\n\r\n\r\n.songTitle{\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    margin: 12px 0 4px 0;\r\n    color: white;\r\n}\r\n\r\n\r\n.songArtist{\r\n    letter-spacing: 1px;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    color: #9D9C9C;\r\n}\r\n\r\n\r\n.listTitle{\r\n    letter-spacing: 1px;\r\n    padding-left: 8px;\r\n    font-size: 44px;\r\n    color: white;\r\n}\r\n\r\n\r\n.list{\r\n    clear:both;\r\n}\r\n\r\n\r\n.listHeader{\r\n    display: table-cell;\r\n    vertical-align: middle;\r\n    height: 94px;\r\n}\r\n\r\n\r\nimg{\r\n    padding: 0;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29uZy1saXN0L3NvbmctbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLG1DQUFtQztJQUNuQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7QUFDcEM7OztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7QUFDbEI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7OztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOzs7QUFDQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zb25nLWxpc3Qvc29uZy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTpub25lO1xyXG59XHJcblxyXG5cclxuI3NvbmdMaXN0Q29tcG9uZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYXp6YXJkTCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6ICMxODE4MTg7XHJcbiAgICBwYWRkaW5nOiAwIDMycHg7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjOUQ5QzlDO1xyXG59XHJcblxyXG4uc2VsZWN0ZWROYXZiYXJFbGVtZW50e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzRUFENTU7XHJcbn1cclxuXHJcbiNzb25nTGlzdENvbnRlbnR7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDBweCAxMnB4IDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMzBweDtcclxufVxyXG5cclxuLmxpc3RFbGVtZW50e1xyXG4gICAgcGFkZGluZzogMCA4cHg7XHJcbn1cclxuXHJcbi5zb25nVGl0bGV7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAxMnB4IDAgNHB4IDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5zb25nQXJ0aXN0e1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjOUQ5QzlDO1xyXG59XHJcblxyXG4ubGlzdFRpdGxle1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5saXN0e1xyXG4gICAgY2xlYXI6Ym90aDtcclxufVxyXG4ubGlzdEhlYWRlcntcclxuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgaGVpZ2h0OiA5NHB4O1xyXG59XHJcbmltZ3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/song-list/song-list.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/song-list/song-list.component.ts ***!
          \**************************************************/
        /*! exports provided: SongListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongListComponent", function () { return SongListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
            var SongListComponent = /** @class */ (function () {
                function SongListComponent(_data) {
                    this._data = _data;
                    this.songList = this._data.playlistOne;
                    this.songListTwo = this._data.playlistTwo;
                }
                return SongListComponent;
            }());
            SongListComponent.ctorParameters = function () { return [
                { type: _service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }
            ]; };
            SongListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'song-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./song-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/song-list/song-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./song-list.component.css */ "./src/app/song-list/song-list.component.css")).default]
                })
            ], SongListComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\anndr\Documents\Fullstack\Angular\Ninafy\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map