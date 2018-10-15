// pages/home/home.js
let util = require('../../utils/util.js');

Page({
    data: {
        
    },
    onLoad: function (options) {
        // let hotUrl = 'https://www.v2ex.com/api/topics/hot.json'
        let hotUrl = 'https://www.v2ex.com/api/topics/latest.json'
        util.http(hotUrl, this.processHotData)
    },
    processHotData(hotData) {
        console.log(hotData)
        for(let i=0; i<hotData.length; i++) {
        hotData[i].last_modified = util.formatMsgTime(hotData[i].last_modified)
        }
        this.setData({
            hotData: hotData
        })
    },
    onHometap(event) {
        var hotId = event.currentTarget.dataset.hotid;
        var topicId = event.currentTarget.dataset.topicid;
         // event 事件对象； currentTarget 当前鼠标点击对象； dataset 所有自定义属性的集合
        wx.navigateTo({
            // 与原生的页面跳转一致，url后跟随参数跳转
            url: "home-detail/home-detail?hotId=" + hotId +"&topicId=" + topicId
        })
    }
})