import react from 'react';

const Employee = ({name , department, age, phoneNumber}) => {
    return (
        <div>
            <p>Name: {name}</p>
            <p>Department: {department}</p>
            <p>Age: {age}</p>
            <p>PhoneNumber: {phoneNumber}</p>
        </div>
    );
}

export default Employee;