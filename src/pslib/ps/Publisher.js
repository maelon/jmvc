/*===================================================================
#    FileName: Publisher.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2016-11-11 15:03
# Description: 发布者的实现类
===================================================================*/
import IPublisher from 'pslib/interface_ps/IPublisher';

/**
* @extends IPublisher
*/

class Publisher extends IPublisher {

    /**
    * @description 发布者的实现类
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

export default Publisher;
