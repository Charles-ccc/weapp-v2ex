// 注意，一定要有callBack
function http(url, callBack) {
  wx.request({
    url: url,
    method: 'GET',
    header: {
      'Content-Type': 'json'
    },
    success(res) {
      callBack(res.data)

    },
    fail(error) {
      console.log(error)
    }
  })
}

// 时间戳转多少分钟 小时前
function formatMsgTime(date) {
  //获取js 时间戳
  var time = new Date().getTime();
  //去掉 js 时间戳后三位，与php 时间戳保持一致
  time = parseInt((time - date * 1000) / 1000);

  //存储转换值 
  var s;
  if (time < 60 * 10) { //十分钟内
    return '刚刚';
  } else if ((time < 60 * 60) && (time >= 60 * 10)) {
    //超过十分钟少于1小时
    s = Math.floor(time / 60);
    return s + "分钟前";
  } else if ((time < 60 * 60 * 24) && (time >= 60 * 60)) {
    //超过1小时少于24小时
    s = Math.floor(time / 60 / 60);
    return s + "小时前";
  } else if ((time < 60 * 60 * 24 * 3) && (time >= 60 * 60 * 24)) {
    //超过1天少于3天内
    s = Math.floor(time / 60 / 60 / 24);
    return s + "天前";
  } else {
    //超过3天
    var date = new Date(parseInt(date) * 1000);
    return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
  }
}

// 时间戳转时间格式
function formatUnixtimestamp(unixtimestamp) {
    var unixtimestamp = new Date(unixtimestamp * 1000);
    var year = 1900 + unixtimestamp.getYear();
    var month = "0" + (unixtimestamp.getMonth() + 1);
    var date = "0" + unixtimestamp.getDate();
    var hour = "0" + unixtimestamp.getHours();
    var minute = "0" + unixtimestamp.getMinutes();
    var second = "0" + unixtimestamp.getSeconds();
    return year + "-" + month.substring(month.length - 2, month.length) + "-" + date.substring(date.length - 2, date.length) +
        " " + hour.substring(hour.length - 2, hour.length) + ":" +
        minute.substring(minute.length - 2, minute.length) + ":" +
        second.substring(second.length - 2, second.length);
}
module.exports = {
  http: http,
  formatMsgTime: formatMsgTime,
  formatUnixtimestamp: formatUnixtimestamp
}
