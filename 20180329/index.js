//for (语句1;语句2;语句3) {
//      被执行的代码块                语句1:循环前执行;语句2:定义代码块执行的条件;语句三:代码块执行后执行。
// }
//for  (  in ) 循环:遍历对象属性。
//while (条件){                       do{
//                                          被执行的代码块              while循环中记得改变变量的值,累加或者累减,否则循环不止。
//      被执行的代码块                                     }
//
// }                                   while(条件)
//  条件为真时,循环。                       无论条件真假,执行一次,若条件为真,则循环。
//break:跳出循环。   continue:仅跳出符合当前的迭代。
//try 语句测试代码块错误。 catch:语句处理错误。 throw:语句创建自定义错误。
//javaScript操作html元素有三种方法:1,通过id;2,通过class;3,通过html标签。
//DOM  一般js使用id操作元素。
//document.getElementById("zl").innerHTML="我是周亮"。                           (改变内容 )
//document.write() 直接向html书写内容。[如在文档之前使用,则会被覆盖(无效)]。          (改变html)
//document.getElementById("zl").attribute="new value";  (选择改变属性时,看清楚选择的属性,是否是选中)。  (改变属性)
//document.getElementById("zl").style.property="new style"。                     (改变样式)

//DOM事件
// 1:onclick="this.innerHTML='woshizhouliang '"                            点击事件改变内容
//       2:onclick="function()"                                                   调用函数
//      document.getElementById("zl").onclick=function(){displayDate()} ;         (给点击事件赋值函数,定义函数的作用对象)
//      function(){
//          document.getElementById("zy").innerHTML="Date";
//                  }
// 加载 onload 与onunload 用户在进入或者离开页面时触发。用于检测访问者浏览器的类型和版本,并且基于这些信息加载正确的版本。
// onchange事件通常结合对输入字段的验证来使用。
// onmouseover  onmouseout  onmousedown onmouseup  onmousemove 与jQuery很类似,前面有on开头。
// onkeyup onkeydown onkepress onerror  onresize  onfocus onblur
//
//DOM节点(创建与删除)
//  创建新的"p"元素                    var para=document.createElement("p");
//  如需添加文本 则要创建一个节点        var node=document.createTextNode("我是周亮。");
//  向"p"元素添加节点                  para.appendChild(node);
//  必须向已有的元素添加这个新元素"p"     var element=document.getElementById("div1");
//  添加到已有的元素                    element.appendChild(para);
//
//  删除元素 "p"找到"p"的父元素             var parent=document.getElementById("div1");
//  找到要删除的"p"元素                    var child=document.getElementById("p1");
//  删除该元素                            parent.removeChild(child);
//  删除简写                    直接找父辈 child.parentNode.removeChild(child);     (可省略第一条找父辈。)
//
//对象  拥有属性跟方法的数据。
//访问对象的属性 objectName.propertyName
//访问对象的方法 objectName.methodName()    很多时侯方法指的就是函数
//数字Number对象   创建 var myNum=new Number(value) 构造函数   var myNum=Number(value) 作为一个函数调用
//   数字也有属性与方法。
//字符串String对象 .length用来计算字符串的长度。 .indexOf()定位某个字符首次出现的位置。  .match()查找字符串中的字符,如有就返回,没有返回"null"
//日期Date对象   创建 var myDate= new Date()
//      19920403    设定具体日期setFullYear()    var d=new Date() ;  d.setFullYear(1992,03,03); alert(d):1992.04.03.
//      获取当前时间  alert(Date())
//数组Array对象  使用单独的变量名来储存一系列的值  var myArray=new Array()
//  访问数组  document.write(myArray[0]) 通过数组名与下标获取元素
//逻辑Boolean对象  是将非逻辑值转化为逻辑值。   var myBoolean=new Boolean()。如果逻辑对象无初始值或者为0,-0,null,"",false,undefined,NaN,
//   那么为false,否则都为true。
//Math对象,用于常见算数任务
//     document.write(math.round(2.4)) 返回2整数(四舍五入)    document.write(math.random()) 返回0-1之间随机数
//      document.write(math.max(2,4)) 返回较大数字4            document.write(math.mix(2,4)) 返回较小数字2
//RegExp正则表达式对象 用于检索文本中的内容。 var patt1= new RegExp()
//      RegExp对象的方法  test() exec() compile()
//      var patt1= new RegExp("e");
//      document.write(patt1.test("wo shi zhouliang "));  输出false   (字符串没有字母"e"出现,如有输出true)。检索 "e"
//      var patt1= new RegExp("e");
//      document.write(patt1.exec("wo shi zhouliang "));  输出null   (字符串没有字母"e"出现,如有则输出e) 。检索特定字符
//      var patt1=new RegExp("e");
//      document.write(patt1.test("The best things in life are free"));
//      patt1.compile("d");
//      document.write(patt1.test("The best things in life are free")); 输出truefalse(用于改变搜索模式)
//浏览器对象模型BOM(browser object model)。全局变量是window的属性,全局函数是window的方法。.document也是window对象属性之一。
//window   window.innerHeight   window.innerWidth  浏览器窗口的内部高度与宽度。
//      方法   window.open()  window.close()  window.moveTo()  window.resizeTo()
//screen 对象包含有关用户屏幕信息。  window.screen.availWidth   window.screen.availHeight  可用的屏幕宽高度(可省略window)
//location 位置  用于获得当前页面的地址,并把浏览器定到新的页面
//    location.hostname  location.pathname  location.port        location.protocol      location.href
//      返回主机域名      返回路径名称             返回主机端口           返回所使用的协议     返回当前页面的url
//.history 对象包含浏览器的历史   window.history.back()向前一页      window.history.forward() 向后一页
//.navigator 对象包含有关访问者浏览器的信息
//PopupAlert  创建三种消息框:警告框(alert) 确认框(confirm) 提示框(prompt)
//Timing事件  设定时间后执行代码(定时器)。 var t=setTimeout("语句",毫秒)
// setTimeout()        clearTimeout()
//Cookies 用来识别用户
//js库 jQuery(cdn网站引入)     MooTools    prototype
//
//jQuery:
//选择器     $("*") 选中所有         $("#zl") 选中所有id为zl的元素        $(".zl") 选中所有class为zl的元素
//          $(".zl.zy")选中class为zl且class为zy的所有元素                $("p:first")选中第一个p元素
//          $
