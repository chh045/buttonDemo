$(document).ready(function(){

	$('button').click(function(){
		alert("you clicked me!");
		$.getJSON("button.json", function(data){
			$.each(data, function(key, val){
				$('#output-field').append( "<li id='" + key + "'>" + val + "</li>" );
			});
		});
	});


});



function toggleClick(){
	var btn = $('.click-me');
	console.log(btn);
}
