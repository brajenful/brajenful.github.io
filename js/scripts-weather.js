var location_name;
var temp_c;
var wind_kph;
var wind_dir;
var precip_mm;
var humidity;
var last_updated;
var localtime;
var weatherAPIXU;
var first;

function getWeather() {
	$.getJSON(weatherAPIXU, function(data) {
		location_name = data.location.name;
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
	$("#location_name").html(location_name);
	$("#temp_c").html(temp_c);
	$("#wind_kph").html(wind_kph);
	$("#wind_dir").html(wind_dir);
	$("#precip_mm").html(precip_mm);
	$("#humidity").html(humidity);
	$("#last_updated").html(last_updated);
	$("#localtime").html(localtime);
}

function getupdate() {
	$.getJSON(weatherAPIXU, function(data) {
		var location_name = data.location.name;
		$("#location_name").html(location_name);
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

function firebaseQuery() {
	    var ref = firebase.database().ref("temp");
    	ref.once("value")
  			.then(function(snapshot) {
    			var data = snapshot.val();
    			$("#value").html(data);
  		});
}

function updateOnClick() {
	getWeather();
		$(".label, .value").fadeOut(function() {
    		updateWeather();
    		setTimeout(function() {
    			$(".label, .value").fadeIn();
    		}, 0);
		});
}

$(document).ready(function() {
	first = 1;
	$("#update").click(function() {
		updateOnClick();
    });
    $("#search input").on('keypress',function (e) {
   		if (e.keyCode == 13) {
   			var value = this.value;
    		if (value != 0) {
    			weatherAPIXU = "https://api.apixu.com/v1/current.json?key=595d5646dcb847f8a9e132542170308&q=" + value;
    			if (first == 0) {
    				updateOnClick();
    			}
    			if (first == 1) {
    				getupdate();
    				$(".window:hidden").slideDown(400);
    				$(".window").css("display", "inline-block");
    				first = 0;
    			}
    		}
   		}
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