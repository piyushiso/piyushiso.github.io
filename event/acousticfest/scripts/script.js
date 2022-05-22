AOS.init()

var sections = ["home", "about", "register"]
var index = 0
var max_sections = sections.length
var lastScrollTop = 0

$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		scrollHorizontally: true
	});

	//methods
	$.fn.fullpage.setAllowScrolling(false);
});

$('.hashtag span').click(function() {
    navigator.clipboard.writeText("#AcousticFestHSM");
})

$('.navbar .nav-link').click(function(){
    console.log("HERE")
    updateActive(this)    
})

function updateActive(reference){
    $('.navbar .nav-link').removeClass('active')
    $(reference).addClass('active')
    // $('.contents').scrollTop()($('.contents').scrollTop()-200)
    // alert(getActive())
    // console.log(getActive())
    // console.log(getActive())
}

function getActive(){
    return ($('.navbar .nav-link.active').attr('index'))
}


$(document).scroll(function() {
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    index = getActive()
    if (st > lastScrollTop){
        // scroll down
        // index = updateIndex(index, true)
        // window.scrollTo(0, window.scrollY + 10)
        window.pageYOffset += 1200
    } else {
        // scroll up
        // index = updateIndex(index, false)
        // window.scrollTo(0, window.scrollY - 10)
    }
    updatePosition(index)
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
})

function updateIndex(index, increment){
    if(increment){
        if(++index == max_sections)
            index = 0
    }
    else{
        if(--index == -1)
            index = 0
    }
    return index
}

function updatePosition(index){
    var ref = "#" + sections[index]
    console.log(ref)
    // console.log($(ref).scrollTop())
    // window.scrollTo(0, 1200)
    // var id = "#" + sections[index] + "-link"
    
    // $(id).click()

}

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
