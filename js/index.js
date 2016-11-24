$(function(){
	$("#logo-right-right").click(function(){
		window.location='gouwuche.html' 
	})
	var lib = true;
	$(function(){
		//取出 登录的用户名
		var username = getCookie("loginNmae");
		if(username){
			$(".top-right1 a").html("用户名 ： " + username);
			$(".top-right1 a").attr("href","index.html")
			$(".top-right2 a").html("注销");
			$(".top-right2 a").attr("href","#")
			lib = true;
			$(".top-right2 a").click(function(){
				setCookie("loginNmae","")
				window.location.reload();
			})
		}
	});
	
	//-----------------------------top左上
	var $top1 = $(".top-left-left")
	var $top2 = $(".top-left-center")
	var $top3 = $(".top-left-right")
	$top1.hover(
		function(){
			$(".top-left-left img").css("color","#666")
			$(".top-left-left img").attr('src','img/top1.1.jpg')
		},
		function(){
			$(".top-left-left img").attr('src','img/top1.jpg')
		}
	)
	$top2.hover(
		function(){
			$(".top-left-left a").css("margin-right","0")
			$(".top-left-center img").css("color","#666")
			$(".top-left-center img").attr('src','img/top2.2.jpg')
			$(".top-left-center-right").attr('src','img/top4.4.jpg')
			$(".top-left-center").css("background-color","#fff")
			$(".top-left-center").css("width","114px")
			$(".top-left-center").css("height","34px")
			$(".top-left-center").css("padding-left","10px")
			$("#topnone1").css("display","block")
		},
		function(){
			$("#topnone1").hover(
				function(){
					$(".top-left-left a").css("margin-right","0")
					$(".top-left-center img").css("color","#666")
					$(".top-left-center img").attr('src','img/top2.2.jpg')
					$(".top-left-center-right").attr('src','img/top4.4.jpg')
					$(".top-left-center").css("background-color","#fff")
					$(".top-left-center").css("width","114px")
					$(".top-left-center").css("height","34px")
					$(".top-left-center").css("padding-left","10px")
					$("#topnone1").css("display","block")
				},
				function(){
					$(".top-left-center img").attr('src','img/top2.jpg')
					$(".top-left-center-right").attr('src','img/top4.jpg')
					$(".top-left-center").css("background-color","#eee")
					$(".top-left-center").css("width","")
					$(".top-left-center").css("height","")
					$(".top-left-left a").css("margin-right","10px")
					$("#topnone1").css("display","none")
				}
			)
			$(".top-left-center img").attr('src','img/top2.jpg')
			$(".top-left-center-right").attr('src','img/top4.jpg')
			$(".top-left-center").css("background-color","#eee")
			$(".top-left-center").css("width","")
			$(".top-left-center").css("height","")
			$(".top-left-left a").css("margin-right","10px")
			$("#topnone1").css("display","none")
		}
	)
	$top3.hover(
		function(){
			$(".top-left-right img").attr('src','img/top3.3.jpg')
			$(".top-left-right-right").attr('src','img/top4.4.jpg')
			$("#topnone2").css("display","block")
			$(".top-left-right").css("width","148px")
			$(".top-left-right").css("height","34px")
			$(".top-left-right").css("background-color","#fff")
		},
		function(){
			$("#topnone2").hover(
				function(){
					$(".top-left-right img").attr('src','img/top3.3.jpg')
					$(".top-left-right-right").attr('src','img/top4.4.jpg')
					$("#topnone2").css("display","block")
					$(".top-left-right").css("width","148px")
					$(".top-left-right").css("height","34px")
					$(".top-left-right").css("background-color","#fff")					
				},
				function(){
					$(".top-left-right img").attr('src','img/top3.jpg')
					$(".top-left-right-right").attr('src','img/top4.jpg')
					$("#topnone2").css("display","none")
					$(".top-left-right").css("width","")
					$(".top-left-right").css("height","")
					$(".top-left-right").css("background-color","#eee")
				}
			)
			$(".top-left-right img").attr('src','img/top3.jpg')
			$(".top-left-right-right").attr('src','img/top4.jpg')
			$("#topnone2").css("display","none")
			$(".top-left-right").css("width","")
			$(".top-left-right").css("height","")
			$(".top-left-right").css("background-color","#eee")
		}
	)
	//-----------------------------top右上
	var $top4 = $(".top-right4")
	$top4.hover(
		function(){
			$("#topnone3").css("display","block")
			$(".top-right4").css("background-color","#fff")
			$(".top-right4 img").attr('src','img/top4.4.jpg')
		},
		function(){
			$("#topnone3").hover(
				function(){
					$("#topnone3").css("display","block")
					$(".top-right4").css("background-color","#fff")
					$(".top-right4 img").attr('src','img/top4.4.jpg')
				},
				function(){
					$("#topnone3").css("display","none")
					$(".top-right4").css("background-color","#eee")
					$(".top-right4 img").attr('src','img/top4.jpg')
				}
			)
			$("#topnone3").css("display","none")
			$(".top-right4").css("background-color","#eee")
			$(".top-right4 img").attr('src','img/top4.jpg')
		}
	)
	//-------------------------------------搜索栏下方隔行变色
		$("#logo-right ul li a:even").css("color","#ff8400")
	//-------------------------------------轮播图

		bannerIndex = 0;
		bannerTimer = setInterval(fun,3000)
		//auto
		function fun(){
			if(bannerIndex == 4){
				bannerIndex = 0;
			}
			$("#banner>ul").find("li").eq(bannerIndex).fadeIn()
			.siblings().fadeOut(500);
			
			
			
			$("#banner .items").find("span")
			.eq(bannerIndex).addClass("cur")
			.siblings().removeClass("cur");
			
			
			
			$("#banner-box>ol").find("li").eq(bannerIndex).fadeIn()
			.siblings().fadeOut(500);
			bannerIndex++;
			
			
		}
		//handjob
		$("#banner .items").find("span").hover(function(){
			clearInterval(bannerTimer)
			$(this).addClass("cur")
			.siblings().removeClass("cur");
			$("#banner-box>ol").find("img").eq($(this).index()).fadeIn()
			.siblings().fadeOut(500);
			$("#banner>ul").find("li").eq($(this).index()).fadeIn()
			.siblings().fadeOut(500);
		},function(){
			bannerTimer = setInterval(fun,1000)
		})
		//kaiguan
		$("#banner").hover(function(){
			$("#banner .button .left-btn").css("display","block")
			$("#banner .button .right-btn").css("display","block")
			clearInterval(bannerTimer)
		},function(){
			bannerTimer = setInterval(fun,3000)
			$("#banner .button .left-btn").css("display","none")
			$("#banner .button .right-btn").css("display","none")			
		})
		//LR kaiguan 
		$(".left-btn").hover(function(){
			clearInterval(bannerTimer)
		})
		$(".left-btn").click(function(){
			bannerIndex--;
			if(bannerIndex < 0){
				bannerIndex = 3;
				
			}
			fun();
			bannerIndex -= 1;
		})
		
		
		$(".right-btn").hover(function(){
			clearInterval(bannerTimer)
		})
		$(".right-btn").click(function(){
			bannerIndex+=1;
			fun();
			bannerIndex-=1
		})
		//----------------------------轮播图结束 下方为BANner其他
		$("#bannerR").hover(
			function(){
				$("#bannerR").animate({right: '+50px'}, "slow");
			},
			function(){
				$("#bannerR").animate({right: '+36px'}, "slow");
			}
		)
		//----------------------------轮播图结束 下方为二级菜单
		$("#bannerN>ul").find("li").each(function(){
			$(this).hover(function(){
				$(".banN-B"+($(this).index()+1)).css("background-position",$(this).index()*-17+"px -129px")
				$("#bannerNav").css("display","block")
				$(this).css({
					"backgroundColor":"#e5004f",
					"backgroundImage":"none"
				})
			},
			function(){
				$("#bannerNav").hover(function(){
					$("#bannerNav").css("display","block")
				},function(){
					$("#bannerNav").css("display","none")
				})
				$(".banN-B"+($(this).index()+1)).css("background-position",$(this).index()*-17+"px -111px")
				$("#bannerNav").css("display","none")
				$(this).css({
					"backgroundColor":"#333",
					"backgroundImage":"url(img/bannerBC.jpg)"
				})			
			})
		})
		$("#bannerNav ul li a:even").css("color","#ff8400")
		$("#bannerNav ul li a").hover(function(){
			$(this).css("color","red")
		},function(){
			$(this).css("color","#fff")
			$("#bannerNav ul li a:even").css("color","#ff8400")
		})
		//----------------------------热卖部分
		var $remaiul = $("#remai ul");
		var $remaili = $("#remai ol li")
		$remaili.mouseenter(function() {
			var index = $(this).index()
			$remaili.css("border-bottom","5px solid #333")
			$remaili.css("font-weight","200")
			$(this).css("border-bottom","5px solid #e5004f")
			$(this).css("font-weight","800")
			$remaiul.css("display","none")
			$remaiul.eq(index).css("display","block")
		})
		//---------------------------------------边框特效
		$(".gaoliang li").hover(
			function(){
				$(this).css("opacity","0.8")
			},
			function(){
				$(this).css("opacity","1.0")
			}
		)
		$(".biankuangduang").hover(function(){
				var width = $(this).innerWidth(); //获取父元素的宽度
				var height = $(this).innerHeight(); //获取父元素的高度 
				$(".biankuang",this).stop().animate({
					// + 1 像素是因为要覆盖父元素的边框线
					"width" : (width + 1) + "px", 
					"height" : (height + 1) + "px"
				})
			},function(){
				$(".biankuang",this).stop().animate({
					"width":"0",
					"height" : "0"
				})
		})
		
		
		
		
//----------------------------专柜部分
		$("#zhuanN-right ol li").hover(
			function(
			){
				$("#zhuanN-right ol li").css("font-weight","100")
				$("#zhuanN-right ol li").css("border-bottom","3px solid #333")
				$(this).css("font-weight","800")
				$(this).css("border-bottom","3px solid red")
				$("#zhuanN-right ul").css("display","none")
				$("#zhuanN-right ul").eq($(this).index()).css("display","block")
			}
		)
//----------------------------------电梯部分
		$(".dianti1").parent().hover(
			function(){
				$(".dianti1").css("display","none")
				$(".dianti1").next().html("时尚名品")
			},
			function(){
				$(".dianti1").css("display","block")
				$(".dianti1").next().html("")
			}
		)
				$(".dianti2").parent().hover(
					function() {
						$(".dianti2").css("display", "none")
						$(".dianti2").next().html("潮流女装")
					},
					function() {
						$(".dianti2").css("display", "block")
						$(".dianti2").next().html("")
					}
				)
				$(".dianti3").parent().hover(
					function() {
						$(".dianti3").css("display", "none")
						$(".dianti3").next().html("精品男装")
					},
					function() {
						$(".dianti3").css("display", "block")
						$(".dianti3").next().html("")
					}
				)
				$(".dianti4").parent().hover(
					function() {
						$(".dianti4").css("display", "none")
						$(".dianti4").next().html("时尚鞋靴")
					},
					function() {
						$(".dianti4").css("display", "block")
						$(".dianti4").next().html("")
					}
				)
				$(".dianti5").parent().hover(
					function() {
						$(".dianti5").css("display", "none")
						$(".dianti5").next().html("潮流箱包")
					},
					function() {
						$(".dianti5").css("display", "block")
						$(".dianti5").next().html("")
					}
				)
				$(".dianti6").parent().hover(
					function() {
						$(".dianti6").css("display", "none")
						$(".dianti6").next().html("美容护肤")
					},
					function() {
						$(".dianti6").css("display", "block")
						$(".dianti6").next().html("")
					}
				)
				$(".dianti7").parent().hover(
					function() {
						$(".dianti7").css("display", "none")
						$(".dianti7").next().html("运动户外")
					},
					function() {
						$(".dianti7").css("display", "block")
						$(".dianti7").next().html("")
					}
				)
				$(".dianti8").parent().hover(
					function() {
						$(".dianti8").css("display", "none")
						$(".dianti8").next().html("内衣配饰")
					},
					function() {
						$(".dianti8").css("display", "block")
						$(".dianti8").next().html("")
					}
				)
				$(".dianti9").parent().hover(
					function() {
						$(".dianti9").css("display", "none")
						$(".dianti9").next().html("可爱婴童")
					},
					function() {
						$(".dianti9").css("display", "block")
						$(".dianti9").next().html("")
					}
				)
				$(".dianti10").parent().hover(
					function() {
						$(".dianti10").css("display", "none")
						$(".dianti10").next().html("返回顶部")
					},
					function() {
						$(".dianti10").css("display", "block")
						$(".dianti10").next().html("")
					}
				)
				var mark = 1;
			$(window).scroll(function() {
			
				if(mark == 1) {
					var t = $(window).scrollTop();
					if(t > 1000) {
						$("#dianti").fadeIn(1000);
					} else {
						$("#dianti").fadeOut(1000);
					}
			
					
				}
				
			
			})
						$("#rtop").click(function(){
					$("body,html").animate({
							"scrollTop":0
						},500)
			})
			$("#dianti").find("li").click(function(){
						var index = $(this).index();
						//console.log(index);
						//console.log($(".louti1").eq(index));
						$("body,html").animate({
							"scrollTop":$(".louti1").eq(index).offset().top
						},500)
						console.log($(".louti1").eq(index).offset().top);
			})

})





















