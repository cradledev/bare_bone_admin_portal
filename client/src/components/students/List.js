// import 
import React, {useEffect} from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'

// imports apps
import { routes } from "../../setup/routes"
import Item from "./Item"
import { getList } from './api/actions'
import Loading from '../common/Loading'

// component
const List = () => {
    // state
    const { isLoading, list } = useSelector(state => state.students)
    const dispatch = useDispatch()

    // on mount/update
    useEffect(() => {
        dispatch(getList())
    }, [dispatch])
    return (
        <div className="container mt-3">
            <h2>Students</h2>
            <p>
                <Link className="btn btn-primary" to={routes.students.create}>Create</Link>
            </p>
            {/* list students */}
            {
                isLoading
                ?<Loading message="loading students......" />
                :list.length > 0
                    ? <table className="table table-hover">
                        <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone Number</th>
                            <th>Recorded Date Time</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                list.map(student => (
                                    <Item key={student.id} student={student} />
                                ))
                            }
                        </tbody>
                    </table>
                    :<p>No students to show.</p>
            }
            
        </div>
    )
}

export default List