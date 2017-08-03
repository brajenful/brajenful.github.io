var temp_c;
var wind_kph;
var wind_dir;
var precip_mm;
var humidity;
var last_updated;
var localtime;

function getWeather() {
	var weatherAPIXU = "https://api.apixu.com/v1/current.json?key=595d5646dcb847f8a9e132542170308&q=46.9,19.6";
	$.getJSON(weatherAPIXU, function(data) {
		temp_c = data.current.temp_c;
		wind_kph = data.current.wind_kph;
		wind_dir = data.current.wind_dir;
		precip_mm = data.current.precip_mm;
		humidity = data.current.humidity;
		last_updated = data.current.last_updated;
		localtime = data.location.localtime;
	});
}

function updateWeather() {
	$("#temp_c").html(temp_c);
	$("#wind_kph").html(wind_kph);
	$("#wind_dir").html(wind_dir);
	$("#precip_mm").html(precip_mm);
	$("#humidity").html(humidity);
	$("#last_updated").html(last_updated);
	$("#localtime").html(localtime);
}

function getupdate() {
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
	getupdate();
	$(".label, .value").hide(0).delay(0).fadeIn();
	$("#update").click(function() {
		getWeather();
		$(".label, .value").fadeOut(function() {
    		updateWeather();
    		setTimeout(function() {
    			$(".label, .value").fadeIn();
    		}, 0);
		});
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