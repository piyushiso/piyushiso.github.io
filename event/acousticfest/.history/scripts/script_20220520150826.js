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
var active_section = 0
var max_
var lastScrollTop = 0

$(document).scroll(function() {
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    
    if (st > lastScrollTop){
        
        console.log("DOWN")
    } else {
        console.log("UP")
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
})

function updateIndex(){

}

// function getActiveSection(){
//     $.each(sections, function(index, value){
//         if(checkVisibility(value)){
//             console.log(value+" VISIBLE")
//             return sections[index]
//         }else{
//             console.log(value+" NOT VISIBLE")
//         }
//     })    
//     return sections[0]
// }

// function checkVisibility(value){
//     var viewportTop = $(window).scrollTop()
//     var viewportBottom = viewportTop + $(window).height()
//     var elementTop = $(value).offset().top
//     var elementBottom = elementTop + $(value).outerHeight()
//     return elementBottom > viewportTop && elementTop < viewportBottom
// }


function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// const box = document.querySelector('.box');
// const message = document.querySelector('#message');

// document.addEventListener('scroll', function () {
//     const messageText = isInViewport(box) ?
//         'The box is visible in the viewport' :
//         'The box is not visible in the viewport';

//     message.textContent = messageText;

// }, {
//     passive: true
// });
