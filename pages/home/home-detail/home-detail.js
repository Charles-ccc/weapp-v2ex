let util = require('../../../utils/util.js');
let WxParse = require('../../../wxParse/wxParse.js');

Page({
    data: {

    },

    onLoad: function (option) {
        var hotId = option.hotId; 
        this.data.currentTopicId = hotId;
        
        let topicUrl = "https://www.v2ex.com/api/topics/show.json?id=" + hotId
        let replyUrl = "https://www.v2ex.com/api/replies/show.json?topic_id=" + hotId
        util.http(topicUrl, this.processTopicData)
        util.http(replyUrl, this.processReplyData)
    },
    processTopicData(topicData) {
        topicData[0].created = util.formatMsgTime(topicData[0].created)
        topicData[0].last_touched = util.formatUnixtimestamp(topicData[0].last_touched)
        let content = topicData[0].content_rendered
        WxParse.wxParse('content', 'html', content, this, 0);
        this.setData({
            topicData: topicData
        })
    },
    processReplyData(replyData) {
        console.log(replyData)
        for (let i = 0; i < replyData.length; i++) {
            replyData[i].last_modified = util.formatMsgTime(replyData[i].last_modified)
            let content = replyData[i].content_rendered
            WxParse.wxParse('reply-content', 'html', content, this, 0);
        }
        this.setData({
            replyData: replyData
        })
    }
})