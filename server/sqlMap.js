/*
* sqlMap.js - SQL语句映射文件，供API调用
* */
// sql语句
var sqlMap = {
  // 用户
  user: {
    add: 'insert into user(id, name, age) values (0, ?, ?)'
  }
}

module.exports = sqlMap;
