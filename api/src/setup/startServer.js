export default function(server) {
    server.listen(3000, (error) => {
        if(error) {
            console.error("ERROR - Unable to start Server.")
        }else {
            console.info("INFO - Server started on Port 3000")
        }
    })
}