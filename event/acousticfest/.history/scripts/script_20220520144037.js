AOS.init()
$('.hashtag span').click(function() {
    navigator.clipboard.writeText("#AcousticFestHSM");
})

$('.navbar .nav-link').click(function(){
    $('.navbar .nav-link').removeClass('active')
    $(this).addClass('active')
    // alert( + " px");
    $('.contents').scrollTop()($('.contents').scrollTop()-200)
})

$(document).ready(function() {
    // window.scrollTo($('#about').scrollTop, 0)
    // $('body').scrollTop($('#home').scrollTop())

});

var sections = ["#home", "#about", "#register"]
var active_section = sections[0]

$(document).scroll(function() {
    active_section = $    
})