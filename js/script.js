$(function () {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 721) {
			$('#float_top_menu').fadeIn();
		} else {
			$('#float_top_menu').fadeOut();
		}
	});
});

$(function(){
	var item = 1;
	$(".carousel-caption").each(function(e){
		if(item == 1){
			var top_cap = $(".header").height() / 2 - $(this).height() / 2;
			$(this).css('top', top_cap);
		}
		item++;
	});
});
	
$('#carousel-example-generic').on('slid.bs.carousel', function () {
		var top_cap = $(".header").height() / 2 - $(".carousel-inner .active .carousel-caption").height() / 2;
		$(".carousel-inner .active .carousel-caption").css('top', top_cap);	
});
	
$('[popup-target]').click(function(e) {
	var el = $(this);
	var target = el.attr('popup-target');
	if(target != "confid-pp"){
		$('.overlay').fadeIn(200, function(){
			$('.popup.'+target).fadeIn(200);
			var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
			var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
			left = left - 51;
			$('.popup.'+target).css('top', top).css('left', left);
		})
	}else{
		$('.overlay2').fadeIn(200, function(){
			$('.popup.'+target).fadeIn(200);
			var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
			var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
			left = left - 51;
			$('.popup.'+target).css('top', top).css('left', left);
		})			
	}
	
	return false;
});

$('.overlay').click(function(e) {
	var popup = $('.popup:visible');
	popup.fadeOut(200, function(){
		$('.overlay').fadeOut(200);
	});
	return false;
});

$('.overlay2').click(function(e) {
	var popup = $('.confid-pp:visible');
	popup.fadeOut(200, function(){
		$('.overlay2').fadeOut(200);
	});
	return false;
});

function keyExit(e){
	if(e.keyCode == 27){
		if($(".overlay2").is(":visible")){
			var popup = $('.confid-pp:visible');
			popup.fadeOut(200, function(){
				$('.overlay2').fadeOut(200);
			});				
		}else{
			var popup = $('.popup:visible');
			popup.fadeOut(200, function(){
				$('.overlay').fadeOut(200);
			});	
		}			
	}
}

addEventListener("keydown", keyExit);

jQuery(function(){
	jQuery(".phone").mask("+7(999) 999-9999");
});

$(".loan_program").hover(
	function(){
		$(this).addClass("program_hover");
	},
	function(){
		$(this).removeClass("program_hover");
	}
);

$(".select_person li a").click(function(){
	var vid = $(this).attr("vid");
	$(".select_person li a").removeClass("active");
	$(this).addClass("active");
	
	if(vid == "yuriki"){
		$(".person").css({"background-image":"url(images/person1.jpg)"});
	}else if(vid == "ip"){
		$(".person").css({"background-image":"url(images/person2.jpg)"});
	}
	
	return false;
});

$(document).ready(function (){
	$('input,textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
	   $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	});
});

/*-------------------------------------------------*/
var flag = 0;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;

$(".mob_menu_link").click(function(){
	$(".mobile_menu_block").show();
	$(".mobile_menu_bottom").show();	
	if(flag == 0){
		$(".mobile_menu").fadeIn();
		$(".osnovnoe_menu").fadeOut();
		flag = 1;
	}else if(flag == 1){
		$(".mobile_menu").fadeOut();
		$(".osnovnoe_menu").fadeIn();
		flag = 0;
	}	
	
	flag1 = 0;
	flag2 = 0;
	flag3 = 0;
	return false;
});

$(".fiziki").click(function(){
	if(flag1 == 0){
		$(".mobile_menu_block").hide();
		$(".mobile_menu_bottom").hide();
		$(".fiziki_block").show();
		$(".mobile_menu").fadeIn();
		
		flag1 = 1;
	}else if(flag1 == 1){
		$(".mobile_menu").fadeOut();
		$(".mobile_menu_block").show();
		$(".mobile_menu_bottom").show();		
		flag1 = 0;
	}
	
	flag = 0;
	flag2 = 0;
	flag3 = 0;
	
	return false;
});

