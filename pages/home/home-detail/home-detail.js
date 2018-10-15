// pages/home/home-detail/home-detail.js
Page({
    data: {

    },

    onLoad: function (option) {
        var hotId = option.hotId; 
        var topicId = option.topicId; 
        this.data.currentTopicId = topicId; 
        console.log(hotId)
        console.log(topicId)
    }
})