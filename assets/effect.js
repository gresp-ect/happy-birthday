$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
	// Click anywhere on intro screen to start
	$('#intro').click(function(){
		$('#turn_on').click();
	});
});
$('document').ready(function(){
		// Responsive: calculate balloon spacing based on screen width
		function getBalloonSpacing() {
			var screenW = $(window).width();
			var balloonW = screenW <= 480 ? 50 : 100; // balloon width on mobile vs desktop
			var totalBalloons = 7;
			var totalWidth = totalBalloons * balloonW;
			var gap = (screenW - totalWidth) / (totalBalloons + 1);
			return { balloonW: balloonW, gap: gap };
		}

		function getBalloonLeft(index) {
			var s = getBalloonSpacing();
			return s.gap + index * (s.balloonW + s.gap);
		}

		function getBalloonTop() {
			return $(window).height() <= 700 ? 160 : 240;
		}

		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			var top = getBalloonTop();
			$('#b11').animate({top: top, left: getBalloonLeft(0)},500);
			$('#b22').animate({top: top, left: getBalloonLeft(1)},500);
			$('#b33').animate({top: top, left: getBalloonLeft(2)},500);
			$('#b44').animate({top: top, left: getBalloonLeft(3)},500);
			$('#b55').animate({top: top, left: getBalloonLeft(4)},500);
			$('#b66').animate({top: top, left: getBalloonLeft(5)},500);
			$('#b77').animate({top: top, left: getBalloonLeft(6)},500);
		});

	$('#turn_on').click(function(){
		// Fade out intro screen
		$('#intro').css('opacity', '0');
		setTimeout(function() { $('#intro').hide(); }, 1000);
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var screenW = $(window).width();
		var screenH = $(window).height();
		var randleft = (screenW - 100)*Math.random();
		var randtop = (screenH - 200)*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var screenW = $(window).width();
		var screenH = $(window).height();
		var randleft = (screenW - 100)*Math.random();
		var randtop = (screenH - 200)*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var screenW = $(window).width();
		var screenH = $(window).height();
		var randleft = (screenW - 100)*Math.random();
		var randtop = (screenH - 200)*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var screenW = $(window).width();
		var screenH = $(window).height();
		var randleft = (screenW - 100)*Math.random();
		var randtop = (screenH - 200)*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var screenW = $(window).width();
		var screenH = $(window).height();
		var randleft = (screenW - 100)*Math.random();
		var randtop = (screenH - 200)*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var screenW = $(window).width();
		var screenH = $(window).height();
		var randleft = (screenW - 100)*Math.random();
		var randtop = (screenH - 200)*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var screenW = $(window).width();
		var screenH = $(window).height();
		var randleft = (screenW - 100)*Math.random();
		var randtop = (screenH - 200)*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});

	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;
		 var top = getBalloonTop();

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top: top, left: getBalloonLeft(0)},500);
		$('#b22').animate({top: top, left: getBalloonLeft(1)},500);
		$('#b33').animate({top: top, left: getBalloonLeft(2)},500);
		$('#b44').animate({top: top, left: getBalloonLeft(3)},500);
		$('#b55').animate({top: top, left: getBalloonLeft(4)},500);
		$('#b66').animate({top: top, left: getBalloonLeft(5)},500);
		$('#b77').animate({top: top, left: getBalloonLeft(6)},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');