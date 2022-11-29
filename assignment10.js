// Q. Define a class called Library with the following description:
// Instance variables/data members:
// int acc_num                      stores the accession number of books
// string title                     stores the title of book
// string author                    stores the name of author

// Members methods:
// void input()                    to input and store the accession number,title and author
// void compute()                  to accept the number of days late, calculate and display the fine charged the rate
//                                 of ₹2 per day
// void display()                  to display the details in the following format:

// Accession number                  Title              Author
// Write the main method to creat an object of the class and call the above member methods.

class Library
{
    acc_num; title; author; fine;
    Input()
    {
        this.acc_num=prompt("Enter thr accession number of book")
        this.title=prompt("Enter the title of book")
        this.author=prompt("Enter the author of the book")
    }
    compute()
    {
        let late=prompt("Enter the number of days late")
           this.fine=late*2
    }
    display()
    {
        document.write("Accession number","Title","Author","Fine","<br>")
        document.write(this.acc_num+""+this.title+""+this.author+""+this.fine)
    }
}
let Library1=new Library();
Library1.Input();
Library1.compute();
Library1.display();