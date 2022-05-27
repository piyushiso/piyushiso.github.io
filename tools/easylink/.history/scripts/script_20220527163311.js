$('form').on('submit', function(e){
    e.preventDefault()
})

$('#break').on('click', function(e){
    $('#breaklink').val($('#breaklink').val().split('').join(' '))
    navigator.clipboard.writeText($('#breaklink').val())
    alert("Copied ")
})

$('#join').on('click', function(e){
    $('#joinlink').val($('#joinlink').val().split(' ').join(''))
    navigator.clipboard.writeText($('#joinlink').val())
})