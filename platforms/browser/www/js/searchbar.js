    $('.searchbar').keydown(function (e) {
    if (e.keyCode == 13) {

    	
	var searchValue = $('.searchbar').val();
	
	if(searchValue != '' && searchValue != null)
	{
$("#searchModal").css('height' , '100%');
$("#searchModal").animate({width:'toggle'},50);
$(".searchbar").blur();	
//$("#searchModal").animate({width:'toggle'},50);
 $('.search_result_h3').html('<h4 style="text-align:center;">Search Result...</h4>');
$('#search_video_list').css('display','none');	

 $("#searchModal").animate({width:'toggle'},100);
 $('.my_lazy_loader').css('display','block');
 $('.my_lazy_loader').show();

	
 getyoutubeVideo(searchValue, 'video' , '35');
}
else{
	$('.searchbar').focus();

}
}
});

    $('#search_btn').click(function(){
    		
    		$("#searchModal").animate({width:'toggle'},20);
            $("#searchModal").css('height' , '49px');
    		$('#search_video_list').css('display','none');
    		$('.searchbar').focus();

});


$(function() {
	
	$('.js-wrapper').mouseenter(function() {
//alert("System running.");
$('.logo_div').hide();
$(this).animate({
	width: '+=75%',
}, 'fast');
$('#search_btn').hide();
$('#backSearhBar').removeClass('hide');
$(this).css('border-bottom' , '1px solid rgb(255, 255, 255) ');

});
	$('.js-wrapper').mouseleave(function() {
		$(this).animate({
			width: '-=75%',
		}, 'fast');
		$('#search_btn').css('display', 'block');
		$('#backSearhBar').addClass('hide');
		$(this).css('border-bottom' , 'none');
		$('.glass-body').toggleClass('black-col');
		$('.glass-handle').toggleClass('black-col');
		$('.logo_div').show('slow');
		$('.searchbar').val('');
		$('.search_result_h3').html(' ');
		$('.js-wrapper').css('width' ,'10% !important');

	});
});


$('#backSearhBar').click(function(){
$(this).animate({
			width: '-=75px',
		}, 'fast');
$('#search_btn').css('display', 'block');
		$(this).css('border-bottom' , 'none');
		$('.glass-body').toggleClass('black-col');
		$('.glass-handle').toggleClass('black-col');
		$('.logo_div').show('slow');
		$('.searchbar').val('');
		$('.search_result_h3').html(' ');
		$('.js-wrapper').css('width' ,'10% !important');
});

function getyoutubeVideo(keyword, type , limitVideo) {
	var response = JSON.parse((localStorage.getItem("item")));
	var youtubekey = response[6];
	var myurl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+keyword+'&type='+type+'&maxResults='+limitVideo+'&key=AIzaSyCBpW5wgGXTdt4nLvWo_Tb7wIa1crCHirk&videoEmbeddable=true&videoSyndicated=true';
	var url = encodeURI(myurl);
	$.ajax({
		type: "GET",
		url: url,
		success: function(response) {
        	//console.log(response.items);
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
        	$('#search_video_list').html(html);
        	$('#search_video_list').css('display','block');
        	$('.my_lazy_loader').css('display','none');
            $('.my_lazy_loader').hide();
            $('.search_result_h3').html('');

        	//$('#img_link').css('display','none');


        },
        error: function(response) {
        	console.log(response);
        }
    });
}