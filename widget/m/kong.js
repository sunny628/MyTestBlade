//组件banner.js文件里面这样写
var $ = require('jquery');

//private methods
function Banner(){
	//逻辑代码......
}

//inherit father prototype
var api = Banner.prototype = M.Helpers.create(Event.prototype,Banner);


//public method 对外接口的公共的show方法 
api.show = function(){
	
}

//公共的hide方法
api.hide = function(){
	
}

//对外接口
module.exports = Banner;




//index页要引用banner组件的时候,要这样写
var Banner = require('./banner.js');

var banner = (funciton(){
	var banner = new Banner();
	
	//这里就可以用show方法 比如
	$(document).on('click','.J-btn',function(){
		banner.show();
	});
	
	return banner;
	
})();


>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>或者>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var $ = require('jquery');






