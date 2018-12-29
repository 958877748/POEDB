// pages/skillInfo.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		bstb:"http://poe.game.qq.com/image/Art/2DItems/Gems/Support/AddedFireDamage.png?scale=1",
		zwm:"附加火焰伤害(辅)",
		ts:"这是一颗辅助宝石。它并不会为你的角色增加属性数值, 但会强化与其连接的技能宝石。将其放置于物品上同样颜色的插槽并连接想要强化的技能宝石。点击右键从插槽中移除。",
		ywm:"Added Fire Damage Support"
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		//拿到参数里的名称
		this.setData(options)
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function () {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function () {

	}
})