// https://expressjs.com/en/guide/database-integration.html

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:postgres@localhost:15432/kidspedia')

db.oneOrNone("SELECT * FROM keywords where keyword = 'abc'")
    .then((data) => {
        console.log('DATA:', data)
    })
    .catch((error) => {
        console.log('ERROR:', error)
    })