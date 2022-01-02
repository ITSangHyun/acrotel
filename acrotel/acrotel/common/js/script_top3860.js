$(function(){		
	var nav = jQuery(".mmenu0");
	var snav = jQuery(".menudep1");
	var imgArr = [];
	var imgArr1 = [];
	$(window).scroll(function(){scollMenu();});
	
	$(".mmnbtn1").click(function(){
		_showMenu()
	})
	
	
	jQuery(nav).bind({		
		mouseenter: function(){
			jQuery(this).addClass("on");
			
		},
		mouseleave: function(){
			jQuery("#menu-Area").find(".menudep1 li").removeClass("on");
		},
		focusin: function(){
			jQuery(this).addClass("on");
		},
		focusout: function(){
			jQuery("#menu-Area").find(".menudep1 li").removeClass("on");
		}
	});
	
	function scollMenu(){
		if($(document).scrollTop() > $('#header').height()){
			if (!$('#header').hasClass('fixed')) {
				$('#header').addClass('fixed');
				$("#header").find(".logo1").each(function(index, element) {
					imgArr.push($(this).attr("src"));
				});
				$("#header").find(".logo1").each(function(index, element) {
					$(this).attr("src",$(this).attr("src").replace(/.{5}$/,'2.png'));
				});
			}
			$(".mnbnn1").find("img.chg1").each(function(index, element) {
				imgArr1.push($(this).attr("src"));
			});
			$(".mnbnn1").find("img.chg1").each(function(index, element) {
				$(this).attr("src",$(this).attr("src").replace(/.{5}$/,'2.png'));
			});
		}
		else{
			$('#header').removeClass('fixed');
			$("#header").find(".logo1").each(function(index, element) {
				$(this).attr("src",imgArr[index]);
			});
			if (!$(".mmnbtn1").hasClass("on")){
				$(".mnbnn1").find("img.chg1").each(function(index, element) {
					$(this).attr("src",imgArr1[index]);
				});
			}
		}
	}
	
	function _showMenu(){
		if (!$(".mmnbtn1").hasClass("on")){
			
			$(".topmenu").css({"height":"100%"});
			divFilter($("#menu-box"), "dobox1", "A", 850,"dobox3");
			setTimeout(function(){	
				$(".topmenu").addClass("on");
				$(".dobox3").addClass("on");
				$(".dobox3").bind({		
					click:function(e){
						if(!$('.topmenu').has(e.target).length ) _showMenu();
					}
				});
			},(100))
			setTimeout(function(){	
				$(".mmnbtn1").addClass("on");
			},(300))
			$(".mnbnn1").addClass("on");
			if($(document).scrollTop() < $('#header').height()){
				setTimeout(function(){	
					$(".mnbnn1").find("img.chg1").each(function(index, element) {
						imgArr1.push($(this).attr("src"));
					});
					$(".mnbnn1").find("img.chg1").each(function(index, element) {
						$(this).attr("src",$(this).attr("src").replace(/.{5}$/,'2.png'));
					});
				},(300))
			}
			//$("html, body").addClass("fixedBody");
			//$('#header').addClass('fixed');		
			/*
			imgArr = [];
			$(".mnbnn1").find("img").each(function(index, element) {
				imgArr.push($(this).attr("src"));
			});
			$(".mnbnn1").find("img").each(function(index, element) {
				$(this).attr("src",$(this).attr("src").replace(/.{5}$/,'2.png'));
			});
			*/
			
		} else {
			$(".mmnbtn1").removeClass("on");						
			$(".mnbnn1").removeClass("on");
			$(".topmenu").removeClass("on");
			$(".dobox3").removeClass("on");
			setTimeout(function(){	
				$(".dobox3").remove();
			},(400))
			if($(document).scrollTop() < $('#header').height()){
				$('#header').removeClass('fixed');
			}
			if($(document).scrollTop() < $('#header').height()){
				setTimeout(function(){	
					$(".mnbnn1").find("img.chg1").each(function(index, element) {
						$(this).attr("src",imgArr1[index]);
					});
				},(300))
			}
			/*
			$(".mnbnn1").find("img").each(function(index, element) {
				$(this).attr("src",imgArr[index]);
			});
			*/
			//$("html, body").removeClass("fixedBody");
		}
	}
	
});	


	
	
	
	