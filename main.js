const h1 = document.getElementById('color')

function randomColor() {
    const red = Math.random() * 256
    const green = Math.random() * 256
    const blue = Math.random() * 256
    const newRed= red.toString().split('.')[0]
    const newGreen= green.toString().split('.')[0]
    const newBlue = blue.toString().split('.')[0]
    document.body.style.background = "rgb(" + newRed + "," + newGreen + "," + newBlue   + ")"
    h1.innerText = "rgb(" + newRed + " ," + newGreen + " ," + newBlue  + ")"
    if (newRed < 150 && newGreen < 150 && newBlue< 150) {
        h1.style.color = "rgb(235,235,235)"
    
    }
    else{
        h1.style.color = "rgb(0,0,0)"
    }
    
    

}


