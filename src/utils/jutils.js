/*===================================================================
#    FileName: jutils.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2015-06-29 17:46
#  © Copyright 2015 maelon. All Rights Reserved.
===================================================================*/

(function (scope) {

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
})(window.jutils || (window.jutils = {}));


