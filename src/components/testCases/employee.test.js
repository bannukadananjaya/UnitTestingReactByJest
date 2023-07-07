import {render} from '@testing-library/react';
import Employee from './employee';

test("Render with correct prpos for Employee Details:", () => {
    const props = {name: "Akalanka widana", department:"cleaning", age:35, phoneNumber:7545368 };
    const {getByText} = render(<Employee {...props}/>)
    expect(getByText(`Name: ${props.name}`)).toBeInTheDocument();
    expect(getByText(`Department: ${props.department}`)).toBeInTheDocument();
    expect(getByText(`Age: ${props.age}`)).toBeInTheDocument();
    expect(getByText(`PhoneNumber: ${props.phoneNumber}`)).toBeInTheDocument();
});