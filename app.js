const express = require('express')
const app = express()
const universitiesRouter = require('./routers/universitiesRouter')

app.set("view engine","ejs");
app.use('/universities', universitiesRouter)

app.listen(2020, () => {
    console.log('server is listening on port 2020')
})

