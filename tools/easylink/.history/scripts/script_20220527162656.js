$('form').on('submit', function(e){
    e.preventDefault()
})

$('#break').on('click', function(e){
    $('#breaklink').val($('#breaklink').val().split('').join(' '))
    navigator.clipboard.writeText($('#breaklink').val());
})

$('#break').on('click', function(e){
    $('#breaklink').val($('#breaklink').val().split('').join(' '))
    navigator.clipboard.writeText($('#breaklink').val());
})