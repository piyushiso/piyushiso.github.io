const 
    names = ["Ram", "Shyam", "Hari"];
    included = [];
    document.write(getRandom(0));
function getRandom(mode){
    index = Math.floor(Math.random() * names.length);
    if(included.includes(names[index])){

    }else{
        included.push(names[]);
    return names[index];
}