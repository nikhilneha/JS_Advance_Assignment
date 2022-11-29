//Q. Define a class Bill as described below:
// Data members are:
// name                    to store the name of the consumer
// consumerno              to store the consumer number
// unitconsumed            to store the unit consumed
// Member methods are:
// datainput()             to read the data of a person
// compute()               to calculate the bill amount as per criteria.
// Unit consumed                                     Rate
//  Upto 100 units                                   1.20
// more than 100 and upto 200 units                  2.20
// more than 200 and upto 300 units                  3.20
// Above 300 units                                   4.00
// Display()              to display the output as per the format
// Consumer Name            consumer number             Unit consumed            Bill Amount

class Bill
{
    name; consumerno; unitconsume; billAmount;

dataInput()
{
    this.name=prompt("Enter Your Name")
    this.consumerno=prompt("Enter the consumer number")
    this.unitconsume=prompt("Enter the total units Consumed")
}
compute()
{
    if(this.unitconsume<=100)
    {
        this.billAmount=this.unitconsume*1.20
    }
    else if(this.unitconsume>100 && this.unitconsume<=200)
    {
        this.billAmount=this.unitconsume*2.20
    }
    else if(this.unitconsume>200 && this.unitconsume<=300)
    {
        this.billAmount=this.unitconsume*3.20
    }
    else if(this.unitconsume>300)
    {
        this.billAmount=this.unitconsume*4
    }
}
display()
{
    document.write("Consumer Name",'Consumer number',"Unit Consumed","Bill Amount","<br>")
    document.write(this.name+""+this.consumerno+""+this.unitconsume+""+this.billAmount)
}
}
let bill1=new Bill();
bill1.dataInput();
bill1.compute();
bill1.display();