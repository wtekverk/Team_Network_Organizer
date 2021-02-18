const Employee = require("../lib/Employee")
const Intern = require("../lib/Intern")

test('create new employee and check name', () => {

    const intern = new Intern('Wendy', 4, 'wtekverk@gmail.com', 'Denver University');

    expect(intern.name).toBe('Wendy');


})

test('create new employee and check id', () => {

    const intern = new Intern('Wendy', 4, 'wtekverk@gmail.com', 'Denver University');

    expect(intern.id).toBe(4);


})

test('create new employee and check email', () => {

    const intern = new Intern('Wendy', 4, 'wtekverk@gmail.com', 'Denver University');

    expect(intern.email).toBe('wtekverk@gmail.com');


})

test('create new employee and check office number', () => {

    const intern = new Intern('Wendy', 4, 'wtekverk@gmail.com', 'Denver University');

    expect(intern.school).toBe("Denver University");


})

test('create new employee and check role', () => {

    const intern = new Intern('Wendy', 4, 'wtekverk@gmail.com', 'Denver University');

    expect(intern.getRole()).toBe("Intern");


})