AOS.init()
$('.hashtag span').click(function() {
    navigator.clipboard.writeText("#AcousticFestHSM");
})

$('.navbar .nav-link').click(function(evn){
    alert(evn.html())
    // $('this').addClass('active')
    // if($('this').hasClass('active') == true)
    //     alert("ACTIVE")
    // else
    //     alert("NOT-ACTIVE")
})