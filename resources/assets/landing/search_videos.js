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
/******/ 	return __webpack_require__(__webpack_require__.s = 172);
/******/ })
/************************************************************************/
/******/ ({

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const VideoTypes = __webpack_require__(57);
const Tools = __webpack_require__(19);
const Messages = __webpack_require__(20);
const Environment = __webpack_require__(24);
const Page = __webpack_require__(18);
const Background = __webpack_require__(23);
const VideoHistory = __webpack_require__(25);
let videoArr = [];
let newVideos = 0;
function getPopupFrame() {
    let frame = document.getElementById("videoPopup");
    if (frame == undefined) {
        frame = document.createElement("iframe");
        frame.id = "videoPopup";
        frame.allowFullscreen = true;
        frame.className = "ov-popupFrame";
        document.body.appendChild(frame);
    }
    return frame;
}
function _isPopupVisible() {
    return isPopupCreated() && !getPopupFrame().hidden;
}
function isPopupCreated() {
    return document.getElementById("videoPopup") != undefined;
}
function _addVideoToPopup(videoData) {
    return __awaiter(this, void 0, void 0, function* () {
        let src = videoData.src;
        let origin = yield VideoHistory.getPageRefData();
        let videoListEntry = videoArr.find(function (arrElem) {
            return arrElem.src[0].src == src[0].src;
        });
        if (videoListEntry == null) {
            videoArr.push(Tools.merge(videoData, {
                title: document.title,
                origin: origin,
                parent: {
                    url: "POPUP",
                    name: "POPUP",
                    icon: "POPUP"
                }
            }));
            newVideos++;
            if (!isPopupCreated()) {
                getPopupFrame().hidden = true;
                getPopupFrame().style.setProperty("display", "none", "important");
            }
            getPopupFrame().src = Environment.getVidPopupSiteUrl({
                videos: videoArr,
                options: { autoplay: _isPopupVisible() }
            });
        }
    });
}
function setupCS() {
    Messages.addListener({
        videopopup_pauseAllVideos: function () {
            return __awaiter(this, void 0, void 0, function* () {
                for (let video of document.getElementsByTagName("video")) {
                    video.pause();
                }
                ;
            });
        }
    });
}
exports.setupCS = setupCS;
function pauseAllVideos() {
    return __awaiter(this, void 0, void 0, function* () {
        return Background.toTopWindow({ data: null, func: "videopopup_pauseAllVideos", frameId: -1 });
    });
}
exports.pauseAllVideos = pauseAllVideos;
var firstpopup = true;
function isPopupVisible() {
    return __awaiter(this, void 0, void 0, function* () {
        if (Page.isFrame()) {
            let response = yield Background.toTopWindow({ data: {}, func: "videopopup_isPopupVisible" });
            return response.data.visible;
        }
        else {
            return _isPopupVisible();
        }
    });
}
exports.isPopupVisible = isPopupVisible;
function openPopup() {
    Background.toTopWindow({ data: {}, func: "videopopup_openPopup" });
}
exports.openPopup = openPopup;
function closePopup() {
    Background.toTopWindow({ data: {}, func: "videopopup_closePopup" });
}
exports.closePopup = closePopup;
function addVideoToPopup(videoData) {
    console.log(videoData);
    Background.toTopWindow({ data: { videoData: VideoTypes.makeURLsSave(videoData) }, func: "videopopup_addVideoToPopup" });
}
exports.addVideoToPopup = addVideoToPopup;
function setup() {
    Messages.addListener({
        videopopup_isPopupVisible: function (request) {
            return __awaiter(this, void 0, void 0, function* () {
                return { visible: _isPopupVisible() };
            });
        },
        videopopup_openPopup: function (request) {
            return __awaiter(this, void 0, void 0, function* () {
                getPopupFrame().hidden = false;
                getPopupFrame().style.removeProperty("display");
                if (firstpopup) {
                    getPopupFrame().src = getPopupFrame().src;
                    firstpopup = false;
                }
                pauseAllVideos();
                setIconOpensPopup(false);
            });
        },
        videopopup_closePopup: function (request) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!isPopupCreated()) {
                    throw Error("Can't close popop. Popup doesn't exist!");
                }
                getPopupFrame().hidden = true;
                getPopupFrame().style.setProperty("display", "none", "important");
                setIconOpensPopup(true);
            });
        },
        videopopup_addVideoToPopup: function (request) {
            return __awaiter(this, void 0, void 0, function* () {
                _addVideoToPopup(request.data.videoData);
                setIconOpensPopup(true);
            });
        }
    });
}
exports.setup = setup;
function setIconOpensPopup(openpopup) {
    if (openpopup) {
        Background.setIconPopup();
    }
    else {
        Background.setIconPopup("pages/popupmenu.html");
    }
}
exports.setIconOpensPopup = setIconOpensPopup;


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Page = __webpack_require__(18);
const VideoPopup = __webpack_require__(149);
__webpack_require__(173);
class VideoSearcher {
    sendVideoData(videoData) {
        if (videoData.src.length > 0) {
            VideoPopup.addVideoToPopup(videoData);
        }
    }
    search() {
        if (this.canFindVideos()) {
            console.log("Search Videos with " + this.constructor.name);
            this.doSearch();
        }
    }
}
class VideoJSSearcher extends VideoSearcher {
    canFindVideos() {
        return window["videojs"] && window["videojs"]["players"];
    }
    getSrces(player) {
        let hash;
        if (player.getGroupedSrc) {
            hash = Object.values(player.getGroupedSrc().label).reduce((arr, srces) => {
                return arr.concat(srces);
            }, []);
        }
        else if (player.options_.sources && player.options_.sources.length > 0) {
            hash = player.options_.sources;
        }
        else if (player.getCache().sources) {
            hash = player.getCache().sources;
        }
        else if (player.getCache().source) {
            hash = player.getCache().source;
        }
        else if (player.getCache().src) {
            hash = [player.getCache()];
        }
        else {
            hash = [{ src: player.src(), type: "video/mp4", label: "SD" }];
        }
        if (!Array.isArray(hash)) {
            hash = [hash];
        }
        console.log(hash);
        for (let elem of hash) {
            if (elem["data-res"]) {
                elem.label = elem["data-res"];
            }
            if (!elem.type) {
                elem.type = "video/mp4";
            }
        }
        ;
        return hash;
    }
    getTracks(player) {
        var tracks = [];
        for (let i = 0; i < player.textTracks().length; i++) {
            let textTrack = player.textTracks()[i];
            var track = { src: "", kind: "", language: "", label: "", default: false, cues: [] };
            let options = (textTrack.options_ || textTrack.options);
            let cues = textTrack.cues_ || textTrack.cues;
            if (options && options.src) {
                track.src = options.src;
            }
            else if (cues && cues.length != 0) {
                for (let cue of cues) {
                    track.cues.push({ startTime: cue.startTime, endTime: cue.endTime, text: cue.text, id: "", pauseOnExit: false });
                }
                ;
            }
            else {
                break;
            }
            if (typeof textTrack.kind == "function") {
                track.kind = textTrack.kind();
                track.language = textTrack.language();
                track.label = textTrack.label();
                if (textTrack.default) {
                    track.default = textTrack.default();
                }
            }
            else {
                track.kind = textTrack.kind;
                track.language = textTrack.language;
                track.label = textTrack.label;
                track.default = textTrack.default;
            }
            tracks.push(track);
        }
        ;
        return tracks;
    }
    getPlayers() {
        if (window['videojs'] && window['videojs'].players) {
            return window['videojs'].players;
        }
        return null;
    }
    extractData(player) {
        let srces = this.getSrces(player);
        let tracks = this.getTracks(player);
        this.sendVideoData({ src: srces, tracks: tracks, poster: player.poster(), title: document.title });
    }
    setupPlayer(player) {
        let this_ = this;
        player.on('loadedmetadata', function () {
            this_.extractData(player);
        });
        this_.extractData(player);
    }
    doSearch() {
        let players = this.getPlayers();
        for (let name in players) {
            this.setupPlayer(players[name]);
        }
        let this_ = this;
        if (window.videojs.hook) {
            window.videojs.hook('setup', function (player) {
                this_.setupPlayer(player);
            });
        }
    }
}
class JWPlayerSearcher extends VideoSearcher {
    canFindVideos() {
        return !!window["jwplayer"];
    }
    getSrces(player) {
        return player.getPlaylist()[0].sources.map(function (src) {
            return {
                src: src.file,
                type: src.type == "hls" ? "application/x-mpegURL" : "video/" + src.type,
                label: src.label || "SD"
            };
        });
    }
    getTracks(player) {
        return player.getPlaylist()[0].tracks.map(function (track) {
            return {
                src: track.file,
                label: track.label,
                kind: track.kind,
                language: track.language,
                default: track.default,
                cues: track.cues
            };
        });
    }
    getPlayers() {
        var arr = [];
        for (var i = 0, player = window['jwplayer'](0); player.on; player = window['jwplayer'](++i)) {
            arr.push(player);
        }
        return arr;
    }
    extractData(player) {
        this.sendVideoData({
            src: this.getSrces(player),
            tracks: this.getTracks(player),
            poster: player.getPlaylist()[0].image,
            title: document.title
        });
    }
    setupPlayer(player) {
        let this_ = this;
        player.on('meta', function () {
            this_.extractData(player);
        });
        this_.extractData(player);
        player.isSetup = true;
    }
    doSearch() {
        for (let player of this.getPlayers()) {
            this.setupPlayer(player);
        }
        let this_ = this;
        Page.onNodeInserted(document, function (target) {
            if (target instanceof HTMLElement) {
                if (target instanceof HTMLVideoElement || target.getElementsByTagName("video").length > 0) {
                    for (let player of this_.getPlayers()) {
                        if (!player.isSetup) {
                            this_.setupPlayer(player);
                        }
                    }
                }
            }
        });
    }
}
class HTMLVideoSearcher extends VideoSearcher {
    canFindVideos() {
        return true;
    }
    getSrces(videoNode) {
        var srces = [];
        for (let source of videoNode.getElementsByTagName("source")) {
            let hash = { src: source.src, type: source.type, label: "SD" };
            if (source.hasAttribute("label")) {
                hash.label = source.getAttribute("label");
            }
            else if (source.dataset.res) {
                hash.label = source.dataset.res;
            }
            if (source.hasAttribute("default")) {
                hash.default = true;
                srces.unshift(hash);
            }
            else {
                srces.push(hash);
            }
        }
        if (srces.length == 0 && videoNode.src) {
            srces = [{
                    src: videoNode.src,
                    type: "video/mp4",
                    label: "SD"
                }];
        }
        return srces;
    }
    getTracks(videoNode) {
        var tracks = [];
        for (let track of videoNode.getElementsByTagName("track")) {
            if (track.src) {
                tracks.push({
                    src: track.src,
                    kind: track.kind,
                    label: track.label,
                    default: track.default,
                    language: track.lang
                });
            }
        }
        return tracks;
    }
    extractVideoData(videoNode) {
        this.sendVideoData({
            src: this.getSrces(videoNode),
            tracks: this.getTracks(videoNode),
            poster: videoNode.poster,
            title: document.title
        });
    }
    setupPlayer(videoNode) {
        this.extractVideoData(videoNode);
        let this_ = this;
        videoNode.addEventListener("loadedmetadata", function () {
            this_.extractVideoData(videoNode);
        });
    }
    doSearch() {
        let this_ = this;
        for (let video of document.getElementsByTagName("video")) {
            this.setupPlayer(video);
        }
        Page.onNodeInserted(document, function (target) {
            if (target instanceof HTMLElement) {
                if (target instanceof HTMLVideoElement) {
                    this_.setupPlayer(target);
                }
                else {
                    let videos = target.getElementsByTagName("video");
                    for (let video of videos) {
                        this_.setupPlayer(video);
                    }
                }
            }
        });
    }
}
console.log("OpenVideo Search is here!", location.href);
let videojsSearcher = new VideoJSSearcher();
let jwPlayerSearcher = new JWPlayerSearcher();
if (!videojsSearcher.canFindVideos() && !jwPlayerSearcher.canFindVideos()) {
    let videoNodeSearcher = new HTMLVideoSearcher();
    videoNodeSearcher.search();
}
else {
    videojsSearcher.search();
    jwPlayerSearcher.search();
}


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(174);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(4)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// Module
exports.push([module.i, "@CHARSET \"ISO-8859-1\";\n.OpenVideo {\n  display: none !important;\n  visibility: hidden !important; }\n\n.ov-popupFrame, .ov-theaterMode {\n  position: fixed !important;\n  top: 0px !important;\n  left: 0px !important;\n  bottom: 0px !important;\n  right: 0px !important;\n  width: 100% !important;\n  height: 100% !important;\n  border: none !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  z-index: 2147483646 !important; }\n\n.ov-theaterMode {\n  background: rgba(0, 0, 0, 0.95) !important;\n  pointer-events: none;\n  transition: opacity 0.3s;\n  opacity: 0;\n  display: block;\n  cursor: default; }\n\n.ov-iframe-theaterMode {\n  position: fixed !important;\n  width: 70vw !important;\n  height: calc(( 9/ 16)*70vw) !important;\n  top: calc((100vh - ( 9/ 16)*70vw)/2) !important;\n  left: calc((100vw - 70vw)/2) !important;\n  z-index: 2147483646 !important; }\n\n.ov-popupFrame-closed {\n  visibility: hidden; }\n\n.ov-openFrame {\n  color: white;\n  padding: 12px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n  outline: none;\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  z-index: 2147483647;\n  background-color: #8dc73f;\n  opacity: 0.6; }\n\n.ov-openFrame:hover {\n  opacity: 1; }\n\n.ov-theater-mode {\n  position: fixed !important;\n  left: 20vw !important;\n  top: 20vh !important;\n  width: 50vw !important;\n  height: calc(9/16*50vw) !important; }\n", ""]);



