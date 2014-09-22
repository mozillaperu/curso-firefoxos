function showNotification()
{
  var title = "Mi FxOS app";
  var optionsBody = "Esto es una notificación";
  // IMPORTANTE: los iconos no funcionan en rutas locales
  var options;
  if (!navigator.onLine)
  { options = { body: optionsBody }; }
  else
  {
    var optionIcon = "http://juaneladio.github.io/metropolitano/images/metropolitano_icon_32.png";
    options = { body: optionsBody, icon: optionIcon };
  }
  if ("Notification" in window)
  {
    var n = new Notification(title,options);
  }
  else if ("mozNotification" in navigator)
  { // FirefoxOS 1.1
    var notification = navigator.mozNotification.createNotification(title,options);
    notification.show();
  }
  else
  { // Other browsers: do nothing
    alert(title + ": " + options.body);
  }
}

document.querySelector('#showNotificationButton').addEventListener ('click', function () {
  showNotification();
});
