const employee = {name: "John", streetAddress: "1412 Edna St"};
function updateEmployeeWithKeyAndValue(employee, name, Sam) {
    const worker = { ...employee};
    
    worker[name] = Sam;

    return worker
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, _value) {
    employee[streetAddress] = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee, name) {
    const newEmployee = { ...employee};
    delete newEmployee[name];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}