$(".individ_pred").click(function(){
	if(flag2 == 0){
		$(".mobile_menu_block").hide();
		$(".mobile_menu_bottom").hide();
		$(".ip_block").show();
		$(".mobile_menu").fadeIn();

		flag2 = 1;
	}else if(flag2 == 1){
		$(".mobile_menu").fadeOut();
		$(".mobile_menu_block").show();
		$(".mobile_menu_bottom").show();		
		flag2 = 0;
	}
	
	flag = 0;
	flag1 = 0;
	flag3 = 0;
	
	return false;
});

$(".yuriki").click(function(){
	if(flag3 == 0){
		$(".mobile_menu_block").hide();
		$(".mobile_menu_bottom").hide();
		$(".yuriki_block").show();
		$(".mobile_menu").fadeIn();

		flag3 = 1;
	}else if(flag3 == 1){
		$(".mobile_menu").fadeOut();
		$(".mobile_menu_block").show();
		$(".mobile_menu_bottom").show();		
		flag3 = 0;
	}

	flag = 0;
	flag1 = 0;
	flag2 = 0;
	
	return false;
});

var flag4 = 0;
var flag5 = 0;
var flag6 = 0;
var flag7 = 0;

$(".mob_menu_link_float").click(function(){
		$(".mobile_menu_block").show();
		$(".mobile_menu_bottom").show();	
	if(flag4 == 0){
		$(".mobile_menu_float").fadeIn();
		$(".osnovnoe_menu1").fadeOut();
		flag4 = 1;
	}else if(flag4 == 1){
		$(".mobile_menu_float").fadeOut();
		$(".osnovnoe_menu1").fadeIn();
		flag4 = 0;
	}	

	flag5 = 0;
	flag6 = 0;
	flag7 = 0;
	
	return false;	
});

$(".fiziki_float").click(function(){
	if(flag5 == 0){
		$(".mobile_menu_block").hide();
		$(".mobile_menu_bottom").hide();
		$(".fiziki_block_float").show();
		$(".mobile_menu_float").fadeIn();
		
		flag5 = 1;
	}else if(flag5 == 1){
		$(".mobile_menu_float").fadeOut();
		$(".mobile_menu_block").show();
		$(".mobile_menu_bottom").show();		
		flag5 = 0;
	}

	flag4 = 0;
	flag6 = 0;
	flag7 = 0;
	
	return false;
});

$(".individ_pred_float").click(function(){
	if(flag6 == 0){
		$(".mobile_menu_block").hide();
		$(".mobile_menu_bottom").hide();
		$(".ip_block_float").show();
		$(".mobile_menu_float").fadeIn();

		flag6 = 1;
	}else if(flag6 == 1){
		$(".mobile_menu_float").fadeOut();
		$(".mobile_menu_block").show();
		$(".mobile_menu_bottom").show();		
		flag6 = 0;
	}

	flag4 = 0;
	flag5 = 0;
	flag7 = 0;
	
	return false;
});

$(".yuriki_float").click(function(){
	if(flag7 == 0){
		$(".mobile_menu_block").hide();
		$(".mobile_menu_bottom").hide();
		$(".yuriki_block_float").show();
		$(".mobile_menu_float").fadeIn();

		flag7 = 1;
	}else if(flag7 == 1){
		$(".mobile_menu_float").fadeOut();
		$(".mobile_menu_block").show();
		$(".mobile_menu_bottom").show();		
		flag7 = 0;
	}

	flag4 = 0;
	flag5 = 0;
	flag6 = 0;
	
	return false;
});

/*-------------------------------------------------*/
if(document.body.clientWidth > 767){
	$(".search input[type='text']").focus(function(){
		$(".real_search_input").fadeIn();
		$(".real_search_input input").focus();
	});

	$(".real_search_input input").focusout(function(){
		$(".real_search_input").fadeOut();
		$(".search input[type='text']").attr("placeholder", "ПОИСК");
	});
}