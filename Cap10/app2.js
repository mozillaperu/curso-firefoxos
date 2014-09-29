function agregarContactoEnMovil()
{
  if ("mozContacts" in window.navigator)
  {
    var contactData = {
      name : [ document.getElementById('apellidos').value + " " + document.getElementById('nombres').value ],
      familyName : [ document.getElementById('apellidos').value ],
      givenName : [ document.getElementById('nombres').value ],
      email : [ { type: [ "home" ], value: document.getElementById('correo').value, pref: true } ],
      tel : [ { type: [ "home" ], value: document.getElementById('telefono').value, pref: true } ]
    }
    var persona = new mozContact(contactData); // Firefox OS 1.3 y superior recibe un parámetro con los detalles
    if ("init" in persona) {
      // Firefox OS 1.2 e inferior se inicializa con el método init
      persona.init(contactData);
    }
    var saving = navigator.mozContacts.save(persona);
    saving.onsuccess = function(evt) {
      document.getElementById("showSysContactsResult").innerHTML="Contacto registrado";
      document.getElementById('apellidos').value = "";
      document.getElementById('nombres').value = "";
      document.getElementById('correo').value = "";
      document.getElementById('telefono').value = "";
    };
    saving.onerror = function (evt) {
      document.getElementById("showSysContactsResult").innerHTML="Error: ", evt.target.errorCode;
    };
  }
  else
  console.error("mozContacts not supported");
};

document.querySelector('#agregarContacto').addEventListener ('click', function () {
  agregarContactoEnMovil();
});
