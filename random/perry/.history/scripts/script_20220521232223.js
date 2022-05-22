let state = false
// $('.switch').on('click', function(){
//     state = !state
//     console.log(state)
//     alert(state)
// })

$('#toggler').on('click', function(){
    if($('#toggler').prop('checked')){
        state = true
    }else{
        state = false
    }

})

function update(state){

}