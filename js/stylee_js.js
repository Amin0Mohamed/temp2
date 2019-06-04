// JavaScript Document
$(document).ready(function(e) {
    

$(".tool .shape").click(
 function()
 {$(".tool .color").toggle()
 })
 
 //**********************
 var l=  $(".tool .color ul li");
 l
   .eq(0).css("background-color","#00F").end()
   .eq(1).css("background-color","#808000").end()
   .eq(2).css("background-color","#0F0").end()
   .eq(3).css("background-color","#F00").end()
   .eq(4).css("background-color","#FF0").end()
   
  //*************************
  l.click(function()
     {
	    $("link[href*='color']").attr("href",$(this).attr("data-value"));
	  }
  
  )
  //**********************************loading******************************************
  $("window").load(function(){
	  
	  $("body").css("overflow","auto");
	  $(".load .cover .spinner").fadeOut(1000,function(){
		  
		  
		  $(this).parent().fadeOut(2000);
		  
		  
		  });
	  
	  
	  
	  
	  })
  });
 //*****************************.scrool***************************
 $(window).scroll
 (
    function()
	{
        var h= $(window).scrollTop();
		if(h>500)
		{
			$(".scrool").fadeIn(2000);
		}else
		{
			$(".scrool").fadeOut(2000);
		}
	}
 
 ) ;
 
 $(".scrool").click(
 
   function()
   {
	   $("body").animate({scrollTop:'0'},3000);
   }
 
 
 );