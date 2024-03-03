const { Sequelize } = require("sequelize")

const connection = async (_, res) => {
    try {

        const sequelize = new Sequelize(process.env.DATABASE_CONNECTION_STRING, {
            dialect: process.env.DIALECT,
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false // For self-signed certificates
                }
            },
            authentication: {
                type: 'default',
                username: process.env.DATABASE_USERNAME, // Your Supabase PostgreSQL username
                password: process.env.DATABASE_PASSWORD // Your Supabase PostgreSQL password
            }
        });

        await sequelize.authenticate()
        console.log("Successfuly connected to DataBase")
    } catch (error) {
        return res.status(500).json({ message: "INTERNAL SERVER ERROR", error: error.message})
    }
}
module.exports = connection