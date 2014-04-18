$(document).ready(function(){

	$('#up-btn').click(function(){
		$('#player').animate({top:'-=50px'},300);
	});
	$('#down-btn').click(function(){
		$('#player').animate({top:'+=50px'},300);
	});
	$("#left-btn").click(function(){
		$('#player').animate({left:'-=50px'},300);
	});
	$('#right-btn').click(function(){
		$('#player').animate({left:'+=50px'},300);
	});
	$("#in-btn").click(function(){
		$('#player').fadeIn('slow');
	});
	$("#out-btn").click(function(){
		$('#player').fadeOut('slow');
	});


});
