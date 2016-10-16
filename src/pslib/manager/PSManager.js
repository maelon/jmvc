/*===================================================================
#    FileName: PSManager.js
#      Author: Maelon.J
#       Email: maelon.j@gmail.com
#  CreateTime: 2016-04-15 22:29
# Description: 发布者、订阅者的实现类
===================================================================*/

import IPSManager from './pslib/interface_manager/IPSManager.js';

/**
* @extends IPSManager
*/
class PSManager extends IPSManager {

    /**
    * @description 发布者、订阅者管理者的实现类
    * @constructor
    */
    constructor() {
    }

    /**
    * @description 注册一个订阅者
    * @public
    * @param {Subscriber} subscriber 订阅者
    */
    registerSubscriber(subscriber) {
    }

    /**
    * @description 注册一个发布者
    * @public
    * @param {Publisher} publisher 发布者
    */
    registerPublisher(publisher) {
    }
}

export default PSManager;
