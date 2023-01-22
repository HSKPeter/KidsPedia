require('dotenv').config()

const {
    DB_INSTANCE_USERNAME,
    DB_INSTANCE_PASSWORD,
    DB_INSTANCE_HOST,
    DB_INSTANCE_PORT,
    DB_NAME
} = process.env

// https://expressjs.com/en/guide/database-integration.html
const pgp = require('pg-promise')(/* options */)
const db = pgp(`postgres://${DB_INSTANCE_USERNAME}:${DB_INSTANCE_PASSWORD}@${DB_INSTANCE_HOST}:${DB_INSTANCE_PORT}/${DB_NAME}`)

async function getExistingExplanation(keyword) {
    try {
        const data = await db.oneOrNone(`SELECT * FROM keywords where keyword = '${keyword}' LIMIT 1`);
        return data?.explanation;
    } catch(err) {
        return null;
    }
}

async function saveNewExplanation({keyword, explanation}) {
    try {
        // eslint-disable-next-line no-template-curly-in-string
        await db.query('INSERT INTO keywords (keyword, explanation) VALUES(${keyword}, ${explanation}) ON CONFLICT (keyword) DO UPDATE SET explanation = ${explanation}', {keyword, explanation});
    } catch(err) {
        console.log(err);
    }
}



module.exports = {
    getExistingExplanation,
    saveNewExplanation
};
