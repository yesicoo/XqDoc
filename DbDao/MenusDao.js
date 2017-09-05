// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../db/DBConfig');
var menuSql = require('../db/MenuSql');
// 使用DBConfig.js的配置信息创建一个MySQL连接池
var pool = mysql.createPool( dbConfig.mysql );

// 响应一个JSON数据
var jsonWrite = function (res, ret) {
    if(typeof ret === 'undefined') {
      return  res.json({
            code:'-200',
            msg: '操作失败'
        });
    } else {
      return  res.json(ret);
    }};
module.exports={
    allMenus:function () {
        pool.getConnection(function (err,connection) {
            connection.query(menuSql.queryAll,function (err,result) {
                connection.release();
               console.log(result);
            })
        })
    }
}