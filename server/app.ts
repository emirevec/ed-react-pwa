const express = require('express')
const { connectToDb, getDb} = require('./db')

// init app & middleware
const app = express()

// db connection
let db
connectToDb((err) => {
    if(!err) {
        app.listen(3000, () => {
            console.log('app listening on port 3000')
        })
        db = getDb()
    }
})

// routes
app.get('/products', (req, res) => {
    let products = []
    db.collection('products')
        .find()
        .sort({ category: 'glasses' })
        .forEach(glass => products.push(glass))
        .then(() => {
            res.status(200).json(glass)
        .catch(() => {
            res.status(500).json({error: 'Could not fetch the documents'})
        } )
        })
    res.json({ mssg: 'msg' })
})