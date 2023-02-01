require('dotenv').config();

const {
    DB_CONNECTION,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env

module.exports = {
    "development": {
        "host": DB_HOST,
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "dialect": DB_CONNECTION
    },
    "test": {
        "host": DB_HOST,
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "dialect": DB_CONNECTION
    },
    "production": {
        "host": DB_HOST,
        "username": DB_USER,
        "password": DB_PASSWORD,
        "database": DB_NAME,
        "dialect": DB_CONNECTION
    }
}
