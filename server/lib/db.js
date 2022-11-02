const mysql = require("mysql");
const config = require("../config/default");

const db = mysql.createConnection({
  host: config.database.HOST,
  user: config.database.USER,
  password: config.database.PASSWORD,
});
const pool = mysql.createPool({
  host: config.database.HOST,
  user: config.database.USER,
  password: config.database.PASSWORD,
  database: config.database.WEIGUANG,
});

let bdbs = (sql, values) => {
  return new Promise((resolve, reject) => {
    db.query(sql, values, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

let query = (sql, values) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        rejrct(err);
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
          }
          connection.release();
        });
      }
    });
  });
};
// 创建数据库
let weiGuang = `create database if not exists weiguang default charset utf8 collate utf8_general_ci;`;
let createDatabase = (db) => {
  return bdbs(db, []);
};
// 创建数据表
let walls = `create table if not exists walls(
    id INT NOT NULL AUTO_INCREMENT,
    type INT NOT NULL COMMENT '类型 0:文字 1:图片', 
    message VARCHAR(1000) COMMENT '留言',
    name VARCHAR(100) NOT NULL COMMENT '用户名',
    userId VARCHAR(100) NOT NULL COMMENT '创建者ID',
    moment VARCHAR(100）NOT NULL COMMENT '时间',
    label INT NOT NULL COMMENT '标签',
    color INT NOT NULL COMMENT '颜色',
    imgurl VARCHAR(100) COMMENT '图片路径',
    PRIMARY KEY (id)
)`;

let feedbacks = `create table if not exists feedbacks(
    id INT NOT NULL AUTO_INCREMENT,
    wallId INT NOT NULL COMMENT '墙留言ID',
    userId VARCHAR(100) NOT NULL COMMENT '反馈者ID',
    type INT NOT NULL COMMENT '反馈类型0喜欢1举报2撤销',
    moment VARCHAR(100) NOT NULL COMMENT '时间',
    PRIMARY KEY (id)
    );
    `;

let comments = `create table if not exists comments(
    id INT NOT NULL AUTO_INCREMENT,
    wallId INT NOT NULL COMMENT '墙留言ID',
    userId VARCHAR(100) NOT NULL COMMENT '评论者ID',
    imgurl VARCHAR(100) COMMENT '头像路径',
    comment VARCHAR(100) COMMENT '评论内容',
    name VARCHAR(100) NOT NULL COMMENT '用户名',
    moment VARCHAR(100) NOT NULL COMMENT '时间',
    PRIMARY KEY (id)
    );`;

let createTable = (sql) => {
  return query(sql, []);
};

async function create() {
  await createDatabase(weiGuang);
  createTable(walls);
  createTable(feedbacks);
  createTable(comments);
}

// create();

exports.insertWall = (value) => {
  let _sql =
    "insert into walls set message=?,name=?,userId=?,moment=?,label=?,color=?";
  return query(_sql, value);
};
