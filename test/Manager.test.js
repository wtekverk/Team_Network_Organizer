
const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")

test('create new employee and check name', () => {

    const manager = new Manager('Wendy', 4, 'wtekverk@gmail.com', 123);

    expect(manager.name).toBe('Wendy');


})

test('create new employee and check id', () => {

    const manager = new Manager('Wendy', 4, 'wtekverk@gmail.com', 123);

    expect(manager.id).toBe(4);


})

test('create new employee and check email', () => {

    const manager = new Manager('Wendy', 4, 'wtekverk@gmail.com', 123);

    expect(manager.email).toBe('wtekverk@gmail.com');


})

test('create new employee and check office number', () => {

    const manager = new Manager('Wendy', 4, 'wtekverk@gmail.com', 123);

    expect(manager.officeNumber).toBe(123);


})

test('create new employee and check role', () => {

    const manager = new Manager('Wendy', 4, 'wtekverk@gmail.com', 123);

    expect(manager.getRole()).toBe("Manager");


})