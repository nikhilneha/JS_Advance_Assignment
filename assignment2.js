// Q. Define a class 'Salary' described as below:-
// Data members:-
// Name, Adress,Phone,Subject specialisation, Monthly salary, income tax.
// Member methods:-
// i) To accept the details of teacher including the monthly salary.
// ii) To display the details of teacher.
// iii) To compute the annual income tax as 5% of the annual salary above ₹1,75,000/-.
//  Write main method to creat object of the class and call the above member method.

class Salary
{
    name; adress; subspe; mSal; IT; phone;
    input()
    {
        this.name=prompt('Enter your name')
        this.adress=prompt('Enter your full adress')
        this.subspe=prompt('Enter your subject specialisation')
        this.mSal=prompt('Enter your monthly salary')
        this.phone=prompt('Enter your phone number')
    }
    result()
    {
        document.write("Name:-"+this.name+"<br>")
        document.write("Adress:-"+this.adress+"<br>")
        document.write("Subject Specialisation:-"+this.subspe+"<br>")
        document.write("Monthly salary:-"+this.mSal+"<br>")
        document.write("Phone number:-"+this.phone+'<br>')
    }
    calc()
    {
        let aSal;
        aSal=12*this.mSal;
        if(aSal>175000)
        {
            this.IT=5/100*(aSal-175000)
        }
        else
        {
            this.IT=0
        }
        document.write("IT:-"+this.IT+"<br>")
    }
}

let teacher=new Salary();
teacher.input();
teacher.calc();
teacher.result();