// Q.Define a class called mobike with the following description:-
// Instance variable/ Data members:-
//  bno                 to store the bike's number
// phno                 to store the phone number of the customer
// name                 to store the name of the customer
// days                 to store the number of days the bike is taken on rent
// charge               to calculate and store the rental charge

// Member methods:-
// void input()              to input and store the details of customer
// void compute()            to comput the rental charge. Therent for a Mobike is charged on the following basis

// First five days            ₹500 per day
// Next five Days             ₹400 per day
// Rest of the days           ₹200 per day

// void display()           to display the details in thr following format:
// Bike number           phone number         Name              number of days          charge
//  -----                   -----            ------               ------                 ----


class Mobike
{
    bno; phno; name; days; charge;
    Input()
    {
        this.bno=prompt("Enter the bike number")
        this.phno=prompt("Enter the mobile number")
        this.name=prompt("Enter your name")
        this.days=parseInt(prompt("Enter the number of days"))
    }
    display()
    {
        document.write("Bike No.","Phone No.",'Name',"No. of Days","Charge","<br>")
        document.write(this.bno+""+this.phno+""+this.name+""+this.days+""+this.charge)
    }
    compute()
    {
        if(this.days<=5)
        {
            this.charge=500*this.days
        }
        else if(this.days>=6 && this.days<=10)
        {
            this.charge=400*this.days
        }
        else if(this.days>10)
        {
            this.charge=200*this.days
        }
    }
}
let mo=new Mobike();
mo.Input();
mo.compute();
mo.display();