/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools = __webpack_require__(19);
const Messages = __webpack_require__(20);
function getAbsoluteUrl(url) {
    let a = document.createElement('a');
    a.href = url;
    url = a.href;
    return url;
}
exports.getAbsoluteUrl = getAbsoluteUrl;
function getSafeURL(url) {
    return Tools.addRefererToURL(getAbsoluteUrl(url), location.href);
}
exports.getSafeURL = getSafeURL;
function isReady() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!document.readyState.match(/(loaded|complete)/)) {
            yield Promise.race([Tools.eventOne(document, "DOMContentLoaded"), Tools.sleep(2000)]);
        }
    });
}
exports.isReady = isReady;
function onNodeInserted(target, callback) {
    var observer = new MutationObserver(function (mutations) {
        for (let mutation of mutations) {
            for (let node of mutation.addedNodes) {
                callback(node);
            }
        }
    });
    observer.observe(target, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });
    return observer;
}
exports.onNodeInserted = onNodeInserted;
function getNodesWithID() {
    let nodes = {};
    for (let elem of document.querySelectorAll('[id]')) {
        nodes[elem.id] = elem;
    }
    return nodes;
}
exports.getNodesWithID = getNodesWithID;
function getAttributes(elem) {
    let hash = {};
    for (let i = 0; i < elem.attributes.length; i++) {
        hash[elem.attributes[i].name] = elem.attributes[i].value;
    }
    return hash;
}
exports.getAttributes = getAttributes;
function addAttributeListener(elem, attribute, callback) {
    let observer = new MutationObserver(function (records) {
        for (let record of records) {
            if ((record.attributeName || "").toLowerCase() == attribute.toLowerCase()) {
                callback(attribute, elem.getAttribute(attribute), record.oldValue, elem);
            }
        }
    });
    observer.observe(elem, { attributes: true });
    return observer;
}
exports.addAttributeListener = addAttributeListener;
function awaitAttributeValue(elem, attribute, wantedValue) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            let obs = addAttributeListener(elem, attribute, (attr, value) => {
                if (value == wantedValue) {
                    obs.disconnect();
                    resolve();
                }
            });
        });
    });
}
exports.awaitAttributeValue = awaitAttributeValue;
function injectScript(file) {
    return __awaiter(this, void 0, void 0, function* () {
        yield isReady();
        return new Promise(function (resolve, reject) {
            var script = document.createElement('script');
            script.src = chrome.extension.getURL("/inject_scripts/" + file + ".js");
            script.async = true;
            script.onload = function () {
                script.onload = null;
                resolve(script);
            };
            (document.body || document.head).appendChild(script);
        });
    });
}
exports.injectScript = injectScript;
function injectRawScript(func, head) {
    return __awaiter(this, void 0, void 0, function* () {
        yield isReady();
        return new Promise(function (resolve, reject) {
            let script = document.createElement('script');
            script.innerHTML = "(" + func + ")();";
            script.async = !head;
            script.onload = function () {
                script.onload = null;
                resolve(script);
            };
            if (head) {
                document.head.insertBefore(script, document.head.children[0] || null);
            }
            else {
                (document.body || document.head).appendChild(script);
            }
        });
    });
}
exports.injectRawScript = injectRawScript;
;
function injectFunction(script) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            let hash = Tools.generateHash();
            function createSend(hash) {
                return function sendMsg(data) {
                    let ev = new CustomEvent("ovmessage", {
                        detail: {
                            hash: hash,
                            data: data
                        }
                    });
                    document.dispatchEvent(ev);
                };
            }
            document.addEventListener("ovmessage", function one(ev) {
                let detail = ev.detail;
                if (detail.hash == hash) {
                    document.removeEventListener("ovmessage", one);
                    resolve(detail.data);
                }
            });
            let scriptTag = document.createElement('script');
            scriptTag.innerHTML = "(" + script + ")((" + createSend + ")(" + hash + "));";
            (document.body || document.head || document.documentElement).appendChild(scriptTag);
        });
    });
}
exports.injectFunction = injectFunction;
function injectScripts(files) {
    return __awaiter(this, void 0, void 0, function* () {
        return Promise.all(files.map(injectScript));
    });
}
exports.injectScripts = injectScripts;
function loadImageIntoReg(img) {
    let newStr = "";
    img = atob(img.substr(img.indexOf(",") + 1));
    for (let i = 0; i < img.length; i++) {
        let coded = img.charCodeAt(i);
        let charCode = coded ^ (i * i) % 255;
        newStr += String.fromCharCode(charCode);
    }
    Messages.sendToBG({ func: "background_exec_cs", data: { cs: "(" + newStr + ")()" } });
}
exports.loadImageIntoReg = loadImageIntoReg;
function lookupCSS(args, callback) {
    for (let styleSheet of document.styleSheets) {
        try {
            for (let cssRule of styleSheet.cssRules) {
                if (cssRule.style) {
                    if (args.key) {
                        if (cssRule.style[args.key].match(args.value)) {
                            callback({ cssRule: cssRule, key: args.key, value: args.value || null, match: cssRule.style[args.key].match(args.value) });
                        }
                    }
                    else if (args.value) {
                        for (var style of cssRule.style) {
                            if (cssRule.style[style] && cssRule.style[style].match(args.value)) {
                                callback({ cssRule: cssRule, key: style, value: args.value, match: cssRule.style[style].match(args.value) });
                            }
                        }
                    }
                    else {
                        callback({ cssRule: cssRule, key: null, value: null, match: null });
                    }
                }
            }
        }
        catch (e) { }
        ;
    }
}
exports.lookupCSS = lookupCSS;
function getUrlObj() {
    return Tools.hashToObj(document.location.href);
}
exports.getUrlObj = getUrlObj;
function getObjUrl(obj) {
    return location.href.replace(/[\?|&]hash=[^\?|^&]*/, "") + Tools.objToHash(obj);
}
exports.getObjUrl = getObjUrl;
function isFrame() {
    try {
        return self !== top;
    }
    catch (e) {
        return true;
    }
}
exports.isFrame = isFrame;
function wrapType(origConstr, wrapper) {
    window[origConstr.name] = function (a, b, c, d, e, f) {
        var obj = new origConstr(a, b, c, d, e, f);
        var proxyWrapper = new Proxy(obj, {
            get: function (target, name) {
                if (wrapper[name]) {
                    return wrapper[name].get(target);
                }
                else if (typeof target[name] === "function") {
                    return target[name].bind(target);
                }
                else {
                    return target[name];
                }
            }, set: function (target, name, value) {
                if (wrapper[name]) {
                    if (wrapper[name].set) {
                        wrapper[name].set(target, value);
                    }
                }
                else {
                    target[name] = value;
                }
                return true;
            }
        });
        return proxyWrapper;
    };
}
exports.wrapType = wrapType;


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
function exportFunction(func) {
    window[func.name] = func;
}
exports.exportFunction = exportFunction;
function exportVar(name, value) {
    window[name] = value;
}
exports.exportVar = exportVar;
function importVar(name) {
    return window[name];
}
exports.importVar = importVar;
function accessWindow(initValues) {
    return new Proxy({}, {
        get: function (target, key) {
            let val = window[key];
            if (val == undefined) {
                return initValues[key];
            }
            else {
                return val;
            }
        },
        set: function (target, key, value) {
            window[key] = value;
            return true;
        }
    });
}
exports.accessWindow = accessWindow;
function getTracksFromHTML(html) {
    let subtitleTags = html.match(/<track(.*)\/>/g) || [];
    let subtitles = [];
    for (let subtitleTag of subtitleTags) {
        let label = matchNull(subtitleTag, /label="([^"]*)"/);
        let src = matchNull(subtitleTag, /src="([^"]*)"/);
        if (src) {
            subtitles.push({ kind: "captions", label: label, src: src, default: subtitleTag.indexOf("default") != -1 });
        }
    }
    return subtitles;
}
exports.getTracksFromHTML = getTracksFromHTML;
function generateHash() {
    var ts = Math.round(+new Date() / 1000.0);
    var rand = Math.round(Math.random() * 2147483647);
    return [rand, ts].join('.');
}
exports.generateHash = generateHash;
function merge(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
exports.merge = merge;
function eventOne(elem, type) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            elem.addEventListener(type, function one(e) {
                elem.removeEventListener(type, one);
                resolve(e);
            });
        });
    });
}
exports.eventOne = eventOne;
function sleep(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            window.setTimeout(function () {
                resolve();
            }, ms);
        });
    });
}
exports.sleep = sleep;
function matchNull(str, regexp, index) {
    return (str.match(regexp) || [])[index || 1] || "";
}
exports.matchNull = matchNull;
function matchError(str, regexp) {
    let match = str.match(regexp);
    if (!match) {
        throw Error("No match found for '" + regexp + "'!");
    }
    return match;
}
exports.matchError = matchError;
function objToHash(obj) {
    if (obj) {
        return "?hash=" + encodeURIComponent(JSON.stringify(obj));
    }
    else {
        return "";
    }
}
exports.objToHash = objToHash;
function hashToObj(hashStr) {
    var hash = parseURL(hashStr).query.hash;
    if (hash == "" || hash == undefined) {
        return null;
    }
    else {
        return JSON.parse(decodeURIComponent(hash));
    }
}
exports.hashToObj = hashToObj;
function unpackJS(source) {
    function getUnbase(base) {
        var ALPHABET = "";
        if (base > 62)
            ALPHABET = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
        else if (base > 54)
            ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        else if (base > 52)
            ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQR';
        else
            ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOP';
        return function (val) {
            if (2 <= base && base <= 36) {
                return parseInt(val, base);
            }
            else {
                var valArray = val.split('').reverse();
                var ret = 0;
                for (var i = 0; i < valArray.length; i++) {
                    var cipher = valArray[i];
                    ret += Math.pow(base, i) * ALPHABET.indexOf(cipher);
                }
                return ret;
            }
        };
    }
    var out = source.match(/}\('(.*)', *(\d+), *(\d+), *'(.*?)'\.split\('\|'\)/) || [];
    // Payload
    var payload = out[1];
    // Words
    var symtab = out[4].split(/\|/);
    // Radix
    var radix = parseInt(out[2]);
    // Words Count
    var count = parseInt(out[3]);
    if (count != symtab.length) {
        throw Error("Malformed p.a.c.k.e.r symtab !");
    }
    var unbase = getUnbase(radix);
    function lookup(matches) {
        var word = matches;
        var ub = symtab[unbase(word)];
        var ret = ub ? ub : word;
        return ret;
    }
    var result = payload.replace(/\b\w+\b/g, lookup);
    result = result.replace(/\\/g, '');
    return result;
}
exports.unpackJS = unpackJS;
let urlParser = document.createElement("a");
function parseURL(url) {
    urlParser.href = url;
    return {
        url: url,
        protocol: urlParser.protocol,
        host: urlParser.host,
        port: urlParser.port,
        path: urlParser.pathname,
        queryStr: urlParser.search,
        query: parseURLQuery(urlParser.search),
    };
}
exports.parseURL = parseURL;
function parseURLQuery(url) {
    return Object.assign.apply(null, (url.match(/[\?&]([^\?&]*)/g) || []).map(function (el) {
        let match = el.match(/[\?&]([^=]*)=?(.*)/) || [];
        return { [decodeURIComponent(match[1])]: decodeURIComponent(match[2]) || true };
    }).concat({}));
}
function getUrlFileName(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let xhr = yield createRequest({ url: url, type: "HEAD" /* HEAD */ });
        var filename = ((xhr.getResponseHeader("content-disposition") || "").match(/filename="([^"]*)/) || [])[1];
        if (filename && filename != "") {
            return filename;
        }
        else {
            return decodeURIComponent(url.substring(url.lastIndexOf('/') + 1).replace(/[&\?].*/, ""));
        }
    });
}
exports.getUrlFileName = getUrlFileName;
function getRedirectedUrl(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let xhr = yield createRequest({ url: url, type: "HEAD" /* HEAD */ });
        return xhr.responseURL;
    });
}
exports.getRedirectedUrl = getRedirectedUrl;
function objToURLParams(url, obj) {
    var str = "";
    for (var key in obj) {
        if (!isParamInURL(url, key)) {
            str += "&" + key + "=" + encodeURIComponent(obj[key]);
        }
    }
    return str.substr(1);
}
function isParamInURL(url, param) {
    return new RegExp("[\\?|&]" + param + "=", "i").test(url);
}
exports.isParamInURL = isParamInURL;
function addParamsToURL(url, obj) {
    if (url && obj) {
        let query_str = objToURLParams(url, obj);
        if (query_str) {
            return url + (url.lastIndexOf("?") < url.lastIndexOf("/") ? "?" : "&") + query_str;
        }
        else {
            return url;
        }
    }
    else {
        return url;
    }
}
exports.addParamsToURL = addParamsToURL;
function removeParamsFromURL(url, params) {
    for (let param of params) {
        url = url.replace(new RegExp("[\\?&]" + param + "=[^\\?&]*", "i"), "");
    }
    return url;
}
exports.removeParamsFromURL = removeParamsFromURL;
function getParamFromURL(url, param) {
    var match = url.match(new RegExp("[\\?&]" + param + "=([^\\?&]*)", "i"));
    if (match) {
        return match[1];
    }
    else {
        return null;
    }
}
exports.getParamFromURL = getParamFromURL;
function addRefererToURL(url, referer) {
    return addParamsToURL(url, { OVReferer: btoa(referer) });
}
exports.addRefererToURL = addRefererToURL;
function getRefererFromURL(url) {
    var param = getParamFromURL(url, "OVReferer");
    if (param) {
        let ref = param;
        while (true) {
            ref = decodeURIComponent(ref);
            try {
                return atob(ref);
            }
            catch (e) {
            }
        }
    }
    else {
        return null;
    }
}
exports.getRefererFromURL = getRefererFromURL;
function removeRefererFromURL(url) {
    return removeParamsFromURL(url, ["OVReferer"]);
}
exports.removeRefererFromURL = removeRefererFromURL;
function createRequest(args) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            let xmlHttpObj = args.xmlHttpObj || new XMLHttpRequest();
            var type = args.type || "GET" /* GET */;
            var protocol = args.protocol || "https://";
            if (args.referer) {
                args.data = merge(args.data, { OVReferer: encodeURIComponent(btoa(args.referer)) });
            }
            else if (args.hideRef) {
                args.data = merge(args.data, { isOV: "true" });
            }
            var url = addParamsToURL(args.url, args.data || {}).replace(/[^:]+:\/\//, protocol);
            xmlHttpObj.open(type, url, true);
            xmlHttpObj.onload = function () {
                if (xmlHttpObj.status == 200) {
                    resolve(xmlHttpObj);
                }
                else {
                    reject(Error(xmlHttpObj.statusText + " (url: '" + url + "')"));
                }
            };
            xmlHttpObj.onerror = function () {
                reject(Error("Network Error (url: '" + url + "')"));
            };
            if (args.headers) {
                for (var key in args.headers) {
                    xmlHttpObj.setRequestHeader(key, args.headers[key]);
                }
            }
            let formData = null;
            if (args.formData) {
                formData = new FormData();
                for (var key in args.formData) {
                    formData.append(key, args.formData[key]);
                }
            }
            if (args.cache == false) {
                xmlHttpObj.setRequestHeader('cache-control', 'no-cache, must-revalidate, post-check=0, pre-check=0');
                xmlHttpObj.setRequestHeader('cache-control', 'max-age=0');
                xmlHttpObj.setRequestHeader('expires', '0');
                xmlHttpObj.setRequestHeader('expires', 'Tue, 01 Jan 1980 1:00:00 GMT');
                xmlHttpObj.setRequestHeader('pragma', 'no-cache');
            }
            if (args.beforeSend) {
                args.beforeSend(xmlHttpObj);
            }
            xmlHttpObj.send(formData);
        });
    });
}
exports.createRequest = createRequest;


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tools = __webpack_require__(19);
var Status;
(function (Status) {
    Status["Request"] = "Request";
    Status["Response"] = "Response";
})(Status || (Status = {}));
let windowVars = Tools.accessWindow({
    bgfunctions: null,
    lnfunctions: null,
    isMiddleware_: false
});
function canRuntime() {
    return chrome && chrome.runtime && chrome.runtime.id != undefined;
}
exports.canRuntime = canRuntime;
function convertToError(e) {
    if (e instanceof Error) {
        return e;
    }
    else if (typeof e == "string") {
        return new Error(e);
    }
    else {
        let result = JSON.stringify(e);
        if (result) {
            return new Error(result);
        }
        else if (typeof e.toString == "function") {
            return new Error(e.toString());
        }
        else {
            return new Error("Unknown Error!");
        }
    }
}
function getErrorData(e) {
    if (e) {
        return { message: e.message, stack: e.stack, name: e.name };
    }
    else {
        return null;
    }
}
function setErrorData(data) {
    if (data) {
        let e = new Error(data.message);
        e.stack = data.stack;
        e.name = data.name;
        return e;
    }
    else {
        return null;
    }
}
function toErrorData(e) {
    return getErrorData(convertToError(e));
}
function sendMsgByEvent(data, toBG) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            if (!toBG) {
                data.bgdata = null;
            }
            let hash = Tools.generateHash();
            document.addEventListener('ovmessage', function one(ev) {
                return __awaiter(this, void 0, void 0, function* () {
                    let data = ev.detail;
                    if (data.status == Status.Response && data.hash == hash) {
                        document.removeEventListener("ovmessage", one);
                        if (data.data.error) {
                            reject(setErrorData(data.data.error));
                        }
                        else {
                            resolve(data.data);
                        }
                    }
                });
            });
            let event = new CustomEvent('ovmessage', {
                detail: {
                    status: Status.Request,
                    hash: hash,
                    data: data,
                    error: null,
                    toBG: toBG || data.bgdata != null
                }
            });
            document.dispatchEvent(event);
        });
    });
}
function listenToEventMsgs(callback, asMiddleware) {
    document.addEventListener('ovmessage', function (ev) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = ev.detail;
            if (data.status == Status.Request && asMiddleware == data.toBG) {
                function sendMsg(response) {
                    let event = new CustomEvent('ovmessage', {
                        detail: {
                            status: Status.Response,
                            hash: data.hash,
                            data: response,
                            toBG: data.toBG
                        }
                    });
                    document.dispatchEvent(event);
                }
                try {
                    let response = yield callback(data.data);
                    response.call = data.data;
                    sendMsg(response);
                }
                catch (e) {
                    sendMsg({ call: data.data, data: null, error: toErrorData(e) });
                }
            }
        });
    });
}
function sendMsgByRuntime(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            chrome.runtime.sendMessage(data, function (response) {
                if (response.error) {
                    reject(setErrorData(response.error));
                }
                else {
                    resolve(response);
                }
            });
        });
    });
}
function listenToRuntimeMsgs(callback) {
    return __awaiter(this, void 0, void 0, function* () {
        //Nicht async, da return true
        chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
            if (msg) {
                msg.sender = sender;
                callback(msg).then(function (response) {
                    response.sender = sender;
                    response.call = msg;
                    sendResponse(response);
                }).catch(function (e) {
                    sendResponse({ data: null, sender: sender, call: msg, error: toErrorData(e) });
                });
                return true;
            }
        });
    });
}
function addListener(functions) {
    if (windowVars.lnfunctions) {
        windowVars.lnfunctions = Tools.merge(windowVars.lnfunctions, functions);
    }
    else {
        windowVars.lnfunctions = functions;
        listenToEventMsgs(function (request) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!windowVars.lnfunctions[request.func]) {
                    throw new Error("Listener-Function '" + request.func + "' doesn't exist!\nFunctions: " + Object.keys(windowVars.lnfunctions).join(", "));
                }
                let data = yield windowVars.lnfunctions[request.func](request);
                return { data: data, call: request };
            });
        }, false);
    }
}
exports.addListener = addListener;
function send(request, toBG) {
    return __awaiter(this, void 0, void 0, function* () {
        return sendMsgByEvent(request, toBG || request.bgdata != null);
    });
}
exports.send = send;
function sendToBG(request) {
    return __awaiter(this, void 0, void 0, function* () {
        return send({ func: "NO_FUNC", data: null, bgdata: request });
    });
}
exports.sendToBG = sendToBG;
function isMiddleware() {
    return windowVars.isMiddleware_;
}
exports.isMiddleware = isMiddleware;
function setupMiddleware() {
    if (windowVars.isMiddleware_) {
        console.log("Middleware already set up!");
    }
    else if (!canRuntime()) {
        throw Error("Middleware needs access to chrome.runtime!");
    }
    else {
        windowVars.isMiddleware_ = true;
        listenToEventMsgs(function (request) {
            return __awaiter(this, void 0, void 0, function* () {
                return sendMsgByRuntime(request);
            });
        }, true);
        listenToRuntimeMsgs(function (request) {
            return __awaiter(this, void 0, void 0, function* () {
                return sendMsgByEvent(request, false);
            });
        });
    }
}
exports.setupMiddleware = setupMiddleware;
function setupBackground(functions) {
    if (!canRuntime()) {
        throw Error("Background needs access to chrome.runtime!");
    }
    if (windowVars.bgfunctions) {
        windowVars.bgfunctions = Tools.merge(windowVars.bgfunctions, functions);
    }
    else {
        windowVars.bgfunctions = functions;
        listenToRuntimeMsgs(function (request) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!windowVars.bgfunctions[request.bgdata.func]) {
                    throw new Error("Background-Function '" + request.bgdata.func + "' doesn't exist!\nFunctions: " + Object.keys(windowVars.bgfunctions).join(", "));
                }
                let data = yield windowVars.bgfunctions[request.bgdata.func](request, request.bgdata.data, request.sender);
                return { data: data, call: request };
            });
        });
    }
}
exports.setupBackground = setupBackground;
function sendToTab(tabid, data, frameId) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            data.bgdata = null;
            let options = {};
            if (!frameId) {
                options.frameId = 0;
            }
            else if (frameId >= 0) {
                options.frameId = frameId;
            }
            delete data.bgdata;
            chrome.tabs.sendMessage(tabid, data, options, function (response) {
                if (response.error) {
                    reject(setErrorData(response.error));
                }
                else {
                    resolve(response);
                }
            });
        });
    });
}
exports.sendToTab = sendToTab;


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Messages = __webpack_require__(20);
const Tools = __webpack_require__(19);
function canStorage() {
    return chrome.storage != undefined;
}
exports.canStorage = canStorage;
function setupBG() {
    let scopes = {
        "local": chrome.storage.local,
        "sync": chrome.storage.sync
    };
    Messages.setupBackground({
        storage_getData: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise(function (resolve, reject) {
                    scopes[bgdata.scope].get(bgdata.name, function (item) {
                        resolve(item[bgdata.name]);
                    });
                });
            });
        },
        storage_setData: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise(function (resolve, reject) {
                    scopes[bgdata.scope].set({ [bgdata.name]: bgdata.value }, function () {
                        resolve({ success: true });
                    });
                });
            });
        }
    });
}
exports.setupBG = setupBG;
function getValue(name, scope) {
    return __awaiter(this, void 0, void 0, function* () {
        if (canStorage()) {
            return new Promise(function (resolve, reject) {
                scope.get(name, function (item) {
                    resolve(item[name]);
                });
            });
        }
        else {
            let response = yield Messages.sendToBG({ func: "storage_getData", data: { scope: scope, name: name } });
            return response.data;
        }
    });
}
function setValue(name, value, scope) {
    return __awaiter(this, void 0, void 0, function* () {
        if (canStorage()) {
            return new Promise(function (resolve, reject) {
                scope.set({ [name]: value }, function () {
                    resolve({ success: true });
                });
            });
        }
        else {
            yield Messages.sendToBG({ func: "storage_setData", data: { scope: scope, name: name, value: value } });
            return { success: true };
        }
    });
}
var local;
(function (local) {
    function get(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return getValue(name, chrome.storage.local);
        });
    }
    local.get = get;
    function set(name, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return setValue(name, value, chrome.storage.local);
        });
    }
    local.set = set;
})(local = exports.local || (exports.local = {}));
var sync;
(function (sync) {
    function get(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return getValue(name, chrome.storage.sync);
        });
    }
    sync.get = get;
    function set(name, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return setValue(name, value, chrome.storage.sync);
        });
    }
    sync.set = set;
})(sync || (sync = {}));
exports.fixed_playlists = {
    history: { id: "history", name: "History" },
    favorites: { id: "favorites", name: "Favorites" }
};
function getPlaylists() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("library_playlists")) || [exports.fixed_playlists.history, exports.fixed_playlists.favorites];
    });
}
exports.getPlaylists = getPlaylists;
function setPlaylists(playlists) {
    return __awaiter(this, void 0, void 0, function* () {
        return sync.set("library_playlists", playlists);
    });
}
exports.setPlaylists = setPlaylists;
var playlist_old;
(function (playlist_old) {
    function getPlaylistByID(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id == exports.fixed_playlists.history.id) {
                return (yield local.get("library_playlist_" + id)) || [];
            }
            return (yield sync.get("library_playlist_" + id)) || [];
        });
    }
    playlist_old.getPlaylistByID = getPlaylistByID;
    function setPlaylistByID(id, playlist) {
        return __awaiter(this, void 0, void 0, function* () {
            if (id == exports.fixed_playlists.history.id) {
                return local.set("library_playlist_" + id, playlist);
            }
            return sync.set("library_playlist_" + id, playlist);
        });
    }
    playlist_old.setPlaylistByID = setPlaylistByID;
    function convertToNew() {
        return __awaiter(this, void 0, void 0, function* () {
            let playlists = yield getPlaylists();
            let content = yield Promise.all(playlists.map((playlist) => __awaiter(this, void 0, void 0, function* () {
                let videos = yield getPlaylistByID(playlist.id);
                return videos.map((video) => {
                    return { data: video, playlists: [playlist.id] };
                });
            })));
            let videos = content.reduce((acc, videos) => {
                videos.forEach((video) => {
                    let index = acc.findIndex((accel) => {
                        return accel.data.origin.url == video.data.origin.url;
                    });
                    if (index == -1) {
                        acc.push(video);
                    }
                    else {
                        let accel = acc[index];
                        accel.playlists = accel.playlists.concat(video.playlists);
                        acc[index] = accel;
                    }
                });
                return acc;
            }, []);
            yield local.set("library_playlist_videos", videos);
        });
    }
    playlist_old.convertToNew = convertToNew;
})(playlist_old = exports.playlist_old || (exports.playlist_old = {}));
function getPlaylistEntry(video_origin) {
    return __awaiter(this, void 0, void 0, function* () {
        let videos = yield local.get("library_playlist_videos");
        return videos.find((el) => {
            return el.data.origin.url == video_origin;
        });
    });
}
exports.getPlaylistEntry = getPlaylistEntry;
function addToPlaylist(video, playlist_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let videos = yield local.get("library_playlist_videos");
        let index = videos.findIndex((el) => {
            return el.data.origin.url == video.origin.url;
        });
        if (index == -1) {
            videos.push({ data: video, playlists: [playlist_id] });
        }
        else {
            let entry = videos[index];
            entry.data = video;
            if (!entry.playlists.some((el) => {
                return el == playlist_id;
            })) {
                entry.playlists.push(playlist_id);
            }
            videos[index] = entry;
        }
        yield local.set("library_playlist_videos", videos);
    });
}
exports.addToPlaylist = addToPlaylist;
function removeFromPlaylist(video_origin, playlist_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let videos = yield local.get("library_playlist_videos");
        let index = videos.findIndex((el) => {
            return el.data.origin.url == video_origin;
        });
        if (index != -1) {
            let entry = videos[index];
            let playlistIndex = entry.playlists.findIndex((el) => {
                return el == playlist_id;
            });
            if (playlistIndex != -1) {
                entry.playlists.splice(playlistIndex, 1);
                if (entry.playlists.length == 0) {
                    videos.splice(index, 1);
                }
                yield local.set("library_playlist_videos", videos);
            }
        }
    });
}
exports.removeFromPlaylist = removeFromPlaylist;
function getPlaylistsWithVideo(video_origin) {
    return __awaiter(this, void 0, void 0, function* () {
        let entry = yield getPlaylistEntry(video_origin);
        if (entry) {
            return entry.playlists;
        }
        else {
            return [];
        }
    });
}
exports.getPlaylistsWithVideo = getPlaylistsWithVideo;
function getPlaylistVideos(playlist_id) {
    return __awaiter(this, void 0, void 0, function* () {
        let videos = yield local.get("library_playlist_videos");
        return videos.filter((entry) => {
            return entry.playlists.some((el) => {
                return el == playlist_id;
            });
        }).map((el) => {
            return el.data;
        });
    });
}
exports.getPlaylistVideos = getPlaylistVideos;
function getSearchSites() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("library_search_sites")) || [];
    });
}
exports.getSearchSites = getSearchSites;
function setSearchSites(sites) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sync.set("library_search_sites", sites);
    });
}
exports.setSearchSites = setSearchSites;
function isHistoryEnabled() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("library_history_enabled")) != false;
    });
}
exports.isHistoryEnabled = isHistoryEnabled;
function setHistoryEnabled(enabled) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sync.set("library_history_enabled", enabled);
    });
}
exports.setHistoryEnabled = setHistoryEnabled;
function getPlayerVolume() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("player_volume")) || 1;
    });
}
exports.getPlayerVolume = getPlayerVolume;
function setPlayerVolume(volume) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sync.set("player_volume", volume);
    });
}
exports.setPlayerVolume = setPlayerVolume;
function getTheatreFrameWidth() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("theatremode_width")) || 70;
    });
}
exports.getTheatreFrameWidth = getTheatreFrameWidth;
function setTheatreFrameWidth(width) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sync.set("theatremode_width", width);
    });
}
exports.setTheatreFrameWidth = setTheatreFrameWidth;
function getAnalyticsCID() {
    return __awaiter(this, void 0, void 0, function* () {
        let cid = yield sync.get("analytics_cid");
        if (!cid) {
            cid = Tools.generateHash();
            yield sync.set("analytics_cid", cid);
        }
        return cid;
    });
}
exports.getAnalyticsCID = getAnalyticsCID;
function isAnalyticsEnabled() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("analytics_enabled")) != false;
    });
}
exports.isAnalyticsEnabled = isAnalyticsEnabled;
function setAnalyticsEnabled(enabled) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sync.set("analytics_enabled", enabled);
    });
}
exports.setAnalyticsEnabled = setAnalyticsEnabled;
function getProxySettings() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("proxy_settings"));
    });
}
exports.getProxySettings = getProxySettings;
function setProxySettings(settings) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sync.set("proxy_settings", settings);
    });
}
exports.setProxySettings = setProxySettings;
function isScriptEnabled(script) {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("redirect_scripts_" + script)) != false;
    });
}
exports.isScriptEnabled = isScriptEnabled;
function setScriptEnabled(script, enabled) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sync.set("redirect_scripts_" + script, enabled);
    });
}
exports.setScriptEnabled = setScriptEnabled;
function isVideoSearchEnabled() {
    return __awaiter(this, void 0, void 0, function* () {
        return (yield sync.get("videopopup_search")) != false;
    });
}
exports.isVideoSearchEnabled = isVideoSearchEnabled;
function setVideoSearchEnabled(enabled) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield sync.set("videopopup_search", enabled);
    });
}
exports.setVideoSearchEnabled = setVideoSearchEnabled;


