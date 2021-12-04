//Make grid programatically
const sketchBox = document.getElementById('sketch-box');

let n = 16;

sketchBox.style.gridTemplateColumns = `repeat(${n}, 1fr)`;

for (let i = 0; i < n * n; i++) {
    const pixelBox = document.createElement('div');
    sketchBox.append(pixelBox);
}