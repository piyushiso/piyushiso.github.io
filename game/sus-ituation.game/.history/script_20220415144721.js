const 
    names = ["Ram", "Shyam", "Hari"];
    included = [];
    lines = ["Victim", "Found the Body", "Lead Detective", "Last Seen With", "First Suspect", "Alibi", "Other Suspect:", "Second Suspect", "Third Suspect"];
    line = "Victim_Found the Body_Lead Detective_Last Seen With_First Suspect_Alibi_Second Suspect_Third Suspect__"
    document.writeln(getRandom(0));
    document.writeln(getRandom(0));
    document.write(getRandom(0));
function getRandom(mode){
    index = Math.floor(Math.random() * names.length);
    if(included.includes(names[index])){
        if((mode == 1 && included.includes(names[index], 0)) || mode == 0)
            getRandom(mode);
    }else
        included.push(names[index]);
    return names[index];
}
function displayLine(number){
    document.writeln(getRandom(0));
}