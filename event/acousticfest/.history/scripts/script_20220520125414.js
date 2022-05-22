AOS.init()
$('.hashtag span').click(function() {
    navigator.clipboard.writeText("#AcousticFestHSM");
})

$('.navbar .nav-link').click(function(){
    // $(this).addClass('active')
    // $('this').addClass('active')
    if(!$(this).hasClass('active'))
        $(this).addClass('active')
    else{

    }
})