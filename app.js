const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
 const collegeRoutes = require('./routes/collegeRoute');
const displayRoutes =require('./routes/displayRoute');
const path= require('path');
const port =3000;
// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI ="mongodb+srv://Abhishek:Ak8756110@cluster0.etqko.mongodb.net/Du?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGODB_URI||dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

  
mongoose.connection.on('connected',()=>{
  console.log("mongooose cpnnected");
});

// register view engine
app.set('views','./views');
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static( path.join(__dirname,'public')));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
 
// routes




app.use('/',displayRoutes);
app.use('/server',collegeRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});


//step 3
if(process.env.NODE_ENV=='production'){

}
app.listen(port,console.log(`server is starting at ${port}`));