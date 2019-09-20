
//npm package to connnect postgres with node
const pg = require('pg')
require('dotenv').config();

//connecting to the database that we want to query

// 1st way: using URI
const connectionString = process.env.NODE_ENV === 'production' ? process.env.DATABASE_URL : process.env.POSTGRES_URI;
const client = new pg.Client({
  connectionString: connectionString,
})

// 2nd way: using object
// const client = new pg.Client({
//   user: "postgres",
//   password: "alijan",
//   host: "localhost",
//   port: 5432,
//   database: "ayako_class"
// })

// async function connect() {
//   try {
//     await client.connect();
//     // const res = await client.query("SELECT * FROM students");
//     // console.table(res.rows);
//     await client.end();  
//   } catch(err) {
//     console.log(err);
//   }
// }


// Initializer function to connect to the database
function connect(){
  client.connect().then((res) => {
    console.log('Postgres connected on 5432!')
  })
  .catch(err => console.log(err))
  // .finally(() => client.end())
}

module.exports = { connect, client }

// const { Client } = require('pg')
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT * FROM people')
// console.log(res) // Hello world!
// await client.end()