var admobid={};function onDeviceReady(){CustomConfigParameters.get(function(e){console.log(e),console.log(e.admobBannerId),console.log(e.admobInterstitialId),admobid=/(android)/i.test(navigator.userAgent)?{banner:e.admobBannerId,interstitial:e.admobInterstitialId,rewardvideo:"ca-app-pub-3940256099942544/5224354917"}:/(ipod|iphone|ipad)/i.test(navigator.userAgent)?{banner:e.admobBannerId,interstitial:e.admobInterstitialId,rewardvideo:"ca-app-pub-3940256099942544/1712485313"}:{banner:e.admobBannerId,interstitial:e.admobInterstitialId,rewardvideo:""}},function(e){console.log(e)},["admobBannerId","admobInterstitialId"]),initAd(),setTimeout(function(){initBannerAndinterstitial(),showBannerAtPosition()},4e3)}function initAd(){AdMob.getAdSettings(function(e){console.log("adId: "+e.adId+"\nadTrackingEnabled: "+e.adTrackingEnabled)},function(){console.log("failed to get user ad settings")}),AdMob.setOptions({position:AdMob.AD_POSITION.BOTTOM_CENTER,isTesting:!1,bgColor:"black",autoShow:!1}),$(document).on("onAdFailLoad",function(e){if("1"==localStorage.getItem("interAdshown")){localStorage.setItem("interAdshown","0"),prepareInterstitialAd();var o=localStorage.getItem("openVideoModelId"),t=localStorage.getItem("runVideoId"),a=localStorage.getItem("runVideoplatform"),n=localStorage.getItem("category_id_wallpaper");if("0"!=o&&(openModel(o),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0")),"0"!=t&&"0"!=a){var d=t,l=a;"youtube"==l&&YoutubeVideoPlayer.openVideo(d,function(e){console.log("YoutubeVideoPlayer result = "+e)}),"dailymotion"==l&&($("#myModal").css("display","none"),$("#videoModal").css("display","block"),initAdmobWithoutBanner(),window.screen.orientation.lock("landscape"),videourl="https://www.dailymotion.com/embed/video/"+d+"?queue-enable=false",$("#videoplayer").attr("src",videourl)),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0")}0!=n&&(openModelWallpaper(n),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0"))}}),$(document).on("onAdPresent",function(e){}),$(document).on("onAdLeaveApp",function(e){}),$(document).on("onAdDismiss",function(e){if("1"==localStorage.getItem("interAdshown")){localStorage.setItem("interAdshown","0");var o=localStorage.getItem("openVideoModelId"),t=localStorage.getItem("runVideoId"),a=localStorage.getItem("runVideoplatform"),n=localStorage.getItem("category_id_wallpaper");if("0"!=o&&(openModel(o),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0")),"0"!=t&&"0"!=a){var d=t,l=a;"youtube"==l&&YoutubeVideoPlayer.openVideo(d,function(e){console.log("YoutubeVideoPlayer result = "+e)}),"dailymotion"==l&&($("#myModal").css("display","none"),$("#videoModal").css("display","block"),initAdmobWithoutBanner(),window.screen.orientation.lock("landscape"),videourl="https://www.dailymotion.com/embed/video/"+d+"?queue-enable=false",$("#videoplayer").attr("src",videourl)),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0")}0!=n&&(openModelWallpaper(n),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0"))}}),$(document).on("resume",function(){if("1"==localStorage.getItem("interAdshown")){localStorage.setItem("interAdshown","0");var e=localStorage.getItem("openVideoModelId"),o=localStorage.getItem("runVideoId"),t=localStorage.getItem("runVideoplatform"),a=localStorage.getItem("category_id_wallpaper");if("0"!=e&&(openModel(e),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0")),"0"!=o&&"0"!=t){var n=o,d=t;"youtube"==d&&YoutubeVideoPlayer.openVideo(n,function(e){console.log("YoutubeVideoPlayer result = "+e)}),"dailymotion"==d&&($("#myModal").css("display","none"),$("#videoModal").css("display","block"),initAdmobWithoutBanner(),window.screen.orientation.lock("landscape"),videourl="https://www.dailymotion.com/embed/video/"+n+"?queue-enable=false",$("#videoplayer").attr("src",videourl)),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0")}0!=a&&(openModelWallpaper(a),localStorage.setItem("category_id_wallpaper","0"),localStorage.setItem("openVideoModelId","0"),localStorage.setItem("runVideoId","0"),localStorage.setItem("runVideoplatform","0"))}})}function initBannerAndinterstitial(){AdMob.createBanner({license:"thanksgod@live.co.uk/b9614fd65737b2ef21e9210ed56200a0",adId:admobid.banner,position:AdMob.AD_POSITION.BOTTOM_CENTER,isTesting:!1,overlap:!1,offsetTopBar:!1,bgColor:" "}),AdMob.prepareInterstitial({license:"thanksgod@live.co.uk/b9614fd65737b2ef21e9210ed56200a0",adId:admobid.interstitial,isTesting:!1,autoShow:!1})}function showBannerAtPosition(){AdMob&&AdMob.showBanner(AdMob.AD_POSITION.BOTTOM_CENTER)}function showIndustrialAd(){localStorage.setItem("interAdshown","1"),AdMob.showInterstitial(),prepareInterstitialAd(),createAndShowBannerAd()}function showIndustrialAdForYoutubeVIdeoPlayer(){localStorage.setItem("interAdshown","1"),AdMob.showInterstitial(),prepareInterstitialAd()}function createNBannerAd(){AdMob.createBanner({license:"thanksgod@live.co.uk/b9614fd65737b2ef21e9210ed56200a0",adId:admobid.banner,position:AdMob.AD_POSITION.BOTTOM_CENTER,isTesting:!1,overlap:!1,offsetTopBar:!1,bgColor:" "})}function createAndShowBannerAd(){createNBannerAd(),showBannerAtPosition()}function prepareInterstitialAd(){AdMob.prepareInterstitial({license:"thanksgod@live.co.uk/b9614fd65737b2ef21e9210ed56200a0",adId:admobid.interstitial,autoShow:!1,isTesting:!1})}function initAdmobWithoutBanner(){AdMob.hideBanner()}/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent)?document.addEventListener("deviceready",onDeviceReady,!1):onDeviceReady();