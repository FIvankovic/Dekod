export class EmployeeFetcher{
    constructor(){
        this.fetchEmployee();
    }
    fetchEmployee = async () =>{
        const start = 1;
        const final = 20;
        for(let i = start; i <= final; i++){
            this.getEmployee();
        }
    }

    getEmployee = async () => {
        const url= "https://api.test.ulaznice.hr/paganini/api/job-interview/employees"
        const res = await fetch(url);
        const employees = await res.json();
        console.log(employee);
    }
}