const dotenv = require("dotenv")
const connection = require('./db/index')
const app = require('./app')

dotenv.config({
    path: './.env'
})

connection().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port ========> ${process.env.PORT}`)
    })
}).catch((error) => {
    console.log("Error occured while connection to database ===> ", error)
})