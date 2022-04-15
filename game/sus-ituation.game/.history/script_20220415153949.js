let 
    names = ["Ram", "Shyam", "Hari", "Ravi", "Laxman", "Gita", "Rita", "Kuber", "Bhaibab", "Shiva", "Navi", "Raju"],
    included = [],
    line = "Victim_Found the Body_Lead Detective_Last Seen With_First Suspect_Alibi_Second Suspect_Third Suspect_Arrested_Murderer_Accomplice_Snitched",
    lines = line.split("_")


displayLines()

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

function displayLines(){
    for(i = 0 ; i < lines.length ; i++){
        setTimeout(function(){
            mode = (i == 7 ) ? 1 : 0
            if(i==8)
                document.write("<hr>")    
            document.write((i+1)+". "+lines[i]+": "+getRandom(mode)+"<br>")
        }, 5000)
    }
}