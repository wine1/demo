function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

// document.body.innerHTML = printLabel(myObj);
// 类型检查器会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配。
// 用接口重写
interface LabelledValue {
  label: string;
}
function printLabel2(labelledObj:{label:LabelledValue}) {
  console.log(labelledObj.label);
}
let myObj2={ size: 10, label: "Size 10 Object" };
printLabel2(myObj2);
// ??能输出但是会报错


interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: "white", area: 100};
  if (config.clor) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    // 可选属性的作用之一就是可以捕获引用了不存在的属性时的错误。
    newSquare.color = config.clor;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});