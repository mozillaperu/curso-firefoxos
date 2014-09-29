function update() {
    elt = document.getElementById("status");
    cuerpo = document.getElementsByTagName("body")[0];
    
    elt.innerHTML = (navigator.onLine ? "Online" : "Offline");
    cuerpo.style.backgroundColor = (navigator.onLine ? "#B8E3C8" : "#E3B8D3");
}

window.onload = function() {
        setInterval(update, 500);
}
