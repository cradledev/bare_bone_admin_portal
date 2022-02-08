// import 
import React from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

// imports apps
import { routes } from "../../setup/routes"
import { remove, getList } from './api/actions'
// component
const Item = ({ student : { id, firstName, lastName, phoneNumber, createdAt}}) => {
    const dispatch = useDispatch()

    const onRemove = async () => {
        let check = window.confirm('Are you sure you want to delete this student?')
        if (check) {
            try {
      
              const { data } = await remove({ id })
      
              if(data) {
                // Refresh students list
                dispatch(getList())
              }
            } catch (error) {
                alert(`ERROR - ${error.message} . Please try again`)
            }
        }
    }
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(createdAt)
    return (
        <>
            <tr>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{phoneNumber}</td>
                <td>{date}</td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <Link className="btn btn-info text-white" to={routes.students.view(`${id}`)}>
                            Edit
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={onRemove} >Remove</button>
                    </div>
                </td>
            </tr>
        </>
    )
}

export default Item