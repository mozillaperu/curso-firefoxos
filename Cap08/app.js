function checkBatteryStatus()
{
  if (navigator.battery) {
    var battery = navigator.battery,
    batteryLevel = Math.round(battery.level * 100),
    dischargingTime = parseInt(battery.dischargingTime / 60, 10),
    batteryInfo;
    // battery.dischargingTime === Infinity when charged, charging or unavailable
    if (batteryLevel <= 50)
    {
      batteryInfo = 'ALERTA: Batería al ' + batteryLevel + '%';
      if (!isNaN(dischargingTime))
      { batteryInfo += ' y te quedan ' + dischargingTime + " minutos."; }
      vibrateOneTime();
    }
    else
    { batteryInfo = 'Batería en estado aceptable'; }
    console.log(batteryInfo);
    document.querySelector('#showBatteryStatus').innerHTML = batteryInfo;
  }
}

document.querySelector('#checkBatteryButton').addEventListener ('click', function () {
  checkBatteryStatus();
});

function vibrateOneTime()
{
  if (navigator.vibrate) {
    navigator.vibrate(200); // vibrate for just 200ms
  }
}
