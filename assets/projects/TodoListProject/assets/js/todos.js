// $("li").on("click",function(){
// 	if($(this).css("color")==="rgb(128, 128, 128)"){
// 		console.log($(this).css("color"));
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 		});
// 	}
// 	else{
// 		$(this).css({
// 			color:"gray",
// 			textDecoration:"line-through"
// 		});	
// 	}
// });

$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
		event.stopPropagation();
});
$("input[type='text']").on("keypress",function(event){
	if(event.which===13){
		var todoText= $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + todoText +"</li>")
	}
});
$(".fa-plus").on("click",function(){
	$("input[type='text']").fadeToggle();	
});