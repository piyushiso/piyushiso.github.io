AOS.init()
$('.hashtag span').click(function() {
    navigator.clipboard.writeText("#AcousticFestHSM");
})

$('.nav-link').click(function(){
    if($('this').hasClass('active'))
        alert("ACTIVE")
    else
        alert("NOT-ACTIVE")
})