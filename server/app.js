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

app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.urlencoded({extended:false}))
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
    console.log(input);
   
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
    console.log(input2);
    
    try {
        const connection =  await pool.getConnection();
        if(!connection) {
            return res.status(500).json({message: "DB connect fail"});
        }
        
        const result =  await connection.query(`SELECT password FROM users WHERE email='${input2.email}'`);
        if(!result || result.length == 0) {
            return res.status(500).json({message: "no result"});
        }

        console.log(result[0].password)
        if(result[0].password !== input2.password) {
            return res.status(401).json({message: "unauthorized"});
        }

    } catch(err) {
        console.log(err);

    }

    return res.status(200).json({message: "logged in"});

})

app.post('/Upload',upload.single('Pic'), async (req,res) => {
 
    console.log(req.file)
    const image= req.file.path;
    const input3 = req.body;
    console.log(input3);
   
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        connection.query(`INSERT INTO animals (name,location,phone,vaccine,fname) VALUES('${input3.name}','${input3.location}','${input3.phone}','${input3.vaccination}','${image}')`,(err,rows) => {
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
function setValue(value) {
    someVar = value;
   // console.log(someVar);
  }
app.listen(port, () => {
    console.log("Server started running")
})