function oneSignalNotification()
{
  var paramkeyArray=["onesignal"];
    CustomConfigParameters.get(function(configData){
        
        alert(configData.onesignal);
        var notificationId = configData.onesignal;
 var notificationOpenedCallback = function(jsonData) {
 
  };
window.plugins.OneSignal
    .startInit(notificationId)
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
 },function(err){
      
    },paramkeyArray);
}