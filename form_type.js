$(document).ready(function() {
	$(".grayInput").focus(function(){
		$(this).css("background" , "white");
	})

	$(".grayInput").blur(function(){
		$(this).css("background" , "#f5f5f5");
	})

	$(".grayTextarea").focus(function(){
		$(this).css("background" , "white");
	})

	$(".grayTextarea").blur(function(){
		$(this).css("background" , "#f5f5f5");
	})
	
	
	$(".graySearchInput").focus(function(){
		$(this).css("background" , "white");
	})
	
	$(".graySearchInput").blur(function(){
		$(this).css("background" , "#f5f5f5");
	})

});	
