const express=require('express');
const pool=require('../pool');
var router=express();
//登录
router.get("/v1/login/:cname&:cpwd",function(req,res){
  var $cname=req.params.cname;
  var $cpwd=req.params.cpwd;
  
pool.query('SELECT cname,cpwd FROM cat_user_login WHERE cname=? AND cpwd=?',[$cname,$cpwd],function(err,result){
  if(err) throw err;
  if(result.length>0){
  res.send("1");
  }else{
  res.send("0");
  }
});
});
//注册
  router.post("/v1/reg/",function(req,res){
   var obj=req.body;
   console.log("1111");
   var sql='insert into cat_user_login set ?'
   pool.query(sql,[obj],function(err,result){
     if(err) throw err;
	 if(result.affectedRows>0){
	   res.send("1");
	   return;
	 }else{
	   res.send("0");
	   return;
	 }
   })
  })
	   //查询用户名
   router.get("/v1/reg_cname/:cname",function(req,res){
     var $cname=req.params.cname;
	 var sql="select cname from cat_user_login where cname=?"
	 pool.query(sql,[$cname],function(err,result){
	   if(err)throw err;
	   if(result.length>0){
	   res.send("1")
	   }else{
	   res.send("0")
	   }
	 })
   })
		 //用户修改
    router.get("/v1/update/:cid",function(req,res){
	  var $cid=req.params.cid;
	  
	  var sql="select * from cat_user_login where cid=?"
	  pool.query(sql,[$cid],function(err,result){
	  if(err)throw err;
	  if(result.length>0){
	    res.send("1");
	  }else{
	    res.send("0");
	  }
	  })
	})

 module.exports=router;