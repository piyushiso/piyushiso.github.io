let 
    names = ["Anurag Sir", "Sabina Mam", "Puran Sir", "Sameer Sir", "Ayush", "Nikita", "Nishma", "Piyush", "Nisha", "Jagat"],
    included = [],
    line = "Victim_Found the Body_Lead Detective_Last Seen With_First Suspect_Alibi_Second Suspect_Third Suspect_Arrested_Murderer_Accomplice_Snitch",
    lines = line.split("_")

function halt(ms){
    return new Promise(resolve => {setTimeout(resolve, ms)})
}

function getRandom(mode){
    index = Math.floor(Math.random() * names.length)
    push = true
    if(mode == 1){
        included.splice(1, included.length)
        push = false
    }
    if(included.includes(names[index]))
        getRandom(mode)
    if(push)
        included.push(names[index])
    return names[index]
}

async function displayLines(){
    for(i = 0 ; i < lines.length ; i++){
        mode = (i == 7 ) ? 1 : 0
        if(i==8){
            document.getElementById("content").innerHTML += ("<hr>")    
        
        }
        await halt(1000)
        document.getElementById("content").innerHTML += ((i+1)+". "+lines[i]+": "+getRandom(mode)+"<br>")
    }
}

displayLines()