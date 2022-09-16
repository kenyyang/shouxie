/**
 * 原型链继承
 */
function Parent() {
    this.name = 'parent';
    this.play = [1, 2, 3];
}
function Child() {
    this.type = 'child'
}
Child.prototype = new parent()
const c1 = new Child();
console.log(c1.name); // parent

/**
 * 构造函数继承
 */
function Parent() {
    this.color = ['blue', 'red', 'white', 'green'];
}
Parent.prototype.getName = function () {
    return this.name = 'parent'
}

function Child() {
    Parent.call(this)
}
const c2 = new Child();
console.log(c2.name()); //报错

/**
 * 组合继承
 */
function Parent(name) {
    this.name = name;
    this.color = ['blue', 'red', 'white', 'green']
}
Parent.prototype.sayName = function () {
    return this.name
}
function Child(name) {
    Parent.call(this, name)
}
Child.prototype = new Parent();
Child.prototype.construct = Child
/**
 * 原型式继承
 */
function Parent(name) {
    this.name = name;
    this.color = ['blue', 'red', 'white', 'green']
}
Parent.prototype.sayName = function () {
    return this.name
}
function _object(obj) {
    function f() { }
    f.prototype = obj
    return new f()
}
/**
 * 寄生式继承
 */
function Parent(name) {
    this.name = name;
    this.color = ['blue', 'red', 'white', 'green']
}
Parent.prototype.sayName = function () {
    return this.name
}
function createAnother(original) {
    let clone = Object.create(original);
    clone.prototype.getname = function () {
        return this.name
    }
    return clone
}
/**
 * 寄生组合式继承
 */
function Parent(name) {
    this.name = name;
    this.color = ['blue', 'red', 'white', 'green']
}
Parent.prototype.sayName = function () {
    return this.name
}
function Child(name, age) {
    Parent.call(this, name);
    this.age = age
}
function inheritPrototype(child, parent) {
    let prototype = Object.create(parent.prototype);
    prototype.construct = child
    child.prototype = prototype
}
inheritPrototype(Child, Parent);
Child.prototype.getage = function () {
    return this.age
}

function sortArray(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums
}