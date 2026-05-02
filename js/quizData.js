// quizData.js
// 500 DSA Questions in Java Pattern

export const allQuizData = [ 
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
    tags: ["Java", "2D Arrays", "ICSE"],
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
    tags: ["Java", "2D Arrays", "ICSE"],
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
    tags: ["Java", "2D Arrays", "ICSE"],
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
