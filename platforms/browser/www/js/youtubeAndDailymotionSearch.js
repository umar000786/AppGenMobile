function getyoutubeVideoByplaylistSearch(playlistId , limitVideo)
{
	var response = JSON.parse((localStorage.getItem("item")));
	var youtubekey = response[6];

	var myurl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults='+limitVideo+'&playlistId='+playlistId+'&key=AIzaSyCBpW5wgGXTdt4nLvWo_Tb7wIa1crCHirk&videoEmbeddable=true&videoSyndicated=true';
	
	var settings = {
  "async": true,
  "crossDomain": true,
  "url": myurl,
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "Postman-Token": "386e8433-0d24-4ee1-88b2-b0508091c0d7"
  }
}

$.ajax(settings).done(function (response) {
       var items = response.items;
       var html= '';
       
    
       $.each(items,function(index,item){
        		var vedio_id = item.snippet.resourceId.videoId;
        		var $title = item.snippet.title
        		if ($title.length < 50) {
        			var title = $title;
        		}
        		else {
        			var title = $title.slice(0 , 40)+'...';
        		}
        		var image_url = item.snippet.thumbnails.high.url

        		html += '<div style="margin-bottom:10px;" class="col s12 single_post_view">';
        		html += '<div class="entry video_list_div">';
        		html += '<a vedioId="'+vedio_id+'" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" >';

        		html += '<img class="lazyloadingImage" src="'+image_url+'" alt="" style="padding: 4px;border: 1px solid #c4c4c4;width: 100%;max-height: 235px;">';


        		html += '</a>';
        		html += '<div class="desc">';
        		html += '<a vedioId="'+vedio_id+'" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">'+title+'</h4></a>';
        		html += '</div>';
        		html += '</div>';
        		
        	});
               	$('#video_list').html(html);
        	//$('#search_video_list').html(html);
        	$('.my_lazy_loader').hide();
        	$('#video_list').css('display','block');
          $('#search_video_list').css('display','block');

});	
}
function getyoutubeVideoBySearch(keyword, type , limitVideo) {
	var response = JSON.parse((localStorage.getItem("item")));
	var youtubekey = response[6];
	var myurl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+keyword+'&type='+type+'&maxResults='+limitVideo+'&key=AIzaSyCBpW5wgGXTdt4nLvWo_Tb7wIa1crCHirk&videoEmbeddable=true&videoSyndicated=true';
	var url = encodeURI(myurl);
	$.ajax({
		type: "GET",
		url: url,
		success: function(response) {
        	
        	var items = response.items;
        	var html= '';
        	$.each(items,function(index,item){
        		var vedio_id = item.id.videoId;
        		var $title = item.snippet.title
        		if ($title.length < 50) {
        			var title = $title;
        		}
        		else {
        			var title = $title.slice(0 , 40)+'...';
        		}
        		var image_url = item.snippet.thumbnails.high.url

        		html += '<div style="margin-bottom:10px;" class="col s12 single_post_view">';
        		html += '<div class="entry video_list_div">';
        		html += '<a vedioId="'+vedio_id+'" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" >';

        		html += '<img class="lazyloadingImage" src="'+image_url+'" alt="" style="padding: 4px;border: 1px solid #c4c4c4;width: 100%;max-height: 235px;">';


        		html += '</a>';
        		html += '<div class="desc">';
        		html += '<a vedioId="'+vedio_id+'" platform="youtube" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">'+title+'</h4></a>';
        		html += '</div>';
        		html += '</div>';
        		html
        	});
        	$('#video_list').html(html);
        	
        	$('.my_lazy_loader').hide();
        	$('#video_list').css('display','block');
          $('#search_video_list').css('display','block');

        	


        },
        error: function(response) {
        	
        }
    });
}

function getDailymotionBySearch(keyword , limitVideo) {
	var myurl = 'https://api.dailymotion.com/videos?search='+keyword+'&limit='+limitVideo+'';
	var url = encodeURI(myurl);
	$.ajax({
		type: "GET",
		url: url,
		success: function(response) {
			var items = response.list;
			var html = '';
			$.each(items,function(index,item){

				var vedio_id = item.id;
				var $title = item.title;
				if ($title.length < 50) {
					var title = $title;
				}
				else {
					var title = $title.slice(0 , 50)+'...';
				}
				var image_url = 'https://www.dailymotion.com/thumbnail/video/'+vedio_id+'';
				var channel = item.channel;

				html += '<div style="margin-bottom:10px;" class="col s12 single_post_view">';
				html += '<div class="entry dailymotion video_list_div">';

				html += '<a vedioId="'+vedio_id+'" platform="dailymotion" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">';
				html += '<img class="lazyloadingImage" src="img/loading.gif" data-src="'+image_url+'" alt="" style="padding: 4px;border: 1px solid #c4c4c4;width: 100%;max-height: 235px;"></a>';
				html += '<div class="desc">';

				html += '<a vedioId="'+vedio_id+'" platform="dailymotion" style="color:#000 !important" onclick="videoModel(this)" ><h4 style="font-size: 26px;margin-left: 2px;font-family: timenewroman;font-weight: bold;padding-top: 8px;">'+title+'</h4></a>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
			});
			$('#img_link').css('display','none');
			$('#video_list').html(html);
			$('#video_list').show();
			  $('.my_lazy_loader').hide();
		$('#video_list').css('display','block');
          $('#search_video_list').css('display','block');

		},
		error: function(response) 
		{
			
		}
	});

//end dailymotion

}

function videoModel(object) {
//count ads 
var videoid = $(object).attr('vedioId');
var platform = $(object).attr('platform');
var y = localStorage.getItem("counterAds");
var x  = 1;
var sum = (x*100 + y*100) / 100;
localStorage.setItem("counterAds",sum);
var myres = JSON.parse((localStorage.getItem("item")));
var admobCheck = myres[7];
var admobLimit = myres[2];
var counterAds = localStorage.getItem("counterAds");

if(admobCheck == 'admobRunning' &&  admobLimit > 0 )
{
	var counter = 0;
	var response = JSON.parse((localStorage.getItem("item")));
	var counterAds = localStorage.getItem("counterAds");
	admobLimit = response[2];
	if(counterAds == admobLimit)
	{
		showIndustrialAdForYoutubeVIdeoPlayer();
		var videoInfo = [];
		
		localStorage.setItem("runVideoId",videoid);
		localStorage.setItem("runVideoplatform",platform);
		localStorage.setItem("counterAds",'0');
		
	}
	else
	{
		runVideoPlayer(videoid , platform);
	
}

}
else
{
	//prepareInterstitialAd();
	runVideoPlayer(videoid , platform);
	//initAdmobWithoutBanner();
}
}


function runVideoPlayer(videoid , platform)
{

			//$("#videoModal").animate({width:'toggle'},300);
			if (platform == 'dailymotion') {
				$('#myModal').css('display', 'none');
			   $('#videoModal').css('display', 'block');
			    initAdmobWithoutBanner();
				window.screen.orientation.lock('landscape');
				videourl = 'https://www.dailymotion.com/embed/video/'+videoid+'?queue-enable=false';
				$('#videoplayer').attr('src' , videourl);
			}
			if(platform == 'youtube')
			{
				YoutubeVideoPlayer.openVideo(videoid, function(result) {  });
					
			}
		}