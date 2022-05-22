let state = false
// const background_1 = "url(../assets/images/perry-the-platypus.png)";
// const background_2 = "url(../assets/images/platypus.png)";
const background_1 = "url(https://cdn.wallpapersafari.com/35/22/Y9WFlq.jpg)";
const background_2 = "url(../assets/images/platypus.png)";

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
            'background-image':background_1,
            'background-repeat': 'no-repeat',
            'background-attachment': 'fixed',
            'background-position': 'center'
        })
    }else{
        $('body').css({
            'background-image':background_1,
            'background-repeat': 'no-repeat',
            'background-attachment': 'fixed',
            'background-position': 'center'
        })
    }
}