// import 
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// App Imports
import { routes } from '../../setup/routes'
import { getStudent, update } from './api/actions'
import Loading from '../common/Loading'

// component
const View = ({ match: { params: { id } } }) => {
    // state
    const [isSubmitting, isSubmittingToggle] = useState(false)
    const [student, setStudent] = useState({})
    const [isLoading, isLoadingToggle] = useState(false)
    const dispatch = useDispatch()
    
    const getSingleStudent = async id => {
        isLoadingToggle(true)
        const data = await getStudent(id)
        setStudent({...data.data.data.student})
        isLoadingToggle(false)
    }
    // on mount/update
    useEffect(() => {
        getSingleStudent(id)
    }, [dispatch, id])
    
    // format date type from timestamp 
    let date = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(student.createdAt)

    // onSubmit function
    const onSubmit = async event => {
        event.preventDefault()
        isSubmittingToggle(true)
        // call API
        try {
            const { data } = await update({ id : parseInt(id), firstName : student.firstName, lastName : student.lastName, phoneNumber : student.phoneNumber})
            if(data.data && data.data.studentUpdate){
                // setStudent({
                //     id : id,
                //     firstName : '',
                //     lastName : '',
                //     phoneNumber : ''
                // })
            }
            isSubmittingToggle(false)
            alert("Successfully updated.")
        } catch (error) {
            alert("ERROR : Something went wrong. Please try again.")
            isSubmittingToggle(false)
        }
    }

    // onChange function
    const onChange = event => {
        if(event.target.name == "phoneNumber") {
            const re = /^[0-9\b]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
                setStudent({...student, [event.target.name] : event.target.value})
            }
        } else {
            const re = /^[aA-zZ\s]+$/;
            if (event.target.value === '' || re.test(event.target.value)) {
                setStudent({...student, [event.target.name] : event.target.value})
            }
        }
    }
    return (
        <div className="container mt-3">
            <h1>Student View</h1>
            <p>
                <Link className="btn btn-outline-primary" to={routes.students.list}>Go Students List</Link>
            </p>

            {/* single student */}
            {
                isLoading
                ? <Loading message="loading student details..."/>
                : student && student.id > 0
                    ? <form onSubmit={onSubmit}>
                        <div className="mb-3 mt-3">
                            <label htmlFor="firstName" className="form-label">First Name:</label>
                            <input type="text" value={student.firstName} onChange={onChange} required className="form-control" id="firstName" placeholder="Enter firstname" name="firstName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="lastName" className="form-label">Last Name:</label>
                            <input type="text" required value={student.lastName} onChange={onChange} className="form-control" id="lastName" placeholder="Enter lastname" name="lastName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                            <input type="text" required value={student.phoneNumber} onChange={onChange} className="form-control" id="phoneNumber" placeholder="Enter phone number" name="phoneNumber" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="recordedDate" className="form-label">Recorded Date:</label>
                            <input type="text" required value={date} readOnly className="form-control" id="recordedDate" name="recordedDate" />
                        </div>
                        <button type="submit" disabled={isSubmitting} className="btn btn-success">Update Student</button>
                    </form>
                    : <p>Student does not exists.</p>
            }
        </div>
    )
}

export default View