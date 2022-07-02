import request from '../utils/request.js'

	
export function selectAll(){
	return request({
		url: '/purchasesale/selectAll',//请求接口
		method: 'get',//请求方式
	})
}

//虽然是selectByName但是是根据特定词条来寻找数据, 不仅限于name, 为了少更改数据这里命名不做修改
export function selectByName(data){
	return request({
		url: '/purchasesale/selectOne',//请求接口
		method: 'post',//请求方式
		data
	})
}
export function edit(data){
	return request({
		url: '/purchasesale/edit',//请求接口
		method: 'post',//请求方式
		data
	})
}

//虽然是addByName但是就是将temp(formData)中的数据加到数据库中, 为了减少改动部分, 就不更改命名了
export function addByName(data){
	return request({
		url: '/purchasesale/add',//请求接口
		method: 'post',//请求方式
		data
	})
}
export function deleteById(data){
	return request({
		url: '/purchasesale/deleteById',//请求接口
		method: 'post',//请求方式
		data
	})
	
	
}

export function preciseQuery(data){
		return request({
			url: '/purchasesale/preciseQuery',//请求接口
			method: 'post',//请求方式
			data
		
		})
}