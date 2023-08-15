const 
    segment0 = document.getElementById("segment-0"),
    segment1 = document.getElementById("segment-1"),
    segment2 = document.getElementById("segment-2");

function onload(){
    segment0.style.display = "block"
    segment1.style.display = "none"
    segment2.style.display = "none"
}

function displayUpload(){
    segment0.style.display = "none"
    segment1.style.display = "block"
    segment2.style.display = "none"
}

function displayLoad(){
    segment0.style.display = "none"
    segment1.style.display = "none"
    segment2.style.display = "block"
}

function openPDF(){
    window.open("../questionnaire/assets/10-IQ-MCQ-A.pdf")
}

function uploadQuestion(){
    alert("Question Uploaded")
}