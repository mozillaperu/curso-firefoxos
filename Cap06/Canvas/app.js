var canvas = document.getElementById('miCanvas');
var context = canvas.getContext('2d');
var imagen = new Image();

imagen.onload = function(){
    context.drawImage(imagen, 250, 100);
}

imagen.src = "logo.jpg"
