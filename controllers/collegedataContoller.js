const college = require('../models/college-data');
const basic=college.Colleges;

const cutoff=college.cutoff;
const fees=college.Fees;
var college_id;


/* college create */
const baisc_get = (req, res) => {
        res.render('collegeview/college/create.ejs', { title: 'Create a new college' });
      }

      /* form submit college */
const basic_post = (req, res) => {
  const blog = new basic(req.body);
  console.log(blog);
  blog.save()
    .then(result => {
      res.redirect('/');
    })
    .catch(err => {
      console.log(err);
    });
      
          
      }

  /*display list */    
  const show_list=(req, res)=>{
    basic.find().sort({ createdAt: -1 }).then(result => {
      console.log(result.name);
      res.render('collegeview/college/index', { blogs: result, title: 'All college' });
    })
    .catch(err => {
      console.log(err);
    });
      }



/*******filling  course form  */  
 



/****************cut-off form */ 
const cut_off_create=(req, res)=>{
  college_id = req.params.name;
  req.body.name=college_id;
 
    res.render('collegeview/cut-off/create', {  title:'Create a cut-off'  });
 



};  

/***filling the cut-off form */
 
const cut_off_form=(req, res)=>{

  req.body.name=college_id;
    const temp = new cutoff(req.body);
    console.log(temp);
    temp.save()
      .then(result => {
        res.redirect('/server/list');
      })
      .catch(err => {
        console.log(err);
      });
  
  }   


/****fees form */

const fees_create=(req, res)=>{
  college_id = req.params.name;
  
 
    res.render('collegeview/fees/create', {  title:'Create a fees'  });
 



};  
/****form filing */


const fees_form=(req, res)=>{
  
  req.body.name=college_id; 
  const temp = new fees(req.body);
    console.log(temp);
    temp.save()
      .then(result => {
        res.redirect('/server/list');
      })
      .catch(err => {
        console.log(err);
      });
  
  } 


module.exports = {
        
        baisc_get, 
        basic_post,
        show_list,
       
        
        cut_off_create,
        cut_off_form,
        fees_create,
        fees_form

      }      