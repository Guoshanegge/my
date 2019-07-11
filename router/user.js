const express=require('express');
const pool=require('../pool');
var router=express();
router.get("/login/:cname&:cpwd&:phone&:email",function(req,res){
  var $cname=req.params.cname;
  var $cpwd=req.params.cpwd;
  var $phone=req.params.phone;
  var $email=req.params.email;
  
pool.query('SELECT cname,cpwd,phone,email FROM cat_user_login WHERE cname=? AND cpwd=? AND phone=? AND email=?',[$cname,$cpwd,$phone,$email],function(err,result){
  if(err) throw err;
  if(result.length>0){
  res.send("1");
  }else{
  res.send("0");
  }
});
})
 module.exports=router;