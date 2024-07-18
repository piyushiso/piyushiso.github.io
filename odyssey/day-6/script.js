let counter = 0

function getRandomNumbers() {
    // Create an array with numbers from 1 to 50
    let numbers = Array.from({ length: 50 }, (_, i) => i + 1);

    // Shuffle the array
    for (let i = numbers.length - 1; i > 0; i--) {
        // Generate a random index
        const j = Math.floor(Math.random() * (i + 1));

        // Swap the elements at indices i and j
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }

    // Get the first 25 elements and sort them
    let randomNumbers = numbers.slice(0, 25);
    randomNumbers.sort((a, b) => a - b);

    return randomNumbers;
}


function setTable() {
    let table = document.getElementById('contents')
    let numbers = getRandomNumbers()
    let tableHTML = ''
    for (let i = 0; i < 5; i++) {
        tableHTML += '<tr>'
        for (let j = 0; j < 5; j++) {
            tableHTML += "<td onclick='numberClick(this)'>" + numbers[i * 5 + j] + '</td>'
        }
        tableHTML += '</tr>'
    }
    table.innerHTML = tableHTML
}

function numberClick(cell){
    if(cell.classList.contains('checkedNumber')){
        counter = counter === 0 ? 0 : counter - 1
    }else{
        counter++
        if(counter === 25){
            alert("BINGO!!!")
        }
    }
    cell.classList.toggle('checkedNumber')
}

document.addEventListener('DOMContentLoaded', setTable)