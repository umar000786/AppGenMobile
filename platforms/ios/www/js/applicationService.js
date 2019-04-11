var applicationService = (function () {
	return {
		getApplicationSetting: function (item) {
			var response = request.sendGetRequest(utility.get_application_setting, item, utility.base_url_api)
			response.done(function (data) {
				return data;
			});
		},

		getApplicationFeature: function (item) {
			var response = request.sendGetRequest(utility.get_feature_App, item, utility.base_url_api)
			response.done(function (data) {
				return data;
			});
		},

		getApplicationCarousel: function (item) {
			var response = request.sendGetRequest(utility.get_app_slider, item, utility.base_url_api)
			response.done(function (data) {
				return data;
			});
		},

		getApplicationPost: function (item) {
			var response = request.sendGetRequest(utility.get_all_post, item, utility.base_url_api)
			response.done(function (data) {
				return data;
			});
		},

		getApplicationPostDescription: function (item) {
			var response = request.sendGetRequest(utility.get_post_description, item, utility.base_url_api)
			response.done(function (data) {
				return data;
			});
		},

		getApplicationgWallpaper: function (item) {
			var response = request.sendGetRequest(utility.get_wallpaper, item, utility.base_url_api)
			response.done(function (data) {
				return data;
			});
		},

		getApplicationPostByCategory: function (item) {
			var response = request.sendGetRequest(utility.get_post_by_sub_category, item, utility.base_url_api)
			response.done(function (data) {
				return data;
			});
		},
	}

}());

$(function () {
	$.ajaxSetup({
		error: function (jqXHR, exception) {

			if (jqXHR.status === 0) {
				alert('Not connect.\n Verify Network.');
			} else if (jqXHR.status == 404) {
				alert('Requested page not found. [404]');
			} else if (jqXHR.status == 500) {
				alert('Internal Server Error [500].');
			} else if (exception === 'parsererror') {
				alert('Requested JSON parse failed.');
			} else if (exception === 'timeout') {
				alert('Time out error.');
			} else if (exception === 'abort') {
				alert('Ajax request aborted.');
			} else {
				alert('Uncaught Error.\n' + jqXHR.responseText);
			}
			alert(jqXHR.responseText);
		}
	});
});