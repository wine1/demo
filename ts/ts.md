# 基础类型
bool number string array 
元组Tuple 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。
枚举enum 
Any 
never 表示永远不存在的值的类型。比如抛出的异常或者不会有返回值的表达式
Object
类型断言：类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。


## 变量声明
var声明可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问，即常说的函数作用域
当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。
const声明 它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。
解构
展开
以上内容都是来自ES6

## 接口
TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

可选属性
接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。 
带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个?符号。

函数类型接口
对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配。

类类型


## 类
概念和语法类似java
继承：在TypeScript里，我们可以使用常用的面向对象模式。 基于类的程序设计中一种最基本的模式是允许使用继承来扩展现有的类。
公共，私有与受保护的修饰符 在TypeScript里，成员都默认为 public。当成员被标记成 private时，它就不能在声明它的类的外部访问。protected修饰符与 private修饰符的行为很相似，但有一点不同， protected成员在派生类中仍然可以访问。构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。你可以使用 readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
存取器 
静态属性
抽象类
跟java语法高度相似
