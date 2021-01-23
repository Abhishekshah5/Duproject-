const { text } = require('express');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*****
 * 
 * basic data 
 */



 const collegeSchema= new Schema({

       college_id:String,
       Name:String,
       description:String,
       basic_info:{
               campus:String,
               address:String,
               established:String,
               website:String,
               also:String,
               affilated:String
       },
       process:{
               details:String,
               link:String

       },
       courseoffered:{
               science:Array,
               commerce:Array,
               arts:Array
       },
       ranking:{
               nirf:String,
               naacs:String
       },
       cutoff_link:String,
       fees_link:String,
       cutoff_des:String,
    fees_des:String



 }, { timestamps: true }
 );







const fessSchema=new Schema({
        college_id:String,
        
        category:String,
        year:Number,
        course:String,
        amount:String,
        
},{ timestamps: true });


/************cut-off----- */
const cutoffSchema= new Schema({
        college_id:String,
        stream:String,
        Category:String,
        round:Number,
        Course:String,
        marks:Number,
        year:Number

});
/******************fees  */

const listSchema=new Schema({
        Name:String,       
        campus:String,
        description:String,
        college_id:String

},{ timestamps: true });


 const Colleges = mongoose.model('college', collegeSchema);
 
 const Fees=mongoose.model('fees',fessSchema);
 const cutoff=mongoose.model('cutoff',cutoffSchema);
 const List=mongoose.model('list',listSchema);
 module.exports = {
        Colleges,
       
        Fees,
        cutoff,
        List
        
}