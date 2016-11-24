$(function(){
	$(".gengduo").click(function(){
		window.location='liebiao.html' 
	})
			$("#gouwucheBot ol li").hover(
			function(
			){
				$("#gouwucheBot ol li").css("font-weight","100")
				$("#gouwucheBot ol li").css("background","#f4f4f4")
				$(this).css("font-weight","800")
				$(this).css("background","#e1e1e1")
				$("#gouwucheBot ul").css("display","none")
				$("#gouwucheBot ul").eq($(this).index()).css("display","block")
			}
		)
})

