exports.Helpers = require('./helpers');
exports.Data = require('./data');
exports.Api = require('./api');

/*引用的时候 比如
var M = require('m');

var api = Tab.prototype = M.Helpers.create(Event.prototype,Tab);

module.exports = Tab;
也就是m.Helpers方法  


nodejs模块中的exports对象,可以用它创建模块


Module.exports才是真正的接口,exports只不过是它的一个辅助工具.
最终返回给调用的是Module.exports而不是exports
所有的exports收集到的属性和方法,都赋值给了Module.exports
当然这有个前提,就是Module.exports本身不具备任何属性和方法.
如果Module.exports已经具备一些属性和方法,那么exports收集来的信息将被忽略

*/