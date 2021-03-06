const express = require('express');
const router =  express.Router();
const https = require('https');

router.get('/',(req,res,next)=>{
    let url = "https://bangumi.bilibili.com/api/season/rank/list?day=3&season_type=1";
    httpsGet(url,(data)=>{
        res.render('ranking_bangumi',{msg:data.result.list,hasClass:["","","active","",""]});
    });
});

function httpsGet(url,callback){
    https.get(url,(res)=>{
        let result = "";
        res.on('data',chunk=>{
            result+=chunk;
        });
        res.on('end',()=>{
            callback(JSON.parse(result));
        })
    });
}




module.exports = router;