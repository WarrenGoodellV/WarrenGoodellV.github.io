var json_Employees = [{
    "FirstName": "Sam", 
    "Department": "Tech", 
    "Designation": "Manager",
    "Salary": 40000,
    "RaiseEligible": true
},
{
    "FirstName": "Mary", 
    "Department": "Finance", 
    "Designation": "Trainee",
    "Salary": 18500,
    "RaiseEligible": true
},
{
    "FirstName": "Bill", 
    "Department": "HR", 
    "Designation": "Executive",
    "Salary": 21200,
    "RaiseEligible": false  
}];
var json_Company = {
    "companyName": ("Tech Stars"), 
    "website": ("www.techstars.site"), 
    "employees": (["Sam","Mary","Bill"])
};

json_Company.employees[3] = "Anna";
json_Employees[3] = {
    "FirstName": "Anna",
    "Department":"Tech",
    "Designation": "Tech",
    "Salary": 25600,
    "RaiseEligible": false
};
console.log(json_Employees);


salary = 0;
function totalSalary() {
    for(let i = 0; i < json_Employees.length; i++) {
        salary += json_Employees[i].Salary;
    }
    console.log("The total salary is " + salary);
}

percent = 1.10;
function giveRaise(percent) {
    for(let i = 0; i < json_Employees.length; i++) {
        if (json_Employees[i].RaiseEligible == true){
            json_Employees[i].Salary *= percent;
        }
        console.log(json_Employees[i].FirstName + " now got a salary of " + json_Employees[i].Salary);
    }
}

json_Company.workingFromHome = ['Anna','Sam'];
console.log(json_Company);

totalSalary();
giveRaise(percent);