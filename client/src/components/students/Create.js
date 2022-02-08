// import 
import React, {useState} from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"

// imports apps
import { routes } from "../../setup/routes"
import { create } from "./api/actions"

// component
const Create = () => {
    // state
    const [isSubmitting, isSubmittingToggle] = useState(false)
    const [student, setStudent] = useState({firstName : '', lastName : '', phoneNumber : ''})
    const dispatch = useDispatch()
    // submit function
    const onSubmit = async event => {
        event.preventDefault()
        isSubmittingToggle(true)
        // call API
        try {
            const { data } = await create(student)
            if(data.data && data.data.studentCreate){
                setStudent({
                    firstName : '',
                    lastName : '',
                    phoneNumber : ''
                })
            }
            isSubmittingToggle(false)
            alert("Successfully created.")
        } catch (error) {
            alert("ERROR : Something went wrong. Please try again.")
            isSubmittingToggle(false)
        }
    }
    // change for each element
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
            <h2>Student Create</h2>
            <p>
                <Link className="btn btn-outline-primary" to={routes.students.list}>Go Students List</Link>
            </p>
            {/* student form */}
            <form onSubmit={onSubmit}>
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
                <button type="submit" disabled={isSubmitting} className="btn btn-success">Create Student</button>
            </form>
        </div>
    )
}

export default Create