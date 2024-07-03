let contents = [
    "<div class='item'><img src='assets/lina-bg.jpg'/><h1>LINA</h1></div>",
    "<div class='item'><img src='assets/zeus-bg.jpg'/><h1>ZEUS</h1></div>",
    "<div class='item'><img src='assets/qop-bg.webp'/><h1>QUEEN OF PAIN</h1></div>",
    "<div class='item'><img src='assets/lion-bg.webp'/><h1>LION</h1></div>"
]

function changePoster(id) {
    let container = document.getElementById("hero")
    container.innerHTML = contents[id]
}