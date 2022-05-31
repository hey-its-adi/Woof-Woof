const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const cors = require('cors')

const app= express()
const port = process.env.PORT || 8000
app.use(cors({
    origin: 'http://localhost:3000'
}))

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

console.log(`hello`)

const pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'WoofDB'
})

/*app.post('/:id', (req,res) => {
    console.log(req.params)
   
    pool.getConnection((err,connection) => {
        if(err) throw err
        console.log(`connected as id ${connection.threadId}`)
        connection.query('SELECT * FROM users WHERE u_id = ?',[req.params.id], (err,rows) => {
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
*/

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
app.listen(port, () => {
    console.log("Server started running")
})