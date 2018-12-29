const util = require('./util.js')

//在小程序端开始使用云能力前，需先初始化
let cloudInitPar = {}
//环境 ID 可以指定所有服务的默认环境
cloudInitPar.env = 'test-b936c2'
//是否在将用户访问记录到用户管理中
cloudInitPar.traceUser = true
//初始化云
wx.cloud.init()

//在开始使用数据库 API 进行增删改查操作之前
//需要先获取数据库的引用
const db = wx.cloud.database()

//要操作一个集合，需先获取它的引用
//获取集合的引用并不会发起网络请求取拉取它的数据，
//我们可以通过此引用在该集合上进行增删查改的操作，
//除此之外，还可以通过集合上的 doc 方法来获取集合
//中一个指定 ID 的记录的引用。同理，记录的引用可
//以用于对特定记录进行更新和删除操作。
//const todos = db.collection('todos')

//假设我们有一个待办事项的 ID 为
// todo - identifiant - aleatoire
//那么我们可以通过 doc 方法获取它的引用：
//const todo =todos.doc('todo-identifiant-aleatoire')

/**
 * 添加数据到数据库的某集合中
 * @param {string} collectionName
 * @param {object} data
 * @param {function} success 回调参数:新增的记录的 ID
 */
function add(collectionName,data,success){
	let par = {}
	par.data = data
	par.success = success
	par.fail = res =>{
		util.show(res)
		//par.success(res)
	}
	db.collection(collectionName).add(par)
}

//模块导出
module.exports = {
	add: add
}