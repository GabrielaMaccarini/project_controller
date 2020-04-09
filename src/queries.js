// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'qrcode',
//   password: 'sqlsql',
//   port: 5432,
// })

// const getUsers = (request, response) => {
//     pool.query('SELECT * FROM pessoas ORDER BY id ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// }

// const getUserById = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     pool.query('SELECT * FROM pessoas WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// }


// const createUser = (request, response) => {
//     const { id, nome, id_cidade, local_partida, numero_celular, username, senha, endereco } = request.body
  
//     pool.query('INSERT INTO pessoas (id,'+ 
//                                     'nome,'+
//                                     'id_cidade,'+ 
//                                     'local_partida,'+ 
//                                     'numero_celular,'+
//                                     'username,'+ 
//                                     'senha,'+ 
//                                     'endereco) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
//                                     [id, nome, id_cidade, local_partida, numero_celular,
//                                      username, senha, endereco], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(201).send(`Usuário adicionado com o ID: ${results.insertId}`)
//     })
// }

// const updateUser = (request, response) => {
//     const id = parseInt(request.params.id)
//     const { nome, id_cidade, local_partida, numero_celular, username, senha, endereco } = request.body
  
//     pool.query(
//       'UPDATE pessoas SET nome = $1, id_cidade = $2, local_partida = $3,' +
//                         ' numero_celular = $4, username = $5, senha = $6, endereco = $7 WHERE id = $8',
//       [nome, id_cidade, local_partida, numero_celular, username, senha, endereco, id],
//       (error, results) => {
//         if (error) {
//           throw error
//         }
//         response.status(200).send(`Usuário modificado, com o ID: ${id}`)
//       }
//     )
// }

// const deleteUser = (request, response) => {
//     const id = parseInt(request.params.id)
  
//     pool.query('DELETE FROM pessoas WHERE id = $1', [id], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).send(`Usuário deletado, com o ID: ${id}`)
//     })
// }

// const getCidades = (request, response) => {
//   pool.query('SELECT id_cidade, nome FROM cidades', (error, results) => {
//       if (error) {
//           throw error
//       }
//       response.status(200).json(results.rows)
//   })
// }

// const getMaxUserId = (request, response) => {

//   pool.query('SELECT max(id) FROM pessoas', (error, results) => {
//       if (error) {
//           throw error
//       }
//       response.status(200).json(results.rows)
//   })
// }

// const verifyLogin = (request, response) => {
//   const { username, senha } = request.body
//   console.log(request);
  
//   pool.query('SELECT count(*) AS existe FROM pessoas WHERE username = $1 AND senha = $2', [username, senha], (error, results) => {
//       if (error) {
//           throw error;
//       }
//       response.status(200).json(results.rows)
//   })
// }

// module.exports = {
//     getUsers,
//     getUserById,
//     createUser,
//     updateUser,
//     deleteUser,
//     getMaxUserId,
//     verifyLogin,
//     getCidades,
// }
  