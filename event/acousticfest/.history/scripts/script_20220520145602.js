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
    active_section = getActiveSection()
    alert(active_section)
})

function getActiveSection(){
    $.each(sections, function(index, value){
        if(checkVisibility(value)){
            console.log("VISIBLE")
            return sections[index]
        }else{
            console.log("NOT VISIBLE")
        }
    })    
    return sections[0]
}

function checkVisibility(value){
    var viewportTop = $(window).scrollTop()
    var viewportBottom = viewportTop + $(window).height()
    var elementTop = $(value).offset().top
    var elementBottom = elementTop + $(value).outerHeight()
    return elementBottom > viewportTop && elementTop < viewportBottom
}