
function time() {
    const seconds = new Date().getSeconds();
    const minutes = new Date().getMinutes();
    var hours = new Date().getHours();
    var state = "AM"
    if (hours>12) {
        hours-=12
        state = "PM"

    }
    document.querySelector('h1').innerHTML = hours + " : " +  minutes + " : " + seconds + "  " + state
}
time()
setInterval(time)

