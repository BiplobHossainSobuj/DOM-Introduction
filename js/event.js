function makeRed() {
    const element = document.getElementById('redButton');
    element.style.backgroundColor = "red";
}

const blue = document.getElementById('blue-button');
// blue.onclick = function(){
//     blue.style.backgroundColor = 'blue';
// }
blue.addEventListener('click',makeBlue);
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}