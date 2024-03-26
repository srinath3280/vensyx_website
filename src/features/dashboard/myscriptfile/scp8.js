window.addEventListener('click', button);
function button() {
    const btn = document.getElementById("btn");
    btn.onclick = function (e) {
        var circle = document.createElement('div');
        circle.classList.add("ripple");
        circle.style.top = e.clientY;
        circle.style.left = e.clientX;
        e.target.appendChild(circle);
    };
}