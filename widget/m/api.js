var $ = require('jquery');
var M = require('m');
var Promise = require('common/bluebird/bluebird.js');

var ERROR_CODE = {
	
};

function ResponseError (code,message) {
	this.code = code;
	Error.call(this,message);
	this.message = message;
		
}

ResponseError.prototype = M.Helpers.create(Error.prototype,ResponseError);

function request(method,url,data,successCallback){
	if(!data){
		data = {};
	}
	
	method = method.toUpperCase();
	data['_token'] = window['_PHP_CSRF_TOKEN_'];
	data['_method'] = method;
	
	return new Promise(function(resolve,reject){
		$.ajax({
			type	:method,
			url		:url,
			data	:data,
			dataType:'json',
			complete:function(){
				
			},
			success:function(res){
				if(!res.meta || (res.meta.code == 0 || res.meta.code == undefined )){
					if(res.meta && res.meta.redirect){
						window.location.href = res.meta.redirect;
					}
					successCallback && successCallback(res);
					console.info && console.info('api-data:',res);
					resolve(res);										
				}else{
					console.error(
						'code:' + res.meta.code + '\n' +
						'reason' + res.meta.msg.toString()
					);
					res.msg = ERROR_CODE[res.meta.code] || res.meta.msg.toString();
					reject(new ResponseError(res.meta.code,res.msg));
				}
			}
		})
		.fail(function(xhr){
			console.error(url + ' ' +xhr.status + '(' + xhr.statusText + ')');
			var res = null;
			try{
				res = $.parseJSON(xhr.responseTest)
			}catch(e){}
			reject(new ResponseError(xhr.status,res && res.meta && res.meta.msg || xhr.statusText));			
		});
	});
}


exports.get = function(url,data,successCallback){
	return request('get',url,data,successCallback);
}

exports.post = function(url,data,successCallback){
	return request('post',url,data,successCallback);
}

exports.patch = function(url,data,successCallback){
	return request('patch',url,data,successCallback);
}

exports.put = function(url,data,successCallback){
	return request('put',url,data,successCallback);
}

exports['delete'] = exports.del = function(url,data,successCallback){
	return request('delete',url,data,successCallback);
}

































