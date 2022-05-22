let state = false
const background_1 = "url(assets/images/platypus.png)"
const background_2 = "url(assets/images/perry-the-platypus.png)"
// const background_1 = "url(https://cdn.wallpapersafari.com/35/22/Y9WFlq.jpg)"
// const background_2 = "url(https://i.pinimg.com/originals/85/fb/0e/85fb0e310f51fc0e9c7718a4038044a6.png)"

const move_sound = document.createElement('audio')
move_sound.setAttribute('src', 'assets/sounds/move-sound-effect.mp3')

const a_platypus_sound = document.createElement('audio')
a_platypus_sound.setAttribute('src', 'assets/sounds/a-platypus-sound.mp3')

const perry_bg_sound = document.createElement('audio')
perry_bg_sound.setAttribute('src', 'assets/sounds/perry-bg-sound-effect.mp3')

const perry_the_platypus_sound = document.createElement('audio')
perry_the_platypus_sound.setAttribute('src', 'assets/sounds/perry-the-platypus-sound.mp3')

$('#toggler').on('click', function(){
    if($('#toggler').prop('checked'))
        state = true
    else
        state = false
    update(state)
})

function update(state){
    console.log(state)
    if(state){
        $('body').css({
            'b'
            'background-image':background_2,
            'background-repeat': 'no-repeat',
            'background-attachment': 'fixed',
            'background-position': 'center',
            'transition': '.3s'
        })
        // move_sound.play()
        perry_bg_sound.play()
        perry_the_platypus_sound.play()

    }else{
        $('body').css({
            'background-image':background_1,
            'background-repeat': 'no-repeat',
            'background-attachment': 'fixed',
            'background-position': 'center',
            'transition': '.3s'
        })
        move_sound.play()
        a_platypus_sound.play()
    }
}