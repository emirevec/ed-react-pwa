const { MongoClient } = require('mongodb')

let dbConnection
let uri = 'mongodb+srv://vecchioemiliano:pf1FyOGSj2NQwiqN@cluster0.gsfct8y.mongodb.net/?retryWrites=true&w=majority'

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb://localhost27017/virtual')
        .then((client) => {
            dbConnection = client.db()
            return cb()
        })
        .catch(err => {
            console.log(err)
            return cb(err)
        })
    },
    getDb: () => dbConnection
}