import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {props.isStudent && <p> This is a Student!</p>}
        </div>
    )
}

//this does not stop execution -> throws warning to console
Student.propTypes = { 
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}
export default Student