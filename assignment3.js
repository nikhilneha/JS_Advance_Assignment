// Define a class 'Student' describe as below:-
//  Data members/instance variables: name,age, m1,m2,m3 (marks in 3 subjects), maximum,
// Average Member Method:
// i) To accept the details of a student.
// ii) To compute the average and maximum out of 3 marks.
// iii) To display the name,age, marks in 3 subjects, maximum and average.
// Write a main method to creat an object of a class and call the above member method.

class Student
{
    name; age; m1; m2; m3; max; ave;

    Input()
    {
        this.name=prompt("Enter your name")
        this.age=parseInt(prompt("Enter your age"))
        this.m1=parseInt(prompt("Enter M1"))
        this.m2=parseInt(prompt("Enter M2"))
        this.m3=parseInt(prompt("Enter M3"))
    }
    result()
    {
        document.write("Name:-"+this.name+'<br>')
        document.write("Marks:"+this.m1+','+this.m2+"and"+this.m3+"<br>")
        document.write("Maximum Marks:-"+this.max+"<br>")
        document.write("Average:-"+this.ave+"<br>")
    }
    calc()
    {
        this.max=Math.max(Math.max(this.m1,this.m2),this.m3)
        this.ave=(this.m1+this.m2+this.m3)/3
    }
}
let ob=new Student();
ob.Input();
ob.calc();
ob.result();