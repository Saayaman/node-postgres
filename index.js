
const { Client } = require('pg')
const client = new Client({
  user: "postgres",
  password: "alijan",
  host: "localhost",
  port: 5433,
  database: "ayako_class"
})

connect();

async function connect() {
  try {
    await client.connect();
    const res = await client.query("SELECT * FROM students");
    console.table(res.rows);
    await client.end();  
  } catch(err) {
    console.log(err);
  }
}

// client.connect().then(() => client.query('SELECT * FROM students'))
// .then((res) => console.table(res.rows))
// .catch(err => console.log(err))
// .finally(() => client.end())

// const { Client } = require('pg')
// const client = new Client()
// await client.connect()
// const res = await client.query('SELECT * FROM people')
// console.log(res) // Hello world!
// await client.end()