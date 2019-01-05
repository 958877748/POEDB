const db = require('./utils/database.js')
const util = require('./utils/util.js')
//app.js
App({
    onLaunch: function() {
		//let canvas = wx.createCanvasContext('canvas', this)
		
		// 展示本地存储能力
        var logs = wx.getStorageSync('logs') || []
		// 加入一个新日期到 logs 数组第一位
        logs.unshift(Date.now())
		// 存入 logs
        wx.setStorageSync('logs', logs)

        // 登录
		let loginPar = {}
		loginPar.success = loginSuccess
		wx.login(loginPar)

        // 获取用户信息
		let getSettingPar = {}
		getSettingPar.success = getSettingSuccess
		wx.getSetting(getSettingPar)

		// let data = {}
		// data.name = '小磊'
		// data.sex = '男'
		// data.desc = '开发人员'
		// db.add('userInfo1', data, dbAddSuccess)
    },
    globalData: {
        userInfo: null
    }
})

function dbAddSuccess(res){
	util.show('数据插入成功')
}

function loginSuccess(res){
	// 发送 res.code 到后台换取 openId, sessionKey, unionId
	console.log(res)
}

function getSettingSuccess(res){
	// 如果没授权就返回
	if (!res.authSetting['scope.userInfo']) return
	// 已经授权，直接调用 getUserInfo 获取头像昵称
	let getUserInfoPar = {}
	getUserInfoPar.success = getUserInfoSuccess
	wx.getUserInfo(getUserInfoPar)
}

function getUserInfoSuccess(res){
	// 可以将 res 发送给后台解码出 unionId
	this.globalData.userInfo = res.userInfo

	// 由于 getUserInfo 是网络请求，可能会在 
	// Page.onLoad 之后才返回
	// 所以此处加入 callback 以防止这种情况
	if (this.userInfoReadyCallback) {
		this.userInfoReadyCallback(res)
	}
}