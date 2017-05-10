$(function(){
	
	var html = "";
	html += "<div id=\"top\">";
	html += "<div class=\"lan\">";
	html += "<span>";
	html += "<a href=\"http://www.cn-rpst.com/cn/index.asp\" class=\"cn_tag\"></a>";
	html += "<a href=\"http://www.cn-rpst.com/index.asp\" class=\"en_tag\"></a>";
	html += "</span>";
	html += "</div>";
	html += "</div>";
	html += "<div id=\"head\">";
	html += "<div id=\"nav\">";
	html += "<ul>";
	html += "<li class=\"nav_lishw\"><div class=\"v\"><a href=\"javascript:;return;\", page=\"index\" class=\"\"><span class=\"l\"></span>首　页</a></div></li>";
	html += "<li class=\"\"><div class=\"v\"><a href=\"javascript:;return;\", page=\"aboutus\"><span class=\"l\"></span>关于我们</a></div></li>";
	html += "<li class=\"\"><div class=\"v\"><a href=\"javascript:;return;\", page=\"products\"><span class=\"l\"></span>产品展示</a></div></li>";
	html += "<li class=\"\"><div class=\"v\"><a href=\"javascript:;return;\", page=\"news\"><span class=\"l\"></span>公司新闻</a></div></li>";
	html += "<li class=\"\"><div class=\"v\"><a href=\"javascript:;return;\", page=\"order\"><span class=\"l\"></span>在线定单</a></div></li>";
	html += "<li class=\"\"><div class=\"v\"><a href=\"javascript:;return;\", page=\"contact\"><span class=\"l\"></span>联系我们</a></div></li>";
	html += "</ul>";
	html += "</div>";
	html += "</div>";
	
	$("#header").append(html);
	
	$("#nav ul li").each(function(){
		$(this).click(function(){
			$("#nav ul li div a").removeClass("sele");
			$(this).find("div").find("a").addClass("sele");
			var page = $(this).find("div").find("a").attr("page");
			if(page.indexOf("index") >= 0) {
				window.open("index.html", "_self");
			} else {
				window.open("base.html?page="+page, "_self", 'height=100%, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
			}
		});
	});
	
	var page = getQueryString("page");
	if(page == "index") {
		window.open("index.html", "_self");
	} else if(page == "aboutus") {
		$("#right").attr("src", "aboutus/aboutus.html");
	} else if(page == "products") {
		$("#right").attr("src", "product/products.html");
	} else if(page == "news") {
		$("#right").attr("src", "news/news.html");
	} else if(page == "inquiry") {
		$("#right").attr("src", "inquiry/inquiry.html");
	} else if(page == "order") {
		$("#right").attr("src", "order/order.html");
	} else if(page == "contact") {
		$("#right").attr("src", "contact/contact.html");
	} 
	
	switch (true) {		
		default :
			$("#nav li").attr("class","");
			$("#nav li").eq(0).attr("class","nav_lishw");
			$(".nav_lishw .v a").attr("class","sele");
			$(".nav_lishw .kind_menu").show();
	} 
	
	$("#nav li").hover(
		function(){
			clearTimeout(setTimeout("0")-1);
			$("#nav .kind_menu").hide(); 
			$("#nav li .v .sele").attr("class","shutAhover");
			$(this).attr("id","nav_hover")
			$("#nav_hover .v a").attr("class","sele");
			$("#nav_hover .kind_menu").show(); 
		},
		function(){
			
			if($(this).attr("class") != "nav_lishw"){
				$("#nav_hover .v .sele").attr("class","");
				$("#nav_hover .kind_menu").hide(); 
			}
			$(this).attr("id","")
			$("#nav li .v .shutAhover").attr("class","sele");
			setTimeout(function(){
				$(".nav_lishw .kind_menu").show();
				$(".nav_lishw .v a").attr("class","sele");
			},50); 
		}
	);
	
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); 
		return null; 
	} 
	
	
	
	
});