/*===================================================================
#    FileName: INotification.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2016-04-14 11:14
# Description: 通知抽象类
===================================================================*/

class INotification {

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

export default INotification;
