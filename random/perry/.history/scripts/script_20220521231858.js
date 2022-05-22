let state = false
$('.switch').on('click', function(){
    state = !state
    console.log(state)
    alert(state)
})