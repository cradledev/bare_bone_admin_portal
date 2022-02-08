// import
import { Sequelize } from 'sequelize'

// config imports
import env from '../config/env'
import databaseConfig from '../config/database.json'

// load db config
const databaseConfigEnv = databaseConfig[env]

const connection = new Sequelize(databaseConfigEnv.database, databaseConfigEnv.username, databaseConfigEnv.password, {
    host : databaseConfigEnv.host,
    dialect : databaseConfigEnv.dialect,
    logging : false,
    operatorsAliases : Sequelize.Op
})

// database connection
console.info("SETUP - Connecting database...")

connection.authenticate()
            .then(() => {
                console.info("INFO - Database connected.")
            })
            .catch(error => {
                console.error("ERROR - Unable to connect to the database:", error)
            })

export default connection