//index.js
//获取应用实例
const app = getApp()
var base64 = require("../images/base64");
Page({
    data: {
       
    },
    //事件处理函数
    bindViewTap: function() {
        wx.navigateTo({
			url: 'skillGemList'
        })
    },
    onLoad: function() {
		this.setData({
			icon: base64.icon20
		});
    }
})