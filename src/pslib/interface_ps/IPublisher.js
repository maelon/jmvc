/*===================================================================
#    FileName: IPublisher.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2016-04-13 21:42
# Description: 发布者的抽象类
===================================================================*/

class IPublisher {

    /**
    * @description 发布者的抽象类
    * @constructor
    */
    constructor() {
    }

    /**
    * @description 发布者发送消息
    * @public
    * @param {String} name 通知名
    * @param {Object} body 通知体
    * @param {String} type 通知类型
    */
    sendNotification(name, body, type) {
    }
}

export default IPublisher;
