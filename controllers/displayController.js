const college = require('../models/college-data');
const basic=college.Colleges;
const cutoff=college.cutoff;
const fees=college.Fees;
const list=college.List;
var college_id;
var data;
var async = require('async');




















const show_home=(req,res)=>{
        res.render('displayview/home/index.ejs');
}

const show_list=(req,res)=>{
        list.find().then(result => {
                console.log(result.Name);
                res.render('displayview/home/list.ejs', { blogs: result });
              })
        
}
const show_details=(req, res)=>{
        var locals={};
        college_id = req.params.name;
        async.parallel([
                function(callback){
                        basic.find({college_id :college_id},function(err,details){
                                if(err)return callback(err);
                                
                                locals.first=details;
                                callback();
                        });

                },
               

                function(callback){
                        fees.find({college_id :college_id},function(err,details){
                                if(err)return callback(err);
                                locals.fees=details;
                                callback();
                        });
                },
                function(callback){
                        cutoff.find({name:college_id},function(err,details){
                                if(err)return callback(err);
                                locals.cutoff=details;
                                callback();
                        });
                },
        ],
        function(err){
                if(err)return next(err);
                
                res.render('displayview/home/details.ejs', { info: locals.first, structs:locals.fees});

                
        
        
         });
        
                
       

       
               
           
      
}
const cutoff_show=(req, res)=>{        

        var locals={};        
        college_id = req.params.name;
               
        
        async.parallel([
                function(callback){
                        basic.find({college_id :college_id},function(err,details){
                                if(err)return callback(err);
                                
                                locals.first=details;
                                callback();
                        });

                },
                function(callback){
                        cutoff.find({college_id :college_id, year:req.body.year,Category:req.body.Category},function(err,details){
                                if(err)return callback(err);
                                locals.cutoff=details;
                                callback();
                        });
                },
        ],
        function(err){
                if(err)return next(err);
                console.log(locals.cutoff);
                res.render('displayview/home/cut-off.ejs', { info: locals.first, structs:locals.cutoff});

                
        
        
         });
        
}


module.exports = {
        show_home,
        show_list,
        show_details,
        cutoff_show,
        
        

      }   