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
    * @param {String} name 通知名
    */
    constructor(name = '') {
        this._name = name;
        this._subscribers = [];
    }

    get notificationName() {
        return this._name;
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
    * @param {Object} body 通知体
    * @param {String} type 通知类型
    */
    sendNotification(body, type) {
    }
}

export default Publisher;
