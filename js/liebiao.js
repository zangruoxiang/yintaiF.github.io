		$(function(){
				//请求 json 数据
				$.get("data.json",{},function(data){
					
					(function(){
						var html = "";
						for(var i in data){
							//通过 i 获取 value 值
							var item = data[i];
							console.log(item.name);
							//拼接所有 span 标签
							html += "<span data-i='"+ i +"'>" + item.name + "</span>";
						}
						//将所有 span 标签一次添加到 nav 元素中
						$(".nav").append(html);
					})();
					
					(function(){
						// 给 span 标签添加 click 事件
						$(".nav").on("click","span",function(e){
							//给当前元素动态添加一个 class ，查找兄弟元素中是否有这个class的元素，并且删除该 class
							$(this).addClass("cur").siblings(".cur").removeClass("cur");
							//获取 i 值
							var i = $(this).data("i");
							// i 对应的 value 取出来
							var item = data[i];
							//获取 item 中 的 list 值
							var list = item.list;
							
							var html = "";
							
							//循环遍历 list 中的元素
							for(var index = 0; index < list.length; index++){
								var child = list[index];
								html += '<li>'+
											'<a href="xiangqing.html?i='+ i +'&id='+ child.id +'">'+
												'<img src="img/'+ child.src +'" />'+
												'<p class="jiage">'+ child.price +'元</p>'+
												'<p class="quxiangqing">'+ child.name +'</p>'+
											'</a>'+
										'</li>';		
							}
							//将已有的内容清空，将新的内容添加到元素中
							$(".shoplist").html(html);
						});
						//自动触发 click 事件
						$("span",".nav").eq(0).trigger("click");
					})();
					
				},"json");
			});