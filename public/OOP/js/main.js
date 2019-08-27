// main.js
/**
 * config layui
 */
layui.use(['layer', 'element', 'code'], function() {
	var layer = layui.layer
	,element = layui.element
	,code = layui.code;
	
	layer.msg("Welcome work Site...");

	/**
	* dode
	*/
	code({
		title: "执行结果"
		,height: "4000px"
		,about: false
		//,skin: "notepad"
	});
});