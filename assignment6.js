//Q. Write a program with the following specifications:-
// Class name                  student
// Data members 
// name                        to store the name of a student
// hindi                       to store the marks in hindi subject
// english                     to store marks in english subject
// maths                       to store the marks in maths
// computer                    to store the marks in computer
// average                     to store the average of the marks obtained
// grade                       to store the grade depending upon the average

// Member methods:
// void accept()               to accept name and marks in the 4 subject
//void calcavg()               to calculate and store the grade according to the following slabs:
// Average marks                      Grade obtained
//  90 and above                        A++
// Between 75 to 89(both inclusive)     A


class student
{
    name; hindi; english; maths; computer; average; grade

    accept()
    {
        this.name=prompt("Enter your full name")
        this.hindi=parseInt(prompt("Enter the marks obtained in hindi"))
        this.english=parseInt(prompt("Enter the marks obtained in english"))
        this.maths=parseInt(prompt("Enter the marks obtained in maths"))
        this.computer=parseInt(prompt("Enter the marks obtained in computer"))
    }
   calcavg()
   {
    this.average=(this.hindi+this.english+this.maths+this.computer)/4
    if(this.average>=90)
    {
        document.write("Grade Obtained:-A++")
    }
    else if(this.average>=75 && this.average<=89)
    {
        document.write("Grade Obtained:-A")
    }
    else
    {
        document.write("Grade Obtained:-B")
    }
   }
}
let ans=new student();
ans.accept()
ans.calcavg()