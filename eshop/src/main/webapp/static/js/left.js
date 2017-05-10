$(function(){

	var html = "";
	html += "<div id=\"my_menu\" class=\"sdmenu\">";
	html += "<div class=\"collapsed\">";
	html += "<span class=\"leiFir\">洗衣机配件</span>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">减速器</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">电容</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">定时器</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">洗衣机电机</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">其他</a>";
	html += "</div>";
	html += "<div class=\"collapsed\">";
	html += "<span class=\"leiFir\">太阳能电池板</span>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">太阳能电池板</a>";
	html += "</div>";
	html += "<div class=\"collapsed\">";
	html += "<span class=\"leiFir\">农业用喷雾器</span>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">配件</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">喷雾器</a>";
	html += "</div>";
	html += "<div class=\"collapsed\">";
	html += "<span class=\"leiFir\">工业原料</span>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">GFPP</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">ABS</a>";
	html += "</div>";
	html += "<div class=\"collapsed\">";
	html += "<span class=\"leiFir\">其他</span>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">饮水机水龙头</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">风扇电机配件</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">煤气灶配件</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">冰箱配件</a>";
	html += "<a href=\"javascript:;return null;\" class=\"leiSec\">其他</a>";
	html += "</div>";
	html += "</div>";
	$("#left").append(html);
	
	var myMenu;
	window.onload = function() {
	    myMenu = new SDMenu("my_menu");
	    myMenu.init();
	};
	
});