
const Employee = require("../lib/Employee")

test('create new employee and check name', () => {

    const employee = new Employee('Wendy', 4, 'wtekverk@gmail.com');

    expect(employee.name).toBe('Wendy');


})

test('create new employee and check id', () => {

    const employee = new Employee('Wendy', 4, 'wtekverk@gmail.com');

    expect(employee.id).toBe(4);


})

test('create new employee and check email', () => {

    const employee = new Employee('Wendy', 4, 'wtekverk@gmail.com');

    expect(employee.email).toBe('wtekverk@gmail.com');


})

test('create new employee and check role', () => {

    const employee = new Employee('Wendy', 4, 'wtekverk@gmail.com');

    expect(employee.getRole()).toBe('Employee');


})