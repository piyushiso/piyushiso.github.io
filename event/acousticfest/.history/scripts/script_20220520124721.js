AOS.init()
$('.hashtag span').click(function() {
    navigator.clipboard.writeText("#AcousticFestHSM");
})

$('.nav-link').click(function(){
    if($('this').hasClass('active') == true)
        alert("ACTIVE")
    else
        alert("NOT-ACTIVE")
})