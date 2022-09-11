#### 什么是作用域，作用域有哪些?

可访问变量的集合，局部作用域，全局作用域

#### 预编译的过程有哪些？

全局预编译和局部预编译，全局预编译发生在页面加载完成时候，局部预编译发生在函数执行前一刻。

全局预编译包括：创建全局对象，寻找变量声明，将变量名作为全局对象属性名，值为undifined，查找函数声明，作为全局对象属性，值赋予函数体。

局部预编译包括：创建激活对象，执行上下文，寻找形参和变量声明，将变量和形参名作为激活对象属性名，值为undifined，将实参值和形参统一，在函数体里面找函数声明，值赋予函数体。

#### 下面几题的代码的执行结果分别是什么？
```js
var foo = 1;
function bar() {
    console.log(foo);  // undefined 
    if (!foo) {
        var foo = 10;
    }
    console.log(foo); // 10
}

bar();
```

```js
function fn () {
    func()
    var func = function () {
        console.log('表达式')
    }
    function func() {
        console.log('声明式')
    }
    func()
}
fn()
```

```js
function test(d) {
    console.log(b);
    if (a) {
        b = 100;
    }
    console.log(b);
    c = 4;
    console.log(d);
    var d = 20;
    console.log(d);
}
var a = 10;
var b = 10;
test(3);
console.log(c);
```

#### js的数据类型有哪些？
基本数据类型：Undefined Null Symbol Number Boolean String BigInt 
引用数据类型：Function Array Object Date

#### 什么是深拷贝 深拷贝有哪些方式？

就是针对一些引用数值对象在进行拷贝的时候，需要新生成一个对象，然后复制属性，返回的是新对象，而不是旧对象，可以用JSON或者递归的方式

#### 什么是闭包？

#### 下面几题的代码的执行结果分别是什么？
```js
var obj = { 
    a: 1, 
    foo() {
        console.log(this.a);
    } 
};
var a = 2;
var foo = obj.foo;
var obj2 = { a: 3, foo: obj.foo }

obj.foo();
foo();
obj2.foo();
// 1 2 3
```
```js
function Foo(){
    getName = function(){ console.log(1); };
    return this;
}
Foo.getName = function(){ console.log(2); };
Foo.prototype.getName = function(){ console.log(3); };
var getName = function(){ console.log(4); };
function getName(){ console.log(5) };

Foo.getName();         
getName();        
Foo().getName();
getName();        
new Foo.getName();
new Foo().getName();
new new Foo().getName();
```

#### 什么是EventLoop事件循环？

我的理解就是因为js是单线程的，js单线程的原因是最早js是用来操作dom的，那么如果在同一个时间有两个人同时操作dom，那必然会出现问题，但是如果js在运行的时候只严格按照顺序，那可能会出现阻塞的问题，所以为了协调同步任务和异步任务，就有了事件循环。

#### 什么是同源策略？图片资源是否存在跨域？

如果两个页面（接口）的协议、域名、端口号相同，则被认为是同源的。

无法读取非同源策略下的cookie, localstorage,解除dom操作以及无法向非同源的地址发送ajax请求。

用href src请求下来的不存在跨域问题。

#### 解决跨域的方式有哪些？

jsonp cros nginx

#### js设计模式有哪些？

工厂方法模式，单例模式，装饰者模式，观察者模式

#### 什么是原型，原型链？

类.prototype指向的就是原型对象，原型对象能存放实例对象公有属性和公有方法

通过原型对象的.__ proto __可以一直往上查找，形成链条一样的结构，这个结构就是原型链

#### instanceof 为什么可以区分数组和对象，比较的是什么？

a(对象) instanceOf b(构造函数) 会看一个对象在原型链中是否存在一个构造函数的prototype

比如a.__ proto __ . __ proto __=== b.prototype，那么就是true

#### 什么是防抖，节流 有哪些运用场景？

防抖是事件被触发之后，隔一段时间执行回调函数，如果在n秒内被触发，则重新计时。

适用于类似输入框输入字时候。

节流是一个单位时间内，只能触发一次函数。如果这个时间内多次触发函数，只有一次生效。

scroll计算滚动条位置时候。

#### web性能优化能做哪些事情？

#### let const和var的区别？

这个我熟

const的数据值一般不能改变

let const 是局部作用域，var是全局作用域，var有变量提升

let const不能重复声明同一个变量名

const必须初始化变量

#### Symbol的数据类型及特性？

基本数据类型，

```js
let abc = Symbol('123');
console.log(abc.description)
```

#### Symbol.iterator的作用？

#### Set的数据类型及特性？

#### Map的数据类型及特性？

#### iterator接口的作用？

遍历对象呗

#### for of与for in的区别？

for in 遍历的是keys，在数组中输出的是Index, for of遍历的是value,

for of只能遍历有Iterator接口的数据结构，例如Map, Set

对于没有iteratoe接口的数据结构，可以使用Object.keys方式得到属性值（这个属性值不包括原型对象上定义的属性值）

#### 箭头函数与普通函数的区别？

箭头函数没有this，没有new，没有arguments，没有原型和super

#### 箭头函数的this的指向？

windows

#### 代码的执行结果是什么？
```js
var obj = {
   say: function() {
     var f1 = () =>  {
       console.log("1111", this);
     }
     f1();
   },
   pro: {
     getPro:() =>  {
        console.log(this);
     }
   }
}
var o = obj.say;
o();
obj.say();
obj.pro.getPro();
```

```js
var a = 10
var obj = {
  a: 20,
  say: () => {
    console.log(this.a)
  }
}
obj.say() 

var anotherObj = { a: 30 } 
obj.say.apply(anotherObj)
// 10 10
```

```js
async function fn () {
    setTimeout(() => {
        console.log(4)
    }, 0)
    Promise.resolve().then(() => {
        console.log(1)
    })

    await Promise.resolve().then(() => {
        console.log(2)
    })

    console.log(3)
}
```

```js
function fn () {
  return new Promise((resolve) => {
    console.log('Promise1')
    fn1()
    setTimeout(() => {
      console.log('Promise2')
      resolve()
      console.log('Promise3')
    }, 0);
  })
}
async function fn1() {
  var p = Promise.resolve().then(() => {
    console.log('Promise6')
  })
  await p.then(() => {
    console.log('Promise7')
  })
  console.log('end')
}
console.log('script')
setTimeout(() => {
  console.log('setTimeout')
}, 0)
fn().then(() => {
  console.log('Promise4')
})
```

#### class与构造函数的区别？