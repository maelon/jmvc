/*===================================================================
#    FileName: Subscriber.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2016-11-11 14:41
# Description: 订阅者的实现类
===================================================================*/

import ISubscriber from 'pslib/interface_ps/ISubscriber';
import Notifation from 'pslib/ps/Notifation';

/**
* @extends ISubscriber
*/
class Subscriber extends ISubscriber {

    /**
    * @description 订阅者的实现类
    * @constructor
    */
    constructor() {
        this._method = null;
        this._context = null;
    }

    /**
    * @description 设置订阅通知的回调方法
    * @public
    * @param {Function} method 通知回调的方法
    */
    set notifyMethod(method) {
        if(method && typeof method === 'function') {
            this._method = method;
        }
    }

    /**
    * @description 设置订阅通知的回调方法上下文
    * @public
    * @param {Object} context 回调方法上下文
    */
    set notifyContext(context) {
        if(method && typeof method === 'object') {
            this._method = method;
        }
    }

    /**
    * @description 通知订阅者
    * @public
    * @param {INotifation} notification 通知对象
    */
    notify(notification) {
        if(notification instanceof Notification && this._method) {
            this._method.call(this._context, notification);
        }
    }
}

export default Subscriber;
