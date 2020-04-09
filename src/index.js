import app from './app';
const port = 3000


async function main() {
    await app.listen(port, () => {
        console.log(`App running on port http://localhost:${port}.`)
    });    
};

main ();

// const db = require('../queries')
// const express = require('express')
// const bodyParser = require('body-parser')
// // const app = express()
// const cors = require('cors')

// app.use(bodyParser.json())
// app.use(cors())
// app.use(
//     bodyParser.urlencoded({
//         extended: true,
//     })
// )

// app.get('/', (request, response) => {
//     response.json({ info: 'Node.js, Express, and Postgres API' })
// })

// app.get('/max_id_user', db.getMaxUserId)  
// app.post('/verify_login', db.verifyLogin)  
// app.get('/get_cidades', db.getCidades)  
// app.get('/users', db.getUsers)
// app.get('/users/:id', db.getUserById)
// app.post('/users', db.createUser)
// app.put('/users/:id', db.updateUser)
// app.delete('/users/:id', db.deleteUser)

// app.listen(port, () => {
// console.log(`App running on port http://localhost:${port}.`)
// })

