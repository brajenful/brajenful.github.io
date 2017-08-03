function getWeather() {
	var weatherAPIXU = "https://api.apixu.com/v1/current.json?key=595d5646dcb847f8a9e132542170308&q=46.9,19.6";
	$.getJSON(weatherAPIXU, function(data) {
		var temp_c = data.current.temp_c;
		$("#temp_c").html(temp_c);
		var wind_kph = data.current.wind_kph;
		$("#wind_kph").html(wind_kph);
		var wind_dir = data.current.wind_dir;
		$("#wind_dir").html(wind_dir);
		var precip_mm = data.current.precip_mm;
		$("#precip_mm").html(precip_mm);
		var humidity = data.current.humidity;
		$("#humidity").html(humidity);
		var last_updated = data.current.last_updated;
		$("#last_updated").html(last_updated);
		var localtime = data.location.localtime;
		$("#localtime").html(localtime);
	});
}

$(document).ready(function() {
	$(".label, .value").hide(0).delay(200).fadeIn();
	getWeather();
	$("#update").click(function() {
		$(".label, .value").fadeOut();
		$(".label, .value").fadeIn();
		getWeather();
    	/*
    	var ref = firebase.database().ref("temp");
    	ref.once("value")
  			.then(function(snapshot) {
    			var data = snapshot.val();
    			$("#value").html(data);
  		});
  		*/
    });
});
/*
$(document).ready(function loadData() {
    var weatherAPIXU = "https://api.apixu.com/v1/current.json?key=595d5646dcb847f8a9e132542170308&q=46.9,19.6";
    $.getJSON(weatherAPIXU, function(data) {
        var forecast = data.current.temp_c;
        $("#value").html(forecast);
    });
});
*/