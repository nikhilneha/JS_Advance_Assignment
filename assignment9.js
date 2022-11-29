// Q. Write a program with following specifiction:
//  class                           Empl
// Data Members:
// Emp_No                          to store the employee number
// name                            to store the name of employee
// basic                           to store the basic salary of employee
// DA                              to store the dearness allowance of an employee
// HRA                             to store the house rent allowance of an employee
// TA                              to store thr travelling allowance of an employee
// PF                              to store the provident fund of an employee
// Gross                           to store the gross salary

// Member Methods:
// get()                          to accept the employee no, name, basic salary of the employees.
// calcu()                        to calculate the gross salary based on the following condition:

// Basic salary               DA(%)             TA(%)             HRA(%)               PF(%)
// >=20,000                    53                12                 10                  8
//>=10,000 to <20,000          45                10                 12                  7.5
// <10000                      40                 8                 14                  7

// Gross salary=(Basic salary+DA+TA+HRA)-PF
// display()                     to display the following data in given format:
// Employee No.           Name               Gross Salary               PF
// Write a main method to creat the object of the above class and call the above method to calculate and print the
// employee no., name,gross salary and pf of an employee

class Empl{
    Emp_No; name; Basic; DA; HRA; TA; PF; Gross;
    get()
    {
        this.Emp_No=prompt("Enter employee number")
        this.name=prompt("Enter your full name")
        this.Basic=parseInt(prompt("Enter your basic salary"))
    }
    calcu()
    {
        if(this.Basic>=20000)
        {
            this.DA=this.Basic*53/100
            this.TA=this.Basic*12/100
            this.HRA=this.Basic*10/100
            this.PF=this.Basic*8/100
            this.Gross=(this.Basic+this.DA+this.TA+this.HRA)-this.PF
        }
        else if(this.Basic>=10000 && this.Basic<20000)
        {
            this.DA=this.Basic*45/100
            this.TA=this.Basic*10/100
            this.HRA=this.Basic*12/100
            this.PF=this.Basic*7.5/100
            this.Gross=(this.Basic+this.DA+this.TA+this.HRA)-this.PF
        }
        else if(this.Basic<10000)
        {
            this.DA=this.Basic*40/100
            this.TA=this.Basic*8/100
            this.HRA=this.Basic*14/100
            this.PF=this.Basic*7/100
            this.Gross(this.Basic+this.DA+this.TA+this.HRA)-this.PF
        }
    }
    display()
    {
        document.write("EMPLOYEE NO.","NAME","GROSS SALARY","PF","<br>")
        document.write(this.Emp_No+""+this.name+""+this.Gross+""+this.PF)
    }
}
let emp=new Empl();
emp.get();
emp.calcu();
emp.display();