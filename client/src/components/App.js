// Imports
import React from "react"
import { Route, Switch } from "react-router-dom"

// import components
import Layout from "./common/Layout"
import { routes } from "../setup/routes"
import Home from "./home/Home"
import StudentsList from "./students/List"
import StudentsCreate from "./students/Create"
import StudentsView from "./students/View"
// Component
const App = () => (
    <Layout>
        <Switch>
            {/* home */}
            <Route path={routes.home} component={StudentsList} exact />
            {/* Student */}
            <Route path={routes.students.list} component={StudentsList} exact/>
            <Route path={routes.students.create} component={StudentsCreate} />
            <Route path={routes.students.view(":id")} component={StudentsView} />
        </Switch>
    </Layout>
)

export default App