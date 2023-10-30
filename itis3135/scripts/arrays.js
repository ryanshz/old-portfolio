let person = ['ryan','alex'];
let salary = [1000,0];
let rowNumber = 0;

const table = document.getElementById('results_table');
const tableRowHeading = table.insertRow()
tableRowHeading.insertCell(0).innerHTML = 'name';
tableRowHeading.insertCell(1).innerHTML = 'salary';

function addSalary(){ 
    let personValue = prompt('Provide a name.');
    let salaryValue = eval(prompt('Provide a numeric salary.'));
    person.push(personValue);
    salary.push(salaryValue);
    
    let insertPoint = document.getElementById('person-insert');
    let personDropdownValue = document.createElement('option');
    personDropdownValue.innerHTML = personValue;
    insertPoint.after(personDropdownValue);
}

function displaySalary(){
    for (rowNumber; rowNumber < person.length; rowNumber++){
        if(rowNumber > person.length){
            return 0;
        }else{
            const tableRow = table.insertRow();
            tableRow.insertCell(0).innerHTML = person[rowNumber];
            tableRow.insertCell(1).innerHTML = salary[rowNumber];
        }
    }
}

function displayResults(){
    let salaryAverage = salary.reduce((a,b) => (a + b)/salary.length, 0);
    let salaryHighest = Math.max.apply(null, salary);

    salaryAverage = 'Average: '+ salaryAverage;
    salaryHighest = 'Highest: '+ salaryHighest;

    let results = document.getElementById('averageResults');
    let heading = document.createElement('h2');
    heading.innerHTML = 'Salary Results:';

    let pAvg = document.createElement('p');
    let pSal = document.createElement('p');
    pAvg.innerHTML = salaryAverage;
    pSal.innerHTML = salaryHighest;
    
    results.after(heading,pAvg,pSal);
}