#### 什么是作用域，作用域有哪些?

可访问变量的集合，局部，全局

#### 预编译的过程有哪些？

全局预编译和局部预编译，全局预编译发生在页面加载完成时候，局部预编译发生在函数执行前一刻。

全局预编译包括：创建全局对象，寻找变量声明，将变量名作为全局对象属性名，值为undifined，查找函数声明，作为全局对象属性，值赋予函数体。

局部预编译包括：创建激活对象，执行上下文，寻找形参和变量声明，将变量和形参名作为激活对象属性名，值为undifined，将实参值和形参统一，在函数体里面找函数声明，值赋予函数体。

#### 下面几题的代码的执行结果分别是什么？
```js
var foo = 1;
function bar() {
    console.log(foo);  
    if (!foo) {
        var foo = 10;
    }
    console.log(foo); 
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
基本数据类型：
引用数据类型：

#### 什么是深拷贝 深拷贝有哪些方式？

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

#### 什么是同源策略？图片资源是否存在跨域？

#### 解决跨域的方式有哪些？

jsonp cors nginx

#### js设计模式有哪些？

#### 什么是原型，原型链？

#### instanceof 为什么可以区分数组和对象，比较的是什么？

#### 什么是防抖，节流 有哪些运用场景？

#### web性能优化能做哪些事情？

#### let const和var的区别？

#### Symbol的数据类型及特性？

基础数据类型 

#### Symbol.iterator的作用？

#### Set的数据类型及特性？

#### Map的数据类型及特性？

#### iterator接口的作用？

#### for of与for in的区别？

#### 箭头函数与普通函数的区别？

#### 箭头函数的this的指向？

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