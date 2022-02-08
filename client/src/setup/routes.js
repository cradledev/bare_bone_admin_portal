// App Imports
import {APP_URL_API} from './config'

// App routes
export const routes = {
    home : "/",
    students : {
        list : "/students",
        create : "/students/create",
        view : (id) => {
            return `/student/${ id }`
        }
    }
}

export const routesApi = APP_URL_API