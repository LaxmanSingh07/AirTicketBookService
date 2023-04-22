const express=require('express');
const bodyParser=require('body-parser');
const {PORT}=require('./config/serverConfig')
const app=express();
const db=require('./models/index')

const apiRoutes=require('./routes/index')

const setUpAndStartServer=()=>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use('/api',apiRoutes);

    app.listen(PORT,()=>{
        console.log(`Server start at PORT ON ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter:true});
        }
    })
}

setUpAndStartServer();