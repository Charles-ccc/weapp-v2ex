// pages/home/home.js
let util = require('../../utils/util.js');

Page({
  data: {
    
  },

  onLoad: function (options) {
    let hotUrl = 'https://www.v2ex.com/api/topics/hot.json'
    this.getHotData(hotUrl)
  },

  getHotData(hotUrl) {
    var that = this;
    wx.request({
      url: hotUrl,
      method: 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success(res) {
        that.processHotData(res.data);
      },
      fail(error) {
        console.log(error)
      }
    })
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

  onPullDownRefresh: function () {
  
  },

  onReachBottom: function () {
  
  }
})