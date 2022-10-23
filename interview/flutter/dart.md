#### 类型

typescript是弱类型语言，dart是强类型的语言

dart也有一些弱类型，比如var, object, dynamic

1. var初始可以定义，如果有初始值，那么其类型会被锁定，定义之后无法更改类型
2. object动态任意类型，编译阶段检查类型
3. dynamic动态任意类型，编译阶段不可以检查类型

#### 默认值

js初始化是undifined，而dart里面是null，因为在dart里面万物皆是对象

#### 类型判断

js中使用typeof判断基本数据类型，用instanceof来判断引用类型

#### 类型转换

js中存在自动的类型转换

dart是强类型语言，不会进行自动的类型转换

#### 字符串操作

String name = "hello";

name.isEmpty, name.isNotEmpty

