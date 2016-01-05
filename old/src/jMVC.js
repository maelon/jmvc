/*===================================================================
#    FileName: jMVC.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2015-07-07 10:25
#     Version: 0.0.1
#   depend on: jClass.js
===================================================================*/

if(window.jclass === undefined || window.jclass.__jclass !== 'jclass')
    throw new Error('jmvc depends on jClass.js!');

window.jmvc || (window.jmvc = {});

/**
*  Class Facade
*/
(function () {
    var classInfo = {
        'name': 'jMVC.core.__Facade',
        'constructor': function () {
            if(jclass('jMVC.core.__Facade').__instance)
                throw new Error('Can\'t new facade, call getInstance please');

            this.__commandMap = {};
        }
    };
    var classTraits = {
        'registerCommand': function () {
        },
        'sendCommand': function () {
        }
    };
    var classStatics = {
        '__instance': undefined,
        'getInstance': function () {
            if(this.__instance === undefined)
                this.__instance = new (jclass('jMVC.core.__Facade'))();
            return this.__instance;
        }
    };
    jclass.define(classInfo, classTraits, classStatics);
})();
jmvc.__facade = jclass('jMVC.core.__Facade').getInstance();

/**
*  Class Observer
*/
(function () {
    var classInfo = {
        'name': 'jMVC.core.__Observer',
        'constructor': function () {
            this.__facade = jclass('jMVC.core.__Facade').getInstance(),
        }
    };
    var classTraits = {
        'registerCommand': function (name, callback) {
        },
        'sendCommand': function (name, param) {
        }
    };
    var classStatics = {
    };
    jclass.define(classInfo, classTraits, classStatics);
})();
