let state = false
const background_1 = "";
const background_2 = ".\assets\images\perry-the-platypus.png";

$('#toggler').on('click', function(){
    if($('#toggler').prop('checked'))
        state = true
    else
        state = false
    update(state)
})

function update(state){

}