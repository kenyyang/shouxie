//1.因为一个 url 地址是字符串形式的，所以利用 split 方法将参数提取出来，该方法比较常用，
let URL = "http://www.baidu.com?name=张三&age=25&sex=男&wife=小红"
function getUrlParams(url) {
    // 通过 ? 分割获取后面的参数字符串
    let urlStr = url.split('?')[1]
    // 创建空对象存储参数
	let obj = {};
    // 再通过 & 将每一个参数单独分割出来
	let paramsArr = urlStr.split('&')
    
	for(let i = 0,len = paramsArr.length;i < len;i++){
        // 再通过 = 将每一个参数分割为 key:value 的形式
		let arr = paramsArr[i].split('=')
        
		obj[arr[0]] = arr[1];
	}
	return obj
}
console.log(getUrlParams(URL))
//2.
// var url = "http://www.baidu.com?username=limei&age=18";

// var obj = url.substr(url.indexOf("?")+1).split("&").reduce(function(pre,cur){
//         var key = cur.split("=")[0];
//         var val = cur.split("=")[1];
//         pre[key] = val;
//         return pre;
// },{})

//   console.log(obj)  //{username: "limei", age: "18"}
function getUrlParams(url){
    let urlstr = url.split('?')[1];
    let obj = {};
    let arrStr = urlstr.split('&');
    for(let i = 0; i<arrStr.length; i++){
        let objarr = arrStr[i].split('=');
        obj[objarr[0]] = objarr[1];
    }
    return obj;
}