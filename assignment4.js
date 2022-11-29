// Q. Define a class Employee having the following description:
// Instance variables:
//  Int pan                     to store personal account number
// String name                  to store name
// double tax_income            to store annual taxable income
// double tax                   to store tax that is calculated

// Member functions:
// input()                      store the pan number,name,taxable income
// calc()                       Calculate tax for an employee
// display()                    output details of an employee

// Write a program to compute the tax according to the given conditions and display the output as per the given format:
// Total annual Taxable Income                 Tax Rate
//  Upto ₹ 1,00,000                            No tax
//  From 1,00,001 to 1,50,000                  10% of the income exceeding ₹1,00,000
//  From 1,50,001 to 2,50,000                  ₹ 5000+20% of the income exceeding ₹ 1,50,000
//  Above 2,50,000                             ₹ 25,000+ 30% of the income exceeding ₹ 2,50,000

// Output:
// Pan number                 Name              Tax-income                Tax
//  ----                     -----                -----                   ----

class Employee
{
    name; pan; tax; tax_income

   input()
   {
    this.pan=prompt("Enter your pan number")
    this.name=prompt("Enter your full name")
    this.tax_income=parseInt(prompt("Enter your tax income"))
}
display()
{
    document.write("Pan Number","Name","Tax_Income","Tax","<br>")
    document.write(this.pan+""+this.name+""+this.tax_income+""+this.tax+"<br>")
} 
calc()
{
    if(this.tax_income<=100000)
    {
        this.tax=0
    }
    else if(this.tax_income>=100001 && this.tax_income<=150000)
    {
        this.tax=10/100*(this.tax_income-100000)
    }
    else if(this.tax_income>=150001 && this.tax_income<250000)
    {
        this.tax=5000+20/100*(this.tax_income-150000)
    }
    else if(this.tax_income>250000)
    {
        this.tax=25000+30/100*(this.tax_income-250000)
    }
}
}
let emp=new Employee();
emp.input();
emp.calc();
emp.display();