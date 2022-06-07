const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('promise-mysql')
const cors = require('cors')

const multer =require("multer")
const app= express()
const port = process.env.PORT || 8000
// const upload= multer({storage:multer.memoryStorage({})})
const storage= multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'./public/images')
    },
    filename:(req,file,cb)=>{
      cb(null,new Date().toISOString().replace(/:/g, '-')+file.originalname)
    }
  })
  const upload=multer({
    storage:storage,
    // dest: './public/images'
  })
app.use(express.static('./public/images'))
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

console.log(`hello`)

let pool;
const connectDB = async () => {
    pool = await mysql.createPool({
        connectionLimit : 10,
        host : 'localhost',
        user : 'root',
        password : '',
        database : 'WoofDB'
    })
}
connectDB();


app.post('/signup', (req,res) => {
    const input = req.body;

   
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        connection.query(`INSERT INTO users (name,email,phone,password,address,type) VALUES('${input.Name}','${input.Email}','${input.Phone}','${input.Password}','${input.Address}','${input.UserType}')`,(err,rows) => {
            connection.release() 

            if(!err)
            {
                res.send(rows)
           
            }
            else
            {
                console.log(err)
            } 
        })
    })

})

app.post('/login', async (req,res) => {
    const input2 = req.body;

    let result1 = [];
    
    try {
        const connection =  await pool.getConnection();
        if(!connection) {
            return res.status(500).json({message: "DB connect fail"});
        }
        
        const result =  await connection.query(`SELECT password FROM users WHERE email='${input2.email}'`);
        result1 = await connection.query(`SELECT name FROM users WHERE email='${input2.email}'`)
        if(!result || result.length == 0) {
            return res.status(500).json({message: "no result"});
        }
        if(!result1 || result1.length == 0) {
            return res.status(500).json({message: "no result"});
        }

        if(result[0].password !== input2.password) {
            return res.status(401).json({message: "unauthorized"});
        }

    } catch(err) {
        console.log(err);

    }

    return res.status(200).json({result1});

})

app.post('/Upload',upload.single('Pic'), async (req,res) => {
 

    const image= req.file.path;
    const input3 = req.body;
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        connection.query(`INSERT INTO animals (name,user,location,phone,vaccine,fname) VALUES('${input3.name}','${input3.uname}','${input3.location}','${input3.phone}','${input3.vaccination}','${image}')`,(err,rows) => {
            connection.release() 

            if(!err)
            {
                res.send(rows)
           
            }
            else
            {
                console.log(err)
            } 
        })
    })


})

app.get('/Dashboard', async (req,res) => {

    let result = [];
    try {
        const connection =  await pool.getConnection();
        if(!connection) {
            return res.status(500).json({message: "DB connect fail"});
        }
        
        result =  await connection.query(`SELECT * FROM animals`);
       
        if(!result || result.length == 0) {
            return res.status(500).json({message: "no result"});
        }
    } catch(err) {
        console.log(err);

    }

    return res.status(200).json({result});

})

app.post('/Profile', async (req,res) => {
    
    const uinput = req.body
    let result = [];
    let result1 = [];
    let result2 = [];

    try {
        const connection =  await pool.getConnection();
        if(!connection) {
            return res.status(500).json({message: "DB connect fail"});
        }
        
        result =  await connection.query(`SELECT * FROM animals WHERE user='${uinput.uname}'`);
        result1 = await connection.query(`SELECT * FROM adopters WHERE user='${uinput.uname}'`)
        result2 = await connection.query(`SELECT * FROM fosters WHERE user='${uinput.uname}'`)
        if(!result) {
            return res.status(500).json({message: "no result"});
        }
        if(!result1) {
            return res.status(500).json({message: "no result"});
        }
        if(!result2) {
            return res.status(500).json({message: "no result"});
        }
    } catch(err) {
        console.log(err);

    }

    return res.status(200).json({result,result1,result2});

})

app.post('/AdopterPop', async (req,res) => {
    
    const ainput = req.body
    const status =req.body.Status
    try {
        const connection =  await pool.getConnection();
        if(!connection) {
            return res.status(500).json({message: "DB connect fail"});
        }
        if( status == 'Adopt'){
            
            result1 =  await connection.query(`INSERT INTO adopters (a_id,adname,adphone,user,fname) VALUES('${ainput.Aid}','${ainput.Auser}','${ainput.Phone}','${ainput.User}','${ainput.Fname}')`);
        }
        else{
            result1 =  await connection.query(`INSERT INTO fosters (a_id,fosname,fosphone,user,fname) VALUES('${ainput.Aid}','${ainput.Auser}','${ainput.Phone}','${ainput.User}','${ainput.Fname}')`);
        }

    } catch(err) {
        console.log(err);

    }

return res.status(200).json({message: "Success" });

})

app.get('/Achievements', async (req,res) => {
    
    let result = [];
    let result1=[];
    let acount=0;
    let fcount=0;
    try {
        const connection =  await pool.getConnection();
        if(!connection) {
            return res.status(500).json({message: "DB connect fail"});
        }
        
        result =  await connection.query(`SELECT * FROM adopters`);
        result1 = await connection.query(`SELECT * FROM fosters`) 
        acount =  await connection.query(`SELECT COUNT(*) as acount FROM adopters`);
        fcount =  await connection.query(`SELECT COUNT(*) as fcount FROM fosters`);

        if(!result ) {
            return res.status(500).json({message: "no result"});
        }
        if(!result1) {
            return res.status(500).json({message: "no result"});
        }
        if(!acount)
        {
            return res.status(500).json({message: "no result"});
        }
        if(!fcount)
        {
            return res.status(500).json({message: "no result"});
        }
    } catch(err) {
        console.log(err);

    }

    return res.status(200).json({result,result1,fcount,acount});

})


function setValue(value) {
    someVar = value;
   // console.log(someVar);
  }
app.listen(port, () => {
    console.log("Server started running")
})