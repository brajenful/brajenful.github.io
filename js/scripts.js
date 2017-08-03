$(document).ready(function() {
    $("#update").click(function() {
    	var weatherAPIXU = "https://api.apixu.com/v1/current.json?key=595d5646dcb847f8a9e132542170308&q=46.9,19.6";
    	$.getJSON(weatherAPIXU, function(data) {
        	var forecast = data.current.temp_c;
        	$("#value").html(forecast);
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