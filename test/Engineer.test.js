
const Employee = require("../lib/Employee")
const Engineer = require("../lib/Engineer")

test('create new employee and check name', () => {

    const engineer = new Engineer('Wendy', 4, 'wtekverk@gmail.com', 'github.com/wtekverk');

    expect(engineer.name).toBe('Wendy');


})

test('create new employee and check id', () => {

    const engineer = new Engineer('Wendy', 4, 'wtekverk@gmail.com', 'github.com/wtekverk');

    expect(engineer.id).toBe(4);


})

test('create new employee and check email', () => {

    const engineer = new Engineer('Wendy', 4, 'wtekverk@gmail.com', 'github.com/wtekverk');

    expect(engineer.email).toBe('wtekverk@gmail.com');


})

test('create new employee and check office number', () => {

    const engineer = new Engineer('Wendy', 4, 'wtekverk@gmail.com', 'github.com/wtekverk');

    expect(engineer.github).toBe("github.com/wtekverk");


})

test('create new employee and check role', () => {

    const engineer = new Engineer('Wendy', 4, 'wtekverk@gmail.com', 'github.com/wtekverk');

    expect(engineer.getRole()).toBe("Engineer");


})