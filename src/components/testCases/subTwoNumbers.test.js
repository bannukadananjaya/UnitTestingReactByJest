import subTwoNumbers from './subTwoNumbers';

test('Render with correct props for subtraction of two numbers', ()=>{
    expect(subTwoNumbers(10,2)).toBe(8);
});