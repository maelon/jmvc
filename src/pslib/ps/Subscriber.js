/*===================================================================
#    FileName: Subscriber.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2016-11-11 14:41
# Description: 订阅者的实现类
===================================================================*/

import ISubscriber from 'pslib/interface_ps/ISubscriber';

/**
* @extends ISubscriber
*/
class Subscriber extends ISubscriber {

    /**
    * @description 订阅者的实现类
    * @constructor
    */
    constructor() {
    }

    /**
    * @description 设置订阅通知的回调方法
    * @public
    * @param {Function} method 通知回调的方法
    */
    set notifyMethod(method) {
    }

    /**
    * @description 设置订阅通知的回调方法上下文
    * @public
    * @param {Object} context 回调方法上下文
    */
    set notifyContext(context) {
    }

    /**
    * @description 通知订阅者
    * @public
    * @param {INotifation} notification 通知对象
    */
    notify(notification) {
    }
}

export default Subscriber;
