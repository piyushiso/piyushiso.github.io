const 
    names = ["Ram", "Shyam", "Hari", "Ravi", "Laxman", "Gita", "Rita", "Kuber", "Bhaibab"],
    included = [],
    line = "Victim_Found the Body_Lead Detective_Last Seen With_First Suspect_Alibi_Second Suspect_Third Suspect_Arrested_Murderer_Accomplice_Snitched",
    lines = line.split("_")
    for(i = 0 ; i < lines.length ; i++){
        mode = (i < 7 ) ? 1 : 0
        if(i==8)
            document.write("<br>")    
        document.write((i+1)+". "+lines[i]+": "+getRandom(mode)+"<br>")
    }
        
function getRandom(mode){
    index = Math.floor(Math.random() * names.length)
    if((mode == 1 && included.includes(names[index], 0)) || (mode == 0 && included.includes(names[index])))
        getRandom(mode)
    else
        included.push(names[index])
    return names[index]
}
function displayLine(number){
    document.writeln(getRandom(0))
}