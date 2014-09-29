function showContacts()
{
  if ("mozContacts" in window.navigator)
  {
    console.log("mozContacts available");
    document.getElementById('showContactsResult').innerHTML = "";
    
    var allContacts = navigator.mozContacts.getAll({sortBy: "givenName", sortOrder: "ascending"});
    var numContacts = 0;
    allContacts.onsuccess = function(event) {
      var cursor = event.target;
      if (cursor.result) {
        numContacts++;
        var p = document.createElement("p");
        p.textContent = "Contacto "+ numContacts + ": " + cursor.result.givenName[0] + " " + cursor.result.familyName[0];
        document.getElementById('showContactsResult').appendChild(p);
        cursor.continue();
      } else {
        var p = document.createElement("p");
        p.textContent = "Se encontraron "+numContacts+" contactos en el móvil.";
        document.getElementById('showContactsResult').appendChild(p);
      }
    };
    allContacts.onerror = function() {
      console.error("Falló la obtención de contactos");
    };
  }
  else
  console.error("mozContacts not supported");
}

document.querySelector('#showContactsButton').addEventListener ('click', function () {
  showContacts();
});

function clearContacts()
{
  if ("mozContacts" in window.navigator)
  {
    console.log("mozContacts available");
    document.getElementById('showContactsResult').innerHTML = "";
    
    var request = navigator.mozContacts.clear();
    request.onsuccess = function(event) {
      document.getElementById('showContactsResult').innerHTML = "Eliminación exitosa";
    };
    request.onerror = function() {
      document.getElementById('showContactsResult').innerHTML = "Eliminación fallida";
    };
  }
  else
  console.error("mozContacts not supported");
}

document.querySelector('#clearContactsButton').addEventListener ('click', function () {
  clearContacts();
});
