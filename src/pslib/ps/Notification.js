/*===================================================================
#    FileName: Notification.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2016-04-15 22:38
# Description: 通知类的实现类
===================================================================*/

import INotification from 'pslib/interface_ps/INotification';

class Notification extends INotification {

    /**
    * @description 通知抽象类
    * @constructor
    */
    constructor() {
    }

    /**
    * @description 通知名
    * @public
    * @return {String}
    */
    get name() {
    }

    /**
    * @description 通知体
    * @public
    * @return {Object}
    */
    get body() {
    }

    /**
    * @description 通知类型
    * @public
    * @return {String}
    */
    get type() {
    }
}

export default Notification;
