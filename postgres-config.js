
const pg = require('pg')
const client = new pg.Client({
  user: "postgres",
  password: "alijan",
  host: "localhost",
  port: 5432,
  database: "ayako_class"
})

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

function connect(){
  client.connect().then((res) => {
    console.log('Postgres connected on 5432!')
    return client
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