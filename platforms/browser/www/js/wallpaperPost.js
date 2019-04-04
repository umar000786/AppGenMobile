
function showWallaperPost(rowSize , pakgeName) {

	var base_url = "http://appgenny.com/";
	var wallpaper_html = '';
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "http://api.appgenny.com/api/v1/GetWallPaper/PakegName?pakgeName="+pakgeName,
		"method": "GET",
		"headers": {
			"Cache-Control": "no-cache",
			"Postman-Token": "e2c3048a-4e30-4f7e-b1ee-e2f25ba7c47f"
		}
	}

	$.ajax(settings).done(function (response) {
		$.each( response, function( key, myresponse ) {
			if (myresponse.Active == true) {
				var title = myresponse.Title;
				var subcategoryId = myresponse.SubcategoryId;
				var image_url = myresponse.Url.split('~');
				var wallpaper_url = base_url+image_url[1];
				if(myresponse.RedirectApp == null)
				{
					wallpaper_html += '<a  class="single_post_view" data-toggle="modal" row_id ="'+rowSize+'" category_id ="'+subcategoryId+'" onclick="openModelWallpaper(this)" >';
					wallpaper_html += '<div  style="margin-bottom: 5px;" class="col eachsize '+rowSize+'" >';
					wallpaper_html +=	'<div class="entry ">';
					wallpaper_html +=	'<img src="'+wallpaper_url+'" alt="" >';
					if (title == null) {
						wallpaper_html += '';
					}
					else
					{
						wallpaper_html += '<div class="desc">';
						wallpaper_html +=	'<p style="text-align:center;">'+title+'</p>';								
						wallpaper_html += '</div>';

					}
					wallpaper_html += '</div>';
					wallpaper_html += '</div>';
					wallpaper_html += '</a>';
				}

			}
		});
		$('#main_content_wallpaper').html(wallpaper_html);
	});


}
function openWallpaper(object)
{
	var category_id = $(object).attr('category_id');
	var y = localStorage.getItem("counterAds");
	var x  = 1;

var sum = (x*100 + y*100) / 100;
localStorage.setItem("counterAds",sum);
var response = JSON.parse((localStorage.getItem("item")));
var admobCheck = response[7];
var admobLimit = response[2];

if(admobCheck == 'admobRunning' &&  admobLimit > 0 )
{
	var counter = 0;
	var response = JSON.parse((localStorage.getItem("item")));
	var counterAds = localStorage.getItem("counterAds");
	admobLimit = response[2];
	if(counterAds == admobLimit)
	{
		showIndustrialAd();
		localStorage.setItem('category_id_wallpaper' , category_id);

	}
	else {
		prepareInterstitialAd(); 
		openModelWallpaper(category_id);
	}
}
else
{
	prepareInterstitialAd(); 
	openModelWallpaper(category_id )
}

}

function openModelWallpaper(category_id)
{
	
	var base_url = "http://appgenny.com/";
	//number of rows
	var response=JSON.parse((localStorage.getItem("item")));
	var row_id = response[0];
	//number of rows
	$('#img_link').css('display','block');
	$('#video_list').css('display','none');
	var wallpaperModelhtml= '';
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "http://api.appgenny.com/api/v1/GetPostBySubCategory?subCateId="+category_id,
		"method": "GET",
		"headers": {
			"Cache-Control": "no-cache",
			"Postman-Token": "a2c4654d-d296-4238-86bf-f720520ad62a"
		}
	}

	$.ajax(settings).done(function (response) {
		$.each( response, function( key, myresponse ) {
			if (myresponse.Active == true) {
				var title = myresponse.Title;
				var image_url = myresponse.Url.split('~');
				var wallpaper_url = base_url+image_url[1];
				wallpaperModelhtml += '<a class="single_post_view" data-toggle="modal" link="'+wallpaper_url+'" onclick="singleModelWallpaper(this)" >';
				wallpaperModelhtml += '<div  style="margin-bottom:10px;" class="col eachsize '+row_id+'" >';
				wallpaperModelhtml +=	'<div class="entry ">';
				wallpaperModelhtml +=	'<img src="'+wallpaper_url+'" alt="" >';
				if (title == null) {
					wallpaperModelhtml += '';
				}
				else
				{
					wallpaperModelhtml += '<div class="desc">';
					wallpaperModelhtml +=	'<p style="text-align:center;">'+title+'</p>';								
					wallpaperModelhtml += '</div>';

				}
				wallpaperModelhtml += '</div>';
				wallpaperModelhtml += '</div>';
				wallpaperModelhtml += '</a>';


			}

		})
		$('#wallpaper_gallery').html(wallpaperModelhtml);
		$("#myModal").toggle("slide", {direction:'right'} , '100');

	});
}

function singleModelWallpaper(object)
{

	var img = $(object).attr('link');
	var modal = document.getElementById('wallpaperModal');
	var modalImg = document.getElementById("img01");
	var captionText = document.getElementById("caption");
	modal.style.display = "block";
	$('#myModal').css('display', 'none');
	modalImg.src = img;
	captionText.innerHTML = '';
	$('#saveImg').attr('link' , img);


}

// When the user clicks on <span> (x), close the modal
$('.closewallpaper').click(function(){
	var modal = document.getElementById('wallpaperModal');
	modal.style.display = "none";
	$('#myModal').css('display', 'block');
})

function downloadImg(object)
{
	var webLink = $(object).attr('link');

window.imagedownloader.download(webLink ,
	function successFn() {
		alert('Your Image Has been Saved in your gallery');
	},
	function failureFn() {
		alert('Fail to download image');
	}
	);

}

