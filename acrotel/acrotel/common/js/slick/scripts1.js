$(document).ready(function() {
	_onSlide(".visualbox");
	function _onSlide(obj){
	//console.log($(obj).html());	 
	   $(obj)
	   .on('init', function(event, slick, currentSlide, nextSlide) { 
			$(".slidernum1").html('<em>01 ' + '</em> 0' + slick.slideCount+'');
			$(this).find(".slick-slide").eq(0).addClass("active");
			draw(100, $(".chartbox1"), '#fff');
			//$(".svg").addClass("on")
		})
		.on('beforeChange', function (event, slick, currentSlide, nextSlide) { 
			$(this).find(".slick-slide").removeClass("active");
			$(this).find(".slick-slide").eq(nextSlide).addClass("active");
			$(".slidernum1").html("<em>0"+(nextSlide + 1) + '</em> 0' + slick.slideCount+'');	
			draw(100, $(".chartbox1"), '#fff');
		})
		.slick({
			easing: 'easeInOutQuint',
			speed:600,
			autoplaySpeed: 5000,
			infinite: true,
			pauseOnHover: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay:true,
			focusOnSelect:false,
			fade: true,
			dots:true,
			customPaging: function(slider, i) {
				$(".slidebtn1").append('<li class="btn'+i+'"></li>')
				//return '<button type="button" data-role="none" class="btn'+i+'">' + (i + 1) + '</button>';
			},
			arrows: true,
			prevArrow: $(".llnk1"),
			nextArrow: $(".rlnk1")
		   // asNavFor: '.fslidenav'
		})			    
		/*	
		$(obj).find('.fslidenav').eq(index).slick({
			prevArrow: '<button type="button" data-role="none" class="slick-prev1">Previous</button>',
			nextArrow: '<button type="button" data-role="none" class="slick-next1">Next</button>',
			slidesToShow: 3,
			slidesToScroll: 1,
			focusOnSelect: true,
			autoplay:false,
			dots:false,
			fade:false,
			dotsClass: 'slick-dots1',
			arrows: true,
			asNavFor: '.fslidemain',
		});
		//$(obj).find('.fslidenav').eq(index).resize();
		*/	
	}
	
	$(".mslide1")
	.on('init', function(event, slick, currentSlide, nextSlide) { 
		$(this).find(".slick-slide").eq(0).addClass("active");
		$(".lslidernum1").html('<em>01 ' + '</em> 0' + slick.slideCount+'');
		$(".locationtxt1").find("> div").eq(0).addClass("active");
		draw(100, $(".chartbox2"), '#fff')
	})
	.on('beforeChange', function (event, slick, currentSlide, nextSlide) { 
		$(this).find(".slick-slide").removeClass("active");
		$(this).find(".slick-slide").eq(nextSlide).addClass("active");
		$(".lslidernum1").html("<em>0"+(nextSlide + 1) + '</em> 0' + slick.slideCount+'');	
		$(".locationtxt1").find("> div").removeClass("active");
		$(".locationtxt1").find("> div").eq(nextSlide).addClass("active");
		$(".locationtxt1").find("> div").eq(nextSlide).find("span").text("0"+(nextSlide + 1));
		draw(100, $(".chartbox2"), '#fff')
	})
	.on('afterChange', function (event, slick, currentSlide, nextSlide) { 
	})
	.slick({
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:true,
		pauseOnHover: false,
		focusOnSelect:false,
		fade: true,
		dots:false,
		arrows: true,
		prevArrow: $(".lllnk1"),
		nextArrow: $(".lrlnk1")
	   // asNavFor: '.fslidenav'
	})
	
	$(".mslide2")
	.on('init', function(event, slick, currentSlide, nextSlide) { 
		$(this).find(".slick-slide").eq(0).addClass("active");
		$(".cslidernum1").html('<em>01 ' + '</em> 0' + slick.slideCount+'');
		$(this).find(".slick-slide").eq(0).find(".slidetxt1").addClass("active");
		draw(100, $(".chartbox3"), '#fff')
	})
	.on('beforeChange', function (event, slick, currentSlide, nextSlide) { 
		$(this).find(".slick-slide").removeClass("active");
		$(this).find(".slick-slide").eq(nextSlide).addClass("active");
		$(".cslidernum1").html("<em>0"+(nextSlide + 1) + '</em> 0' + slick.slideCount+'');	
		$(this).find(".slick-slide").find(".slidetxt1").removeClass("active");
		$(this).find(".slick-slide").eq(nextSlide).find(".slidetxt1").addClass("active");
		draw(100, $(".chartbox3"), '#fff')
	})
	.on('afterChange', function (event, slick, currentSlide, nextSlide) { 
	})
	.slick({
		autoplaySpeed: 4000,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay:true,
		pauseOnHover: false,
		focusOnSelect:false,
		fade: true,
		dots:false,
		arrows: true,
		prevArrow: $(".lllnk2"),
		nextArrow: $(".lrlnk2")
	   // asNavFor: '.fslidenav'
	})
});

function draw(max, classname, colorname){
	var perNum = max;
	$(classname).circleProgress({
		value: perNum/100,
		startAngle:-Math.PI/2 ,
		thickness:3,
		size:30,
		fill:{
		  gradient:["#fff","#fff"],
			gradientAngle: Math.PI / 4
		},
		animation:{
		  duration:4000,
			easing:"swing"
		},
		lineCap : "butt",
		reverse:false,
		emptyFill: "rgba(255,255,255,0.3)",
					
		}).on('circle-animation-progress', function(event, progress) {
					$(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
		});
}