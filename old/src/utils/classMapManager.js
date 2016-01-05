/*===================================================================
#    FileName: classMapManager.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2015-08-31 17:09
      Version: 0.0.1
===================================================================*/

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
