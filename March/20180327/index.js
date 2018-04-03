// $(document).ready(function () {
//    $(".according li h2").click(function () {
//        var con = $(this).siblings(".content");
//        if(con.css("display")==="block"){
//            con.animate({
//                height: "0px"
//            },200)
//            con.hide(200)
//        }
//        else {
//            con.show(0);
//            con.animate({
//                height: "100px"
//            },600)
//        }
//        $(this).parent().siblings().find(".content").animate({
//            height: "0px"
//        },200,function () {
//            $(this).hide()
//        });
//    })
// });



// 1,async:异步的,类型Boolean。决定请求是否为异步?默认为true,是异步请求。(如为false,则将浏览器锁住,等待当前的请求完成
// 才能操作,用户体验差)。
// 2,beforeSend(XHR),类型Function。在发送请求前可对对象(XHR)进行修改,如返回"false"则取消此次请求。
// 7,dataFilter,类型为Function。对服务器返回的数据进行预处理的函数。
// 4,contentType(了解),类型String。发送服务器时内容编码类型。
// 5,context(了解),类型Object。用于设置Ajax相关回调函数的上下文。
// 6,data,类型为String。发送到服务器的数据,自动转换请求字符串格式。
// 8,dataType,类型为String。预期服务器返回数据的类型。如不指定,一般自动判断(XML,HTML,TEXT,Json,Jsonp,script)。
// 9,error类型为Function。请求失败时调用的函数。一般有三个参数(XMLHttpRequest对象,错误信息,捕捉的异常对象)。
// 10,success类型为Function,请求成功后回调的函数。
// 3,complete(XHR,TS),类型为Function。请求完成后(无论是否成功)回调的函数。
// 11,type类型为String,ajax请求方法,常用为(GET或POST),不写默认为GET。
// 12,url类型为String,发送请求的地址。(默认值当前页的地址)。

//JS
//1,通常操作HTML,格式为(document.getElementById("#").innerHTML="#".
//2,直接写入。格式为(document.write("#"))慎用。
//3,选id直接(引号引入),点击事件时由(函数)触发。
//4,语句,向浏览器发出指令,告诉浏览器做什么。
//5,单行注释"//",多行注释"/*      */"。
//6,变量是用来存储信息的容器。必须以"字母,"$","_"开头。 字符串要是用引号引起来,创建变量得使用关键字"var",赋值使用"=",例如 var i=444,j="zl"   多个变量时用逗号隔开。
//7,数据类型有:字符串(string),数字(),布尔值(Boolean),数组(array),对象(Object),Null,Undefined。
// 创建数组         var cars=my Array();
//              cars[0]="a";
//              cars[1]="b";                数组下标由0开始。一般由中括号[]展示。
//              cars[2]="c";                 console.log(cars)。
//对象是由花括号分隔的。var zl={firstname:"zhou",lastname:"liang",value:"hffh"};
//对象属性有两种寻址方式:  zl.firstname  或者  zl["firstname"]。
//undefined表示变量不含值,null可将变量的值设置为null来清空变量。
//对象是拥有方法和属性的数据。属性和方法称为对象的成员。
// 创建对象及添加属性 var zl=new object()
//                     zl.firstname="zhou";
//                     zl.lastname="liang";    console.log(zl)
//函数是由事件驱动或者被调用时可重复使用的代码块。
//语法  function functionName(var1,var2){
//        代码块
//              }      标准的写法,可传参数。参数与变量必须以一致的顺序出现。
//函数使用return时,函数会停止执行,;并返回指定值。
//变量周期是从它们被声明的时间开始。局部变量会在函数运行后删除,全局变量会在页面关闭后被删除。
//算数运算符"+","-","*","/","%","++","--"。赋值运算符"=","!=","+=","-=","/=","*=","%="。
// "+"用于文本值或字符串的相加。数字与字符串的相加为字符串,数字与数字相加为数字。
//比较运算符"==","===","!=",">","<",">=","<=".逻辑运算符"&&","||","!"
//条件运算符zl=(zy=="x+y")?"1z":"2z"  如果()条件为真,则给变量赋值"1z",否则赋值"2z"。
//if  (条件){                   if(条件){                 if(条件1){
//         代码块                  代码块1                    代码块1
//         }                              }                         }
//                                 else{               else if(条件2){
//    条件为真执行代码。              代码块2                    代码块2
//                                        }                         }
//                          条件为真时执行1,否则执行2。      else{
//                                                          代码块3
//                                                                  }
//                                              条件1真执行1,条件2真执行2,条件1 2都不为真时执行3。
//switch 根据不同的条件执行不同的动作。首先会设置一个表达式n(通常时一个变量),随后表达式的值会与结构中的每个case值做比较,如果有匹配,就运行相关的代码块,记得使用"break"阻止代码块自动向下运行。如都不满足,可使用"default"定义不匹配时的动作。
// switch(n){
//     case0:
//       代码块0;
//     break;
//     case1:
//       代码块1;
//     break;
//           。。。
//             。。。
//        default:
//          代码块;}
//for 可将代码执行指定的次数。for (var i=0;i<5;i++){
//                              代码块
//                            }

