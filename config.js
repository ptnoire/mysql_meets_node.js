import { connection } from './mysqlNODE.js';

export const useDatabase = function(name) {
    const sqlQuery = `USE ${name}`
    connection.query(sqlQuery, (err, res) => {
        if(err) console.error('Uh oh: 📛 ', err)
        console.log(res)
        console.log(`Query Passed: ${sqlQuery}`)
    })
}

export const createTable = function(name, columnName, dataType, notNull, auto) {
    const sqlQuery = 
    `CREATE TABLE ${name} (${columnName} ${dataType} ${notNull ? 'NOT NULL' : ''} ${auto ? 'AUTO_INCREMENT' : ''})`

    connection.query(sqlQuery, (err, res) => {
        if(err) console.error('Uh oh: 📛 ', err)
        console.log(res)
        console.log(`Query Passed: ${sqlQuery}`)
    })
}