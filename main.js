/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Controller)\n/* harmony export */ });\n/* harmony import */ var _data_restaurant_info_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/restaurant-info.json */ \"./src/data/restaurant-info.json\");\n/* harmony import */ var _data_contact_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/contact.json */ \"./src/data/contact.json\");\n/* harmony import */ var _data_menu_items_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/menu-items.json */ \"./src/data/menu-items.json\");\n\n\n\n\n\n// Draws content depending on what button is clicked\nclass Controller {    \n    constructor() {\n        if (Controller.instance) {\n          return Controller.instance; // Return existing instance\n        }\n\n        // Menu buttons\n        this.navButtons = document.querySelectorAll('.nav-btn');\n\n        // Main content div\n        this.contentDiv = document.querySelector(\"#content\");\n\n        // Buttons event listener\n        this.navButtons.forEach((button) => {\n            button.addEventListener('click', (event) => {\n                const view = event.currentTarget.value;\n                this.swapView(view);\n            });\n        });\n    }    \n\n    swapView(view){\n        if (view === 'home') {\n            this.drawHome();\n        }\n        else if (view === 'contact') {\n            this.drawContact();\n        }\n        else if (view === 'menu') {\n            this.drawMenu();\n        }        \n    }\n\n    async drawHome() {\n        this.contentDiv.replaceChildren();\n        const data = await this.fetchJsonData(_data_restaurant_info_json__WEBPACK_IMPORTED_MODULE_0__);\n\n        const container = document.createElement('div');\n        container.classList.add('restaurant-info-container');\n\n        const header = document.createElement('h2');\n        header.classList.add('restaurant-name');\n        header.textContent = data.restaurant.name;        \n        container.append(header);\n\n        const description = document.createElement('strong');\n        description.classList.add('description');\n        description.textContent = data.restaurant.description;\n        container.append(description);\n\n        const about = document.createElement('em');\n        about.classList.add('about');\n        about.textContent = data.restaurant.about;\n        container.append(about);\n\n        this.contentDiv.append(container);\n        \n    }\n\n    async drawContact() {\n        this.contentDiv.replaceChildren();\n        const data = await this.fetchJsonData(_data_contact_json__WEBPACK_IMPORTED_MODULE_1__);\n\n        const container = document.createElement('div');\n        container.classList.add('contact-content-container');\n\n        const openingHoursContainer = document.createElement('div');\n        openingHoursContainer.classList.add('opening-hours-container');\n        for (const [key, value] of Object.entries(data.opening_hours)) {\n            const openingDayGroup = document.createElement('div');\n            openingDayGroup.classList.add('opening-day-group');\n\n            const day = document.createElement('div');\n            day.textContent = key;\n            day.classList.add('day');\n            const openingHoursElement = document.createElement('div');\n            openingHoursElement.textContent = value;\n            openingHoursElement.classList.add('opening-hours');\n\n            openingDayGroup.append(day);\n            openingDayGroup.append(openingHoursElement);\n\n            openingHoursContainer.append(openingDayGroup);\n        }\n\n        container.append(openingHoursContainer);\n\n        const contactContainer = document.createElement('div');\n        contactContainer.classList.add('contact-container');\n        for (const [key, value] of Object.entries(data.contact_info)) {\n            const contactGroup = document.createElement('div');\n            contactGroup.classList.add('contact-group');\n\n            const contactType = document.createElement('div');\n            contactType.classList.add('contact-type');\n            contactType.textContent = key;\n            const contactValue = document.createElement('div');\n            contactValue.classList.add('contact-value');\n            contactValue.textContent = value;\n\n            contactGroup.append(contactType);\n            contactGroup.append(contactValue);\n\n            contactContainer.append(contactGroup);\n        }\n        container.append(contactContainer);\n\n        this.contentDiv.append(container);\n\n    }\n\n    async drawMenu() {\n        this.contentDiv.replaceChildren();\n        const data = await this.fetchJsonData(_data_menu_items_json__WEBPACK_IMPORTED_MODULE_2__);\n\n        const container = document.createElement('div');\n        container.classList.add('menu-container');\n        \n\n        const menuItemsContainer = document.createElement('div');\n        for (const [key, value] of Object.entries(data.menu)) {\n            const menuGroup = document.createElement('div');\n            menuGroup.classList.add('menu-group');\n\n            const menuGroupHeader = document.createElement('h2');\n            menuGroupHeader.textContent = this.capitalizeFirstLetterReplaceUnderscore(key);\n            menuGroupHeader.classList.add('menu-group-header');\n            menuGroup.append(menuGroupHeader);\n\n            for (const item of value) {\n                \n                const menuItem = document.createElement('div');\n                menuItem.classList.add('menu-item');\n\n                const name = document.createElement('h3');\n                name.classList.add('menu-item-name');\n                name.textContent = item.name;\n\n                const description = document.createElement('em');\n                description.classList.add('menu-item-description');\n                description.textContent = item.description;\n\n                const price = document.createElement('p');\n                price.classList.add('menu-item-price');\n                price.textContent = item.price;\n                \n                const allergens = document.createElement('em');\n                allergens.classList.add('menu-item-allergens');\n                allergens.textContent = item.allergens;\n\n                menuItem.append(name,description,price,allergens);  \n                menuGroup.append(menuItem);              \n            }\n            container.append(menuGroup);\n        }\n        this.contentDiv.append(container);\n    }\n\n    async fetchJsonData(filename) {\n        try {\n            const response = await fetch(filename);\n            if (!response.ok) {\n                throw new Error(`HTTP error! status: ${response.status}`);\n            }\n            return await response.json();\n        } catch (error) {\n            console.error('Error loading JSON:' + filename, error);\n            return null;\n        }\n    }\n\n    capitalizeFirstLetterReplaceUnderscore(val) {\n        val = val.replace('_', ' ');\n        return String(val).charAt(0).toUpperCase() + String(val).slice(1);\n    }\n\n    static getInstance() {\n        if (!Controller.instance) {\n          Controller.instance = new Controller();\n        }\n        return Controller.instance;\n      }\n}\n\n//# sourceURL=webpack:///./src/Controller.js?");

/***/ }),

/***/ "./src/data/contact.json":
/*!*******************************!*\
  !*** ./src/data/contact.json ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"data/contact.json\";\n\n//# sourceURL=webpack:///./src/data/contact.json?");

/***/ }),

/***/ "./src/data/menu-items.json":
/*!**********************************!*\
  !*** ./src/data/menu-items.json ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"data/menu-items.json\";\n\n//# sourceURL=webpack:///./src/data/menu-items.json?");

/***/ }),

/***/ "./src/data/restaurant-info.json":
/*!***************************************!*\
  !*** ./src/data/restaurant-info.json ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"data/restaurant-info.json\";\n\n//# sourceURL=webpack:///./src/data/restaurant-info.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Controller.js */ \"./src/Controller.js\");\n\n\n// instantiate Controller\nconst controller = new _Controller_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;