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
	html += "<li class=\"\"><div class=\"v\"><a href=\"javascript:;return;\", page=\"index\" class=\"\"><span class=\"l\"></span>首　页</a></div></li>";
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
			var page = $(this).find("div").find("a").attr("page");
			if(page.indexOf("index") >= 0) {
				window.open("index.html?page="+page, "_self");
			} else {
				window.open("base.html?page="+page, "_self", 'height=100%, width=500, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
			}
		});
	});
	
	var page = getQueryString("page");
	if(page === null || page == "index") {
		setMenuCss();
	} else if(page == "aboutus") {
		setMenuCss();
		$("#right").attr("src", "aboutus/aboutus.html");
	} else if(page == "products") {
		setMenuCss();
		$("#right").attr("src", "product/products.html");
	} else if(page == "news") {
		setMenuCss();
		$("#right").attr("src", "news/news.html");
	} else if(page == "inquiry") {
		setMenuCss();
		$("#right").attr("src", "inquiry/inquiry.html");
	} else if(page == "order") {
		setMenuCss();
		$("#right").attr("src", "order/order.html");
	} else if(page == "contact") {
		setMenuCss();
		$("#right").attr("src", "contact/contact.html");
	} 
	
	function setMenuCss() {
		$("#nav li a").each(function() {
			var temp = $(this).attr("page");
			if(page === null || page == "index") {
				$("#nav_hover .v a").removeClass("sele");
				$("#nav li a").eq(0).addClass("sele");
			} 
			if(temp == page) {
				$("#nav_hover .v a").removeClass("sele");
				$(this).addClass("sele");
			}
		});
	}
	
	/*
	switch (true) {		
		default :
			if(page == "" || page == "undefined") {
				$("#nav li").attr("class","");
				$("#nav li").eq(0).attr("class","nav_lishw");
				$(".nav_lishw .v a").attr("class","sele");
				$(".nav_lishw .kind_menu").show();
			}
	} 
	
	$("#nav li").hover(
		function(){
			clearTimeout(setTimeout("0")-1);
			$("#nav li .v .sele").attr("class","shutAhover");
			$(this).attr("id","nav_hover")
			$("#nav_hover .v a").attr("class", "sele");
		},
		function(){
			if($(this).attr("class") != "nav_lishw"){
				$("#nav_hover .v .sele").attr("class","");
			}
			$(this).attr("id","")
			$("#nav li .v .shutAhover").attr("class","sele");
			setTimeout(function(){
				$(".nav_lishw .v a").attr("class","sele");
			},50); 
		}
	);*/
	
	function getQueryString(name) { 
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); 
		var r = window.location.search.substr(1).match(reg); 
		if (r != null) return unescape(r[2]); 
		return null; 
	} 
	
	
	
	
});