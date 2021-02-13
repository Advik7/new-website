function format(num) {
    if (num < 10) {
        num = "0" + num   
    }
    return num



}
function time() {
    var seconds = new Date().getSeconds();
    var minutes = new Date().getMinutes();
    var hours = new Date().getHours();
    var state = "AM"
    if (hours>12) {
        hours-=12
        state = "PM"

    }
    document.querySelector('h1').innerHTML = format(hours) + " : " +  format(minutes) + " : " + format(seconds) + "  " + state
}
time()
setInterval(time)

