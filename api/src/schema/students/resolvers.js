// import models
import models from "../../models"

// get student by ID
export async function getByID(parentValue, {id}) {
    return await models.Student.findOne({ where : { id } })
}

// get all students
export async function getAll() {
    return await models.Student.findAll({ order : [[ 'created_at', 'DESC' ]] })
}

// create Student
export async function create (parentValue, {firstName, lastName, phoneNumber}) {
    console.log("student first name is ", firstName)
    console.log("student last name is ", lastName)
    console.log("student phone number is ", phoneNumber)
    return await models.Student.create({first_name : firstName, last_name : lastName, phone_number : phoneNumber})
}

// update Student
export async function updateStudent(parentValue, {id, firstName, lastName, phoneNumber}) {
    console.log("student id is ", id)
    console.log("student first name is ", firstName)
    console.log("student last name is ", lastName)
    console.log("student phone number is ", phoneNumber)
    return await models.Student.update({
        first_name : firstName,
        last_name : lastName,
        phone_number : phoneNumber
        },
        {
            where : { id : id}
        }
    )
}

// remove Student
export async function remove(parentValue, {id}) {
    return await models.Student.destroy({ where : { id }})
}