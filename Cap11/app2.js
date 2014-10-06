function addContactActivity()
{
  var activity = new MozActivity({
    name: "new",
    data: {
      type: "webcontacts/contact",
        params: {
      }
    }
  });
}

document.querySelector('#addContact').addEventListener ('click', function () {
  addContactActivity();
});

function updateContactActivity()
{
  var activity = new MozActivity({
    name: "update",
    data: {
      type: "webcontacts/contact",
        params: {
      }
    }
  });
}

document.querySelector('#updateContact').addEventListener ('click', function () {
  updateContactActivity();
});

function pickContactActivity()
{
  var activity = new MozActivity({
    name: "pick",
    data: {
      type: "webcontacts/contact",
        params: {
      }
    }
  });
  activity.onsuccess = function() {
    var contact = this.result;
    console.log("Se obtuvo un contacto válido (y con número de teléfono)");
    //console.log(contact);
    document.getElementById('showPickContactResult').innerHTML = "";
    
    var p = document.createElement("p");
    p.textContent = "Contacto : " + contact.name + " ("+ contact.number+")";
    document.getElementById('showPickContactResult').appendChild(p);
    
    var a = document.createElement("a");
    a.setAttribute("id","dialNumber");
    a.setAttribute("href","tel:"+contact.number);
    a.textContent = "Llamar a contacto";
    p = document.createElement("p");
    p.appendChild(a);
    document.getElementById('showPickContactResult').appendChild(p);
    
    a = document.createElement("a");
    a.setAttribute("id","sendSms");
    a.setAttribute("href","#");
    a.textContent = "Enviar SMS";
    p = document.createElement("p");
    p.appendChild(a);
    document.getElementById('showPickContactResult').appendChild(p);
    document.querySelector('#sendSms').addEventListener ('click', function () {
      sendSmsActivity(contact.number);
    });
    
    a = document.createElement("a");
    a.setAttribute("id","sendMessage");
    a.setAttribute("href","#");
    a.textContent = "Compartir información de contacto por correo";
    p = document.createElement("p");
    p.appendChild(a);
    document.getElementById('showPickContactResult').appendChild(p);
    document.querySelector('#sendMessage').addEventListener ('click', function () {
      sendMessageActivity(contact.name,contact.number);
    });
  };
  activity.onerror = function() {
    console.log(this.error);
  };
}

document.querySelector('#pickContact').addEventListener ('click', function () {
  pickContactActivity();
});

function sendSmsActivity(number)
{
  var activity = new MozActivity({
    name: "new",
    data: {
      type: [ "websms/sms" ],
      number: number, // required by websms
      body: '', // required by websms
    }
  });
}

function sendMessageActivity(name,number)
{
  var activity = new MozActivity({
    name: "new",
    data: {
      type: [ "mail" ],
      url: "mailto:?body=" + "Nombre: " + name + " - Teléfono: " + number, // used by mail
    }
  });
}
