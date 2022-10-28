
const requestEmployees = "employees.json";
const requestCompany = "company.json";
const requestNewEmployee = "newEmployee.json";

var totalSalary = 0;

const employees = {
    "members" : [
    {
        "firstName" : "Sam",
        "department" : "Tech",
        "designation" : "Manager",
        "salary" : 40000,
        "raiseEligible" : true
    },
    {
        "firstName" : "Mary",
        "department" : "Finance",
        "designation" : "Trainee",
        "salary" : 18500,
        "raiseEligible" : true
    },
    {
        "firstName" : "Bill",
        "department" : "HR",
        "designation" : "Executive",
        "salary" : 21200,
        "raiseEligible" : false
    }
    ]
}

const company = {
    "companyName" : "Tech Stars",
    "website" : "www.techstars.site",
    "employees" : ["Sam", "Mary", "Bill"]
}

const newEmployee = {
    "firstName" : "Anna",
    "department" : "Tech",
    "designation" : "Executive",
    "salary" : 25600,
    "raiseEligible" : false
}

const people = employees.members;

//problem 1
console.log(employees);

//problem 2
console.log(company);

//problem 3
employees.members.push(newEmployee);
console.log(employees);

//problem 4
for(const employee of people){
    totalSalary += employee.salary;
}
console.log(totalSalary);

//problem 5
for(var employee of people){
    if(employee.raiseEligible){
        employee.salary *= 1.10;
        employee.raiseEligible = false;
    }
    console.log(employee);
}

//problem 6
const remote = ["Anna", "Sam"];

for(var employee of people){
    employee.wfh = false;

    //loop through remote array and compare elements between arrays for firstname
    for(var person of remote){
        if(employee.firstName === person){
            employee.wfh = true;
        }
    }

    console.log(employee);
}