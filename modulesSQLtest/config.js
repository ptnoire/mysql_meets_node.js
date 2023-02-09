const connection = require('../mysqlNODE.js')

exports.useDatabase = function(name) {
    const sqlQuery = `USE ${name}`
    connection.query(sqlQuery, (err, res) => {
        if(err) console.error('Uh oh: 📛 ', err)
        // console.log(res)
        // console.log(`Query Passed: ${sqlQuery}`)
    })
}