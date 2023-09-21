const form = document.getElementById("form");
const table = document.getElementById("table");

let employees = [];

function addEmployeeToTable(employee){

    for(let i=0;i<employees.length;i++){
        if(employees[i].email === employee.email){
            alert("Email already exists!");
            return;
        }
        else if(employees[i].empId === employee.empId){
            alert("Employee I'd already exists!");
            return;
        }
    }
    let tbody = document.createElement("tbody");
    tbody.innerHTML = `<tr>
            <td>${employee.name}</td>
            <td>${employee.email}</td>
            <td>${employee.empId}</td>
            <td>${employee.company}</td>
            <td>${employee.designation}</td>
            <td><button class="col-btn" onclick="deleteEmployee(this)" data-empId=${employee.empId}>Delete</button></td>
        </tr>`;
    
    table.appendChild(tbody);
    employees.push(employee);
    form.reset();
}

function deleteEmployee(buttonRef){
    let empId = buttonRef.getAttribute("data-empId");

    for(let i=0;i<employees.length;i++){
        if(employees[i].empId === empId){
            employees.splice(i,1);
            break;
        }
    }

    let parentTd = buttonRef.parentNode;
    let parentTr = parentTd.parentNode;

    parentTr.remove();
}

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    let employee = {
        name : form.name.value,
        email : form.email.value,
        empId : form.empId.value,
        company : form.company.value,
        designation : form.designation.value
    };
    addEmployeeToTable(employee);
})