function oneSignalNotification()
{
  var paramkeyArray=["onesignal"];
    CustomConfigParameters.get(function(configData){
        
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