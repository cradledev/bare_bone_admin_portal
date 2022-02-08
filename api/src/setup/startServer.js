// model and config imports
import models from "../models"
import config from "../config/config.json"


export default function(server) {
    console.log("SETUP - Syncing database tables....")

    // create tables
    models.sequelize.sync({})
        .then(() => {
            console.info("INFO - Database sync complete.")
            console.info("SETUP - Starting server.....")

            // start web server
            server.listen(config.port, (error) => {
                if(error) {
                    console.error("ERROR - Unable to start Server.")
                }else {
                    console.info("INFO - Server started on", config.port)
                }
            })
        })
        .catch(() => {
            console.error("ERROR - Unable to sync database.")
            console.error("ERROR - Server not started.")
        })
}