// import 
import { Sequelize } from "sequelize";

// import database connection instance
import databaseConnection from "../setup/databaseConnection"

const models = {
    Student : databaseConnection.import('./student')
}

Object.keys(models).forEach((modelname) => {
    if('associate' in models[modelname]) {
        models[modelname].associate(models)
    }
})

models.sequelize = databaseConnection
models.Sequelize = Sequelize

export default models