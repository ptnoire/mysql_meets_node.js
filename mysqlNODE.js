// import { useDatabase, createTable } from './config.js';

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3006',
    user: 'root',
    // password: 'ssss',
});

connection.connect((err) => {
    if(err) throw err
    console.log('Connected to mySQL Server!');
})

const showResults = function(name) {
    const sqlQuery = `SELECT * FROM ${name}`
    connection.query(sqlQuery, (err, res) => {
        if(err) console.error('Uh oh: 📛 ', err)
        console.log(res)
    })
}

const useDatabase = function(name) {
    const sqlQuery = `USE ${name}`
    connection.query(sqlQuery, (err, res) => {
        if(err) console.error('Uh oh: 📛 ', err)
        console.log(res)
        console.log(`Query Passed: ${sqlQuery}`)
    })
}

const createTable = function(tableName, columnName, dataType, notNull, auto) {
    const sqlQuery = 
    `CREATE TABLE ${tableName} (${columnName} ${dataType} ${notNull ? 'NOT NULL' : ''} ${auto ? 'AUTO_INCREMENT' : ''})`

    connection.query(sqlQuery, (err, res) => {
        if(err) console.error('Uh oh: 📛 ', err)
        console.log(res)
        console.log(`Query Passed: ${sqlQuery}`)
    })
    showResults(tableName);
}

const insertInto = function(tableName, columnName, value) {
    const sqlQuery = 
    `INSERT INTO ${tableName} (${columnName}) VALUES ('${value}')`

    connection.query(sqlQuery, (err, res) => {
        if(err) console.error('Uh oh: 📛 ', err)
        console.log(res)
        console.log(`Query Passed: ${sqlQuery}`)
    })
    showResults(tableName);
}

useDatabase('record_company');
// createTable('node_table', 'node_column', 'INT');
insertInto('node_table', 'node_column', 5)