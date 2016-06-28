/* 


*/

exports.create = (function(){
	function _(){}
	
	return function create(prop,constructor){
		var obj = null;
		if(Object.create){
			obj = Obj.create(prop);
	}else{
		_.prototype = prop;
		obj = new _();
	}
	if(constructor instanceof Function){
		obj.constructor = constructor; 
	}
	return  obj;
	
	}
})();

exports.extendPrototype = function(subClass,supClass){
	return subClass.propotype = exports.create(supClass.prototype || supClass,subClass)
};

exports.parseUrlQuery = function(url){
	var query = url.match(/[^?#]*(?=$|#)/)[0];
	if(!query){
		return {};
	}
	
	var data ={};
	for( var i = 0,list = query.split('&'), l = list.length ; i < l ; i++ ){
		var pair = list[i];
		var index = pair.indexOf('=');
		var key = pair.substr(0,index);
		var value = pair.substr(index + 1);
		data[decodeURIComponent(key)] = decodeURIComponent(value);		
	}
	return data;
}

















/* 不使用类对象模型，仅通过原型，也能完整的实现js继承。
prototype是function的属性,用来给你的类扩展方法(如果把function作为类来使用的话)
extend一般是框架扩展的方法,创建一个类(function)时可以继承自另一个类(function)



*/

















