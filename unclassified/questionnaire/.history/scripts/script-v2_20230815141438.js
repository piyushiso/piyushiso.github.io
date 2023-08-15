const questions = [
    "Define algorithrm.",
    "List any two modes for opening a file.",
    "What is the use of printf() function?",
    "List arithmetic and logical operators available in C.",
    "Define iteration.",
    "Write a syntax to initialize 2D array in C.",
    "What are the differences between array and structure?",
    "What is the advantage of global variable?",
    "What is the use of malloc() function?",
    "Define string.",
    "Define object code.",
    "Write the rule to define a variable.",
    "Is printf() formatted or unformatted I/0? Justify.",
    "What do you mean by implicit type conversion?",
    "Why do we need exit function?",
    "Define Null character.",
    "How does complier determine the life time of a variable?",
    "List any one advantage and disadvantage of pointer.",
    "When do we prefer union rather than structure? Give an example.",
    "What is the difference between append mode and write mode in file handling?"
]

const 
    print_segment = document.getElementById("segment-1")
    print_segment_questions = document.getElementById("segment-1-questions")

function onload(){
    displayQuestions(false)
}

function displayAll(){
    // print(questions)
    for (i=0;i<questions.length;i++)
        document.write((i+1)+". "+questions[i] + "<br>")
}

function displayRandom(){
    temp = questions
    len = temp.length
    text = "&nbsp;&nbsp;&nbsp;<h2>SCHOOL NAME</h2><br><hr><br>"
    
    for(i=0;i<5;i++){
        j = Math.floor(Math.random() * --len+1)
        text += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h3>"+(i+1)+". "+temp[j]+"<br>"
        temp.splice(j , 1)
    }
    document.write(text)
    print(text)  
    // print_segment_questions.innerHTML = text
      
    // displayQuestions(true)
}

function displayQuestions(status){
    print_segment.style.display = status?"block":"none"
}

function printSegment(){
    print(print_segment)
}