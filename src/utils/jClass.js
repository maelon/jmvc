/*===================================================================
#    FileName: jutils.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2015-06-29 13:13
#  © Copyright 2015 maelon. All Rights Reserved.
#     Version: 0.0.1
===================================================================*/

window.jclass = (function() {
    var __utils = (function() {
        /**
        * 继承类
        */
        function extendClass(child, parent) {
            if(typeof child !== 'function')
                throw new TypeError('extendClass child must be function type');
            if(typeof parent !== 'function')
                throw new TypeError('extendClass parent must be function type');

            if(child === parent)
                return ;
            var Transitive = new Function();
            Transitive.prototype = parent.prototype;
            child.prototype = new Transitive();
            return child.prototype.constructor = child;
        }

        /**
        * 装饰类
        */
        function decorateClass(cls, traits) {
            for(var accessor in traits) {
                cls[accessor] = traits[accessor];
            }
            return cls;
        }

        return {
            'extend': extendClass,
            'decorate': decorateClass
        };
    })();

    var __classManager = (function() {
        /**
        * classMap
        * {
        *     __root: 'root',
        *     __class: {
        *         __class: 'class',
        *         A: {
        *           __name: 'A',
        *           __package: [],
        *           __constructor: function,
        *           __toString: function
        *         }
        *     },
        *     A1: {
        *         __class: {
        *             __class: 'class'
        *         },
        *         C: {
        *             __class: {
        *                 __class: 'class'
        *             },
        *             D: {
        *                 __class: {
        *                     __class: 'class',
        *                     E: {
        *                         __name: 'E',
        *                         __package: ['A1', 'C', 'D'],
        *                         __constructor: function,
        *                         __toString: function
        *                     }
        *                 }
        *             }
        *         }
        *     }
        * }
        */

        //class package manager
        var _classPM = (function() {
            var _classMap = { 
                '__root': 'root',
                '__class': {
                    '__class': 'class'
                }
            };

            function getPackage(package) {
                var pack;
                var map = _classMap;
                for(var i = 0; i < package.length; i++) {
                    pack = package[i];
                    if(map.hasOwnProperty(pack)) {
                        map = map[pack];
                    } else {
                        return null;
                    }
                }
                return map;
            }

            function addPackage(package) {
                var pack;
                var map = _classMap;
                for(var i = 0; i < package.length; i++) {
                    pack = package[i];
                    if(map.hasOwnProperty(pack)) {
                        map = map[pack];
                    } else {
                        map = map[pack] = {
                            '__class': {
                                '__class': 'class'
                            }
                        };
                    }
                }
                return map;
            }

            function removePackage(package) {
                var pack;
                var pMap = _classMap;
                var map = _classMap;
                var isDel = false;
                for(var i = 0; i < package.length; i++) {
                    pack = package[i];
                    if(map.hasOwnProperty(pack)) {
                        pMap = map;
                        map = pMap[pack];
                        isDel = true;
                    } else {
                        isDel = false;
                        break;
                    }
                }
                if(isDel && pack) {
                    delete pMap[pack];
                    return true;
                }
                return false;
            }

            return {
                'getPackage': getPackage,
                'addPackage': addPackage,
                'removePackage': removePackage
            };
        })();

        function _getClassPath(className) {
            var path = className.split('.');
            var name = path.pop();
            return {
                'classPackage': path,
                'className': name
            };
        }

        function addClass(classInfo) {
            var classPath = _getClassPath(classInfo['name']);
            var classPackage = _classPM.addPackage(classPath['classPackage']);
            var cp = classPackage['__class'][classPath['className']] = {
                '__package': classPath['classPackage'],
                '__name': classPath['className'],
                '__constructor': classInfo['constructor'],
                '__toString': function() {
                    return 'function ' + this.__package.join('.') + (this.__package.length > 0 ? '.' : '') + this.__name + this.__constructor.toString().match(/\([^\(]+\)/)[0];
            };
            cp['__constructor'].prototype.__class = cp;
            if(classInfo.hasOwnProperty('parent'))
                cp['__parent'] = classInfo['parent'];
        }

        function removeClass(className) {
            var classPath = _getClassPath(className);
            var classPackage = _classPM.getPackage(classPath['classPackage']);
            if(classPackage) {
                delete classPackage['__class'][classPath['className']];
                return true;
            }
            return false;
        }

        function getClass(className) {
            var classPath = _getClassPath(className);
            var classPackage = _classPM.getPackage(classPath['classPackage']);
            if(classPackage)
                return classPackage['__class'][classPath['className']];
            return null;
        }

        return {
            'addClass': addClass,
            'removeClass': removeClass,
            'getClass': getClass
        };
    })();

    //声明类
    function defineClass(classInfo, classTraits, classStatics) {
        if(!classInfo)
            throw new Error('There\'s no class info!');

        var className = classInfo['name']; 
        if(className === undefined)
            throw new Error('There\'s no class name!');
        else if(typeof className !== 'string') 
            throw new TypeError('Class name must be a string');
        else if(className === '') 
            throw new Error('Class name can\'t be empty');
        else {
            var names = className.split('.');
            for(var i = 0; i < names.length; i++) {
                if(names[i] === '')
                    throw new Error('Invalid class name');
            }
        }

        var classConstructor = classInfo['constructor'];
        if(classConstructor === undefined || classConstructor === null)
            throw new Error('There\'s no class constructor!');
        else if(typeof classConstructor !== 'function') 
            throw new TypeError('Class constructor must be a function');

        var classParent =  classInfo['parent'];
        var needExtend = false;
        if(classParent !== undefined && typeof classParent === 'string' && classParent !== '') {
            var names = classParent.split('.');
            for(var i = 0; i < names.length; i++) {
                if(names[i] === '')
                    throw new Error('Invalid class parent name');
            }
            needExtend = true;
        }

        classConstructor = classInfo['constructor'];
        classParent = classInfo['parent'];

        if(needExtend) {
            var parentClass = __classManager.getClass(classParent);
            if(parentClass)
                __utils.extend(classConstructor, parentClass['__constructor']);
            else
                throw Error('Didn\'t define parent class');
        }

        if(classTraits) {
            __utils.decorate(classConstructor.prototype, classTraits);
            classConstructor.prototype.constructor = classConstructor;
        }

        if(classStatics) {
            __utils.decorate(classConstructor, classStatics);
        }

        __classManager.addClass(classInfo);
    }

    //实例化类
    function instanceClass(className) {
        var cls = __classManager.getClass(className);
        return cls['__constructor'];
    }

    //调用父类的构造函数
    function superCall(className, scope) {
        var superClass = __classManager.getClass(className);
        superClass['__constructor'].apply(scope, Array.prototype.slice.call(arguments, 2));
    }

    //根据对象获取类名
    function getClassName(o) {
        if(o.hasOwnProperty('__class')) {
            var cls = o['__class'];
            return cls['__package'].join('.') + (cls['__package'].length > 0 ? '.' : '') + cls['__name'];
        }
        return '';
    }

    //根据对象获取继承类名
    function getClassParentName(o) {
        if(o.hasOwnProperty('__class')) {
            var cls = o['__class'];
            if(cls['__parent'])
                return cls['__parent'];
        }
        return '';
    }

    return {
        'define': defineClass,
        'class': instanceClass,
        'super': superCall,
        'getClassName': getClassName,
        'getClassParentName': getClassParentName
    };
})();