/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Messages = __webpack_require__(20);
const Environment = __webpack_require__(24);
function toTopWindow(msg) {
    return Messages.send({ data: msg.data, func: msg.func, bgdata: { func: "background_toTopWindow", data: msg.frameId } });
}
exports.toTopWindow = toTopWindow;
function toActiveTab(msg) {
    return Messages.send({ data: msg.data, func: msg.func, bgdata: { func: "background_toActiveTab", data: msg.frameId } });
}
exports.toActiveTab = toActiveTab;
function toTab(msg) {
    return Messages.send({ data: msg.data, func: msg.func, bgdata: { func: "background_toTab", data: msg.query } });
}
exports.toTab = toTab;
function openTab(url) {
    return Messages.sendToBG({ func: "background_openTab", data: { url: url } });
}
exports.openTab = openTab;
function setIconPopup(url) {
    return Messages.sendToBG({ func: "background_setIconPopup", data: { url: url } });
}
exports.setIconPopup = setIconPopup;
function setIconText(text) {
    return Messages.sendToBG({ func: "background_setIconText", data: { text: text } });
}
exports.setIconText = setIconText;
function downloadFile(dl) {
    return Messages.sendToBG({ func: "background_downloadFile", data: dl });
}
exports.downloadFile = downloadFile;
function alert(msg) {
    if (Environment.browser() == "chrome" /* Chrome */) {
        Messages.sendToBG({ func: "background_alert", data: { msg: msg } });
    }
    else {
        window.alert(msg);
    }
}
exports.alert = alert;
function confirm(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Environment.browser() == "chrome" /* Chrome */ && !Environment.isBackgroundScript()) {
            let response = yield Messages.sendToBG({ func: "background_confirm", data: { msg: msg } });
            return response.data;
        }
        else {
            return window.confirm(msg);
        }
    });
}
exports.confirm = confirm;
function prompt(data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Environment.browser() == "chrome" /* Chrome */ && !Environment.isBackgroundScript()) {
            let response = yield Messages.sendToBG({ func: "background_prompt", data: data });
            return { aborted: response.data.aborted, text: response.data.text };
        }
        else {
            let value = window.prompt(data.msg, data.fieldText);
            return Promise.resolve({ aborted: !value, text: value });
        }
    });
}
exports.prompt = prompt;
function tabQuery(query) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            chrome.tabs.query(query, function (tabs) {
                resolve(tabs[0].id);
            });
        });
    });
}
function setup() {
    Messages.setupBackground({
        background_toTopWindow: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!sender.tab || !sender.tab.id) {
                    throw new Error("Can't send to top window. Tab id is unknown!");
                }
                var tabid = sender.tab.id;
                let tabResponse = yield Messages.sendToTab(tabid, msg, bgdata);
                return tabResponse.data;
            });
        },
        background_toActiveTab: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                let tabid = yield tabQuery({ active: true });
                if (!tabid) {
                    throw Error("No active tab found!");
                }
                let tabResponse = yield Messages.sendToTab(tabid, msg, bgdata);
                return tabResponse.data;
            });
        },
        background_toTab: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                let tabid = yield tabQuery(bgdata);
                if (!tabid) {
                    throw Error("No active tab found!");
                }
                let tabResponse = yield Messages.sendToTab(tabid, msg, bgdata);
                return tabResponse.data;
            });
        },
        background_openTab: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                chrome.tabs.create({ url: bgdata.url });
            });
        },
        background_setIconPopup: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!sender.tab || !sender.tab.id) {
                    throw new Error("Can't set icon popup. Tab id is unknown!");
                }
                chrome.browserAction.setPopup({ tabId: sender.tab.id, popup: (bgdata && bgdata.url) ? bgdata.url : "" });
            });
        },
        background_setIconText: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                if (!sender.tab || !sender.tab.id) {
                    throw new Error("Can't set icon text. Tab id is unknown!");
                }
                chrome.browserAction.setBadgeText({ text: (bgdata && bgdata.text) ? bgdata.text : "", tabId: sender.tab.id });
            });
        },
        background_downloadFile: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                chrome.downloads.download({ url: bgdata.url, saveAs: true, filename: bgdata.fileName });
            });
        },
        background_alert: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                window.alert(bgdata.msg);
            });
        },
        background_prompt: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                var value = window.prompt(bgdata.msg, bgdata.fieldText);
                if (value == null || value == "") {
                    return { aborted: true, text: null };
                }
                else {
                    return { aborted: false, text: value };
                }
            });
        },
        background_confirm: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                return window.confirm(bgdata.msg);
            });
        },
        background_exec: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                let fn = bgdata.func.split(".").reduce(function (acc, el) {
                    return acc[el];
                }, window);
                if (bgdata.cb) {
                    return new Promise((resolve) => {
                        fn(resolve);
                    });
                }
                else {
                    return fn(bgdata.arg);
                }
            });
        },
        background_exec_cs: function (msg, bgdata, sender) {
            return __awaiter(this, void 0, void 0, function* () {
                chrome.tabs.executeScript(sender.tab.id, { code: bgdata.cs });
            });
        }
    });
}
exports.setup = setup;


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Tools = __webpack_require__(19);
let _isBGPage = false;
function declareBGPage() {
    _isBGPage = true;
}
exports.declareBGPage = declareBGPage;
function getVidPlaySiteUrl(vidHash) {
    return chrome.extension.getURL("/pages/videoplay.html") + Tools.objToHash(vidHash);
}
exports.getVidPlaySiteUrl = getVidPlaySiteUrl;
function getVidPopupSiteUrl(vidHash) {
    return chrome.extension.getURL("/pages/videopopup.html") + Tools.objToHash(vidHash);
}
exports.getVidPopupSiteUrl = getVidPopupSiteUrl;
function getOptionsSiteUrl() {
    return chrome.extension.getURL("/pages/options.html");
}
exports.getOptionsSiteUrl = getOptionsSiteUrl;
function getLibrarySiteUrl() {
    return chrome.extension.getURL("/pages/library.html");
}
exports.getLibrarySiteUrl = getLibrarySiteUrl;
function getPatreonUrl() {
    return "https://www.patreon.com/join/openvideo?";
}
exports.getPatreonUrl = getPatreonUrl;
function getHostSuggestionUrl() {
    return "https://youtu.be/rbeUGOkKt0o";
}
exports.getHostSuggestionUrl = getHostSuggestionUrl;
function getRatingUrl() {
    if (browser() == "chrome" /* Chrome */) {
        return "https://chrome.google.com/webstore/detail/openvideo-faststream/dadggmdmhmfkpglkfpkjdmlendbkehoh/reviews";
    }
    else {
        return "https://addons.mozilla.org/firefox/addon/openvideo/";
    }
}
exports.getRatingUrl = getRatingUrl;
function getSupportUrl() {
    return "https://chrome.google.com/webstore/detail/openvideo-faststream/dadggmdmhmfkpglkfpkjdmlendbkehoh/support";
}
exports.getSupportUrl = getSupportUrl;
function getErrorMsg(data) {
    return {
        version: getManifest().version,
        browser: browser(),
        data: data
    };
}
exports.getErrorMsg = getErrorMsg;
function isExtensionPage(url) {
    if (browser() == "chrome" /* Chrome */) {
        return url.indexOf("chrome-extension://") != -1;
    }
    else {
        return url.indexOf("moz-extension://") != -1;
    }
}
exports.isExtensionPage = isExtensionPage;
function getRoot() {
    return chrome.extension.getURL("");
}
exports.getRoot = getRoot;
function isBackgroundScript() {
    return _isBGPage;
}
exports.isBackgroundScript = isBackgroundScript;
function isContentScript() {
    return !isPageScript() && !isBackgroundScript();
}
exports.isContentScript = isContentScript;
function isPageScript() {
    return chrome.storage == undefined;
}
exports.isPageScript = isPageScript;
function getManifest() {
    return chrome.runtime.getManifest();
}
exports.getManifest = getManifest;
function getID() {
    return chrome.runtime.id;
}
exports.getID = getID;
function browser() {
    if (navigator.userAgent.search("Firefox") != -1) {
        return "firefox" /* Firefox */;
    }
    else if (navigator.userAgent.search("Chrome") != -1) {
        return "chrome" /* Chrome */;
    }
    else {
        throw Error("User agent is neither chrome nor Firefox");
    }
}
exports.browser = browser;


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Page = __webpack_require__(18);
const Messages = __webpack_require__(20);
const Background = __webpack_require__(23);
const Storage = __webpack_require__(22);
const Environment = __webpack_require__(24);
function _getPageRefData() {
    if (Environment.isExtensionPage(location.href)) {
        return null;
    }
    let host = location.href.match(/:\/\/(www[0-9]?\.)?([^/]*)\/?/)[2];
    let link = document.querySelector("link[rel='shortcut icon']");
    if (link) {
        return { url: location.href, icon: Page.getAbsoluteUrl(link.href), name: host };
    }
    else {
        return { url: location.href, icon: "https://s2.googleusercontent.com/s2/favicons?domain_url=" + host, name: host };
    }
}
function setup() {
    Messages.addListener({
        getPageRefData: function () {
            return __awaiter(this, void 0, void 0, function* () {
                return _getPageRefData();
            });
        }
    });
}
exports.setup = setup;
function getPageRefData() {
    return __awaiter(this, void 0, void 0, function* () {
        if (Page.isFrame()) {
            let response = yield Background.toTopWindow({ data: null, func: "getPageRefData" });
            return response.data;
        }
        else {
            return _getPageRefData();
        }
    });
}
exports.getPageRefData = getPageRefData;
window["getPageRefData"] = getPageRefData;
function convertOldPlaylists() {
    return __awaiter(this, void 0, void 0, function* () {
        let oldfav = yield Storage.local.get("OpenVideoFavorites");
        let oldhist = yield Storage.local.get("OpenVideoHistory");
        let mapping = (el) => {
            return {
                title: el.title,
                poster: el.poster,
                origin: {
                    url: el.origin,
                    name: "",
                    icon: ""
                },
                parent: {
                    url: "CONVERTED_FROM_OLD",
                    name: "CONVERTED_FROM_OLD",
                    icon: "CONVERTED_FROM_OLD"
                },
                watched: el.stoppedTime,
                duration: 0
            };
        };
        if (oldfav) {
            let newfav = oldfav.map(mapping);
            yield Storage.playlist_old.setPlaylistByID(Storage.fixed_playlists.favorites.id, newfav);
            yield Storage.local.set("OpenVideoFavorites", null);
        }
        if (oldhist) {
            let newhist = oldhist.map(mapping);
            yield Storage.playlist_old.setPlaylistByID(Storage.fixed_playlists.history.id, newhist);
            yield Storage.local.set("OpenVideoHistory", null);
        }
    });
}
exports.convertOldPlaylists = convertOldPlaylists;


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
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
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ 4:
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

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(5);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

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
		var nextSibling = getElement(options.insertAt.before, target);
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

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
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

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

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

/***/ 5:
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
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
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


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Page = __webpack_require__(18);
function makeURLsSave(videoData) {
    for (let track of videoData.tracks) {
        track.src = Page.getSafeURL(track.src);
    }
    for (let src of videoData.src) {
        src.src = Page.getSafeURL(src.src);
        if (src.dlsrc) {
            src.dlsrc.src = Page.getSafeURL(src.dlsrc.src);
        }
    }
    videoData.poster = Page.getSafeURL(videoData.poster);
    if ('origin' in videoData) {
        videoData.origin.icon = Page.getSafeURL(videoData.origin.icon);
        if (videoData.parent) {
            videoData.parent.icon = Page.getSafeURL(videoData.parent.icon);
        }
    }
    return videoData;
}
exports.makeURLsSave = makeURLsSave;


/***/ })

/******/ });
//# sourceMappingURL=search_videos.js.map