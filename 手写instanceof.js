//instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。
function myInstanceOf(left, right) {
    //获取对象的原型
    let proto = Object.getPrototypeOf(left)
    //获取构造函数的原型
    let prototype = Object.getPrototypeOf(right)

    while (true) {
        if (!proto) return false
        if (proto === prototype) return true

        //继续查找对象的原型链
        proto = Object.getPrototypeOf(proto)
    }

}



function myInstanceOf(left,right){
    let proto = Object.getPrototypeOf(left);
    let prototype = Object.getPrototypeOf(right);

    while(true){

      if(!proto) return false;
      if(proto ===prototype) return true;
      
      proto = Object.getPrototypeOf(proto);

    }
}

