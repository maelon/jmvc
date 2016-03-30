/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Person = function () {
	    function Person(name) {
	        _classCallCheck(this, Person);

	        this._name = name || '';
	    }

	    _createClass(Person, [{
	        key: 'name',
	        get: function get() {
	            return this._name;
	        },
	        set: function set(newName) {
	            if (newName) {
	                this._name = newName;
	            }
	        }
	    }]);

	    return Person;
	}();

	var TestPerson = function (_Person) {
	    _inherits(TestPerson, _Person);

	    function TestPerson() {
	        var name = arguments.length <= 0 || arguments[0] === undefined ? 'test' : arguments[0];

	        _classCallCheck(this, TestPerson);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TestPerson).call(this, name));
	    }

	    return TestPerson;
	}(Person);

	var TestWebpackPerson = function (_Person2) {
	    _inherits(TestWebpackPerson, _Person2);

	    function TestWebpackPerson() {
	        var name = arguments.length <= 0 || arguments[0] === undefined ? 'webpacktest' : arguments[0];

	        _classCallCheck(this, TestWebpackPerson);

	        return _possibleConstructorReturn(this, Object.getPrototypeOf(TestWebpackPerson).call(this, name));
	    }

	    return TestWebpackPerson;
	}(Person);

	var a = new TestPerson();
	console.log(a.name);

	var b = new TestWebpackPerson();
	console.log(b.name);

/***/ }
/******/ ]);