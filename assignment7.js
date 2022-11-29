//Design class called Bank with the following description:
// Data members:
// name                  to store the name of the depositor
// acno                  to store the account number
// type                  to store the type of account
// bal                   to store the balance amount in the account

// Member function:
// initialise()              to assign the data members with any value.
// depo(int a)               where a is the account to be deposited and the variable bal is to be updated
// withdraw(int a)           where a is the amount to be withdrawn after checking the balance (Minimum balance
//                           should be ₹1000) and the variable bal is to be updated.
// print()                   to print all the details.
// Write the main method to creat the object of the class and call the above method.

class Bank
{
    name; acno; type; bal;
    initialise()
    {
        this.name="Nikhil";
        this.acno=334466556677;
        this.type="Saving";
        this.bal=11000;
    } 
    depo(a)
    {
        this.deposite=a;
        this.bal=this.deposite+this.bal
    }
    withdraw(b)
    {
        this.withdraw=b
        if(this.bal<=1000)
        {
            console.log("Amount can not be withraw due to low balance")
        }
        else
        {
            this.bal=this.bal-this.withdraw
        }
    }
    print()
    {
        console.log(this.name);
        console.log(this.acno);
        console.log(this.type);
        console.log(this.bal);
    }
}
let bank1=new Bank()
bank1.initialise()
bank1.depo(2000)
bank1.withdraw(5000)
bank1.print()