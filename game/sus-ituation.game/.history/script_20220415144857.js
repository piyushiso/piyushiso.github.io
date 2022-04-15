const 
    names = ["Ram", "Shyam", "Hari"],
    included = [],
    line = "Victim_Found the Body_Lsead Detective_Last Seen With_First Suspect_Alibi_Second Suspect_Third Suspect_Arrested_Murderer_Accomplice_Snitched"
    
    // document.writeln(getRandom(0))
    // document.writeln(getRandom(0))
    // document.write(getRandom(0))
function getRandom(mode){
    index = Math.floor(Math.random() * names.length)
    if(included.includes(names[index])){
        if((mode == 1 && included.includes(names[index], 0)) || mode == 0)
            getRandom(mode)
    }else
        included.push(names[index])
    return names[index]
}
function displayLine(number){
    document.writeln(getRandom(0))
}