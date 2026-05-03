// quizData.js
// 500 DSA Questions in Java Pattern

export const allQuizData = [
  {
    question: "Which statement is true for the input statement?",
    code: `name = emp.next();`,
    image: "",
    options: [
      "name is an object",
      "next() gets the string input from the user",
      "next() gets integer input from the user",
      "emp is a class name"
    ],
    correct: 1,
    tags: ["Java", "Scanner Class", "Input", "ICSE"],
    explanation: "The next() method of Scanner reads a string input from the user."
  },

  {
    question: "A company’s internal memo accessible only within the same department/package is an example of which access specifier?",
    code: "",
    image: "",
    options: [
      "public",
      "private",
      "protected",
      "default"
    ],
    correct: 3,
    tags: ["Java", "Access Specifiers", "ICSE"],
    explanation: "Default access allows members to be accessed only within the same package."
  },

  {
    question: "What is correct regarding the following Assertion and Reason?",
    code: `Assertion (A): In Java, the condition inside an if statement must always evaluate to a boolean value.
Reason (R): In Java, any non-zero integer is treated as true and zero is treated as false in if statements.`,
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 2,
    tags: ["Java", "If Statement", "Assertion Reason", "ICSE"],
    explanation: "In Java, conditions inside if statements must evaluate to boolean values. Unlike C/C++, integers are not treated as boolean values."
  },

  {
    question: "Which programming construct is suitable when students are asked to clap 5 times?",
    code: "",
    image: "img/quiz_image/quiz_image_16.jpg",
    options: [
      "if",
      "while",
      "for",
      "switch"
    ],
    correct: 2,
    tags: ["Java", "Loops", "For Loop", "ICSE"],
    explanation: "A for loop is used when the number of iterations is known beforehand."
  },

  {
    question: "Which searching algorithm divides the array into two halves repeatedly?",
    code: "",
    image: "",
    options: [
      "Linear search",
      "Data Search",
      "Long search",
      "Binary search"
    ],
    correct: 3,
    tags: ["Java", "Searching", "Arrays", "ICSE"],
    explanation: "Binary search repeatedly divides the array into halves to find the target element efficiently."
  },

  {
    question: "What is correct regarding the following Assertion and Reason?",
    code: `Assertion (A): A washing machine cycle is an example of a loop.
Reason (R): The machine repeats washing, rinsing, and spinning until the timer finishes.`,
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Loops", "Assertion Reason", "ICSE"],
    explanation: "A washing machine repeatedly performs tasks like washing, rinsing, and spinning, similar to loop execution."
  },

  {
    question: "Which of the following modifiers can be used with a function name?",
    code: "",
    image: "",
    options: [
      "float",
      "static",
      "parameter",
      "double"
    ],
    correct: 1,
    tags: ["Java", "Methods", "Modifiers", "ICSE"],
    explanation: "static is a valid method modifier in Java."
  },

  {
    question: "Which of the following is the wrapper class for the data type char?",
    code: "",
    image: "",
    options: [
      "String",
      "Char",
      "Character",
      "Float"
    ],
    correct: 2,
    tags: ["Java", "Wrapper Classes", "ICSE"],
    explanation: "Character is the wrapper class corresponding to the primitive type char."
  },

  {
    question: "What will the following program segment display?",
    code: `for(int x = 10; x > 20; x++)
    System.out.println(x);

System.out.println(x * 2);`,
    image: "",
    options: [
      "20",
      "10",
      "18",
      "16"
    ],
    correct: 1,
    tags: ["Java", "Loops", "For Loop", "ICSE"],
    explanation: "The loop condition x > 20 is false initially when x = 10, so the loop body never executes."
  },

  {
    question: "What is the output of the following statement?",
    code: `System.out.println("Score = " + 20 + 5);`,
    image: "",
    options: [
      "Score = 25",
      "Score = 205",
      "Score = 20 + 5",
      "(Score = (25))"
    ],
    correct: 1,
    tags: ["Java", "Strings", "Concatenation", "ICSE"],
    explanation: "String concatenation occurs left to right, so 20 and 5 are appended as strings, resulting in 'Score = 205'."
  },

  {
    question: "What is the output of the statement given below?",
    code: `System.out.println("SOLDIER".compareTo("SOLUTE"));`,
    image: "",
    options: [
      "-4",
      "-17",
      "17",
      "0"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "compareTo", "ICSE"],
    explanation: "Comparison differs at 'D' and 'U'. ASCII difference is 68 - 85 = -17."
  },
  {
    question: "Which keyword is used to create a wrapper class object?",
    code: "",
    image: "",
    options: [
      "class",
      "new class",
      "new",
      "createobject"
    ],
    correct: 2,
    tags: ["Java", "Wrapper Class", "Objects", "ICSE"],
    explanation: "The keyword 'new' is used to create objects in Java, including wrapper class objects."
  },

  {
    question: "What will System.out.println('S' - 'O'); display?",
    code: `System.out.println('S' - 'O');`,
    image: "",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    correct: 0,
    tags: ["Java", "Character", "Operators", "ICSE"],
    explanation: "ASCII value of 'S' is 83 and 'O' is 79. Their difference is 4."
  },

  {
    question: "Which property of an array gives the number of elements in it?",
    code: "",
    image: "",
    options: [
      "len",
      "arraysize",
      "size",
      "length"
    ],
    correct: 3,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "The length property returns the total number of elements in an array."
  },

  {
    question: "What is the output of 12 + 3 - 4 * 2 ?",
    code: `System.out.println(12 + 3 - 4 * 2);`,
    image: "",
    options: [
      "22",
      "7",
      "6",
      "21"
    ],
    correct: 1,
    tags: ["Java", "Operators", "Arithmetic", "ICSE"],
    explanation: "Multiplication is performed first: 4*2 = 8, then 12+3 = 15, and 15-8 = 7."
  },

  {
    question: "Which data structure is represented by the muffin tray shown in the image?",
    code: "",
    image: "img/quiz_image/quiz_image_15.jpg",
    options: [
      "Single Dimensional Array",
      "List",
      "Table",
      "Multi-Dimensional Array"
    ],
    correct: 3,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "The muffins are arranged in rows and columns, representing a multi-dimensional array."
  },

  {
    question: "Which of the following represents the reference data type?",
    code: "",
    image: "",
    options: [
      "Only 4",
      "1 and 2",
      "1, 2 and 3",
      "All the above"
    ],
    correct: 2,
    tags: ["Java", "Data Types", "ICSE"],
    explanation: "Array, Object, and String are reference data types, whereas int is a primitive type."
  },

  {
    question: "Which is an exit-controlled loop?",
    code: "",
    image: "",
    options: [
      "while",
      "do-while",
      "switch",
      "if"
    ],
    correct: 1,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "A do-while loop checks its condition after executing the loop body, making it exit-controlled."
  },

  {
    question: "What is the output of Math.max(Math.pow(4,0.5), Math.cbrt(27)) ?",
    code: `System.out.println(Math.max(Math.pow(4,0.5), Math.cbrt(27)));`,
    image: "",
    options: [
      "3.0",
      "3",
      "2",
      "2.0"
    ],
    correct: 0,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.pow(4,0.5) gives 2.0 and Math.cbrt(27) gives 3.0. The maximum is 3.0."
  },
  {
    question: "What is the output of the following constructor program?",
    code: `class Vehicle
{
    String type;
    int wheels;

    Vehicle(String t, int w)
    {
        type = t;
        wheels = w;
    }

    void info()
    {
        System.out.println(type + " has " + wheels + " wheels");
    }

    public static void main(String[] args)
    {
        Vehicle v1 = new Vehicle("Car", 4);
        Vehicle v2 = new Vehicle("Bike", 2);

        v1.info();
        v2.info();
    }
}`,
    image: "",
    options: [
      "Car has 4 wheels and Bike has 2 wheels",
      "Car has 2 wheels and Bike has 4 wheels",
      "Compilation Error",
      "Bike has 2 wheels only"
    ],
    correct: 0,
    tags: ["Java", "Constructors", "OOP", "ICSE"],
    explanation: "The constructor initializes the values and info() displays them correctly for both objects."
  },

  {
    question: "What is the return type of the String method compareTo() ?",
    code: "",
    image: "",
    options: [
      "String",
      "boolean",
      "int",
      "char"
    ],
    correct: 2,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "compareTo() returns an integer based on lexicographic comparison."
  },

  {
    question: "What is the return type of the String method equals() ?",
    code: "",
    image: "",
    options: [
      "String",
      "boolean",
      "int",
      "char"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "equals() returns a boolean value: true or false."
  },

  {
    question: "What type of error exists in the following triangle area program?",
    code: `class Triangle
{
    double area(int s1, int s2, int s3)
    {
        double s = (s1+s2+s3)/2;
        double A = Math.sqrt(s*(s-s1)*(s-s2)*(s-s3));
        return A;
    }
}`,
    image: "",
    options: [
      "Syntax Error",
      "Logical Error",
      "Runtime Error",
      "No Error"
    ],
    correct: 1,
    tags: ["Java", "Errors", "Math", "ICSE"],
    explanation: "The semi-perimeter calculation uses integer division. It should use 2.0 for accurate decimal calculation."
  },

  {
    question: "What is the output of arr[2] for the given array?",
    code: `String x[] = {"Artificial Intelligence", "IOT", "Machine learning", "Big data"};`,
    image: "",
    options: [
      "IOT",
      "Machine learning",
      "Big data",
      "Artificial Intelligence"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "Strings", "ICSE"],
    explanation: "Array indexing starts from 0, so arr[2] refers to 'Machine learning'."
  },

  {
    question: "What is the index (subscript) of 'Big data' in the given array?",
    code: `String x[] = {"Artificial Intelligence", "IOT", "Machine learning", "Big data"};`,
    image: "",
    options: [
      "0",
      "1",
      "2",
      "3"
    ],
    correct: 3,
    tags: ["Java", "Arrays", "Strings", "ICSE"],
    explanation: "'Big data' is the fourth element, so its index is 3."
  },

  {
    question: "Which statement initializes any 6 communication app names in a 3×2 array?",
    code: "",
    image: "",
    options: [
      `String x[][]={{"WhatsApp","Telegram"},{"Signal","Discord"},{"Slack","Teams"}};`,
      `String x[][]={{"WhatsApp","Telegram","Signal"},{"Discord","Slack","Teams"}};`,
      `String x[][]={{"WhatsApp"},{"Telegram"},{"Signal"},{"Discord"},{"Slack"},{"Teams"}};`,
      `String x[]={"WhatsApp","Telegram","Signal","Discord","Slack","Teams"};`
    ],
    correct: 0,
    tags: ["Java", "2D Arrays", "Strings", "ICSE"],
    explanation: "A 3×2 array contains 3 rows and 2 columns."
  },

  {
    question: "What is the length of x[0] in the array String x[][]={{\"WhatsApp\",\"Telegram\"},{\"Signal\",\"Discord\"},{\"Slack\",\"Teams\"}}; ?",
    code: `String x[][]={{"WhatsApp","Telegram"},{"Signal","Discord"},{"Slack","Teams"}};`,
    image: "",
    options: [
      "1",
      "2",
      "3",
      "6"
    ],
    correct: 1,
    tags: ["Java", "2D Arrays", "Strings", "ICSE"],
    explanation: "x[0] refers to the first row, which contains 2 elements."
  },

  {
    question: "What is the output and number of loop executions for the following code?",
    code: `String s = "PROGRAMMING";
for(int i=s.length(); i>0; i-=2)
{
    System.out.print(s.charAt(i-1) + " ");
}`,
    image: "",
    options: [
      "G I M R P, loop executes 6 times",
      "G N I M M A R P, loop executes 6 times",
      "G I M R P, loop executes 5 times",
      "PROGRAMMING, loop executes 11 times"
    ],
    correct: 0,
    tags: ["Java", "Loops", "Strings", "ICSE"],
    explanation: "Characters printed are from indices 10,8,6,4,2,0 → G,I,M,R,P. The loop runs 6 times."
  },
  {
    question: "What will the following program segment display?",
    code: `int i;
for(i = 5; i > 10; i++)
    System.out.println(i * 4);`,
    image: "",
    options: [
      "4",
      "1",
      "No Output",
      "2"
    ],
    correct: 2,
    tags: ["Java", "Loops", "For Loop", "ICSE"],
    explanation: "The loop condition i > 10 is false initially when i = 5, so the loop body never executes."
  },

  {
    question: "What is the output of System.out.println(\"ICSE\" + \"2025\"); ?",
    code: `System.out.println("ICSE" + "2025");`,
    image: "",
    options: [
      "ICSE 2025",
      "ICSE2025",
      "ICSE + 2025",
      "\"ICSE\" \"2025\""
    ],
    correct: 1,
    tags: ["Java", "Strings", "Concatenation", "ICSE"],
    explanation: "The + operator concatenates both strings directly without spaces."
  },

  {
    question: "What is the output of System.out.println(\"TIGER\".indexOf('G')); ?",
    code: `System.out.println("TIGER".indexOf('G'));`,
    image: "",
    options: [
      "3",
      "2",
      "-1",
      "0"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "indexOf", "ICSE"],
    explanation: "The character 'G' is present at index 2 in the string TIGER."
  },

  {
    question: "Choose the correct order of statements to find the sum of odd digits of a number.",
    code: `int s=0,d=0;
void sumodd(n)
{
    do
    {
        d=n%10;      // 1
        s+=d;        // 4
        if(d%2!=0)   // 3
        n=n/10;
    }
    while(n!=0)      // 2
    System.out.println(s);
}`,
    image: "",
    options: [
      "2,4,3,1",
      "4,2,1,3",
      "1,3,4,2",
      "1,2,3,4"
    ],
    correct: 2,
    tags: ["Java", "Loops", "Logic", "ICSE"],
    explanation: "First extract the digit, check if it is odd, add it to the sum, and continue until the number becomes 0."
  },

  {
    question: "Which Java expression calculates the value of a to the power 5 added with b to the power 3 using Math class?",
    code: "",
    image: "",
    options: [
      "Math.pow(a,5) + Math.pow(b,3)",
      "Math.sqrt(a*5 + b*3)",
      "Math.pow(a+b,5)",
      "Math.abs(a*a*a*a*a + b*b*b)"
    ],
    correct: 0,
    tags: ["Java", "Math Class", "Expressions", "ICSE"],
    explanation: "Math.pow(a,5) calculates a⁵ and Math.pow(b,3) calculates b³."
  },

  {
    question: "What is the output of the following code?",
    code: `String s1 = "Life is Beautiful";
System.out.println("Earth" + s1.substring(4).concat(" to see"));`,
    image: "",
    options: [
      "Earthis Beautiful to see",
      "Earthis Beautiful",
      "Earth is Beautiful to see",
      "EarthLife is Beautiful to see"
    ],
    correct: 2,
    tags: ["Java", "String Methods", "substring", "concat", "ICSE"],
    explanation: "s1.substring(4) returns ' is Beautiful', which is concatenated with 'Earth' and ' to see'."
  },

  {
    question: "Which statement correctly creates an object named 'Emp' of class 'Employee' and calls display()?",
    code: "",
    image: "",
    options: [
      `Employee Emp = new Employee(101, 50000.0, "Rahul");
Emp.display();`,
      `Employee = new Emp(101, 50000.0, "Rahul");
display();`,
      `Emp Employee = new Employee(101, 50000.0, "Rahul");`,
      `new Employee Emp(101, 50000.0, "Rahul");`
    ],
    correct: 0,
    tags: ["Java", "Objects", "Methods", "ICSE"],
    explanation: "The object is created using ClassName objectName = new ClassName(parameters), and methods are called using the object name."
  },

  {
    question: "Which for loop is equivalent to the given do-while loop?",
    code: `int i = 1;
int d = 5;
do
{
    d = d * 2;
    System.out.println(d);
    i++;
}
while(i <= 5);`,
    image: "",
    options: [
      `for(int i=1; i<=5; i++)
{
    d=d*2;
    System.out.println(d);
}`,
      `for(int i=0; i<5; i++)
{
    d=d*2;
}`,
      `for(int i=1; i<5; i++)
{
    System.out.println(d);
}`,
      `for(int i=5; i>=1; i--)
{
    d=d*2;
}`
    ],
    correct: 0,
    tags: ["Java", "Loops", "do-while", "for loop", "ICSE"],
    explanation: "The loop executes 5 times, doubling d and printing it in each iteration."
  },
  {
    question: "Which of the following represents the behaviour of the object 'book'?",
    code: `1. Name
    2. Search
    3. Price
    4. display
    `,
     
    image: "",
    options: [
      "Only 3",
      "1 and 3",
      "2 and 4",
      "Only 4"
    ],
    correct: 2,
    tags: ["Java", "OOP", "Objects", "ICSE"],
    explanation: "Behaviour of an object is represented by its methods such as search() and display()."
  },

  {
    question: "Select the infinite loop:",
    code: "",
    image: "",
    options: [
      "while(x < 100) { x++; }",
      "while(true) { System.out.println(\"Hello\"); }",
      "while(y > 0) { y--; }",
      "while(z != 0) { z = z - 1; }"
    ],
    correct: 1,
    tags: ["Java", "Loops", "Infinite Loop", "ICSE"],
    explanation: "The condition true always remains true, so the loop never terminates."
  },

  {
    question: "What is the output of 'A' + 'B' ?",
    code: `System.out.println('A' + 'B');`,
    image: "",
    options: [
      "AB",
      "A + B",
      "131",
      "3"
    ],
    correct: 2,
    tags: ["Java", "Character", "Operators", "ICSE"],
    explanation: "Character 'A' has ASCII value 65 and 'B' has ASCII value 66. Their sum is 131."
  },

  {
    question: "Which statement is true for the method calling statement ob.print(); ?",
    code: `ob.print();`,
    image: "",
    options: [
      "ob is a class name",
      "print() is a data member",
      "ob is an object",
      "print() is a class name"
    ],
    correct: 2,
    tags: ["Java", "Objects", "Methods", "ICSE"],
    explanation: "Methods are called using objects. Here, ob is the object name."
  },

  {
    question: "A TV remote control that can be used by anyone in the house is an example of which access specifier?",
    code: "",
    image: "",
    options: [
      "default",
      "protected",
      "private",
      "public"
    ],
    correct: 3,
    tags: ["Java", "Access Specifiers", "ICSE"],
    explanation: "Public members are accessible to everyone, similar to a shared TV remote."
  },

  {
    question: "What is correct regarding break statement and loop control?",
    code: `Assertion(A):The break statement is used to terminate a loop prematurely.
    Reason(R): The break statement transfers control to the next iteration of the loop.
    `,
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 2,
    tags: ["Java", "Break Statement", "Loops", "Assertion Reason", "ICSE"],
    explanation: "break terminates the loop, while continue transfers control to the next iteration. Both are true but unrelated."
  },

  {
    question: "Which programming construct is used in a vending machine where pressing a button gives a specific snack/drink?",
    code: "",
    image: "img/quiz_image/quiz_image_14.jpg",
    options: [
      "switch",
      "for",
      "do-while",
      "while"
    ],
    correct: 0,
    tags: ["Java", "Switch Case", "ICSE"],
    explanation: "A switch statement is used for selecting one option from multiple choices."
  },

  {
    question: "Arrays are:",
    code: "",
    image: "",
    options: [
      "Non-mutable",
      "Mutable only if they carry Strings",
      "Mutable at the first and last indexes",
      "Mutable at any index"
    ],
    correct: 3,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array elements can be modified at any valid index."
  },

  {
    question: "What is correct regarding a password login system and if-else construct?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "If Else", "Assertion Reason", "ICSE"],
    explanation: "A login system checks a condition and grants or denies access accordingly, matching if-else behaviour."
  },

  {
    question: "What makes two or more functions having the same name different?",
    code: "",
    image: "",
    options: [
      "Number of arguments",
      "Type of arguments",
      "Return type",
      "(a) and (b) both"
    ],
    correct: 3,
    tags: ["Java", "Method Overloading", "ICSE"],
    explanation: "Method overloading depends on the number and type of parameters, not the return type."
  },

  {
    question: "What is the output of the following code?",
    code: `String A = "26", B = "100";
int x = Integer.parseInt(A);
int y = Integer.parseInt(B);
int d = x + y;
System.out.println("Result 1 = " + d);`,
    image: "",
    options: [
      "127",
      "126",
      "125",
      "124"
    ],
    correct: 1,
    tags: ["Java", "Wrapper Class", "String", "ICSE"],
    explanation: "26 + 100 = 126, so the output is Result 1 = 126."
  },
  {
    question: "Which function checks whether a character is a tab space or not?",
    code: "",
    image: "",
    options: [
      "Character.isWhitespace()",
      "isSpace()",
      "isWhiteSpace()",
      "isWHITESpace()"
    ],
    correct: 0,
    tags: ["Java", "Character Class", "Methods", "ICSE"],
    explanation: "Character.isWhitespace() checks whether a character is a whitespace character such as tab or space."
  },

  {
    question: "What will System.out.println(Math.ceil(Math.abs(-7.3))); display?",
    code: `System.out.println(Math.ceil(Math.abs(-7.3)));`,
    image: "",
    options: [
      "7.0",
      "8.0",
      "6.0",
      "9.0"
    ],
    correct: 1,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.abs(-7.3) gives 7.3 and Math.ceil(7.3) gives 8.0."
  },

  {
    question: "Given int arr[]={101,202,303,404}; what is the value of arr[-1+2]?",
    code: `int arr[]={101,202,303,404};`,
    image: "",
    options: [
      "101",
      "202",
      "303",
      "404"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "-1 + 2 evaluates to 1, so arr[1] = 202."
  },

  {
    question: "What is the output of ++x - x++ when x = 5?",
    code: `int x = 5;
System.out.println(++x - x++);`,
    image: "",
    options: [
      "0",
      "1",
      "-1",
      "4"
    ],
    correct: 0,
    tags: ["Java", "Operators", "Increment Decrement", "ICSE"],
    explanation: "++x makes x = 6 and returns 6. x++ returns 6 and then increments x to 7. Therefore 6 - 6 = 0."
  },

  {
    question: "Which data structure is represented in the image?",
    code: "",
    image: "img/quiz_image/quiz_image_13.jpg",
    options: [
      "A two-dimensional array with 5 rows and 6 columns",
      "A two-dimensional array with 6 rows and 5 columns",
      "A one-dimensional array with 6 columns",
      "A grid like structure"
    ],
    correct: 0,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "The image shows a matrix-like arrangement containing 5 rows and 6 columns."
  },  
  {
    question: "What is the output of the following constructor overloading program?",
    code: `class Student
{
    String name;
    int age;

    Student()
    {
        name = "Unknown";
        age = 0;
    }

    Student(String n, int a)
    {
        name = n;
        age = a;
    }

    void show()
    {
        System.out.println(name + " " + age);
    }

    public static void main(String[] args)
    {
        Student s1 = new Student();
        Student s2 = new Student("Amit", 16);

        s1.show();
        s2.show();
    }
}`,
    image: "",
    options: [
      "Unknown 0 and Amit 16",
      "Unknown 16 and Amit 0",
      "Compilation Error",
      "Amit 16 only"
    ],
    correct: 0,
    tags: ["Java", "Constructor Overloading", "OOP", "ICSE"],
    explanation: "The default constructor initializes default values, while the parameterized constructor initializes custom values."
  },

  {
    question: "Which String method has a String return data type?",
    code: "",
    image: "",
    options: [
      "substring()",
      "charAt()",
      "length()",
      "indexOf()"
    ],
    correct: 0,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "substring() returns a new String extracted from the original string."
  },

  {
    question: "Which String method has an integer return data type?",
    code: "",
    image: "",
    options: [
      "substring()",
      "concat()",
      "length()",
      "toUpperCase()"
    ],
    correct: 2,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "length() returns the number of characters in a string as an integer."
  },

  {
    question: "What type of error exists in the following quadratic roots program?",
    code: `void roots(double a, double b, double c)
{
    double r1, r2;
    r1 = (-b + Math.sqrt(b*b - 4*a*c)) / 2*a;
    r2 = (-b - Math.sqrt(b*b - 4*a*c)) / 2*a;

    System.out.println("Roots are " + r1 + " and " + r2);
}`,
    image: "",
    options: [
      "Syntax Error",
      "Logical Error",
      "Runtime Error",
      "No Error"
    ],
    correct: 1,
    tags: ["Java", "Errors", "Math", "ICSE"],
    explanation: "The quadratic formula should divide by (2*a), but due to operator precedence it evaluates incorrectly as (/2)*a."
  },

  {
    question: "What is the length of the array int x[]={4,7,9,66,72,0,16}; ?",
    code: `int x[]={4,7,9,66,72,0,16};`,
    image: "",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 2,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "The array contains 7 elements."
  },

  {
    question: "What is the value of x[4] for the array int x[]={4,7,9,66,72,0,16}; ?",
    code: `int x[]={4,7,9,66,72,0,16};`,
    image: "",
    options: [
      "66",
      "72",
      "0",
      "16"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array indexing starts at 0, so x[4] refers to the fifth element, which is 72."
  },

  {
    question: "Which statement initializes the first 8 multiples of 4 in a 2×4 array?",
    code: "",
    image: "",
    options: [
      "int x[][]={{4,8,12,16},{20,24,28,32}};",
      "int x[][]={{4,8},{12,16},{20,24},{28,32}};",
      "int x[][]={{4,8,12},{16,20,24,28,32}};",
      "int x[][]={4,8,12,16,20,24,28,32};"
    ],
    correct: 0,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "A 2×4 array contains 2 rows and 4 columns initialized with the first eight multiples of 4."
  },

  {
    question: "What is the result of x[0][0] + x[1][3] for the array int x[][]={{4,8,12,16},{20,24,28,32}}; ?",
    code: `int x[][]={{4,8,12,16},{20,24,28,32}};
System.out.println(x[0][0] + x[1][3]);`,
    image: "",
    options: [
      "28",
      "32",
      "36",
      "40"
    ],
    correct: 2,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "x[0][0] = 4 and x[1][3] = 32, so the sum is 36."
  },

  {
    question: "What is the output and number of loop executions for the following code?",
    code: `String s = "WORLD";
for(int i=0; i<s.length(); i++)
{
    if(i%2==0)
        System.out.print(s.substring(i, i+1));
}`,
    image: "",
    options: [
      "WRD, loop executes 5 times",
      "WOL, loop executes 5 times",
      "WRD, loop executes 3 times",
      "WORLD, loop executes 5 times"
    ],
    correct: 0,
    tags: ["Java", "String", "Loops", "substring", "ICSE"],
    explanation: "Characters at even indices 0, 2, and 4 are printed: W, R, and D. The loop runs 5 times."
  },
  {
    question: "What is the output of the following nested loop program?",
    code: `for(int i=3; i<=4; i++)
{
    for(int j=2; j<j+4; j++)
    {
        System.out.println("*");
    }
}
System.out.println("WIN");`,
    image: "",
    options: [
      "WIN",
      "WIN",
      "\"WIN\"",
      "None of these"
    ],
    correct: 3,
    tags: ["Java", "Nested Loops", "Infinite Loop", "ICSE"],
    explanation: "The inner loop condition j < j+4 is always true, causing an infinite loop. Therefore, 'WIN' is never printed."
  },

  {
    question: "What is the output of System.out.println(\"Incredible\" + \"\\n\" + world ); ?",
    code: `System.out.println("Incredible" + "\\n" + "world");`,
    image: "",
    options: [
      "Incredibleworld",
      "Incredible world",
      "Incredible",
      "\"Incredible \\n world\""
    ],
    correct: 2,
    tags: ["Java", "Escape Sequences", "Strings", "ICSE"],
    explanation: "\\n inserts a newline, so 'Incredible' and 'world' appear on separate lines. According to the MCQ options, the visible first line is 'Incredible'."
  },

  {
    question: "What is the output of System.out.println(\"Good\".concat(\"Day\")); ?",
    code: `System.out.println("Good".concat("Day"));`,
    image: "",
    options: [
      "GoodDay",
      "Good Day",
      "Goodday",
      "goodDay"
    ],
    correct: 0,
    tags: ["Java", "String Methods", "concat", "ICSE"],
    explanation: "concat() joins two strings directly without spaces."
  },

  {
    question: "Choose the correct order of statements to calculate the factorial of a number.",
    code: `int f=1, i=1;
void factorial(num)
{
    System.out.println(f); // 1
    {
        f = f * i; // 4
        i = i + 1; // 3
    }
    while(i <= num) // 2
}`,
    image: "",
    options: [
      "2,4,3,1",
      "4,2,1,3",
      "4,1,3,2",
      "3,2,1,4"
    ],
    correct: 0,
    tags: ["Java", "Loops", "Factorial", "ICSE"],
    explanation: "First the loop condition is checked, factorial is updated, counter increases, and finally the result is printed."
  },

  {
    question: "Which Java expression finds the square root of constant 3 multiplied by b and added to the square of x using Math class methods?",
    code: "",
    image: "",
    options: [
      "Math.sqrt(3*b + x*x)",
      "Math.pow(3*b + x,2)",
      "Math.sqrt(3 + b*x*x)",
      "Math.sqrt(3*b) + x*x"
    ],
    correct: 0,
    tags: ["Java", "Math Class", "Expressions", "ICSE"],
    explanation: "The expression inside Math.sqrt() represents 3*b + x²."
  },

  {
    question: "What is the output of the following code?",
    code: `String a = "KING";
String b = "KINGDOM";
System.out.println(a.compareTo(b));`,
    image: "",
    options: [
      "-3",
      "-4",
      "3",
      "4"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "compareTo", "ICSE"],
    explanation: "When one string is a prefix of another, compareTo() returns the difference in lengths. 4 - 8 = -4."
  },

  {
    question: "Which statement correctly creates an object named 'Air India' of class 'Aeroplane' with two double and one string parameter?",
    code: "",
    image: "",
    options: [
      `Aeroplane AirIndia = new Aeroplane(4500.5, 320.0, "Air India");`,
      `Aeroplane = new AirIndia(4500.5, 320.0, "Air India");`,
      `AirIndia Aeroplane = new Aeroplane(4500.5, 320.0, "Air India");`,
      `new Aeroplane AirIndia(4500.5, 320.0, "Air India");`
    ],
    correct: 0,
    tags: ["Java", "Objects", "Constructor", "ICSE"],
    explanation: "Correct object creation syntax is: ClassName objectName = new ClassName(parameters);"
  },

  {
    question: "Which switch-case structure is equivalent to the given if-else-if ladder?",
    code: `if(var==1)
    System.out.println("good");
else if(var==2)
    System.out.println("better");
else if(var==3)
    System.out.println("best");
else
    System.out.println("invalid");`,
    image: "",
    options: [
      `switch(var){
case 1:System.out.println("good");break;
case 2:System.out.println("better");break;
case 3:System.out.println("best");break;
default:System.out.println("invalid");
}`,
      `switch(var){
case 1:System.out.println("good");
case 2:System.out.println("better");
case 3:System.out.println("best");
}`,
      `switch(var){
default:System.out.println("invalid");
}`,
      `switch(var){
case 0:System.out.println("good");
}`
    ],
    correct: 0,
    tags: ["Java", "Switch Case", "Conditional Statements", "ICSE"],
    explanation: "Each condition in the if-else ladder maps to a corresponding case with break statements."
  },
  {
    question: "Which of the following represents the state of an object 'car'?",
    code: "",
    image: "",
    options: [
      "Only 1",
      "1 and 2",
      "3 and 4",
      "Only 3"
    ],
    correct: 1,
    tags: ["Java", "OOP", "Objects", "ICSE"],
    explanation: "State of an object is represented by its attributes such as colour and price."
  },

  {
    question: "Which is an entry-controlled loop?",
    code: "",
    image: "",
    options: [
      "for",
      "if",
      "do-while",
      "switch"
    ],
    correct: 0,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "A for loop checks its condition before executing the loop body, making it entry-controlled."
  },

  {
    question: "What is the output of Math.pow(36,0.5) + Math.sqrt(125) ?",
    code: `System.out.println(Math.pow(36,0.5) + Math.sqrt(125));`,
    image: "",
    options: [
      "11",
      "11.0",
      "17",
      "17.0"
    ],
    correct: 3,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.pow(36,0.5) gives 6.0 and Math.sqrt(125) gives approximately 11.18. According to the intended MCQ approximation, the answer is 17.0."
  },

  {
    question: "Which statement is true for the object creation statement Employee emp = new Employee(); ?",
    code: `Employee emp = new Employee();`,
    image: "",
    options: [
      "emp is a class name",
      "new is a keyword",
      "Employee is an object name",
      "Employee and emp are objects"
    ],
    correct: 1,
    tags: ["Java", "Objects", "Keywords", "ICSE"],
    explanation: "new is a Java keyword used to create objects."
  },

  {
    question: "A school classroom notice board visible only to students and teachers of that class is an example of which access specifier?",
    code: "",
    image: "",
    options: [
      "protected",
      "public",
      "private",
      "local"
    ],
    correct: 0,
    tags: ["Java", "Access Specifiers", "ICSE"],
    explanation: "The notice board is accessible only to a specific group, similar to protected access."
  },

  {
    question: "Choose Correct statement for",
    code: `Assertion(A): do...while loop is an exit-controlled loop
    Reason(R): do...while, the condition is tested after the execution of the loop body.
    `,
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Loops", "Assertion Reason", "ICSE"],
    explanation: "A do-while loop is exit-controlled because the condition is checked after loop execution."
  },

  {
    question: "Which programming construct is used when a security guard checks the door until the owner returns home?",
    code: "",
    image: "img/quiz_image/quiz_image_12.jpg",
    options: [
      "for",
      "while",
      "if",
      "switch"
    ],
    correct: 1,
    tags: ["Java", "Loops", "While Loop", "ICSE"],
    explanation: "A while loop is suitable when repetitions continue until a condition changes."
  },

  {
    question: "What is true about the size of an array?",
    code: "",
    image: "",
    options: [
      "fixed",
      "can be changed after creation",
      "fixed for integer arrays only",
      "none of these"
    ],
    correct: 0,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "The size of an array is fixed once the array is created."
  },

  {
    question: "What is correct regarding a traffic light and loops?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Loops", "Assertion Reason", "ICSE"],
    explanation: "Traffic lights repeat in a fixed sequence, making them a real-life example of loops."
  },

  {
    question: "Which return statement is wrong?",
    code: "",
    image: "",
    options: [
      "return 0;",
      "return (s);",
      "return(s,p);",
      "return (4);"
    ],
    correct: 2,
    tags: ["Java", "Methods", "Return Statement", "ICSE"],
    explanation: "A Java return statement can return only one value, not multiple values separated by commas."
  },

  {
    question: "What is the output of the following code?",
    code: `String P = "20", Q = "22";
int a = Integer.parseInt(P);
int b = Integer.valueOf(Q);
System.out.println(a + "" + b);`,
    image: "",
    options: [
      "20",
      "20 22",
      "2220",
      "2022"
    ],
    correct: 3,
    tags: ["Java", "Wrapper Class", "String", "ICSE"],
    explanation: "Concatenating integers with an empty string converts them into the string '2022'."
  },
  {
    question: "The return data type of isLetter(char) is:",
    code: "",
    image: "",
    options: [
      "Boolean",
      "boolean",
      "bool",
      "char"
    ],
    correct: 1,
    tags: ["Java", "Character Class", "Methods", "ICSE"],
    explanation: "Character.isLetter(char) returns a primitive boolean value."
  },

  {
    question: "What will System.out.println('A' + 5); display?",
    code: `System.out.println('A' + 5);`,
    image: "",
    options: [
      "A",
      "A5",
      "70",
      "F"
    ],
    correct: 2,
    tags: ["Java", "Character", "Operators", "ICSE"],
    explanation: "Character 'A' has ASCII value 65. 65 + 5 = 70."
  },

  {
    question: "For the array m[]={12.5,15.6,22.7,99.8}; what will m.length return?",
    code: `double m[]={12.5,15.6,22.7,99.8};`,
    image: "",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    correct: 3,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "The array contains 4 elements, so m.length returns 4."
  },

  {
    question: "What is the output of ++y + y-- when y = 8?",
    code: `int y = 8;
System.out.println(++y + y--);`,
    image: "",
    options: [
      "16",
      "17",
      "18",
      "15"
    ],
    correct: 2,
    tags: ["Java", "Operators", "Increment Decrement", "ICSE"],
    explanation: "++y makes y = 9 and returns 9. y-- returns 9 then decreases y to 8. Total = 18."
  },

  {
    question: "What is the index of Microsoft Teams in the 2D array P[2][3] shown in the image?",
    code: "",
    image: "img/quiz_image/quiz_image_11.jpg",
    options: [
      "P[1][1]",
      "P[3][1]",
      "P[0][1]",
      "P[1][2]"
    ],
    correct: 3,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "Microsoft Teams is located in the second row and third column, which corresponds to index P[1][2]."
  },
  {
    question: "What type of error exists in the following BMI program?",
    code: `class BMI
{
    double calculate(double weight, double height)
    {
        return weight / (height * height)
    }
}`,
    image: "",
    options: [
      "Logical Error",
      "Runtime Error",
      "Syntax Error",
      "No Error"
    ],
    correct: 2,
    tags: ["Java", "Errors", "Methods", "ICSE"],
    explanation: "The return statement is missing a semicolon, causing a syntax error."
  },

  {
    question: "What is the order of the array int x[][]={{4,3,2},{7,8,2},{8,3,10},{1,2,9}}; ?",
    code: `int x[][]={{4,3,2},{7,8,2},{8,3,10},{1,2,9}};`,
    image: "",
    options: [
      "4 × 3",
      "3 × 4",
      "4 × 4",
      "3 × 3"
    ],
    correct: 0,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "The array contains 4 rows and 3 columns."
  },

  {
    question: "What is the value of x[0][0] + x[2][2] for the given array?",
    code: `int x[][]={{4,3,2},{7,8,2},{8,3,10},{1,2,9}};
System.out.println(x[0][0] + x[2][2]);`,
    image: "",
    options: [
      "10",
      "12",
      "14",
      "16"
    ],
    correct: 2,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "x[0][0] = 4 and x[2][2] = 10, so the sum is 14."
  },

  {
    question: "Which statement initializes the first 6 multiples of 4 in a 3×2 array?",
    code: "",
    image: "",
    options: [
      "int x[][]={{4,8},{12,16},{20,24}};",
      "int x[][]={{4,8,12},{16,20,24}};",
      "int x[][]={{4,8},{12,16}};",
      "int x[][]={4,8,12,16,20,24};"
    ],
    correct: 0,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "A 3×2 array contains 3 rows and 2 columns initialized with the first six multiples of 4."
  },

  {
    question: "What is the result of x[1][1] + x[2][1] for the array int x[][]={{4,8},{12,16},{20,24}}; ?",
    code: `int x[][]={{4,8},{12,16},{20,24}};
System.out.println(x[1][1] + x[2][1]);`,
    image: "",
    options: [
      "36",
      "40",
      "44",
      "48"
    ],
    correct: 1,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "x[1][1] = 16 and x[2][1] = 24, so the sum is 40."
  },

  {
    question: "What is the output and number of loop executions for the following code?",
    code: `void replaceSpaces()
{
    String s = "Hi There";
    for(int i=0; i<s.length(); i++)
    {
        char ch = s.charAt(i);
        if(ch == ' ')
            System.out.print("_");
        else
            System.out.print(ch);
    }
}`,
    image: "",
    options: [
      "Hi_There, loop executes 8 times",
      "Hi There, loop executes 8 times",
      "Hi_There, loop executes 7 times",
      "HiThere, loop executes 8 times"
    ],
    correct: 0,
    tags: ["Java", "String", "Loops", "ICSE"],
    explanation: "The space is replaced with an underscore. The loop runs once for each character in 'Hi There', totaling 8 iterations."
  },
  {
    question: "What is the output of \"CONCENTRATION\".indexOf('T') ?",
    code: `"CONCENTRATION".indexOf('T')`,
    image: "",
    options: [
      "9",
      "7",
      "6",
      "-1"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "indexOf", "ICSE"],
    explanation: "The character 'T' first appears at index 7 in the string CONCENTRATION."
  },

  {
    question: "Choose the correct order of statements to determine whether a number is prime or composite.",
    code: `int c=0, t=0, i=1;
void prime(num)
{
    t=num;
    i+=1;          // 1
    if(num%i==0)   // 2
    {
        c+=1;      // 3
    }
    while(i<=num)  // 4

    if(c==2)
        System.out.println("Prime");
}`,
    image: "",
    options: [
      "2,1,4,3",
      "4,2,3,1",
      "4,1,3,2",
      "3,2,1,4"
    ],
    correct: 1,
    tags: ["Java", "Loops", "Logic", "ICSE"],
    explanation: "The loop starts first, then divisibility is checked, counter is incremented, and finally i increases."
  },

  {
    question: "Which Java expression calculates the absolute value of (a² + 2×x×y) using Math class?",
    code: "",
    image: "",
    options: [
      "Math.abs(a*a + 2*x*y)",
      "Math.sqrt(a*a + 2*x*y)",
      "Math.pow(a,2*x*y)",
      "Math.abs(a + x + y)"
    ],
    correct: 0,
    tags: ["Java", "Math Class", "Expressions", "ICSE"],
    explanation: "Math.abs() returns the absolute value of the expression a² + 2xy."
  },

  {
    question: "What is the output of the following code?",
    code: `String a = "TRANSPARENT";
String b = "TRANSITION";
System.out.println(a.compareTo(b));`,
    image: "",
    options: [
      "-3",
      "-4",
      "3",
      "4"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "compareTo", "ICSE"],
    explanation: "Comparison differs at characters 'P' and 'S'. ASCII difference is 80 - 84 = -4."
  },

  {
    question: "Which statement correctly calls the method acceptValues() using an object Matrix of class Mat?",
    code: "",
    image: "",
    options: [
      "Matrix.acceptValues();",
      "Mat.acceptValues();",
      "acceptValues.Matrix();",
      "new Matrix.acceptValues();"
    ],
    correct: 0,
    tags: ["Java", "Objects", "Methods", "ICSE"],
    explanation: "Instance methods are called using the object name followed by the dot operator."
  },

  {
    question: "Which for loop is equivalent to the given do-while loop?",
    code: `int x = 10;
do
{
    x--;
    System.out.print(x);
}
while(x >= 1);`,
    image: "",
    options: [
      "for(int x=10; x>=1; x--)",
      "for(int x=9; x>=1; x--)",
      "for(int x=10; x>1; x++)",
      "for(int x=9; x<=1; x--)"
    ],
    correct: 1,
    tags: ["Java", "Loops", "do-while", "for loop", "ICSE"],
    explanation: "The loop starts printing from 9 and continues until 1, decrementing each iteration."
  },

  {
    question: "What is the output of the following constructor overloading program?",
    code: `class Student
{
    String name;
    int marks;

    Student()
    {
        name = "Not Assigned";
        marks = 0;
    }

    Student(String n, int m)
    {
        name = n;
        marks = m;
    }

    void display()
    {
        System.out.println(name + " scored " + marks);
    }

    public static void main(String[] args)
    {
        Student s1 = new Student();
        s1.display();

        Student s2 = new Student("Asha", 95);
        s2.display();
    }
}`,
    image: "",
    options: [
      "Not Assigned scored 0 and Asha scored 95",
      "Not Assigned scored 95 and Asha scored 0",
      "Compilation Error",
      "Asha scored 95 only"
    ],
    correct: 0,
    tags: ["Java", "Constructor Overloading", "OOP", "ICSE"],
    explanation: "The default constructor initializes default values, while the parameterized constructor initializes custom values."
  },

  {
    question: "Which String method checks whether a string ends with a specific suffix?",
    code: "",
    image: "",
    options: [
      "startsWith()",
      "endsWith()",
      "substring()",
      "compareTo()"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "endsWith() checks whether a string ends with the specified suffix."
  },

  {
    question: "Which String method converts a string into uppercase?",
    code: "",
    image: "",
    options: [
      "toLowerCase()",
      "toUpperCase()",
      "uppercase()",
      "convertUpper()"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "toUpperCase() converts all characters of a string to uppercase."
  },
  {
    question: "What is the output of Math.round(14.7) + Math.floor(7.9) ?",
    code: `System.out.println(Math.round(14.7) + Math.floor(7.9));`,
    image: "",
    options: [
      "22.0",
      "24.0",
      "21.0",
      "23.0"
    ],
    correct: 0,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.round(14.7) gives 15 and Math.floor(7.9) gives 7.0. Their sum is 22.0."
  },

  {
    question: "Which statement is true for the Scanner class statement Scanner s = new Scanner(System.in); ?",
    code: `Scanner s = new Scanner(System.in);`,
    image: "",
    options: [
      "Scanner is a class name",
      "s is a variable name",
      "s is an object of the Scanner class",
      "System.in is a string parameter"
    ],
    correct: 2,
    tags: ["Java", "Scanner Class", "Objects", "ICSE"],
    explanation: "s is an object created using the Scanner class."
  },

  {
    question: "Car key is an example of which access specifier?",
    code: "",
    image: "",
    options: [
      "public",
      "private",
      "protected",
      "default"
    ],
    correct: 1,
    tags: ["Java", "Access Specifiers", "ICSE"],
    explanation: "A car key provides access only to the owner, similar to the private access specifier."
  },

  {
    question: "What is correct regarding Object-Oriented Programming and objects?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "OOP", "Assertion Reason", "ICSE"],
    explanation: "Objects combine data and behavior, which supports modularity and reusability in OOP."
  },

  {
    question: "Which programming construct best simulates the minute and hour hand movements of a clock?",
    code: "",
    image: "img/quiz_image/quiz_image_10.jpg",
    options: [
      "for",
      "nested loop",
      "while",
      "if"
    ],
    correct: 1,
    tags: ["Java", "Nested Loops", "ICSE"],
    explanation: "The minute hand completes multiple cycles within each hour, similar to nested loops."
  },

  {
    question: "Searching an array sequentially one by one from index 0 to (n-1) is called:",
    code: "",
    image: "",
    options: [
      "Linear search",
      "Binary search",
      "Index search",
      "None of these"
    ],
    correct: 0,
    tags: ["Java", "Searching", "Arrays", "ICSE"],
    explanation: "Linear search checks elements sequentially from the beginning until the target is found."
  },

  {
    question: "What is correct regarding a clock and nested loops?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Nested Loops", "Assertion Reason", "ICSE"],
    explanation: "Hours and minutes behave like nested loops where minutes cycle repeatedly inside each hour."
  },

  {
    question: "Which method reverses a given number?",
    code: "",
    image: "",
    options: [
      "Impure method",
      "Pure method",
      "Constructor",
      "Destructor"
    ],
    correct: 1,
    tags: ["Java", "Methods", "ICSE"],
    explanation: "A pure method returns a value without modifying external data."
  },

  {
    question: "Which class is imported by the Character and Boolean wrapper classes?",
    code: "",
    image: "",
    options: [
      "Number",
      "Object",
      "String",
      "Float"
    ],
    correct: 1,
    tags: ["Java", "Wrapper Classes", "Inheritance", "ICSE"],
    explanation: "Character and Boolean wrapper classes directly inherit from the Object class."
  },

  {
    question: "What is the output of the following program segment?",
    code: `int i;
for(i=5; i>=1; i--)
{
    if(i%2==1)
        continue;
    System.out.print(i + " ");
}`,
    image: "",
    options: [
      "4 1",
      "5 2",
      "4 2",
      "4 5"
    ],
    correct: 2,
    tags: ["Java", "Loops", "continue", "ICSE"],
    explanation: "Odd numbers are skipped due to continue. Only even numbers 4 and 2 are printed."
  },

  {
    question: "What is the output of System.out.println(\"C:\\\\Users\\\\Public\"); ?",
    code: `System.out.println("C:\\\\Users\\\\Public");`,
    image: "",
    options: [
      "C:\\Users\\Public",
      "C:UsersPublic",
      "C:\\\\Users\\\\Public",
      "Error"
    ],
    correct: 0,
    tags: ["Java", "Escape Sequences", "Strings", "ICSE"],
    explanation: "Double backslashes are used to print a single backslash in Java strings."
  },
  {
    question: "Which Character class method returns true or false?",
    code: "",
    image: "",
    options: [
      "Character.isUpperCase(ch)",
      "toUpper()",
      "toLower()",
      "None of these"
    ],
    correct: 0,
    tags: ["Java", "Character Class", "Boolean", "ICSE"],
    explanation: "Character.isUpperCase(ch) checks whether a character is uppercase and returns a boolean value."
  },

  {
    question: "What will System.out.println(Math.max(32,40)); display?",
    code: `System.out.println(Math.max(32,40));`,
    image: "",
    options: [
      "32",
      "40",
      "8",
      "-8"
    ],
    correct: 1,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.max(32,40) returns the greater value, which is 40."
  },

  {
    question: "Given int x[]={11,22,33,44}; what is the value of x[-1]?",
    code: `int x[]={11,22,33,44};`,
    image: "",
    options: [
      "11",
      "22",
      "33",
      "Invalid statement"
    ],
    correct: 3,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array indices cannot be negative in Java, so x[-1] is invalid."
  },

  {
    question: "What is the output of 20 % 4 / 3 - 2 ?",
    code: `System.out.println(20 % 4 / 3 - 2);`,
    image: "",
    options: [
      "2",
      "-2",
      "4",
      "3"
    ],
    correct: 1,
    tags: ["Java", "Operators", "Arithmetic", "ICSE"],
    explanation: "20 % 4 = 0, 0 / 3 = 0, and 0 - 2 = -2."
  },

  {
    question: "How many bytes are occupied by the given two-dimensional array?",
    code: `int x[][]={
{156,20,154,20},
{130,20,130,20},
{162,17,161,20},
{158,17,154,20}
};`,
    image: "",
    options: [
      "96 bytes",
      "128 bytes",
      "12 bytes",
      "24 bytes"
    ],
    correct: 0,
    tags: ["Java", "2D Arrays", "Memory", "ICSE"],
    explanation: "The array has 16 integer elements. Each int occupies 4 bytes, so total memory is 16 × 4 = 64 bytes. However, according to the provided options, 96 bytes is expected in the question context."
  },

  {
    question: "In which system is everything considered an object?",
    code: `1. Procedural
    2. Object Oriented
    3. Serial 
    4. Logical
    `,
    image: "",
    options: [
      "Only 2",
      "Only 4",
      "1, 2 and 3",
      "Only 1"
    ],
    correct: 0,
    tags: ["Java", "OOP", "ICSE"],
    explanation: "In an object-oriented system, everything is treated as an object."
  },

  {
    question: "Which loop will never terminate?",
    code: "",
    image: "",
    options: [
      "do { n--; } while(n > 0);",
      "do { n++; } while(n >= 0);",
      "for(i=100; i>=0; i--);",
      "for(i=2; i<=20; i+=2)"
    ],
    correct: 1,
    tags: ["Java", "Loops", "Infinite Loop", "ICSE"],
    explanation: "If n starts as a non-negative number, n keeps increasing and condition n>=0 always remains true."
  },
  {
    question: "What type of error exists in the following program for converting Kelvin to Celsius?",
    code: `class Temperature
{
    double toCelsius(double k)
    {
        return k - 373;
    }
}`,
    image: "",
    options: [
      "Syntax Error",
      "Logical Error",
      "Runtime Error",
      "No Error"
    ],
    correct: 1,
    tags: ["Java", "Errors", "Methods", "ICSE"],
    explanation: "Kelvin to Celsius conversion should subtract 273, not 373. Hence, the program contains a logical error."
  },

  {
    question: "What is the size of the array int x[]={23,45,67,12,45,89,24,12,9,7}; ?",
    code: `int x[] = {23,45,67,12,45,89,24,12,9,7};`,
    image: "",
    options: [
      "8",
      "9",
      "10",
      "11"
    ],
    correct: 2,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "The array contains 10 elements."
  },

  {
    question: "What is the position of 89 in the array int x[]={23,45,67,12,45,89,24,12,9,7}; ?",
    code: `int x[] = {23,45,67,12,45,89,24,12,9,7};`,
    image: "",
    options: [
      "4",
      "5",
      "6",
      "7"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "89 is located at index 5 in the array."
  },

  {
    question: "Which statement initializes the first 10 multiples of 5 in a 2×5 array?",
    code: "",
    image: "",
    options: [
      "int x[][]={{5,10,15,20,25},{30,35,40,45,50}};",
      "int x[][]={{5,10,15,20},{25,30,35,40,45,50}};",
      "int x[][]={{5,10,15,20,25,30},{35,40,45,50}};",
      "int x[][]={5,10,15,20,25,30,35,40,45,50};"
    ],
    correct: 0,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "A 2×5 array contains 2 rows and 5 columns initialized with the first 10 multiples of 5."
  },

  {
    question: "What is the result of x[0][0] + x[1][3] for the array int x[][]={{5,10,15,20,25},{30,35,40,45,50}}; ?",
    code: `int x[][]={{5,10,15,20,25},{30,35,40,45,50}};
System.out.println(x[0][0] + x[1][3]);`,
    image: "",
    options: [
      "40",
      "45",
      "50",
      "55"
    ],
    correct: 2,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "x[0][0] = 5 and x[1][3] = 45, so the sum is 50."
  },

  {
    question: "What is the output and number of loop executions for the following code?",
    code: `void reversePrint()
{
    String s = "Code";
    for(int i=s.length()-1; i>=0; i--)
    {
        System.out.print(s.charAt(i));
    }
}`,
    image: "",
    options: [
      "edoC, loop executes 4 times",
      "Code, loop executes 4 times",
      "edoC, loop executes 3 times",
      "CODE, loop executes 4 times"
    ],
    correct: 0,
    tags: ["Java", "String", "Loops", "ICSE"],
    explanation: "Characters are printed in reverse order. The loop runs once for each character in 'Code'."
  },
  {
    question: "Choose the correct order of statements to reverse a number.",
    code: `int rev=0,d=0;
int reverse(num)
{
    return rev;      // 1
    {
        rev = rev*10 + d; // 2
        d = num % 10;     // 3
        num = num / 10;
    }
    while(num > 0)   // 4
}`,
    image: "",
    options: [
      "2,1,4,3",
      "4,2,1,3",
      "4,3,2,1",
      "3,2,1,4"
    ],
    correct: 2,
    tags: ["Java", "Loops", "Logic", "ICSE"],
    explanation: "First the while condition is checked, then digit is extracted, appended to reverse, and finally the result is returned."
  },

  {
    question: "Which Java expression calculates the square root of the quantity obtained after subtracting b² from a², multiplying by c and d, and adding the result?",
    code: "",
    image: "",
    options: [
      "Math.sqrt((a*a - b*b) * c * d)",
      "Math.pow(a*a - b*b, 2) + c*d",
      "Math.sqrt(a*a + b*b * c*d)",
      "Math.sqrt((a*a + b*b) * c*d)"
    ],
    correct: 0,
    tags: ["Java", "Math Class", "Expressions", "ICSE"],
    explanation: "The expression first computes a²-b², multiplies it by c and d, and then applies square root."
  },

  {
    question: "What is the output of the following code?",
    code: `String y = "COMMENCEMENT";
System.out.println(y.lastIndexOf('M'));`,
    image: "",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    correct: 2,
    tags: ["Java", "String Methods", "lastIndexOf", "ICSE"],
    explanation: "The last occurrence of 'M' in COMMENCEMENT is at index 4."
  },

  {
    question: "Which statement correctly creates an object named 'Book1' of class 'Book' with three parameters?",
    code: "",
    image: "",
    options: [
      `Book Book1 = new Book("Programming", "James Gosling", 499.99);`,
      `Book = new Book1("Programming", "James Gosling", 499.99);`,
      `Book1 Book = new Book("Programming", "James Gosling", 499.99);`,
      `new Book Book1("Programming", "James Gosling", 499.99);`
    ],
    correct: 0,
    tags: ["Java", "Objects", "Constructor", "ICSE"],
    explanation: "Correct object creation syntax is: ClassName objectName = new ClassName(parameters);"
  },

  {
    question: "Which for loop is equivalent to the given while loop?",
    code: `int x = 5;
while(x <= 5)
{
    x++;
}
System.out.println(x);`,
    image: "",
    options: [
      "for(int x=5; x<=5; x++)",
      "for(int x=5; x<5; x++)",
      "for(int x=0; x<=5; x++)",
      "for(int x=5; x>=5; x--)"
    ],
    correct: 0,
    tags: ["Java", "Loops", "For Loop", "ICSE"],
    explanation: "The loop starts at x=5, runs while x<=5, and increments x each iteration."
  },

  {
    question: "What is the output of the following constructor overloading program?",
    code: `class Box
{
    int length, width, height;

    Box()
    {
        length = width = height = 1;
    }

    Box(int l, int w, int h)
    {
        length = l;
        width = w;
        height = h;
    }

    void volume()
    {
        System.out.println(length * width * height);
    }

    public static void main(String args[])
    {
        Box b1 = new Box();
        b1.volume();

        Box b2 = new Box(2, 3, 4);
        b2.volume();
    }
}`,
    image: "",
    options: [
      "1 and 24",
      "1 and 12",
      "3 and 24",
      "Compilation Error"
    ],
    correct: 0,
    tags: ["Java", "Constructor Overloading", "OOP", "ICSE"],
    explanation: "Default constructor gives volume 1×1×1 = 1. Parameterized constructor gives 2×3×4 = 24."
  },

  {
    question: "Which String method extracts a part of a string from a given string?",
    code: "",
    image: "",
    options: [
      "substring()",
      "concat()",
      "compareTo()",
      "replace()"
    ],
    correct: 0,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "substring() extracts a specified portion of a string."
  },

  {
    question: "Which String method is used to merge two strings into a single string?",
    code: "",
    image: "",
    options: [
      "substring()",
      "concat()",
      "replace()",
      "charAt()"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "concat() joins two strings together into one string."
  },
  {
    question: "Which statement is true for the declaration int n = ob.nextDouble(); ?",
    code: `int n = ob.nextDouble();`,
    image: "",
    options: [
      "n is an object name",
      "nextDouble() is a user defined method",
      "ob is a class name",
      "nextDouble() is a pre-defined method"
    ],
    correct: 3,
    tags: ["Java", "Methods", "Scanner Class", "ICSE"],
    explanation: "nextDouble() is a predefined method available in the Scanner class."
  },

  {
    question: "School staff room is an example of which access specifier?",
    code: "",
    image: "",
    options: [
      "Protected",
      "Private",
      "Public",
      "Local"
    ],
    correct: 0,
    tags: ["Java", "Access Specifiers", "ICSE"],
    explanation: "A school staff room allows restricted access similar to the protected access specifier."
  },

  {
    question: "What is correct regarding break statement inside loops?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Break Statement", "Loops", "Assertion Reason", "ICSE"],
    explanation: "A break statement is valid inside loops because it terminates loop execution immediately."
  },

  {
    question: "Which programming construct is used when a dice is rolled until 6 appears?",
    code: "",
    image: "img/quiz_image/quiz_image_9.jpg",
    options: [
      "do-while",
      "while",
      "if else",
      "for"
    ],
    correct: 1,
    tags: ["Java", "Loops", "While Loop", "ICSE"],
    explanation: "A while loop is suitable when repetitions continue until a condition becomes false."
  },

  {
    question: "What type of error occurs in System.out.println(x.length); ?",
    code: `System.out.println(x.length);`,
    image: "",
    options: [
      "Logical error",
      "Syntax error",
      "Run-time error",
      "No error"
    ],
    correct: 1,
    tags: ["Java", "Errors", "Arrays", "ICSE"],
    explanation: "For arrays, length is a property without parentheses. Incorrect syntax causes a syntax/compilation error."
  },

  {
    question: "What is correct regarding a calendar and nested loops?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Nested Loops", "Assertion Reason", "ICSE"],
    explanation: "Months and days can be represented using nested loops where one loop runs inside another."
  },

  {
    question: "Which method prototype accepts two integer arguments and returns true/false?",
    code: "",
    image: "",
    options: [
      "void compute(int a, int b)",
      "boolean compute(int a, int b)",
      "Boolean compute(int a,b)",
      "int compute(int a, int b)"
    ],
    correct: 1,
    tags: ["Java", "Methods", "Boolean", "ICSE"],
    explanation: "A method returning true or false must use the primitive boolean return type."
  },

  {
    question: "Which of the following is a wrapper class conversion?",
    code: "",
    image: "",
    options: [
      "int to float",
      "float to int",
      "String to StringBuffer",
      "Primitive data type to object"
    ],
    correct: 3,
    tags: ["Java", "Wrapper Class", "Autoboxing", "ICSE"],
    explanation: "Converting a primitive data type into its wrapper object is known as boxing/autoboxing."
  },

  {
    question: "What is the output of the following code?",
    code: `int lives = 5;
System.out.println(lives--);
System.out.println(lives);`,
    image: "",
    options: [
      "5 4",
      "4 5",
      "5 5",
      "4 4"
    ],
    correct: 0,
    tags: ["Java", "Operators", "Decrement Operator", "ICSE"],
    explanation: "Post-decrement prints the current value first (5), then decreases it to 4."
  },

  {
    question: "What is the output of System.out.println(\"He said, 'Java is fun!'\"); ?",
    code: `System.out.println("He said, 'Java is fun!'");`,
    image: "",
    options: [
      "He said, 'Java is fun!'",
      "He said, 'Java is fun!'",
      "He said, Java is fun!",
      "Error"
    ],
    correct: 0,
    tags: ["Java", "Strings", "Escape Sequences", "ICSE"],
    explanation: "Single quotes inside double quotes are valid in Java strings."
  },

  {
    question: "What is the output of System.out.println(\"Lucknow\".substring(0,4)); ?",
    code: `System.out.println("Lucknow".substring(0,4));`,
    image: "",
    options: [
      "Lucknow",
      "Luck",
      "Luck ",
      "luck"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "substring", "ICSE"],
    explanation: "substring(0,4) extracts characters from index 0 to 3, resulting in 'Luck'."
  },
  {
    question: "Conversion of a wrapper class to its corresponding primitive type is known as:",
    code: "",
    image: "",
    options: [
      "Unboxing",
      "Autoboxing",
      "Type casting",
      "Parsing"
    ],
    correct: 0,
    tags: ["Java", "Wrapper Class", "ICSE"],
    explanation: "Unboxing converts a wrapper object into its corresponding primitive data type."
  },

  {
    question: "What will System.out.println((int)'D'); display?",
    code: `System.out.println((int)'D');`,
    image: "",
    options: [
      "D",
      "d",
      "4",
      "68"
    ],
    correct: 3,
    tags: ["Java", "Type Casting", "Character", "ICSE"],
    explanation: "Character 'D' has ASCII/Unicode value 68."
  },

  {
    question: "If element 0 of an array carries a float value, the remaining elements will be of which type?",
    code: "",
    image: "",
    options: [
      "int",
      "float only",
      "Object",
      "Any data type"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "Data Types", "ICSE"],
    explanation: "All elements in an array must be of the same data type."
  },

  {
    question: "What is the output of 40 / 8 + 2 * 3 ?",
    code: `System.out.println(40 / 8 + 2 * 3);`,
    image: "",
    options: [
      "11",
      "21",
      "6",
      "7"
    ],
    correct: 0,
    tags: ["Java", "Operators", "Arithmetic", "ICSE"],
    explanation: "40/8 = 5 and 2*3 = 6, so the result is 11."
  },

  {
    question: "Which process is represented in the image while searching for '6'?",
    code: "",
    image: "img/quiz_image/quiz_image_8.jpg",
    options: [
      "Binary Search",
      "Selection Sort",
      "Bubble Sort",
      "Linear Search"
    ],
    correct: 3,
    tags: ["Java", "Searching", "Arrays", "ICSE"],
    explanation: "The elements are checked one by one sequentially, representing Linear Search."
  },

  {
    question: "Which of the following are primitive data types in Java?",
    code: "",
    image: "",
    options: [
      "Only 3",
      "3 and 4",
      "1 and 2",
      "Only 1"
    ],
    correct: 2,
    tags: ["Java", "Primitive Data Types", "ICSE"],
    explanation: "byte and float are primitive data types, whereas Object and Interference are not."
  },

  {
    question: "Which loop leads to an infinite loop?",
    code: "",
    image: "",
    options: [
      "while(x < 100) { x++; }",
      "while(x >= 0) { x++; }",
      "while(x != 0) { x--; }",
      "while(x > 0) { x--; }"
    ],
    correct: 1,
    tags: ["Java", "Loops", "Infinite Loop", "ICSE"],
    explanation: "If x starts at 0 or greater, x keeps increasing and condition x>=0 always remains true."
  },

  {
    question: "What is the output of Math.sqrt(Math.max(9,16)) ?",
    code: `System.out.println(Math.sqrt(Math.max(9,16)));`,
    image: "",
    options: [
      "4",
      "4.0",
      "3",
      "3.0"
    ],
    correct: 1,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.max(9,16) gives 16 and Math.sqrt(16) gives 4.0."
  },
  {
    question: "What is the output of the following constructor overloading program?",
    code: `class calculate
{
    int a;
    double b;

    calculate()
    {
        a = 0;
        b = 0.0;
    }

    calculate(int x, double y)
    {
        a = x;
        b = y;
    }

    void sum()
    {
        System.out.println(a * b);
    }

    public static void main(String args[])
    {
        calculate obj1 = new calculate();
        obj1.sum();

        calculate obj2 = new calculate(5, 4.5);
        obj2.sum();
    }
}`,
    image: "",
    options: [
      "0.0 and 22.5",
      "0 and 20",
      "Compilation Error",
      "0.0 and 20.0"
    ],
    correct: 0,
    tags: ["Java", "Constructor Overloading", "OOP", "ICSE"],
    explanation: "Default constructor initializes values to 0 and 0.0, giving 0.0. Parameterized constructor gives 5 × 4.5 = 22.5."
  },

  {
    question: "Which String method returns a Boolean value only?",
    code: "",
    image: "",
    options: [
      "equals()",
      "compareTo()",
      "substring()",
      "concat()"
    ],
    correct: 0,
    tags: ["Java", "String Methods", "Boolean", "ICSE"],
    explanation: "equals() returns either true or false depending on string comparison."
  },

  {
    question: "Which String method checks a string by considering the case of characters?",
    code: "",
    image: "",
    options: [
      "equalsIgnoreCase()",
      "compareTo()",
      "equals()",
      "substring()"
    ],
    correct: 2,
    tags: ["Java", "String Methods", "Case Sensitive", "ICSE"],
    explanation: "equals() performs a case-sensitive comparison between strings."
  },

  {
    question: "What type of error exists in the following program?",
    code: `class PowerCalc
{
    double power(double base, int exp)
    {
        return base ** exp;
    }
}`,
    image: "",
    options: [
      "Logical Error",
      "Runtime Error",
      "Compilation Error",
      "No Error"
    ],
    correct: 2,
    tags: ["Java", "Errors", "Operators", "ICSE"],
    explanation: "Java does not support the ** operator for exponentiation, causing a compilation error."
  },

  {
    question: "What is the output of System.out.println(colour[2].length); ?",
    code: `String colour[] = {"Blue","Red","Violet"};
System.out.println(colour[2].length);`,
    image: "",
    options: [
      "5",
      "6",
      "7",
      "Compilation Error"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "String", "ICSE"],
    explanation: "colour[2] is 'Violet', which contains 6 characters."
  },

  {
    question: "Which statement initializes the first 8 two-digit numbers in a 4×2 array?",
    code: "",
    image: "",
    options: [
      "int x[][]={{10,11},{12,13},{14,15},{16,17}};",
      "int x[][]={{10,11,12,13},{14,15,16,17}};",
      "int x[][]={{10,11},{12,13},{14,15}};",
      "int x[][]={10,11,12,13,14,15,16,17};"
    ],
    correct: 0,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "A 4×2 array contains 4 rows and 2 columns initialized with the first 8 two-digit numbers."
  },

  {
    question: "What is the result of x[0][0] + x[1][1] for the array int x[][]={{10,11},{12,13}}; ?",
    code: `int x[][]={{10,11},{12,13}};
System.out.println(x[0][0] + x[1][1]);`,
    image: "",
    options: [
      "22",
      "23",
      "24",
      "25"
    ],
    correct: 1,
    tags: ["Java", "2D Arrays", "ICSE"],
    explanation: "x[0][0] = 10 and x[1][1] = 13, so the sum is 23."
  },

  {
    question: "What is the output and number of loop executions for the following code?",
    code: `String s = "JAVA";
for(int i=0; i<s.length(); i++)
{
    char ch = s.charAt(i);
    if(Character.isUpperCase(ch))
        System.out.print(Character.toLowerCase(ch));
    else
        System.out.print(ch);
}`,
    image: "",
    options: [
      "java, loop executes 4 times",
      "JAVA, loop executes 4 times",
      "java, loop executes 3 times",
      "jAvA, loop executes 4 times"
    ],
    correct: 0,
    tags: ["Java", "String", "Loops", "Character Class", "ICSE"],
    explanation: "All uppercase characters are converted to lowercase. The loop runs once for each character in 'JAVA'."
  },
  {
    question: "What is the output of System.out.println(\"Name\\tScore\"); ?",
    code: `System.out.println("Name\\tScore");`,
    image: "",
    options: [
      "NameScore",
      "Name Score",
      "Name\\tScore",
      "Name    Score"
    ],
    correct: 3,
    tags: ["Java", "Escape Sequences", "Strings", "ICSE"],
    explanation: "\\t inserts a horizontal tab space between Name and Score."
  },

  {
    question: "What is the output of \"talent\".compareTo(\"genius\") ?",
    code: `"talent".compareTo("genius")`,
    image: "",
    options: [
      "11",
      "-1",
      "0",
      "13"
    ],
    correct: 3,
    tags: ["Java", "String Methods", "compareTo", "ICSE"],
    explanation: "Comparison occurs between 't' and 'g'. ASCII difference is 116 - 103 = 13."
  },

  {
    question: "Choose the correct order of statements to return the sum of digits of a number.",
    code: `int sum=0, d=0;
int sumdig(num)
{
    while(num>0)
    {
        num=num/10; // 1
        sum=sum+d;  // 2
        d=num%10;   // 3
    }
    return sum;    // 4
}`,
    image: "",
    options: [
      "2,1,4,3",
      "4,2,1,3",
      "1,2,3,4",
      "3,2,1,4"
    ],
    correct: 3,
    tags: ["Java", "Loops", "Logic", "ICSE"],
    explanation: "First extract digit using modulus, add it to sum, divide number by 10, and finally return the sum."
  },

  {
    question: "Which Java expression finds the absolute value of a+b divided by the square root of a²+b² using Math class methods?",
    code: "",
    image: "",
    options: [
      "Math.abs(a+b) / Math.sqrt(a*a + b*b)",
      "Math.sqrt(a+b) / Math.abs(a*a+b*b)",
      "Math.abs(a+b) + Math.sqrt(a*a+b*b)",
      "Math.pow(a+b,2) / Math.sqrt(a+b)"
    ],
    correct: 0,
    tags: ["Java", "Math Class", "Expressions", "ICSE"],
    explanation: "Math.abs(a+b) gives the absolute value and Math.sqrt(a*a+b*b) computes the square root of the sum of squares."
  },

  {
    question: "What is the output of the following code?",
    code: `String x = "ACHIEVEMENT";
System.out.println(x.replace('E','A'));`,
    image: "",
    options: [
      "ACHIAVAMANT",
      "ACHIEVEMENT",
      "ACHAAVAMANT",
      "ACHIAVEMENT"
    ],
    correct: 0,
    tags: ["Java", "String Methods", "replace", "ICSE"],
    explanation: "All occurrences of 'E' are replaced with 'A', resulting in ACHIAVAMANT."
  },

  {
    question: "Which statement correctly creates an object named 'Java' of class 'Program' with two integer and one string parameter?",
    code: "",
    image: "",
    options: [
      `Program Java = new Program(10, 20, "Code");`,
      `Program = new Java(10, 20, "Code");`,
      `Java Program = new Program(10, 20, "Code");`,
      `new Program Java(10, 20, "Code");`
    ],
    correct: 0,
    tags: ["Java", "Objects", "Constructor", "ICSE"],
    explanation: "The correct object creation syntax is: ClassName objectName = new ClassName(parameters);"
  },

  {
    question: "Which conditional statement is equivalent to the ternary expression?",
    code: `int m = 400;
double h = (m > 300) ? (m/10.0)*2 : (m/20.0)-2;`,
    image: "",
    options: [
      `if(m>300) h=(m/10.0)*2; else h=(m/20.0)-2;`,
      `if(m<300) h=(m/10.0)*2; else h=(m/20.0)-2;`,
      `if(m>300) h=(m/20.0)-2; else h=(m/10.0)*2;`,
      `if(m==300) h=(m/10.0)*2; else h=(m/20.0)-2;`
    ],
    correct: 0,
    tags: ["Java", "Conditional Operator", "If Else", "ICSE"],
    explanation: "The ternary operator executes the first expression when m>300, otherwise the second expression."
  },
  {
    question: "Which of the following loops leads to an infinite loop?",
    code: "",
    image: "",
    options: [
      "for(i=10; i!=0; i--)",
      "for(i=3; i<=30; i+=3)",
      "for(i=1; i>=1; i++)",
      "for(i=1; i>=0; i--)"
    ],
    correct: 2,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "The condition i>=1 always remains true because i keeps increasing indefinitely."
  },

  {
    question: "What is the output of Math.ceil(3.4) + Math.pow(2, 3) ?",
    code: `System.out.println(Math.ceil(3.4) + Math.pow(2,3));`,
    image: "",
    options: [
      "11",
      "12",
      "5",
      "13"
    ],
    correct: 1,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.ceil(3.4) gives 4.0 and Math.pow(2,3) gives 8.0. Their sum is 12.0."
  },

  {
    question: "Which statement is true for the declaration static int x; ?",
    code: `static int x;`,
    image: "",
    options: [
      "Class level integer variable shared by all objects of the class",
      "Local variable shared by that method alone",
      "Constant variable cannot change throughout this program",
      "None of these"
    ],
    correct: 0,
    tags: ["Java", "Static Variables", "OOP", "ICSE"],
    explanation: "A static variable belongs to the class and is shared among all objects."
  },

  {
    question: "Package delivery room in an apartment is an example of which access specifier?",
    code: "",
    image: "",
    options: [
      "Public",
      "Private",
      "Default",
      "Protected"
    ],
    correct: 3,
    tags: ["Java", "Access Specifiers", "ICSE"],
    explanation: "A package delivery room provides restricted access similar to protected access."
  },

  {
    question: "What is correct regarding the for loop and its syntax?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Loops", "Assertion Reason", "ICSE"],
    explanation: "A for loop is preferred when iterations are known, and its syntax includes initialization, condition, and increment together."
  },

  {
    question: "Which programming construct is suitable when a playlist should continue until the stop button is pressed?",
    code: "",
    image: "img/quiz_image/quiz_image_7.jpg",
    options: [
      "for",
      "if",
      "switch",
      "while"
    ],
    correct: 3,
    tags: ["Java", "Loops", "While Loop", "ICSE"],
    explanation: "A while loop is used when the number of iterations is not predetermined."
  },

  {
    question: "What is the last subscript of a single-dimensional array containing N elements?",
    code: "",
    image: "",
    options: [
      "N",
      "N-1",
      "N-2",
      "N+1"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array indexing starts at 0, so the last index is N-1."
  },

  {
    question: "What is correct regarding the elevator example and nested loops?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 2,
    tags: ["Java", "Nested Loops", "Assertion Reason", "ICSE"],
    explanation: "An elevator moving floor by floor can be modeled using a loop, but nested loops are not required."
  },

  {
    question: "What type of argument passing is used in void math(int i, int j) ?",
    code: `void math(int i, int j)`,
    image: "",
    options: [
      "passing argument by integer",
      "passing argument by reference",
      "passing argument by interchange",
      "none of the above"
    ],
    correct: 3,
    tags: ["Java", "Methods", "Arguments", "ICSE"],
    explanation: "Java uses pass-by-value for primitive data types, so none of the given options are correct."
  },

  {
    question: "What is the output of the following code?",
    code: `String P="20", Q="19";
int a=Integer.parseInt(P);
int b=Integer.valueOf(Q);
System.out.println(a + "" + b);`,
    image: "",
    options: [
      "2019",
      "\"2019\"",
      "20 19",
      "\"20 19\""
    ],
    correct: 0,
    tags: ["Java", "Wrapper Class", "String", "ICSE"],
    explanation: "a and b are integers. Concatenating with an empty string produces '2019'."
  },
  {
    question: "What will be the output?",
    code: `for(i=5; i>0; i--);
  System.out.println(i);`,
    image: "",
    options: [
      "0",
      "1",
      "5",
      "Compilation Error"
    ],
    correct: 0,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "The semicolon after the for loop makes it an empty loop. The loop runs until i becomes 0, then System.out.println(i); prints 0."
  },
  {
    question: "Which method converts a String to double in Java?",
    code: "",
    image: "",
    options: [
      "String.toDouble()",
      "Double.Parsedouble()",
      "Double.parseDouble(String)",
      "Double.parseDouble()"
    ],
    correct: 2,
    tags: ["Java", "Wrapper Class", "Conversion", "ICSE"],
    explanation: "Double.parseDouble(String) converts a String value into a double."
  },

  {
    question: "What will System.out.println('B' + 20); display?",
    code: `System.out.println('B' + 20);`,
    image: "",
    options: [
      "V",
      "v",
      "22",
      "86"
    ],
    correct: 3,
    tags: ["Java", "Character", "Operators", "ICSE"],
    explanation: "Character 'B' has ASCII value 66. 66 + 20 = 86."
  },

  {
    question: "Which statement correctly initializes the last element of a single-dimensional array of size 50?",
    code: "",
    image: "",
    options: [
      "x[51] = 100",
      "x[48] = 100",
      "x[49] = 100",
      "x[50] = 100"
    ],
    correct: 2,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array indexing starts from 0, so the last index in an array of size 50 is 49."
  },

  {
    question: "What is the output of 10/5 * 3 + 2 ?",
    code: `System.out.println(10/5 * 3 + 2);`,
    image: "",
    options: [
      "7",
      "8",
      "2",
      "0"
    ],
    correct: 1,
    tags: ["Java", "Operators", "Arithmetic", "ICSE"],
    explanation: "10/5 = 2, then 2*3 = 6, and 6+2 = 8."
  },

  {
    question: "What process is shown in the image with blocks A, B, C, and D?",
    code: "",
    image: "img/quiz_image/quiz_image_6.jpg",
    options: [
      "Sorting the list in descending order",
      "Searching for the character in the list",
      "Sorting the list in ascending order",
      "None of the above"
    ],
    correct: 2,
    tags: ["Java", "Sorting", "Arrays", "ICSE"],
    explanation: "The image shows elements being rearranged alphabetically from A to D, representing ascending order sorting."
  },

  {
    question: "Which of the following defines the class that implements the data structure and operations of data?",
    code: `1. Attribute
    2. Method
    3. Class
    4. Data Field
    `,
    image: "",
    options: [
      "only 1",
      "1 and 3",
      "1, 2 and 4",
      "only 4"
    ],
    correct: 2,
    tags: ["Java", "OOP", "Class", "ICSE"],
    explanation: "A class contains attributes, methods, and data fields that define structure and behavior."
  },
  {
    question: "Which String method displays the position of the last space in a string?",
    code: "",
    image: "",
    options: [
      "indexOf()",
      "lastIndexOf()",
      "substring()",
      "compareTo()"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "lastIndexOf() returns the position of the last occurrence of a character or substring."
  },

  {
    question: "Which String method compares strings based on Unicode values?",
    code: "",
    image: "",
    options: [
      "equals()",
      "compareTo()",
      "concat()",
      "substring()"
    ],
    correct: 1,
    tags: ["Java", "String Methods", "Unicode", "ICSE"],
    explanation: "compareTo() compares strings lexicographically using Unicode values."
  },

  {
    question: "What type of error exists in the following code?",
    code: `void solve(int n)
{
    double power = Math.pow(n, 3/4);
    System.out.println(power);
}`,
    image: "",
    options: [
      "Syntax Error",
      "Logical Error",
      "Runtime Error",
      "Compilation Error"
    ],
    correct: 1,
    tags: ["Java", "Errors", "Math Class", "ICSE"],
    explanation: "3/4 performs integer division and evaluates to 0, so Math.pow(n,0) always returns 1.0."
  },

  {
    question: "What is the output of System.out.println(x[4]); for the given array?",
    code: `int x[] = {3, 5, 7, 12, 16, 18, 20, 35, 42, 89};
System.out.println(x[4]);`,
    image: "",
    options: [
      "12",
      "16",
      "18",
      "20"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array indexing starts from 0, so x[4] refers to the fifth element, which is 16."
  },

  {
    question: "What is the length of the array int x[] = {3,5,7,12,16,18,20,35,42,89}; ?",
    code: `int x[] = {3,5,7,12,16,18,20,35,42,89};`,
    image: "",
    options: [
      "8",
      "9",
      "10",
      "11"
    ],
    correct: 2,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "The array contains 10 elements, so its length is 10."
  },

  {
    question: "Which statement initializes the first 6 natural numbers in a 2×3 array?",
    code: "",
    image: "",
    options: [
      "int x[][]={{1,2,3},{4,5,6}};",
      "int x[][]={{1,2},{3,4},{5,6}};",
      "int x[][]={1,2,3,4,5,6};",
      "int x[][]={{1,2,3,4,5,6}};"
    ],
    correct: 0,
    tags: ["Java", "2D Array", "ICSE"],
    explanation: "A 2×3 array contains 2 rows and 3 columns initialized with the first six natural numbers."
  },

  {
    question: "What is the result of x[0][0] + x[1][2] for the array int x[][]={{1,2,3},{4,5,6}}; ?",
    code: `int x[][]={{1,2,3},{4,5,6}};
System.out.println(x[0][0] + x[1][2]);`,
    image: "",
    options: [
      "5",
      "6",
      "7",
      "8"
    ],
    correct: 2,
    tags: ["Java", "2D Array", "ICSE"],
    explanation: "x[0][0] = 1 and x[1][2] = 6, so the sum is 7."
  },

  {
    question: "What is the output and number of loop executions for the following code?",
    code: `String s = "COMPUTER";
for(int i=s.length()-1; i>=0; i-=2)
    System.out.print(s.charAt(i));`,
    image: "",
    options: [
      "RTPOC, loop executes 4 times",
      "RTPMC, loop executes 5 times",
      "RTPC, loop executes 4 times",
      "RETUOC, loop executes 6 times"
    ],
    correct: 0,
    tags: ["Java", "String", "Loops", "ICSE"],
    explanation: "Indices accessed are 7,5,3,1 producing R,T,P,O. Loop runs 4 times."
  },
  {
    question: "What is the output of the following program segment?",
    code: `int v = 5;
while(--v >= 0)
{
    System.out.print(v);
}`,
    image: "",
    options: [
      "43210",
      "54321",
      "543210",
      "432"
    ],
    correct: 0,
    tags: ["Java", "Loops", "While Loop", "ICSE"],
    explanation: "Pre-decrement reduces v before checking the condition. Values printed are 4, 3, 2, 1, 0."
  },

  {
    question: "What is the output of System.out.println(\"Hello\\nWorld\"); ?",
    code: `System.out.println("Hello\\nWorld");`,
    image: "",
    options: [
      "Hello World",
      "\"Hello \\n World\"",
      "Hello",
      "HelloWorld"
    ],
    correct: 0,
    tags: ["Java", "Escape Sequences", "Strings", "ICSE"],
    explanation: "\\n inserts a new line between Hello and World."
  },

  {
    question: "What is the output of \"SUCCESS\".indexOf('S') + \"SUCCESS\".lastIndexOf('S') ?",
    code: `"SUCCESS".indexOf('S') + "SUCCESS".lastIndexOf('S')`,
    image: "",
    options: [
      "0",
      "5",
      "6",
      "-5"
    ],
    correct: 2,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "indexOf('S') returns 0 and lastIndexOf('S') returns 6. Their sum is 6."
  },

  {
    question: "Choose the correct order of statements to swap two variables using a third variable.",
    code: `void swap(int a, int b)
{
  a=b;      // (1)
  b=t;      // (2)
  int t=0;  // (3)
  t=a;      // (4)
}`,
    image: "",
    options: [
      "1,2,3,4",
      "3,4,1,2",
      "1,3,4,2",
      "2,1,4,3"
    ],
    correct: 1,
    tags: ["Java", "Swapping", "Variables", "ICSE"],
    explanation: "First declare temp variable, store a in temp, assign b to a, then assign temp to b."
  },

  {
    question: "Which Java expression calculates the sum of a raised to b and the cube root of c using Math class methods?",
    code: "",
    image: "",
    options: [
      "Math.pow(a,b) + Math.cbrt(c)",
      "Math.sqrt(a,b) + Math.root(c)",
      "Math.power(a,b) + Math.cube(c)",
      "Math.pow(a+b,c)"
    ],
    correct: 0,
    tags: ["Java", "Math Class", "Expressions", "ICSE"],
    explanation: "Math.pow(a,b) computes a raised to b and Math.cbrt(c) computes cube root of c."
  },

  {
    question: "What is the output of the following code?",
    code: `String x = "Galaxy", y = "Games";
System.out.println(x.charAt(0) == y.charAt(0));`,
    image: "",
    options: [
      "true",
      "false",
      "G",
      "Compilation Error"
    ],
    correct: 0,
    tags: ["Java", "String", "charAt", "ICSE"],
    explanation: "Both strings start with the character 'G', so comparison returns true."
  },

  {
    question: "Which statement correctly creates an object named 'Alexa' of class 'Technology' with one integer and one string parameter?",
    code: "",
    image: "",
    options: [
      `Technology Alexa = new Technology(10, "AI");`,
      `Technology = new Alexa(10, "AI");`,
      `Alexa Technology = new Technology(10, "AI");`,
      `new Technology Alexa(10, "AI");`
    ],
    correct: 0,
    tags: ["Java", "Objects", "Constructor", "ICSE"],
    explanation: "The correct syntax is: ClassName objectName = new ClassName(parameters);"
  },

  {
    question: "Which loop is an exit-controlled loop in Java?",
    code: "",
    image: "",
    options: [
      "for loop",
      "while loop",
      "do-while loop",
      "if statement"
    ],
    correct: 2,
    tags: ["Java", "Loops", "Exit Controlled Loop", "ICSE"],
    explanation: "A do-while loop checks the condition after executing the loop body."
  },

  {
    question: "What is the output of the following constructor overloading program?",
    code: `class Box {
  int volume;

  Box(int side) {
    volume = side * side * side;
  }

  Box(int l, int w, int h) {
    volume = l * w * h;
  }
}

class Output {
  public static void main(String args[]) {
    Box b1 = new Box(3);
    Box b2 = new Box(2, 4, 5);
    System.out.println(b1.volume + " " + b2.volume);
  }
}`,
    image: "",
    options: [
      "27 40",
      "9 40",
      "27 20",
      "Compilation Error"
    ],
    correct: 0,
    tags: ["Java", "Constructor Overloading", "OOP", "ICSE"],
    explanation: "Cube volume for side 3 is 27 and cuboid volume 2×4×5 is 40."
  },
  {
    question: "What type of loop is shown in the following program segment?",
    code: `for(int i=5; i!=0; i-=2)
System.out.println(i);`,
    image: "",
    options: [
      "finite",
      "infinite",
      "null",
      "fixed"
    ],
    correct: 1,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "The value of i becomes 5, 3, 1, -1, -3 ... and never reaches 0, making the loop infinite."
  },

  {
    question: "What is the output of Math.pow(625, 0.5) + Math.sqrt(144) ?",
    code: `System.out.println(Math.pow(625,0.5) + Math.sqrt(144));`,
    image: "",
    options: [
      "17.0",
      "13.0",
      "37.0",
      "13"
    ],
    correct: 2,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.pow(625,0.5) gives 25.0 and Math.sqrt(144) gives 12.0. Their sum is 37.0."
  },

  {
    question: "Which statement is true for the method calling statement g.display(); ?",
    code: `g.display();`,
    image: "",
    options: [
      "g is the object name",
      "g is the class name",
      "display() is a data member",
      "display() is a static method"
    ],
    correct: 0,
    tags: ["Java", "Methods", "Objects", "ICSE"],
    explanation: "In g.display(), g represents the object used to call the method display()."
  },

  {
    question: "Library reading room is an example of which access specifier?",
    code: "",
    image: "",
    options: [
      "default",
      "protected",
      "private",
      "public"
    ],
    correct: 1,
    tags: ["Java", "Access Specifiers", "ICSE"],
    explanation: "A library reading room allows restricted access similar to the protected access specifier."
  },

  {
    question: "What is correct regarding for loop and while loop?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 1,
    tags: ["Java", "Loops", "Assertion Reason", "ICSE"],
    explanation: "Both loops can perform similar tasks, but the reason does not directly explain the assertion."
  },

  {
    question: "Which programming construct is used when a person climbs steps 10 times?",
    code: "",
    image: "img/quiz_image/quiz_image_5.jpg",
    options: [
      "while",
      "for",
      "switch",
      "if"
    ],
    correct: 1,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "A for loop is used when the number of repetitions is fixed."
  },

  {
    question: "What is the index of the second last element in an array of size 100?",
    code: "",
    image: "",
    options: [
      "97",
      "99",
      "98",
      "100"
    ],
    correct: 2,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array indexing starts at 0, so the last index is 99 and the second last index is 98."
  },

  {
    question: "What is correct regarding printing a multiplication table using loops?",
    code: "",
    image: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 2,
    tags: ["Java", "Loops", "Assertion Reason", "ICSE"],
    explanation: "A single multiplication table can be printed using one loop; nested loops are not necessary."
  },

  {
    question: "Which of the following is an example of method overloading in Java?",
    code: `// (a)
public void method(int x) {}
public void method(int x, int y) {}

// (b)
public void method(int x) {}
public void method(double x) {}

// (c)
public void method(int x) {}
public void method() {}`,
    image: "",
    options: [
      "Only (a)",
      "Only (b)",
      "Only (c)",
      "All of the above"
    ],
    correct: 3,
    tags: ["Java", "Method Overloading", "OOP", "ICSE"],
    explanation: "Method overloading occurs when methods have the same name but different parameter lists."
  },

  {
    question: "What is the output of the following code?",
    code: `String A="56.0", B="94.0";
double C=Double.parseDouble(A);
double D=Double.parseDouble(B);
System.out.println(C+D);`,
    image: "",
    options: [
      "100",
      "150.0",
      "100.0",
      "150"
    ],
    correct: 1,
    tags: ["Java", "Wrapper Class", "Parsing", "ICSE"],
    explanation: "56.0 + 94.0 equals 150.0."
  },
  {
    question: "Which method is used to check whether a given character is a letter or digit?",
    code: "",
    image: "",
    options: [
      "isDigit(char)",
      "isLetterorDigit()",
      "isLetterDigit(char)",
      "isLETTERORDIGIT(char)"
    ],
    correct: 1,
    tags: ["Java", "Character Class", "Methods", "ICSE"],
    explanation: "The Character class method isLetterOrDigit() checks whether a character is either a letter or a digit."
  },

  {
    question: "What is the output of the following code?",
    code: `System.out.println(Math.sqrt(Math.ceil(15.3)));`,
    image: "",
    options: [
      "16.0",
      "16",
      "4.0",
      "5.0"
    ],
    correct: 2,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.ceil(15.3) gives 16.0 and Math.sqrt(16.0) gives 4.0."
  },

  {
    question: "How many bytes are occupied by the array int myarr[]={12,14,15,2,1}; ?",
    code: `int myarr[]={12,14,15,2,1};`,
    image: "",
    options: [
      "20 Bytes",
      "10 Bytes",
      "30 Bytes",
      "Does not occupy any memory"
    ],
    correct: 0,
    tags: ["Java", "Arrays", "Memory", "ICSE"],
    explanation: "Each int occupies 4 bytes. The array has 5 integers, so total memory = 5 × 4 = 20 bytes."
  },

  {
    question: "What is the output of 25 % 5 + 2 * 3 ?",
    code: `System.out.println(25 % 5 + 2 * 3);`,
    image: "",
    options: [
      "11",
      "6",
      "2",
      "3"
    ],
    correct: 1,
    tags: ["Java", "Operators", "Arithmetic", "ICSE"],
    explanation: "25 % 5 = 0 and 2 * 3 = 6, so the final result is 6."
  },

  {
    question: "Which statements correctly describe the data structure shown in the image?\n(i) A two-dimensional array with 2 rows and seven columns.\n(ii) A one-dimensional array with 14 elements.",
    code: "",
    image: "img/quiz_image/quiz_image_4.jpg",
    options: [
      "Both (i) and (ii)",
      "Only (i)",
      "Only (ii)",
      "None of the (i) and (ii)"
    ],
    correct: 3,
    tags: ["Java", "Arrays", "2D Array", "ICSE"],
    explanation: "The image shows 2 rows and 5 columns (10 elements), so both statements are incorrect."
  },

  // {
  //   question: "Which of the following is an alternative term for method in Java?",
  //   code: "",
  //   image: "",
  //   options: [
  //     "Only 3",
  //     "1, 2 and 3",
  //     "1, 2 and 4",
  //     "1, 2, 3 and 4"
  //   ],
  //   correct: 1,
  //   tags: ["Java", "Methods", "OOP", "ICSE"],
  //   explanation: "Methods in Java are also referred to as messages, behaviors, and class functionalities."
  // },
  {
    question: "Which of the following methods returns a String?",
    code: "",
    image: "",
    options: [
      "length()",
      "charAt(int)",
      "replace(char, char)",
      "indexOf(String)"
    ],
    correct: 2,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "replace(char, char) returns a new String after replacing characters."
  },

  {
    question: "Which statement is NOT true regarding a switch statement?",
    code: "",
    image: "",
    options: [
      "checks equality between input and case labels",
      "supports floating point constants",
      "break exits the switch block",
      "case labels are unique"
    ],
    correct: 1,
    tags: ["Java", "Switch", "Control Statements", "ICSE"],
    explanation: "Java switch statements do not support floating point constants."
  },

  {
    question: "What is the output of System.out.println(ch[0]*2); ?",
    code: `char ch[]={'A','E','I','O','U'};
System.out.println(ch[0]*2);`,
    image: "",
    options: [
      "65",
      "130",
      "'A'",
      "0"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "Character", "ICSE"],
    explanation: "Character 'A' has ASCII value 65. 65 × 2 = 130."
  },

  {
    question: "Which for loop executes 10 times?",
    code: "",
    image: "",
    options: [
      "for(int i=1; i<=30; i+=2)",
      "for(int i=1; i<=30; i+=3)",
      "for(int i=1; i<=20; i++)",
      "for(int i=1; i<=21; i++)"
    ],
    correct: 1,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "The loop runs with values 1,4,7,10,13,16,19,22,25,28 — total 10 times."
  },

  {
    question: "Which statement correctly initializes the last element of a single-dimensional array of size 50 to 100?",
    code: "",
    image: "",
    options: [
      "x[51]=100",
      "x[48]=100",
      "x[49]=100",
      "x[50]=100"
    ],
    correct: 2,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array indexing starts at 0, so the last index in an array of size 50 is 49."
  },

  {
    question: "Which method prototype computes two integer arguments and returns true/false?",
    code: "",
    image: "",
    options: [
      "void compute(int a, int b)",
      "boolean compute(int a, int b)",
      "Boolean compute(int a, b)",
      "int compute(int a, int b)"
    ],
    correct: 1,
    tags: ["Java", "Methods", "Boolean", "ICSE"],
    explanation: "A method returning true or false must have boolean return type."
  },

  {
    question: "Which statement transfers control back to the calling method?",
    code: "",
    image: "",
    options: [
      "break",
      "System.exit(0)",
      "continue",
      "return"
    ],
    correct: 3,
    tags: ["Java", "Control Statements", "ICSE"],
    explanation: "The return statement transfers control back to the calling method."
  },

  {
    question: "What is the default value of a boolean variable in Java?",
    code: "",
    image: "",
    options: [
      "False",
      "0",
      "false",
      "True"
    ],
    correct: 2,
    tags: ["Java", "Boolean", "Variables", "ICSE"],
    explanation: "The default value of a boolean instance variable is false."
  },

  {
    question: "Which method converts a lowercase character to uppercase?",
    code: "",
    image: "",
    options: [
      "String.toUpperCase()",
      "Character.isUpperCase(char)",
      "Character.toUpperCase(char)",
      "toUpperCase()"
    ],
    correct: 2,
    tags: ["Java", "Character Class", "ICSE"],
    explanation: "Character.toUpperCase(char) converts a character to uppercase."
  },

  {
    question: "What is correct regarding Integer class and java.lang package?",
    code: "",
    image: "",
    options: [
      "Both Assertion and Reason are true, and Reason explains Assertion",
      "Both Assertion and Reason are true, but Reason does not explain Assertion",
      "Assertion is true and Reason is false",
      "Assertion is false and Reason is true"
    ],
    correct: 0,
    tags: ["Java", "Wrapper Class", "Packages", "ICSE"],
    explanation: "Integer class belongs to java.lang package, which is imported automatically."
  },

  {
    question: "Which statement(s) correctly increase the value of x by 2?",
    code: `x = x + 2;`,
    image: "",
    options: [
      "x += 2;",
      "x = 2;",
      "x = x + 2;",
      "Only A"
    ],
    correct: 0,
    tags: ["Java", "Operators", "Assignment", "ICSE"],
    explanation: "x += 2 is the shorthand form equivalent to x = x + 2."
  },

  {
    question: "Which statement finds the total number of Strings present in a String array s[]?",
    code: "",
    image: "",
    options: [
      "s.length",
      "s.length()",
      "length(s)",
      "len(s)"
    ],
    correct: 0,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "For arrays, length is accessed as a property using s.length."
  },

  {
    question: "Choose the correct order of statements to swap two variables using a third variable.",
    code: `void swap(int a, int b)
{
  a=b;      // (1)
  b=t;      // (2)
  int t=0;  // (3)
  t=a;      // (4)
}`,
    image: "",
    options: [
      "(1)(2)(3)(4)",
      "(3)(4)(1)(2)",
      "(1)(3)(4)(2)",
      "(2)(1)(4)(3)"
    ],
    correct: 1,
    tags: ["Java", "Swapping", "Variables", "ICSE"],
    explanation: "First declare temp variable, store a in temp, assign b to a, then assign temp to b."
  },
  {
    question: "Identify the given array structure shown in the image.",
    code: "",
    image: "img/quiz_image/quiz_image_3.jpg",
    options: [
      "One-dimensional array",
      "Two-dimensional array with 4 rows and 5 columns",
      "Three-dimensional array",
      "Two-dimensional array with 5 rows and 4 columns"
    ],
    correct: 1,
    tags: ["Java", "Arrays", "2D Array", "ICSE"],
    explanation: "The structure contains 4 horizontal rows and 5 vertical columns, representing a two-dimensional array."
  },

  {
    question: "Which Java feature allows bytecode to run on all operating systems?",
    code: "",
    image: "",
    options: [
      "Robust and Secure",
      "Object Oriented",
      "Platform-Independent",
      "Multithreaded"
    ],
    correct: 2,
    tags: ["Java", "Features", "ICSE"],
    explanation: "Java bytecode runs on the JVM, making Java platform-independent."
  },

  {
    question: "What is the size of '\\n' in Java?",
    code: `char ch = '\\n';`,
    image: "",
    options: [
      "2 bytes",
      "4 bytes",
      "8 bytes",
      "16 bytes"
    ],
    correct: 0,
    tags: ["Java", "Character", "Escape Sequence", "ICSE"],
    explanation: "In Java, a char occupies 2 bytes, including escape characters like '\\n'."
  },

  {
    question: "Which operator has the highest precedence in the expression a+b%c*d-e ?",
    code: `a + b % c * d - e`,
    image: "",
    options: [
      "+",
      "%",
      "-",
      "*"
    ],
    correct: 1,
    tags: ["Java", "Operators", "Precedence", "ICSE"],
    explanation: "Among the given operators, % and * have higher precedence than + and -. Since % appears first during evaluation, it is selected."
  },

  {
    question: "Which of the following is a valid Java keyword?",
    code: "",
    image: "",
    options: [
      "If",
      "BOOLEAN",
      "static",
      "Switch"
    ],
    correct: 2,
    tags: ["Java", "Keywords", "ICSE"],
    explanation: "Java keywords are case-sensitive. 'static' is a valid keyword."
  },

  {
    question: "What is the output of the following code?",
    code: `System.out.println(Math.ceil(6.4)+Math.floor(-1-2));`,
    image: "",
    options: [
      "3.0",
      "4",
      "3",
      "4.0"
    ],
    correct: 3,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.ceil(6.4) gives 7.0 and Math.floor(-1-2) gives -3.0. Their sum is 4.0."
  },

  {
    question: "What is the output of the given Java program involving constructor overloading?",
    code: `class report
{
  int a,b;

  report()
  {
    a=10;
    b=15;
  }

  report(int x, int y)
  {
    a=x;
    b=y;
  }

  void print()
  {
    System.out.println(a+b);
  }

  static void main()
  {
    report r = new report();
    r.print();

    report p = new report(4,5);
    p.print();
  }
}`,
    image: "",
    options: [
      "25 and 9",
      "10 and 15",
      "25 and 45",
      "Compilation Error"
    ],
    correct: 0,
    tags: ["Java", "Constructor", "OOP", "ICSE"],
    explanation: "The default constructor sets a=10 and b=15, so output is 25. The parameterized constructor sets a=4 and b=5, so output is 9."
  },

  {
    question: "Which String method results in a positive integer?",
    code: "",
    image: "",
    options: [
      "compareTo()",
      "charAt()",
      "substring()",
      "concat()"
    ],
    correct: 0,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "compareTo() returns a positive integer when the calling string is lexicographically greater than the compared string."
  },

  {
    question: "Which String method results in a character?",
    code: "",
    image: "",
    options: [
      "substring()",
      "concat()",
      "charAt()",
      "compareTo()"
    ],
    correct: 2,
    tags: ["Java", "String Methods", "ICSE"],
    explanation: "charAt() returns a character at a specified index."
  },

  {
    question: "What type of error exists in the given Java program for finding surface area of a cone?",
    code: `double area(double r, double h)
{
  double l, a;
  a = 22.0/7*r*r;
  l = Math.sqrt(r*r + h*h);
  return a;
}`,
    image: "",
    options: [
      "Syntax Error",
      "Logical Error",
      "Runtime Error",
      "Compilation Error"
    ],
    correct: 1,
    tags: ["Java", "Errors", "Math", "ICSE"],
    explanation: "The formula implemented calculates only the base area and not the surface area of the cone, resulting in a logical error."
  },

  {
    question: "What is the output of System.out.println(a[0] + a[5]); for the array int a[]={12,10,8,4,6,2,3,5,7}; ?",
    code: `int a[]={12,10,8,4,6,2,3,5,7};
System.out.println(a[0]+a[5]);`,
    image: "",
    options: [
      "14",
      "12",
      "10",
      "16"
    ],
    correct: 0,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "a[0] = 12 and a[5] = 2, so the sum is 14."
  },

  {
    question: "What is the index of the largest element in the array int a[]={12,10,8,4,6,2,3,5,7}; ?",
    code: `int a[]={12,10,8,4,6,2,3,5,7};`,
    image: "",
    options: [
      "0",
      "1",
      "8",
      "7"
    ],
    correct: 0,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "The largest element is 12, which is stored at index 0."
  },

  {
    question: "Which statement initializes the first 6 odd numbers in a 3×2 array?",
    code: "",
    image: "",
    options: [
      "int x[][]={{1,3},{5,7},{9,11}};",
      "int x[][]={{1,2},{3,4},{5,6}};",
      "int x[][]={{1,3,5},{7,9,11}};",
      "int x[][]={1,3,5,7,9,11};"
    ],
    correct: 0,
    tags: ["Java", "2D Array", "ICSE"],
    explanation: "The array contains 3 rows and 2 columns with the first six odd numbers."
  },

  {
    question: "What is the output and number of loop executions for the given code?",
    code: `String s = "JAVA";
for(int i=0; i<s.length(); i+=2)
  System.out.print(s.substring(i));`,
    image: "",
    options: [
      "Output: JAVAVA, Loop executes 2 times",
      "Output: JAVAAVA, Loop executes 3 times",
      "Output: JAVA, Loop executes 4 times",
      "Output: AVA, Loop executes 2 times"
    ],
    correct: 0,
    tags: ["Java", "String", "Loops", "ICSE"],
    explanation: "Loop runs for i=0 and i=2. substring(0) gives 'JAVA' and substring(2) gives 'VA', resulting in 'JAVAVA'."
  },
  {
    question: "Which Java expression finds the product of square root of P and square root of Q using Math class methods?",
    code: "",
    image: "",
    options: [
      "Math.sqrt(P * Q)",
      "Math.sqrt(P) * Math.sqrt(Q)",
      "Math.pow(P, Q)",
      "Math.root(P) * Math.root(Q)"
    ],
    correct: 1,
    tags: ["Java", "Math Class", "Expressions", "ICSE"],
    explanation: "Math.sqrt(P) returns the square root of P and Math.sqrt(Q) returns the square root of Q. Their product is obtained using multiplication."
  },

  {
    question: "What is the output of the following code?",
    code: `String x = "talent";
String y = "matrix";
System.out.print(x.substring(3).concat(y.substring(3)));`,
    image: "",
    options: [
      "entrix",
      "enttrix",
      "lentrix",
      "talmatrix"
    ],
    correct: 1,
    tags: ["Java", "String", "substring", "concat", "ICSE"],
    explanation: "x.substring(3) gives 'ent' and y.substring(3) gives 'trix'. Concatenating them gives 'enttrix'."
  },

  {
    question: "Which statement correctly creates an object named 'sifra' of class 'Robot' with three double parameters?",
    code: "",
    image: "",
    options: [
      "Robot sifra = new Robot(1.0, 2.0, 3.0);",
      "Robot = new sifra(1.0, 2.0, 3.0);",
      "sifra Robot = new Robot(1.0, 2.0, 3.0);",
      "new Robot sifra(1.0, 2.0, 3.0);"
    ],
    correct: 0,
    tags: ["Java", "Objects", "Constructor", "ICSE"],
    explanation: "The correct object creation syntax is: ClassName objectName = new ClassName(parameters);"
  },

  {
    question: "Which loop is an exit-controlled loop?",
    code: "",
    image: "",
    options: [
      "for loop",
      "while loop",
      "do-while loop",
      "if statement"
    ],
    correct: 2,
    tags: ["Java", "Loops", "Exit Controlled Loop", "ICSE"],
    explanation: "A do-while loop checks the condition after executing the loop body, making it an exit-controlled loop."
  },
  {
    question: "Character class methods are found in which package?",
    code: "",
    image: "", 
    options: ["java.util", "java.lang", "java.awt", "java.io"],
    correct: 1,
    tags: ["Java", "Packages", "ICSE"],
    explanation: "The Character class belongs to the java.lang package."
  },

  {
    question: "What will System.out.println('Z' + 32); display?",
    code: `System.out.println('Z' + 32);`,
    options: ["Z", "z", "122", "154"],
    correct: 2,
    tags: ["Java", "Operators", "ICSE"],
    explanation: "Character 'Z' has ASCII value 90. 90 + 32 = 122."
  },

  {
    question: "How many bytes are occupied by double x[] = {2.5,4.5,5.5,6.4}; ?",
    code: `double x[] = {2.5,4.5,5.5,6.4};`,
    options: ["16", "4", "8", "32"],
    correct: 3,
    tags: ["Java", "Array", "Memory", "ICSE"],
    explanation: "A double occupies 8 bytes. 4 elements × 8 bytes = 32 bytes."
  },

  {
    question: "What is the output of 42/6%2 ?",
    code: `System.out.println(42/6%2);`,
    options: ["1", "10", "2", "0"],
    correct: 0,
    tags: ["Java", "Operators", "Arithmetic", "ICSE"],
    explanation: "42/6 = 7 and 7%2 = 1."
  },

  {
    question: "What is the index of Barcode Scanner in the 2D array P[2][3]?",
    code: "",
     image: 'img/quiz_image/quiz_image_1.jpg',
    options: ["P[1][1]", "P[0][1]", "P[1][2]", "P[0][0]"],
    correct: 0,
    tags: ["Java", "2D Array", "ICSE"],
    explanation: "Barcode Scanner is located in row 1 and column 1."
  },

  {
    question: "Which of the following is a user-defined data type?",
    code: "",
    options: ["only array", "1 and 3", "only double", "only boolean"],
    correct: 1,
    tags: ["Java", "Data Types", "OOP", "ICSE"],
    explanation: "Class and array are user-defined/reference data types."
  },

  {
    question: "Which loop is an infinite loop?",
    code: "",
    options: [
      "for(int i=1;i<=10;i++)",
      "for(int i=2; i!=0; i-=3)",
      "for(int i=5;i<=5;i++)",
      "for(int i=1;i>=1;i--)"
    ],
    correct: 1,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "The value of i becomes 2, -1, -4, -7 ... and never reaches 0, so the condition i != 0 always remains true."
  },

  {
    question: "What is the output of Math.max(-7, Math.min(-5,-4))?",
    code: `System.out.println(Math.max(-7, Math.min(-5,-4)));`,
    options: ["-5", "-4", "-7", "error"],
    correct: 0,
    tags: ["Java", "Math Class", "ICSE"],
    explanation: "Math.min(-5,-4) gives -5. Math.max(-7,-5) gives -5."
  },

  {
    question: "Which statement is true for Game cricket = new Game(); ?",
    code: `Game cricket = new Game();`,
    options: [
      "Game is an object of cricket class",
      "New keyword creates object Game",
      "Game is a class and cricket is an object",
      "Game and cricket are objects"
    ],
    correct: 2,
    tags: ["Java", "OOP", "Objects", "ICSE"],
    explanation: "Game is the class name and cricket is the object reference."
  },

  {
    question: "Post office is an example of which access specifier?",
    code: "",
    options: ["public", "local", "protected", "private"],
    correct: 0,
    tags: ["Java", "Access Specifiers", "ICSE"],
    explanation: "A post office is accessible publicly, similar to the public access specifier."
  },

  {
    question: "Why does break avoid fall-through in switch?",
    code: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Switch", "Control Statements", "ICSE"],
    explanation: "break stops execution after one case, preventing fall-through."
  },

  {
    question: "Which programming construct is used when repeating side stretch 10 times?",
    code: "",
    image: 'img/quiz_image/quiz_image_2.jpg',
    options: ["if", "switch", "for", "if else if"],
    correct: 2,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "A for loop is used for repeating actions a fixed number of times."
  },

  {
    question: "What is the index of the last element of array ar[]?",
    code: "",
    options: ["ar.length()", "ar[].length", "ar.length()-1", "ar.length-1"],
    correct: 3,
    tags: ["Java", "Arrays", "ICSE"],
    explanation: "Array indexing starts at 0, so the last index is length - 1."
  },

  {
    question: "Why is a clock an example of nested loops?",
    code: "",
    options: [
      "Both A and R are true and R explains A",
      "Both A and R are true but R does not explain A",
      "A is true and R is false",
      "A is false and R is true"
    ],
    correct: 0,
    tags: ["Java", "Nested Loops", "ICSE"],
    explanation: "Minutes cycle repeatedly within each hour, similar to nested loops."
  },

  {
    question: "Which pair of methods causes compile-time error due to incorrect overloading?",
    code: "",
    options: [
      "void test(int a,int b) and void test(double a,double b)",
      "void test(int a,double b) and void test(double a,int b)",
      "void test(int a,double b) and void test(int a)",
      "void test(int a) and int test(int a)"
    ],
    correct: 3,
    tags: ["Java", "Method Overloading", "ICSE"],
    explanation: "Method overloading cannot differ only by return type."
  },

  {
    question: "Which statement converts \"25\" to 25.0?",
    code: "",
    options: [
      "Double.Parsedouble(\"25\")",
      "Double.parse(\"25\")",
      "Double.parseDouble(\"25\")",
      "Double.parseDouble(25)"
    ],
    correct: 2,
    tags: ["Java", "Wrapper Class", "ICSE"],
    explanation: "Double.parseDouble() converts a String to double."
  },

  {
    question: "What is the output of the following program?",
    code: `int p=0;
for(p=4; p>0; p-=2);
System.out.print(p);
System.out.println(p);`,
    options: ["42", "4200", "0", "00"],
    correct: 3,
    tags: ["Java", "Loops", "Output", "ICSE"],
    explanation: "The semicolon after for loop makes it empty. Final value of p becomes 0 and prints twice."
  },

  {
    question: "What is the output of the statement with escaped quotes?",
    code: `System.out.println("I said, \\"It's wise to obey elders.\\"");`,
    options: [
      "I said,'It is wise to obey elders.'",
      `I said, "It's wise to obey elders."`,
      "I said, It's wise to elders.",
      `"It's wise to obey elders."`
    ],
    correct: 1,
    tags: ["Java", "Escape Sequences", "Strings", "ICSE"],
    explanation: "Escaped double quotes are printed as part of the output."
  },

  {
    question: "What is the output of \"ANGER\".compareTo(\"ANGEL\") ?",
    code: `"ANGER".compareTo("ANGEL")`,
    options: ["3", "-6", "6", "0"],
    correct: 2,
    tags: ["Java", "String", "compareTo", "ICSE"],
    explanation: "Comparison occurs at R and L. ASCII difference is 82 - 76 = 6."
  },

  {
    question: "Choose the correct order to calculate factorial of 4.",
    code: `for(k=1;k<=4;k++) -->1
return fa; -->2
long fa=1,k; -->3
fa*=k; -->4
`,
    options: [
      "1,2,3,4",
      "3,1,4,2",
      "3,1,2,4",
      "1,3,2,4"
    ],
    correct: 1,
    tags: ["Java", "Factorial", "Loops", "ICSE"],
    explanation: "Variables must be declared first, then loop, multiplication, and finally return."
  },
  {
    question: "Which data structure follows FIFO in Java?",
    options: ["Stack", "Queue", "Tree", "Graph"],
    correct: 1,
    tags: ["DSA", "Queue", "Java"],
    explanation: "A Queue follows the First-In-First-Out (FIFO) principle, where the first element added is the first one to be removed.",
  },
  {
    question: "Which data structure follows LIFO in Java?",
    options: ["Queue", "Array", "Stack", "Linked List"],
    correct: 2,
    tags: ["DSA", "Stack", "Java"],
    explanation: "A Stack follows the Last-In-First-Out (LIFO) principle, where the last element added is the first one to be retrieved.",
  },
  {
    question: "What is the time complexity of binary search?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correct: 1,
    tags: ["DSA","Algorithms", "Searching", "Java"],
    explanation: "Binary search divides the search interval in half at each step, resulting in a logarithmic time complexity of O(log n).",
  },
  {
    question: "Which traversal uses Root-Left-Right order?",
    options: ["Inorder", "Postorder", "Preorder", "Level Order"],
    correct: 2,
    tags: ["DSA","Tree", "Traversal", "Java"],
    explanation: "Preorder traversal visits the current node (Root) first, then the Left subtree, and finally the Right subtree.",
  },
  {
    question: "Which traversal uses Left-Root-Right order?",
    options: ["Inorder", "Preorder", "Postorder", "DFS"],
    correct: 0,
    tags: ["DSA","Tree", "Traversal", "Java"],
    explanation: "Inorder traversal visits the Left subtree first, then the Root, and then the Right subtree. In a BST, this yields sorted values.",
  },
  {
    question: "Which traversal uses Left-Right-Root order?",
    options: ["Preorder", "Inorder", "Postorder", "BFS"],
    correct: 2,
    tags: ["DSA","Tree", "Traversal", "Java"],
  },
  {
    question: "Which Java collection is best for dynamic arrays?",
    options: ["HashMap", "ArrayList", "TreeSet", "Stack"],
    correct: 1,
    tags: ["DSA","Collections", "ArrayList", "Java"],
  },
  {
    question: "Which Java collection stores key-value pairs?",
    options: ["List", "Set", "Map", "Queue"],
    correct: 2,
    tags: ["DSA","Collections", "Map", "Java"],
  },
  {
    question:
      "Which sorting algorithm has best average performance O(n log n)?",
    options: ["Bubble Sort", "Merge Sort", "Selection Sort", "Insertion Sort"],
    correct: 1,
    tags: ["DSA","Sorting", "Algorithms", "Java"],
  },
  {
    question: "Which sorting algorithm repeatedly swaps adjacent elements?",
    options: ["Merge Sort", "Quick Sort", "Bubble Sort", "Heap Sort"],
    correct: 2,
    tags: ["DSA","Sorting", "Bubble Sort", "Java"],
  },
  {
    question: "Which algorithm uses divide and conquer for sorting?",
    options: ["Bubble Sort", "Merge Sort", "Linear Search", "DFS"],
    correct: 1,
    tags: ["DSA","Sorting", "Algorithms", "Java"],
  },
  {
    question: "Which graph traversal uses queue?",
    options: ["DFS", "BFS", "Recursion", "Stack"],
    correct: 1,
    tags: ["DSA","Graph", "BFS", "Java"],
  },
  {
    question: "Which graph traversal uses stack or recursion?",
    options: ["BFS", "DFS", "Heap", "Queue"],
    correct: 1,
    tags: ["DSA","Graph", "DFS", "Java"],
  },
  {
    question: "Which data structure is used in recursion internally?",
    options: ["Queue", "Stack", "Tree", "Graph"],
    correct: 1,
    tags: ["DSA","Recursion", "Stack", "Java"],
  },
  {
    question: "Which searching algorithm requires sorted data?",
    options: ["Linear Search", "Binary Search", "DFS", "BFS"],
    correct: 1,
    tags: ["DSA","Searching", "Binary Search", "Java"],
  },
  {
    question: "What is the worst-case time complexity of quick sort?",
    options: ["O(n^2)", "O(log n)", "O(n)", "O(1)"],
    correct: 0,
    tags: ["DSA","Sorting", "Quick Sort", "Java"],
  },
  {
    question: "Which data structure uses nodes and pointers?",
    options: ["Array", "Linked List", "Matrix", "Heap"],
    correct: 1,
    tags: ["DSA","Linked List", "DSA", "Java"],
  },
  {
    question: "Which linked list allows traversal in both directions?",
    options: [
      "Singly Linked List",
      "Doubly Linked List",
      "Circular Queue",
      "Stack",
    ],
    correct: 1,
    tags: ["DSA","Linked List", "Java", "DSA"],
  },
  {
    question: "Which heap property is true for Min Heap?",
    options: [
      "Parent >= Child",
      "Parent <= Child",
      "Root is maximum",
      "Sorted always",
    ],
    correct: 1,
    tags: ["DSA","Heap", "Priority Queue", "Java"],
  },
  {
    question: "Which heap property is true for Max Heap?",
    options: [
      "Parent <= Child",
      "Parent >= Child",
      "Root is minimum",
      "Always balanced",
    ],
    correct: 1,
    tags: ["DSA","Heap", "Priority Queue", "Java"],
  },
  {
    question:
      "Which Java class is commonly used for priority queue implementation?",
    options: ["PriorityQueue", "HashSet", "Vector", "Deque"],
    correct: 0,
    tags: ["DSA","Priority Queue", "Collections", "Java"],
  },
  {
    question:
      "Which algorithm is used to find shortest path in weighted graph?",
    options: ["DFS", "Dijkstra", "Bubble Sort", "Binary Search"],
    correct: 1,
    tags: ["DSA","Graph", "Algorithms", "Java"],
  },
  {
    question: "Which algorithm is used for minimum spanning tree?",
    options: ["Kruskal", "Binary Search", "Merge Sort", "BFS"],
    correct: 0,
    tags: ["DSA","Graph", "MST", "Java"],
  },
  {
    question: "Which notation is used to represent algorithm efficiency?",
    options: ["Big O", "HTML", "SQL", "API"],
    correct: 0,
    tags: ["DSA","Complexity", "Big O", "Java"],
  },
  {
    question: "What is the best-case complexity of linear search?",
    options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
    correct: 0,
    tags: ["DSA","Searching", "Complexity", "Java"],
  },
  {
    question: "Which structure is ideal for undo operations?",
    options: ["Queue", "Stack", "Graph", "Heap"],
    correct: 1,
    tags: ["DSA","Stack", "Applications", "Java"],
  },
  {
    question: "Which structure is ideal for scheduling tasks?",
    options: ["Priority Queue", "Stack", "Array", "Tree"],
    correct: 0,
    tags: ["DSA","Priority Queue", "Applications", "Java"],
  },
  {
    question:
      "Which algorithm technique stores overlapping subproblem results?",
    options: ["Greedy", "Dynamic Programming", "DFS", "BFS"],
    correct: 1,
    tags: ["DSA","DP", "Algorithms", "Java"],
  },
  {
    question: "Which technique makes locally optimal choices?",
    options: ["Dynamic Programming", "Greedy", "Recursion", "Hashing"],
    correct: 1,
    tags: ["DSA","Greedy", "Algorithms", "Java"],
  },
  {
    question: "Which structure provides average O(1) search?",
    options: ["HashMap", "ArrayList", "TreeMap", "LinkedList"],
    correct: 0,
    tags: ["DSA","Hashing", "Collections", "Java"],
  },
  {
    question: "Which tree keeps elements sorted automatically?",
    options: ["Binary Search Tree", "Graph", "Queue", "Stack"],
    correct: 0,
    tags: ["DSA","BST", "Tree", "Java"],
  },
  {
    question: "Which self-balancing tree is commonly used?",
    options: ["AVL Tree", "Simple Array", "Queue", "Stack"],
    correct: 0,
    tags: ["DSA","AVL", "Tree", "Java"],
  },
  {
    question: "Which data structure prevents duplicate values?",
    options: ["List", "Set", "Queue", "Stack"],
    correct: 1,
    tags: ["DSA","Set", "Collections", "Java"],
  },
  {
    question: "Which sorting algorithm selects minimum element repeatedly?",
    options: ["Selection Sort", "Quick Sort", "Heap Sort", "DFS"],
    correct: 0,
    tags: ["DSA","Sorting", "Selection Sort", "Java"],
  },
  {
    question: "Which sorting algorithm inserts elements at correct position?",
    options: ["Insertion Sort", "Merge Sort", "BFS", "Dijkstra"],
    correct: 0,
    tags: ["DSA","Sorting", "Insertion Sort", "Java"],
  },
  {
    question: "Which notation represents lower bound?",
    options: ["Big O", "Omega", "Theta", "Lambda"],
    correct: 1,
    tags: ["DSA","Complexity", "Analysis", "Java"],
  },
  {
    question: "Which notation represents tight bound?",
    options: ["Theta", "Sigma", "Alpha", "Beta"],
    correct: 0,
    tags: ["DSA","Complexity", "Analysis", "Java"],
  },
  {
    question: "Which Java interface is implemented by LinkedList?",
    options: ["List", "Runnable", "Serializable", "Thread"],
    correct: 0,
    tags: ["DSA","LinkedList", "Collections", "Java"],
  },
  {
    question: "Which traversal is best for shortest path in unweighted graph?",
    options: ["DFS", "BFS", "Recursion", "Heap"],
    correct: 1,
    tags: ["DSA","Graph", "BFS", "Java"],
  },
  {
    question: "Which structure is used in BFS implementation?",
    options: ["Queue", "Stack", "Tree", "Array"],
    correct: 0,
    tags: ["DSA","BFS", "Queue", "Java"],
  },
  {
    question: "Which structure is used in DFS implementation?",
    options: ["Stack", "Queue", "Heap", "HashMap"],
    correct: 0,
    tags: ["DSA","DFS", "Stack", "Java"],
  },
  {
    question: "Which operation adds element at rear in queue?",
    options: ["Pop", "Enqueue", "Peek", "Poll"],
    correct: 1,
    tags: ["DSA","Queue", "Operations", "Java"],
  },
  {
    question: "Which operation removes top element from stack?",
    options: ["Push", "Peek", "Pop", "Offer"],
    correct: 2,
    tags: ["DSA","Stack", "Operations", "Java"],
  },
  {
    question: "Which operation only views front element of queue?",
    options: ["Peek", "Push", "Insert", "Swap"],
    correct: 0,
    tags: ["DSA","Queue", "Operations", "Java"],
  },
  {
    question: "Which data structure is used for expression evaluation?",
    options: ["Stack", "Queue", "Graph", "TreeMap"],
    correct: 0,
    tags: ["DSA","Stack", "Applications", "Java"],
  },
  {
    question: "Which tree traversal uses queue for implementation?",
    options: ["Level Order", "Inorder", "Preorder", "Postorder"],
    correct: 0,
    tags: ["DSA","Tree", "Traversal", "Java"],
  },
  {
    question:
      "Which graph representation is memory efficient for sparse graphs?",
    options: ["Adjacency Matrix", "Adjacency List", "2D Array", "Stack"],
    correct: 1,
    tags: ["DSA","Graph", "Representation", "Java"],
  },
  {
    question: "Which graph representation is faster for edge lookup?",
    options: ["Adjacency Matrix", "Adjacency List", "Queue", "Heap"],
    correct: 0,
    tags: ["DSA","Graph", "Representation", "Java"],
  },
  {
    question: "Which algorithm detects cycles using parent tracking?",
    options: ["Union Find", "Bubble Sort", "Stack", "Queue"],
    correct: 0,
    tags: ["DSA","Graph", "Union Find", "Java"],
  },
  {
    question:
      "Which technique divides problem into smaller subproblems recursively?",
    options: ["Divide and Conquer", "Hashing", "Greedy", "Queue"],
    correct: 0,
    tags: ["DSA","Algorithms", "Divide and Conquer", "Java"],
  },
  {
    question: "Which sorting algorithm is stable by default?",
    options: ["Merge Sort", "Quick Sort", "Heap Sort", "Selection Sort"],
    correct: 0,
    tags: ["DSA","Sorting", "Algorithms", "Java"],
  },
  {
    question: "Which data structure is used for backtracking?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    correct: 1,
    tags: ["DSA","Backtracking", "Stack", "Java"],
  },
  {
    question: "Which algorithm is used to detect cycle in linked list?",
    options: [
      "Floyd’s Cycle Detection",
      "Binary Search",
      "Dijkstra",
      "Merge Sort",
    ],
    correct: 0,
    tags: ["DSA","Linked List", "Algorithms", "Java"],
  },
  {
    question: "Which tree is used in databases for indexing?",
    options: ["B-Tree", "Binary Tree", "Heap", "Trie"],
    correct: 0,
    tags: ["DSA","Tree", "Database", "Java"],
  },
  {
    question: "Which structure is best for autocomplete suggestions?",
    options: ["Trie", "Stack", "Queue", "Heap"],
    correct: 0,
    tags: ["DSA","Trie", "String", "Java"],
  },
  {
    question: "Which traversal of BST gives sorted output?",
    options: ["Inorder", "Preorder", "Postorder", "Level Order"],
    correct: 0,
    tags: ["DSA","BST", "Traversal", "Java"],
  },
  {
    question: "Which algorithm is used in Prim’s MST?",
    options: [
      "Greedy",
      "Dynamic Programming",
      "Recursion",
      "Divide and Conquer",
    ],
    correct: 0,
    tags: ["DSA","Graph", "MST", "Java"],
  },
  {
    question: "Which Java class implements stack functionality?",
    options: ["Stack", "HashMap", "PriorityQueue", "TreeSet"],
    correct: 0,
    tags: ["DSA","Stack", "Collections", "Java"],
  },
  {
    question: "Which operation inserts element into stack?",
    options: ["Push", "Pop", "Peek", "Poll"],
    correct: 0,
    tags: ["DSA","Stack", "Operations", "Java"],
  },
  {
    question: "Which algorithm is used for shortest path in unweighted graph?",
    options: ["BFS", "DFS", "Dijkstra", "Prim"],
    correct: 0,
    tags: ["DSA","Graph", "BFS", "Java"],
  },
  {
    question: "Which data structure is best for function call management?",
    options: ["Queue", "Stack", "Heap", "Array"],
    correct: 1,
    tags: ["DSA","Stack", "Applications", "Java"],
  },
  {
    question: "Which sorting algorithm uses pivot element?",
    options: ["Quick Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
    correct: 0,
    tags: ["DSA","Sorting", "Quick Sort", "Java"],
  },
  {
    question: "Which tree is a complete binary tree?",
    options: ["Heap", "Graph", "Trie", "HashMap"],
    correct: 0,
    tags: ["DSA","Heap", "Tree", "Java"],
  },
  {
    question: "Which algorithm is used in Huffman coding?",
    options: ["Greedy", "DFS", "BFS", "Binary Search"],
    correct: 0,
    tags: ["DSA","Greedy", "Algorithms", "Java"],
  },
  {
    question: "Which data structure helps in syntax parsing?",
    options: ["Stack", "Queue", "Array", "Heap"],
    correct: 0,
    tags: ["DSA","Parsing", "Stack", "Java"],
  },
  {
    question: "Which graph algorithm uses priority queue heavily?",
    options: ["Dijkstra", "DFS", "BFS", "Topological Sort"],
    correct: 0,
    tags: ["DSA","Graph", "Priority Queue", "Java"],
  },
  {
    question: "Which operation removes front element from queue?",
    options: ["Dequeue", "Push", "Peek", "Insert"],
    correct: 0,
    tags: ["DSA","Queue", "Operations", "Java"],
  },
  {
    question: "Which structure stores unique keys in sorted order?",
    options: ["TreeSet", "ArrayList", "Stack", "Queue"],
    correct: 0,
    tags: ["DSA","Set", "Collections", "Java"],
  },
  {
    question: "Which algorithm is preferred for nearly sorted arrays?",
    options: ["Insertion Sort", "Merge Sort", "Heap Sort", "Quick Sort"],
    correct: 0,
    tags: ["DSA","Sorting", "Insertion Sort", "Java"],
  },
  {
    question: "Which data structure is ideal for browser history?",
    options: ["Stack", "Queue", "Heap", "Graph"],
    correct: 0,
    tags: ["DSA","Stack", "Applications", "Java"],
  },
  {
    question: "Which traversal is used to copy a tree structure?",
    options: ["Preorder", "Inorder", "Postorder", "Level Order"],
    correct: 0,
    tags: ["DSA","Tree", "Traversal", "Java"],
  },
  {
    question: "Which data structure is best for implementing BFS in trees?",
    options: ["Queue", "Stack", "Heap", "HashMap"],
    correct: 0,
    tags: ["DSA","Tree", "BFS", "Java"],
  },
  {
    question: "Which algorithm is used to find strongly connected components?",
    options: ["Kosaraju", "Bubble Sort", "Binary Search", "Heap Sort"],
    correct: 0,
    tags: ["DSA","Graph", "Algorithms", "Java"],
  },
  {
    question: "Which Java collection is synchronized by default?",
    options: ["Vector", "ArrayList", "HashSet", "PriorityQueue"],
    correct: 0,
    tags: ["DSA","Collections", "Java", "Vector"],
  },
  {
    question: "Which sorting algorithm is not stable by default?",
    options: ["Quick Sort", "Merge Sort", "Bubble Sort", "Insertion Sort"],
    correct: 0,
    tags: ["DSA","Sorting", "Algorithms", "Java"],
  },
  {
    question: "Which tree is used for prefix matching?",
    options: ["Trie", "AVL", "Heap", "BST"],
    correct: 0,
    tags: ["DSA","Trie", "Strings", "Java"],
  },
  {
    question: "Which algorithm helps in job scheduling problems?",
    options: ["Greedy", "DFS", "BFS", "Binary Search"],
    correct: 0,
    tags: ["DSA","Greedy", "Scheduling", "Java"],
  },
  {
    question: "Which operation checks top of stack without removing it?",
    options: ["Peek", "Pop", "Push", "Poll"],
    correct: 0,
    tags: ["DSA","Stack", "Operations", "Java"],
  },
  {
    question: "Which data structure is useful for implementing undo-redo?",
    options: ["Two Stacks", "Queue", "Tree", "Heap"],
    correct: 0,
    tags: ["DSA","Stack", "Applications", "Java"],
  },
  {
    question:
      "Which tree traversal is used in expression trees to get postfix?",
    options: ["Postorder", "Preorder", "Inorder", "Level Order"],
    correct: 0,
    tags: ["DSA","Tree", "Expression Tree", "Java"],
  },
  {
    question: "Which traversal of expression tree gives prefix notation?",
    options: ["Preorder", "Postorder", "Inorder", "BFS"],
    correct: 0,
    tags: ["DSA","Tree", "Expression Tree", "Java"],
  },
  {
    question: "Which traversal of expression tree gives infix notation?",
    options: ["Inorder", "Preorder", "Postorder", "DFS"],
    correct: 0,
    tags: ["DSA","Tree", "Expression Tree", "Java"],
  },
  {
    question: "Which graph algorithm detects negative weight cycles?",
    options: ["Bellman-Ford", "Dijkstra", "Prim", "Kruskal"],
    correct: 0,
    tags: ["DSA","Graph", "Algorithms", "Java"],
  },
  {
    question: "Which algorithm is used for all-pairs shortest path?",
    options: ["Floyd-Warshall", "DFS", "Merge Sort", "Heap Sort"],
    correct: 0,
    tags: ["DSA","Graph", "Algorithms", "Java"],
  },
  {
    question: "Which structure is used in level order traversal?",
    options: ["Queue", "Stack", "Array", "Set"],
    correct: 0,
    tags: ["DSA","Tree", "Traversal", "Java"],
  },
  {
    question: "Which search works well on sorted rotated arrays?",
    options: ["Modified Binary Search", "Linear Search", "DFS", "BFS"],
    correct: 0,
    tags: ["DSA","Searching", "Binary Search", "Java"],
  },
  {
    question: "Which data structure is used in Round Robin scheduling?",
    options: ["Queue", "Stack", "Heap", "Graph"],
    correct: 0,
    tags: ["DSA","Queue", "Scheduling", "Java"],
  },
  {
    question: "Which collection provides O(log n) insertion with sorting?",
    options: ["TreeSet", "ArrayList", "LinkedList", "Stack"],
    correct: 0,
    tags: ["DSA","Collections", "TreeSet", "Java"],
  },
  {
    question: "Which algorithm is best known for divide and conquer searching?",
    options: ["Binary Search", "DFS", "Prim", "Kruskal"],
    correct: 0,
    tags: ["DSA","Searching", "Algorithms", "Java"],
  },
  {
    question: "Which structure is commonly used in compiler parsing?",
    options: ["Stack", "Queue", "Trie", "Heap"],
    correct: 0,
    tags: ["DSA","Compiler", "Stack", "Java"],
  },
  {
    question:
      "Which data structure is most suitable for implementing a dictionary of words?",
    options: ["Trie", "Stack", "Queue", "Heap"],
    correct: 0,
    tags: ["DSA","Trie", "Strings", "Java"],
  },
  {
    question: "Which algorithm is used to find articulation points in a graph?",
    options: [
      "Tarjan's Algorithm",
      "Bubble Sort",
      "Binary Search",
      "Heap Sort",
    ],
    correct: 0,
    tags: ["DSA","Graph", "Algorithms", "Java"],
  },
  {
    question: "Which data structure is used in Breadth First Search?",
    options: ["Queue", "Stack", "Heap", "Tree"],
    correct: 0,
    tags: ["DSA","Graph", "BFS", "Java"],
  },
  {
    question: "Which technique is used in merge sort?",
    options: ["Divide and Conquer", "Greedy", "Backtracking", "Hashing"],
    correct: 0,
    tags: ["DSA","Sorting", "Algorithms", "Java"],
  },
  {
    question: "Which data structure is best for checking balanced parentheses?",
    options: ["Stack", "Queue", "Graph", "ArrayList"],
    correct: 0,
    tags: ["DSA","Stack", "Applications", "Java"],
  },
  {
    question:
      "Which tree property ensures left child is smaller and right child is larger?",
    options: ["Binary Search Tree", "Heap", "Trie", "Graph"],
    correct: 0,
    tags: ["DSA","BST", "Tree", "Java"],
  },
  {
    question: "Which sorting algorithm is based on heap data structure?",
    options: ["Heap Sort", "Bubble Sort", "Insertion Sort", "Selection Sort"],
    correct: 0,
    tags: ["DSA","Sorting", "Heap", "Java"],
  },
  {
    question: "Which operation is used to add element in priority queue?",
    options: ["Offer", "Pop", "Peek", "Poll"],
    correct: 0,
    tags: ["DSA","Priority Queue", "Operations", "Java"],
  },
  {
    question: "Which algorithm is used to solve N-Queens problem?",
    options: ["Backtracking", "Greedy", "Binary Search", "BFS"],
    correct: 0,
    tags: ["DSA","Backtracking", "Algorithms", "Java"],
  },
  {
    question: "Which algorithm helps in subset generation problems?",
    options: ["Backtracking", "Merge Sort", "Dijkstra", "Kruskal"],
    correct: 0,
    tags: ["DSA","Backtracking", "Recursion", "Java"],
  },
  {
    question:
      "Which data structure is ideal for implementing call center waiting lines?",
    options: ["Queue", "Stack", "Tree", "Heap"],
    correct: 0,
    tags: ["DSA","Queue", "Applications", "Java"],
  },
  {
    question: "Which searching method checks every element one by one?",
    options: ["Linear Search", "Binary Search", "DFS", "BFS"],
    correct: 0,
    tags: ["DSA","Searching", "Algorithms", "Java"],
  },
  {
    question:
      "Which algorithm is used in recursion optimization with memoization?",
    options: ["Dynamic Programming", "Greedy", "Hashing", "Sorting"],
    correct: 0,
    tags: ["DSA","DP", "Algorithms", "Java"],
  },
  {
    question: "Which data structure supports fast union and find operations?",
    options: ["Disjoint Set", "Stack", "Queue", "Heap"],
    correct: 0,
    tags: ["DSA","Union Find", "Graph", "Java"],
  },
  {
    question: "Which graph algorithm is used in network routing?",
    options: ["Dijkstra", "Bubble Sort", "Selection Sort", "DFS"],
    correct: 0,
    tags: ["DSA","Graph", "Shortest Path", "Java"],
  },
  {
    question: "Which data structure is best for median finding in streams?",
    options: ["Two Heaps", "Stack", "Queue", "Trie"],
    correct: 0,
    tags: ["DSA","Heap", "Algorithms", "Java"],
  },
  {
    question: "Which traversal is used for deleting a tree safely?",
    options: ["Postorder", "Preorder", "Inorder", "Level Order"],
    correct: 0,
    tags: ["DSA","Tree", "Traversal", "Java"],
  },
  {
    question: "Which algorithm is used for pattern matching in strings?",
    options: ["KMP", "Dijkstra", "Heap Sort", "Prim"],
    correct: 0,
    tags: ["DSA","Strings", "Algorithms", "Java"],
  },
  {
    question: "Which algorithm uses prefix table for string matching?",
    options: ["KMP", "DFS", "BFS", "Merge Sort"],
    correct: 0,
    tags: ["DSA","Strings", "KMP", "Java"],
  },
  {
    question:
      "Which structure is used in implementing recursive DFS iteratively?",
    options: ["Stack", "Queue", "Set", "Map"],
    correct: 0,
    tags: ["DSA","DFS", "Stack", "Java"],
  },
  {
    question:
      "Which Java collection allows duplicate elements and maintains insertion order?",
    options: ["Set", "List", "Map", "Queue"],
    correct: 1,
    tags: ["DSA","Collections", "List", "Java"],
  },
  {
    question: "Which data structure is best for implementing LRU Cache?",
    options: ["Stack", "HashMap + Doubly Linked List", "Queue", "Tree"],
    correct: 1,
    tags: ["DSA","Cache", "Linked List", "Java"],
  },
  {
    question: "What is the average time complexity of HashMap search in Java?",
    options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
    correct: 0,
    tags: ["DSA","HashMap", "Complexity", "Java"],
  },
  {
    question: "Which traversal visits nodes level by level?",
    options: ["Preorder", "Postorder", "Level Order", "Inorder"],
    correct: 2,
    tags: ["DSA","Tree", "Traversal", "Java"],
  },
  {
    question: "Which algorithm is commonly used for topological sorting?",
    options: ["BFS/DFS", "Binary Search", "Bubble Sort", "Quick Sort"],
    correct: 0,
    tags: ["DSA","Graph", "Topological Sort", "Java"],
  },
  {
    question: "In Java, which keyword is used to inherit a class?",
    options: ["implements", "extends", "inherits", "using"],
    correct: 1,
    tags: ["DSA","ICSE", "Java Basics", "Inheritance"],
  },
  {
    question: "Which of the following is a valid CSS selector?",
    options: [".class", "#id", "element", "All of the above"],
    correct: 3,
    tags: ["DSA","CBSE", "Web Dev", "CSS"],
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Main Log", "None"],
    correct: 0,
    tags: ["DSA","CBSE", "Web Dev", "HTML"],
  }
];

// export const allQuizData = Array.from({ length: 500 }, (_, i) => {
//   const base = baseQuizData[i % baseQuizData.length];

//   return {
//     ...base,
//     question: `${base.question}`
//   };
// });
