$(function() {
	$("#shopbtn").click(function() {
		window.location = 'gouwuche.html'
	})
	$("#xiangqingCenter ol li").hover(
			function() {
				$(this).css("background", "#b7ab91")
					//$(".xiangqingXQ").attr('src','img2/xiangqing'+($(this).index()+3)+'.jpg')
			},
			function() {
				$("#xiangqingCenter ol li").css("background", "#999")
				$(".xiangqingCO").css("background", "#cb0147")
			}
		)
		//获取 ？ 后面的值
	var search = (location.search || location.href).split("?");
	if(search.length > 1) {
		search = search[search.length - 1];
	} else {
		search = "";
	}
	var obj = {};
	//如果 地址栏参数存在
	if(search) {
		// 以 & 符合分割 字符串
		search = search.split("&");
		//循环遍历分割后的字符串
		for(var i = 0; i < search.length; i++) {
			//以 = 号分割
			var item = search[i].split("=");
			obj[item[0]] = item[1];
		}
	}
	//获取所有商品信息
	$.get("data.json", {}, function(data) {
		var i = obj.i; // 获取 i (分类的 key 值)
		//获取 i 对于的 value 值
		var item = data[i];
		//获取 该分类下的所有商品
		var list = item.list;
		var shopInfo; //商品详情
		//循环查找对应的商品
		for(var index = 0; index < list.length; index++) {
			var child = list[index];
			//找到对应的商品
			if(child.id == obj.id) {
				shopInfo = child;
				break;
			}
		}

		var html = '<img src="img/' + shopInfo.src + '" class="xiangqingImg"/>' +
			'<p class="xiangqingP1">' + shopInfo.name + '</p>' +
			'<p class="xiangqingP4">' + shopInfo.name + '</p>' +
			'<p class="xiangqingP5">' + shopInfo.price + '</p>' +
			'<p class="xiangqingP2">' + shopInfo.price + '元</p>' +
			'<i style="display:none;" class="shopInfo" ' +
			'data-id="' + shopInfo.id + '" data-name="' + shopInfo.name + '" ' +
			'data-src="' + shopInfo.src + '" data-price="' + shopInfo.price + '" ' +
			'></i>';

		$(".shopinfo").append(html);
		$(".big-img>img").attr("src",'img/'+shopInfo.src)

	}, "json")
});
$(function() {
	//将页面中的自定义属性取出来
	//封装为一个对象
	function click(e) {
		var count = 1; //默认购买一件商品
		_shopinfo($(".shopInfo"), count);
	}
	//购买按钮
	$(".shopinfo").on("click", "button", click);
	$("#shopbtn").on("click", click);
});

//放大镜事件
$(function(){
	$(".shopinfo").mousemove(function(e){
		//console.log(e.pageX);
		var posx = e.pageX - $(".hover").width()/2 - $(".shopinfo").offset().left;
		var posy = e.pageY - $(".hover").height()/2 - $(".shopinfo").offset().top;
		//var cutx = $(".shopinfo").offset().left+$(".shopinfo").width();
		//console.log(posx);
		if(posx<0){
			posx = 0;
		}
		if(posy<0){
			posy = 0;
		}
		if(posx>$(".shopinfo").width()-$(".hover").width()){
			posx = $(".shopinfo").width()-$(".hover").width();
		}
		if(posy>$(".shopinfo").width()-$(".hover").height()){
			posy = $(".shopinfo").width()-$(".hover").height();
		}
		$(".hover").css({
			"left":posx+'px',
			"top":posy+'px'
		})
		//放大效果；
		var xsize = $(".big-img>img").width()/$(".shopinfo").width()*posx;
		var ysize = $(".big-img>img").width()/$(".shopinfo").width()*posy;
		$(".big-img>img").css({
			"left":-xsize,
			"top":-ysize
		})
	})
})









