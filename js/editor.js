/**
 * @author Rafael
 */
$(document).ready(function() {
	var screenWidth = document.documentElement.clientWidth-30;
	var screenHeight = document.documentElement.clientHeight-28;
	$(".nav_item").click(function() {
		var clickedItem = $(this);
		$(this).siblings().each(function() {
			clickedItem.parent().siblings().find(".nav_item").siblings().hide("middle");
		});
		
		$(this).siblings().toggle("middle", function() {
			
		});
	});
	
	// $(window).resize(function(){
	// $("#id").width(jQuery(window).width());
	// })
	$(".window").each(function() {
		$(this).height((screenHeight-$(".header").height())/2-5);
		$(this).width((screenWidth-$(".nav").width())/2-10);
	});
	
	$(".handler_vertical").each(function() {
		$(this).height((screenHeight-$(".header").height())/2-5);
	});
	
	$(".content_panel").each(function() {
		$(this).width(screenWidth-$(".nav").width());
		$(this).height(screenHeight-$(".header").height());
	});
	
  var editor_html = CodeMirror.fromTextArea(document.getElementById("code_html"), {
    lineNumbers: true,
    matchBrackets: true,
    extraKeys: {"Enter": "newlineAndIndentContinueComment"}
  });
  
  var editor_js = CodeMirror.fromTextArea(document.getElementById("code_js"), {
    lineNumbers: true,
    matchBrackets: true,
    extraKeys: {"Enter": "newlineAndIndentContinueComment"}
  });
  
  var editor_css = CodeMirror.fromTextArea(document.getElementById("code_css"), {
    lineNumbers: true,
    matchBrackets: true,
    extraKeys: {"Enter": "newlineAndIndentContinueComment"}
  });
});
