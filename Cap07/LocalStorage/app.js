function guardar(){
    nombre = document.getElementById("nombre_input").value
    localStorage.setItem('nombre', nombre);
}

function mostrar(){
    if( localStorage.nombre ){
        nombre = localStorage.getItem('nombre');
        document.getElementById("nombre_span").innerHTML = nombre
    }else{
        document.getElementById("nombre_span").innerHTML = "esta vacio"
    }
    
}

function eliminar(){
    localStorage.clear()
    //localStorage.removeItem('nombre')
    document.getElementById("nombre_span").innerHTML = ""
}

document.querySelector('#BtnGuardar').addEventListener ('click', function () {
  guardar();
});

document.querySelector('#BtnMostrar').addEventListener ('click', function () {
  mostrar();
});

document.querySelector('#BtnEliminar').addEventListener ('click', function () {
  eliminar();
});
