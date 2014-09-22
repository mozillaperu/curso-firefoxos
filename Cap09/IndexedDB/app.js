var database;
var openRequest = window.indexedDB.open("AppDatabase",1);
openRequest.onsuccess = function (evt) {
  database = this.result;
};
openRequest.onerror = function (evt) {
  console.error("Error: ", evt.target.errorCode);
};
openRequest.onupgradeneeded = function (evt) {
  var store = evt.currentTarget.result.createObjectStore("contactos", { keyPath: 'id', autoIncrement: true });
  store.createIndex('email', 'email', { unique: false });
  store.createIndex('apellidos', 'apellidos', { unique: false });
  store.createIndex('nombres', 'nombres', { unique: false });
};
function agregarContactoEnDB()
{
  var Contact = {
    apellidos : document.getElementById('apellidos').value,
    nombres : document.getElementById('nombres').value,
    email : document.getElementById('email').value,
    telefono : document.getElementById('telefono').value
  }
  var transaction = database.transaction(["contactos"], "readwrite");
  var objectStore = transaction.objectStore("contactos");
  var request = objectStore.add(Contact);
  request.onsuccess = function(evt) {
    console.log("Contacto registrado: id: "+ evt.target.result);
  };
  request.onerror = function (evt) {
    console.error("Error: ", evt.target.errorCode);
  };
};
function borrarContactosEnDB()
{
  var transaction = database.transaction(["contactos"], "readwrite");
  var objectStore = transaction.objectStore("contactos");
  var request = objectStore.clear();
  request.onsuccess = function(evt) {
    console.log("Contactos borrados (equivalente a un Delete)");
  };
  request.onerror = function (evt) {
    console.error("Error: ", evt.target.errorCode);
  };
};
document.querySelector('#agregarContacto').addEventListener ('click', function () {
  agregarContactoEnDB();
});
document.querySelector('#borrarContactos').addEventListener ('click', function () {
  borrarContactosEnDB();
});
