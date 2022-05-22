let state = false
const background_1 = "../assets/images/perry-the-platypus.png";
const background_2 = "../assets/images/platypus.png";

$('#toggler').on('click', function(){
    if($('#toggler').prop('checked'))
        state = true
    else
        state = false
    update(state)
})

function update(state){
    if(state){
        $('body').css({
            "background": "url('../assets/images/perry-the-platypus.png')"
        })
    }
}