const 
    names = ["Ram", "Shyam", "Hari"];
    included = [];
    document.write(getRandom(0));
function getRandom(mode){
    index = Math.floor(Math.random() * names.length);
    if(included.includes(names[index])){
        if(mode == 1 && included.includes(names[index], 0))

        getRandom(mode);
    }else
        included.push(names[index]);
    return names[index];
}