// quizData.js
// 500 DSA Questions in Java Pattern

export const allQuizData = [
  {
    question: "Character class methods are found in which package?",
    code: "",
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
      "for(int i=2;i!=0;i-=3)",
      "for(int i=5;i<=5;i++)",
      "for(int i=1;i>=1;i--)"
    ],
    correct: 3,
    tags: ["Java", "Loops", "ICSE"],
    explanation: "The condition i>=1 remains true forever because i decreases continuously."
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
    code: `
for(k=1;k<=4;k++)
return fa;
long fa=1,k;
fa*=k;
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
