//Nav
$(document).ready(function(){
	$(".nav").superfish({
		speed:200,
		delay:100
	});
});

//Nav_bottom
$(document).ready(function(){
	$(".nav_bottom li").last().addClass("no");
});

//Slides
$(document).ready(function(){
	$(".slides").slides({
		effect:"fade",
		crossfade:true,
		hoverPause:true,
		generatePagination:false,
		play:6000,
		fadeSpeed:500,
		pause:200
	});
});

//Store
$(document).ready(function(){
	$(".store li:nth-child(3n+3)").addClass("no");
});

//News
$(document).ready(function(){
	$(".news li").last().addClass("no");
});

//Img
$(document).ready(function(){
	$("a img").hover(function(){
		$(this).animate({opacity:0.8},200);
	},function(){
		$(this).animate({opacity:1},0);
	});
});

//Content
$(document).ready(function(){
	$(".content p").last().addClass("no");
});

//List_five
$(document).ready(function(){
	$(".list_five li:nth-child(5n+5)").addClass("no");
});

//List_three
$(document).ready(function(){
	$(".list_three li:nth-child(3n+3)").addClass("no");
});

//List_three_square
$(document).ready(function(){
	$(".list_three_square li:nth-child(3n+3)").addClass("no");
});

//Scrollbar
$(document).ready(function(){
	$("#scrollbar").tinyscrollbar();
});

//Related
$(document).ready(function(){
	$(".related ul li").last().addClass("no");
});

//Pic
$(document).ready(function(){
	$(".list_five img, .list_three img, .list_three_square img, .archive img").lazyload({
		effect:"fadeIn",
		placeholder:"../../../../www.manshiji.com/wp-content/themes/manshiji_1.1.0/images/grey.gif"
	});
});

//Gallery
$(document).ready(function(){
	$(".gallery").slides({
		effect:"fade",
		crossfade:true,
		generatePagination:false,
		play:0,
		fadeSpeed:1000
	});
});
