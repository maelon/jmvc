/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFkMjVhOTRiZTA2NDE1NWUyZjEiLCJ3ZWJwYWNrOi8vLy4vdGVzdC1lczYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDdENNO0FBQ0YsY0FERSxNQUNGLENBQVksSUFBWixFQUFrQjsrQkFEaEIsUUFDZ0I7O0FBQ2QsY0FBSyxLQUFMLEdBQWEsUUFBUSxFQUFSLENBREM7TUFBbEI7O2tCQURFOzs2QkFLUztBQUNQLG9CQUFPLEtBQUssS0FBTCxDQURBOzsyQkFJRixTQUFTO0FBQ2QsaUJBQUcsT0FBSCxFQUFZO0FBQ1Isc0JBQUssS0FBTCxHQUFhLE9BQWIsQ0FEUTtjQUFaOzs7O1lBVkY7OztLQWdCQTs7O0FBQ0YsY0FERSxVQUNGLEdBQTJCO2FBQWYsNkRBQU8sc0JBQVE7OytCQUR6QixZQUN5Qjs7dUVBRHpCLHVCQUVRLE9BRGlCO01BQTNCOztZQURFO0dBQW1COztLQU1uQjs7O0FBQ0YsY0FERSxpQkFDRixHQUFrQzthQUF0Qiw2REFBTyw2QkFBZTs7K0JBRGhDLG1CQUNnQzs7dUVBRGhDLDhCQUVRLE9BRHdCO01BQWxDOztZQURFO0dBQTBCOztBQU1oQyxLQUFJLElBQUksSUFBSSxVQUFKLEVBQUo7QUFDSixTQUFRLEdBQVIsQ0FBWSxFQUFFLElBQUYsQ0FBWjs7QUFFQSxLQUFJLElBQUksSUFBSSxpQkFBSixFQUFKO0FBQ0osU0FBUSxHQUFSLENBQVksRUFBRSxJQUFGLENBQVosQyIsImZpbGUiOiJtYWluLmJjOTNlNmY5NDRiYmExY2E4MjQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkYWQyNWE5NGJlMDY0MTU1ZTJmMVxuICoqLyIsImNsYXNzIFBlcnNvbiB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZSB8fCAnJztcbiAgICB9XG5cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgfVxuXG4gICAgc2V0IG5hbWUobmV3TmFtZSkge1xuICAgICAgICBpZihuZXdOYW1lKSB7XG4gICAgICAgICAgICB0aGlzLl9uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgVGVzdFBlcnNvbiBleHRlbmRzIFBlcnNvbiB7XG4gICAgY29uc3RydWN0b3IobmFtZSA9ICd0ZXN0Jykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG59XG5cbmNsYXNzIFRlc3RXZWJwYWNrUGVyc29uIGV4dGVuZHMgUGVyc29uIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lID0gJ3dlYnBhY2t0ZXN0Jykge1xuICAgICAgICBzdXBlcihuYW1lKTtcbiAgICB9XG59XG5cbnZhciBhID0gbmV3IFRlc3RQZXJzb24oKTtcbmNvbnNvbGUubG9nKGEubmFtZSk7XG5cbnZhciBiID0gbmV3IFRlc3RXZWJwYWNrUGVyc29uKCk7XG5jb25zb2xlLmxvZyhiLm5hbWUpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90ZXN0LWVzNi5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=