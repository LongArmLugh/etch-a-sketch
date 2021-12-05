//Make grid programatically
const sketchBox = document.getElementById('sketch-box');
var resolution = 16;

// sketchBox.style.gridTemplateColumns = `repeat($s{resolution}, 1fr)`;

makeCanvas();

function makeCanvas() {
    sketchBox.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`;
    for (let i = 0; i < resolution * resolution; i++) {
    const pixel = document.createElement('div');
    pixel.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "rgb(0, 0, 0, 0.66)";
    });
    sketchBox.append(pixel);
    }
}


// const pixels = sketchBox.children;

function reset() {
    sketchBox.querySelectorAll('*').forEach( n => n.remove() );
    resolution = setResolution(); 
    sketchBox.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`; 
    makeCanvas();
}

function setResolution() {
    let n = prompt("resolution value 16 to 100");
    if (n > 100) {
        alert('resolution set to max(100)');
        n = 100;
    }
    if (n < 16) {
        alert("resolution set to min(16)");
        n = 16;
    }
    return n;
}


