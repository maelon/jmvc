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
    constructor(name) {
    }

    get notificationName() {
    }

    /**
    * @description 查询是否有订阅者
    * @public
    * @param {ISsubscriber} subscriber 订阅者
    */
    hasSubscriber(subscriber) {
    }

    /**
    * @description 添加针对通知名的订阅者
    * @public
    * @param {ISsubscriber} subscriber 订阅者
    */
    addSubscriber(subscriber) {
    }

    /**
    * @description 删除订阅者
    * @public
    * @param {ISsubscriber} subscriber 订阅者
    */
    removeSubscriber(subscriber) {
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
