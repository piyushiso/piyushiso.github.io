
let 
    names = ["Ram", "Shyam", "Hari", "Ravi", "Laxman", "Gita", "Rita", "Kuber", "Bhaibab", "Shiva", "Navi", "Raju"],
    included = [],
    line = "Victim_Found the Body_Lead Detective_Last Seen With_First Suspect_Alibi_Second Suspect_Third Suspect_Arrested_Murderer_Accomplice_Snitched",
    lines = line.split("_")

for(i = 0 ; i < lines.length ; i++){
    mode = (i == 7 ) ? 1 : 0
    if(i==8)
        document.write("<hr>")    
        setTimeout(displayLine(mode, i), 1000)
}
displayLines()
        
const displayLine = async function(mode, i){
    await delay(1000)
    document.write((i+1)+". "+lines[i]+": "+getRandom(mode)+"<br>")
}
