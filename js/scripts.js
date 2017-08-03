$(document).ready(function() {
    $("#update").click(function() {
    	var ref = firebase.database().ref("temp");
    	ref.once("value")
  			.then(function(snapshot) {
    			var data = snapshot.val();
    			$("#value").html(data);
  			});
    });
});