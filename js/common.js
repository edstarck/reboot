$(document).ready(function() {


	//http://os.alfajango.com/easytabs/
	  $('.tab-container').easytabs({
	      defaultTab: 'li:nth-child(1)',
	      transitionIn: 'slideDown'
	  });

	//аккордион
	var link = $(".panel-title a").addClass('closed');
	$('.panel-heading').click(
	function(){
	var option = $(this).next().css('display')
	if (option=='block'){
	  $(this).next().slideUp('slow', 'linear');
	  $(this).addClass('panel-heading').removeClass('panel-disclosed');
	  $(this).find(".panel-title a").addClass('closed').removeClass('disclosed');

	}
	else{
	$('.collapse').slideUp('slow', 'linear');
	$('.panel-disclosed').addClass('panel-heading').removeClass('panel-disclosed');
	$(".panel-title a").addClass('closed').removeClass('disclosed');
	$(this).next().slideDown('slow', 'linear');
	$(this).addClass('panel-disclosed').removeClass('panel-heading');
	$(this).find(".panel-title a").addClass('disclosed').removeClass('closed');

	}
	});

	//scrollTotop
	$(function() {
	 $.fn.scrollToTop = function() {
	  $(this).hide().removeAttr("href");
	  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
	  var scrollDiv = $(this);
	  $(window).scroll(function() {
	   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
	   else $(scrollDiv).fadeIn("slow")
	  });
	  $(this).click(function() {
	   $("html, body").animate({scrollTop: 0}, "slow")
	  })
	 }
	});
	$(function() {
	 $(".Go_Top").scrollToTop();
	});

  // делим на 2 колонки
	$('.theme').autocolumnlist({
    columns: 2, /*устанавливаем количество колонок*/
    min: 5 /*устанавливаем количество строк в каждой колонке*/
  });

  //=========================  Цели для Яндекс.Метрики и Google Analytics ===========================

	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

  //========================   Google Analytics: change UA-XXXXX-X to be your site's ID. ============

  (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
  function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
  e=o.createElement(i);r=o.getElementsByTagName(i)[0];
  e.src='//www.google-analytics.com/analytics.js';
  r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
  ga('create','UA-XXXXX-X');ga('send','pageview');


	//======================== SVG Fallback ====================================

	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//======================== Аякс отправка форм ===============================
	//Документация: http://api.jquery.com/jquery.ajax/

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {

				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	//========================== Chrome Smooth Scroll =============================

	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

//============================ Preloader =========================================

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
