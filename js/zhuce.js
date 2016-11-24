window.onload = function(){
	$(".denglu-top").find("input").click(function(){
		window.location='denglu.html' 
	})
	var tap = true;
	var ipt1 = $(".dengluIpt1").find("input").val()
	var ipY1 =$(".dengluTS1").html()
	var iptV = $(".dengluIpt1").find("input")
	//  登录框判断
	iptV.click(function(){
		iptV.val("")
	})
	iptV.blur(function(){
		var value = iptV.val()
		ipt1 = value
		var res = true;

		if(/^\w+@\w+(\.(com|cn|org|net|edu))+$/.test(ipt1)||/^1[34578]\d{9}$/.test(ipt1)){
				res = false;
		}
		 console.log(res)
		if(res){
			iptV.css("border-color","red")
			$(".dengluTS1").css("color","red"),
			$(".dengluTS1").html("请输入正确的E-mail或已验证的手机号码！")
			tap = true;
		}else{
			iptV.css("border-color","#999")
			$(".dengluTS1").css("color","#000"),
			$(".dengluTS1").html("")
			tap = false;
		}
	})
	var ipt2 = $(".dengluIpt2").find("input").val()
	var ipY2 =$(".dengluTS2").html()
	var iptV2 = $(".dengluIpt2").find("input")
		//  密码判断
		//密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
	iptV2.blur(function(){
		var value = iptV2.val()
		ipt2 = value
		var res = true;

		if(/^[a-zA-Z]\w{5,17}$/.test(ipt2)){
				res = false;
		}
		 console.log(res)
		if(res){
			iptV2.css("border-color","red")
			$(".dengluTS2").css("color","red"),
			$(".dengluTS2").html("请输入正确的密码格式！")
			tap = true;
		}else{
			iptV2.css("border-color","#999")
			$(".dengluTS2").css("color","#000"),
			$(".dengluTS2").html("")
			tap = false;
		}
	})
	var ipt9 = $(".dengluIpt9").find("input").val()
	var ipY9 =$(".dengluTS9").html()
	var iptV9 = $(".dengluIpt9").find("input")
	iptV9.blur(function(){
		var value = iptV9.val()
		ipt9 = value
		var res = true;

		if(ipt9 == ipt2){
				res = false;
		}
		if(res){
			iptV9.css("border-color","red")
			$(".dengluTS9").css("color","red"),
			$(".dengluTS9").html("密码不相同，请重新输入")
			tap = true;
		}else{
			iptV9.css("border-color","#999")
			$(".dengluTS9").css("color","#000"),
			$(".dengluTS9").html("")
			tap = false;
		}
	})
		//验证码
		    function yzm(){
        		var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];
        		var str = '';
        		for(var i = 0 ; i < 4 ; i ++ )
            		str += ''+arr[Math.floor(Math.random() * arr.length)];
        		return str;
    	}
		    $("#yzm").css("display","none")
			var index = yzm()
			$("#yzm").html(index)
	var ipt3 = $(".dengluIpt3").find("input").val()
	var ipY3 =$(".dengluTS3").html()
	var iptV3 = $(".dengluIpt3").find("input")
		iptV3.click(function(){
			$("#yzm").css("border","1px solid #999")
			$("#yzm").css("display","block")
		})
		$("#yzm").click(function(){
			var index = yzm()
			$("#yzm").html(index)
		})
		iptV3.click(function(){
			iptV3.val("")
		})
		iptV3.blur(function(){
			var value = iptV3.val()
			ipt3 = value
			var res = true;
			if($("#yzm").html() == value){
				var res = false
			}
		if(res){
			iptV3.css("border-color","red")
			$(".dengluTS3").css("color","red"),
			$(".dengluTS3").html("请输入正确的验证码！")
			tap = true;
		}else{
			iptV3.css("border-color","#999")
			$(".dengluTS3").css("color","#000"),
			$(".dengluTS3").html("验证码输入正确")
			$("#yzm").css("display","none")
			tap = false;
		}
		})
		//注册事件
		$(".dengluIpt6").click(function(){
			if(tap){
				alert("输入信息有误，请检查后重试")
			}else{
				alert("注册成功，点击后返回登录页")
				var username = ipt1
				var userpassword = ipt2
				setCookie("name",username); //把用户名存入 cookie
				setCookie("password",userpassword); //把密码出入 cookie
				window.location='denglu.html' 
			}
		})
}
	