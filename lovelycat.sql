SET NAMES UTF8;
DROP DATABASE IF EXISTS lovelycat;
CREATE DATABASE lovelycat CHARSET=UTF8;
USE lovelycat;
CREATE TABLE cat_user_login(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  cname VARCHAR(32),
  cpwd VARCHAR(32),
  phone VARCHAR(11) UNIQUE,
  email VARCHAR(50),
  gender BOOL
);
INSERT INTO cat_user_login VALUES('1','郑倩倩','123456','18837517130','332747847@qq.com','m');
INSERT INTO cat_user_login VALUES(null,'周杰伦','123456','18837517131','332747846@qq.com','m');
INSERT INTO cat_user_login VALUES(null,'蔡健雅','123456','18837517132','332747845@qq.com','m');
INSERT INTO cat_user_login VALUES(null,'蔡依林','123456','18837517135','332747843@qq.com','m');