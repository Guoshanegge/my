const express=require('express');
const pool=require('../pool');
var router=express();
router.get("/login",function(req,res){
  var $cname=req.query.cname;
  var $cpwd=req.query.cpwd;
  var $upwd=req.query.upwd;
  var $phone=req.query.phone;
  var $email=req.query.email;
  if(!$cname){
    res.send("用户名不存在");
	return;
  }if(!$cpwd){
    res.send("密码不存在");
	return;
  
  }if(!$phone){
    res.send("电话号不存在");
	return;
  }if(!$email){
    res.send("邮箱不存在不存在");
	return;
  }
pool.query('SELECT cname,cpwd,phone,email FROM lovelycat WHERE cname=? AND cpwd=? AND phone=? AND email=?',[$cname,$cpwd,$phone,$email],function(err,result){
  if(err) throw err;
  if(result.length>0){
  res.send("1");
  }else{
  res.send("0");
  }
});
})
 module.exports=router;