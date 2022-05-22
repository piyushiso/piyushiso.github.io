AOS.init()
$('.hashtag span').click(function() {
    navigator.clipboard.writeText("#AcousticFestHSM");
})

$('.navbar .nav-link').click(function(){
    // $(this).addClass('active')
    // $('this').addClass('active')
        $('.navbar .nav-link').removeClass('active')
    }
    $(this).addClass('active')
})