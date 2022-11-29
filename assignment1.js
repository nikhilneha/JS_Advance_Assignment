// Q. Write a class with name Employee basic as its data member, to find the gross pay of an mployee for the
// following allowances and deduction.Use meaningful variables, Dearness Allowance=25% of the Basic pay
// House rent allowance=15% of the basic pay..Provident fund=8.33% of thr basic pay... 
// Net pay= Basic pay+ Dearness allowance+House Rent Allowance...
// Gross Pay= Net pay-Provident fund

class Employee
{
    constructor(b)
    {
        this.basic=b;
    }
    salary()
    {
        let pf,da,hra,np,gp;
        da=this.basic*25/100;
        hra=this.basic*15/100;                   // Ans:- Gross pay=39501/-
        pf=this.basic*8.33/100;
        np=this.basic+da+hra;
        gp=np-pf;
       console.log("Gross Pay=",gp,"/-");
    }
}
let emp=new Employee(30000);
emp.salary()