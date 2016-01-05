/*===================================================================
 * #    FileName: jutils.js
 * #      Author: Maelon.J
 * #       Email: maelon.j@gmail.com
 * #  CreateTime: 2015-06-29 17:46
 * #  © Copyright 2015 maelon. All Rights Reserved.  
 * ===================================================================*/

(function (scope) {

    scope._guidCount = 0;
    scope.guid = function () {
        var strCount = scope._guidCount.toString(16).toUpperCase();
        var tpl = '00000000000000000000000000000000';
        var retStr = tpl.subString(0, tpl.length - strCount.length) + strCount;
        return [
            retStr.subString(0, 8),
            retStr.subString(8, 12),
            retStr.subString(12, 16),
            retStr.subString(16, 20),
            retStr.subString(20)
        ].join('-');
    };

    /**
     * 继承类
     */
    scope.extendClass = function (child, parent) {
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
    };

    /**
     * 装饰类
     */
    scope.decorateClass = function (cls, traits) {
        for(var accessor in traits) {
            cls[accessor] = traits[accessor];
        }
        return cls;
    };

    /**
    * data:{
    *     method:DOMString,
    *     url:DOMString,
    *     asynic:boolean,
    *     dataType:DOMString,
    *     header:Object,
    *     data:DOMString/FormData,
    *     success:function,
    *     error:function
    * }
    */
    scope.ajax = function (data) {
        var method = data['method'] && data['method'].toLowerCase();
        if(method && method !== 'get' && method !== 'post') {
            throw new Error('Invalid ajax method');
        }

        var url = data['url'];
        if(url === undefined || typeof url !== 'string' || url === '') {
            throw new Error('Invalid ajax url');
        }

        var xhr;
        if(window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if(window.ActiveXObject) {
            try {
                xhr = new ActiveXObject("Msxml2.XMLHTTP");
            } catch(e) {
                try {
                    xhr = new ActiveXObject("Microsoft.XMLHTTP");
                } catch(e) {
                }
            }
        }

        if(xhr) {
            if(data['dataType'] && typeof data['dataType'] === 'string') {
                xhr.responseType = data['dataType'];
            }
            xhr.jajax = {};
            if(data['success'] && typeof data['success'] === 'function') {
                xhr.jajax['success'] = data['success'];
            }
            xhr.onreadystatechange = function (e) {
                if(this.readyState === 4) {
                    if(this.status === 200) {
                        if(this.responseType === '' || this.responseType === 'text') {
                            this.jajax['success'] && this.jajax['success'](this.response);
                        }
                    } else {
                        this.jajax['error'] && this.jajax['error'](this.statusText);
                    }
                }
            }
            method = method || 'get';
            var async = data['async'] || true;
            var sendData = data['data'] || null;
            xhr.open(method, url, async);
            if(data['header'] && Object.prototype.toString.call(data['header']) === '[object Object]') {
                var header = data['header'];
                for(var s in header) {
                    if(s.toLowerCase() === 'contenttype' && method === 'post') {
                        xhr.setRequestHeader('Content-Type', this.ajax['jajax']['contentType'][header[s]]);
                        break;
                    }
                    xhr.setRequestHeader(s, header[s]);
                }
            }
            if(sendData && Object.prototype.toString.call(sendData) === '[object Object]') {
                var dataArr = [];
                for(var s in sendData) {
                    if(sendData[s]) {
                        dataArr.push(s + '=' + sendData[s]);
                        continue;
                    }
                    dataArr.push(s);
                }
                sendData = dataArr.join('&');
            }
            xhr.send(sendData);
        }
    };
    /**
    * ajax静态属性
    */
    scope.ajax['jajax'] = {
        '__version': '0.1.0',
        'contentType': {
            'form': 'application/x-www-form-urlencoded; charset=utf-8',
            'json': 'application/json; charset=utf-8',
            'multipart': 'multipart/form-data; charset=utf-8'
        }
    };

    /**
    * 
    */
    scope.eventDispatcher['jevent'] = {
        '__version': 0.1.0'
    };
    scope.eventDispatcher = function () {

    };
    scope.eventDispatcher.prototype.addListener = function () {
        
    };
    scope.eventDispatcher.prototype.removeListener = function () {
        
    };
    scope.eventDispatcher.prototype.dispatchEvent = function () {
        
    };
    scope.eventDispatcher.prototype.hasEvent = function () {
        
    };
    scope.eventDispatcher['_listeners'] = {};
    scope.eventDispatcher['_targets'] = {};
    scope.eventDispatcher['_hasTarget'] = function (target) {
        var targets = scope.eventDispatcher['_targets'];
        for(var guid in targets) {
            if(targets[guid] === target) {
                return guid;
            }
        }
        return null;
    };
    scope.eventDispatcher['_addTarget'] = function (target) {
        var targetGuid = scope.eventDispatcher['_hasTarget'](target);
        var targets = scope.eventDispatcher['_targets'];
        if(!targetGuid) {
            var guid = scope.guid();
            targets[guid] = target;           
            return guid;
        } else {
            return targetGuid;
        }
    };
    scope.eventDispatcher['_removeTarget'] = function (target) {
        var targetGuid = scope.eventDispatcher['_hasTarget'](target);
        var targets = scope.eventDispatcher['_targets'];
        if(targetGuid) {
            delete targets[targetGuid];
            return true;
        }
        return false;
    };
    scope.eventDispatcher['addListener'] = function (target, type, listener, scope) {
        if(typeof type !== 'string') {
            throw new TypeError('listen type must be string');
        }
        if(typeof listener !== 'function') {
            throw new TypeError('listener must be function');
        }

        var targetGuid = scope.eventDispatcher['_hasTarget'](target);
        if(!targetGuid) {
            targetGuid = scope.eventDispatcher['_addTarget'](target);
        }
        var listeners = scope.eventDispatcher['_listeners'];
        if(!listeners[targetGuid]) {
            listeners[targetGuid] = {};
        }
        listener = scope === null ? listener : (function (event) {
            listener.call(scope, event);
        });
        if(!listeners[targetGuid][type]) {
            listeners[targetGuid][type] = [listener];
        } else {
            listeners[targetGuid][type].push(listener);
        }
        return listener;
    };
    scope.eventDispatcher['removeListener'] = function (target, type, listener, scope) {
        
    };
    scope.eventDispatcher['dispatchEvent'] = function (target, type, event) {
        
    };
    scope.eventDispatcher['hasEvent'] = function (target, type) {
        
    };
})(window.jutils || (window.jutils = {}));
