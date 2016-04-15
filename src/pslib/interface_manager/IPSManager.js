/*===================================================================
#    FileName: IPSManager.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2016-04-15 21:55
# Description: 发布者、订阅者管理者的抽象类
===================================================================*/

class IPSManager {

    /**
    * @description 发布者、订阅者管理者的抽象类
    * @constructor
    */
    constructor() {
    }

    /**
    * @description 注册一个订阅者
    * @public
    * @param {ISubscriber} subscriber 订阅者
    */
    registerSubscriber(subscriber) {
    }

    /**
    * @description 注册一个发布者
    * @public
    * @param {IPublisher} publisher 发布者
    */
    registerPublisher(publisher) {
    }
}

export default IPSManager;
