// imports
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'

export default function(server) {
    console.info("SETUP - Loading modules...")

    // Enable cors
    server.use(cors())

    // request body parser
    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({extended : false}))

    // request body cookie parse
    server.use(cookieParser())

    // http logger
    server.use(morgan('tiny'))
}