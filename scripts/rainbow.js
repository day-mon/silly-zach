document.addEventListener('DOMContentLoaded', function() {
    let image = document.getElementById('zzz');
    let text = document.getElementById('ddd');
    setInterval(() => {
        text.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
        image.style.borderColor = 'rgb(' + Math.random() * 255 + ',' + Math.random() * 255 + ',' + Math.random() * 255 + ')';
    }, 100)
})



document.addEventListener('DOMContentLoaded', function() {
    let text = document.getElementById('ddd');
    let x = 0;
    let y = 0;
    let dx = 10;
    let dy = 10;
    setInterval(() => {
        x += dx;
        y += dy;
        text.style.left = x + 'px';
        text.style.top = y + 'px';
        if (x > window.innerWidth - 100 || x < 0) {
            dx = -dx;
        }
        if (y > window.innerHeight - 100 || y < 0) {
            dy = -dy;
        }
    }, 15)
})

document.addEventListener("touchstart", function(e){
    e.preventDefault();
},{passive: false});


document.addEventListener('DOMContentLoaded', function() {
    let pic = document.getElementById('zzz');
    let x = 0;
    let y = 0;
    let dx = 94;
    let dy = 23;
    setInterval(() => {
        x += dx;
        y += dy;
        pic.style.left = x + 'px';
        pic.style.top = y + 'px';
        if (x > window.innerWidth - 100 || x < 0) {
            dx = -dx;
        }
        if (y > window.innerHeight - 100 || y < 0) {
            dy = -dy;
        }
    }, 100)
})
