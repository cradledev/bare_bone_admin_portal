// imports
import express from 'express';

// App Imports
import setupLoadModules from './setup/loadModules'
import setupGraphQL from './setup/graphql'
import setupStartServer from './setup/startServer'
// create express server
const server = express()

// loading modules
setupLoadModules(server)
// start GraphQL
setupGraphQL(server)
// start server
setupStartServer(server)

