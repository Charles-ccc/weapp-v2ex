
Page({
    data: {
        select: 9
    },
    onLoad: function (options) {
    
    },
    onNodeTap(e) {
        var that = this;
        var selectId = e.currentTarget.id
        that.setData({
            select: selectId
        })
    }
})