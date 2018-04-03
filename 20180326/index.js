$(document).ready(function () {
    // $(".zl").click(function () {
    //     $("p").fadeToggle();
    // })
    // $(".zl").bind( {
    //     click:(function () {
    //         $("p").fadeToggle();
    //     }),
    //     mouseover:(function () {
    //         $("body").css("background-color","red");
    //     }),
    //     mouseout:(function () {
    //         $("body").css("background-color","gray");
    //     })
    // })

    // $(".zl").bind("click",function () {
    //    // $("p").fadeToggle() ;
    //     $("h3").toggle();
    // });
    // $(".zl1").click(function () {
    //     $(".zl").unbind()
    // })

    // $("p").click(function () {
    //     $("p").toggle();
    // })
    // $(".zl").click(function () {
    //     $("p").unbind();
    // })

    // $("input").focus(function () {
    //     $("input").css("background-color","red")
    // });
    // $("input").blur(function () {
    //     $("input").css("background-color","blue")
    // })
    //  $(".zl1").click(function () {
    //      $("input").focus()
    //  })
    // $(".zl2").click(function () {
    //     $("input").blur()
    // })

    // $("input").change(function () {
    //     $("input").css("background-color","red")
    // });
    // $(".zl1").click(function () {
    //     $("input").change()
    // })

    // $("img").error(function () {
    //     $("img").replaceWith("<p>图片未加载</p>");
    // });
    // $("button").click(function () {
    //     $("img").error()
    // })

    // $("input").keydown(function () {
    //     $("input").css("background-color","red")
    // })
    // $("input").keyup(function () {
    //     $("input").css("background-color","blue")
    // })

    // var i=0;
    // $("input").keypress(function () {
    //     $("h2").text(i=i+1)
    // });
    // // 绑定
    // $("button").click(function () {
    //     $("input").keypress()
    // });
    // // 触发

    // $("img").load(function () {
    //     $("p").text("图片加载完毕。。。")
    // })
    // $("window").unload(function () {
    //     alert("say good bye")
    // })

    // $("button").mousedown(function () {
    //     $("p").toggle()
    // })
    // $("button").click(function () {
    //     $("p").toggle()
    // })
    // "mousedown"不需要松开触发, "click"需要松开触发。

    // $("button").mousedown(function () {
    //     $("p").toggle()
    // })
    // $("h2").mouseover(function () {
    //     $("button").mousedown()
    // })

    // $("h2").mouseover(function () {          //在当前元素与子元素都有效与mouseout常连用
    //         $("button").mousedown()
    //      })
    // $("h2").mouseenter(function () {        //只有穿过备选元素与mouseleave 连用
    //     $("button").mousedown()
    // })

    // $("body").mousemove(function (evevt) {
    //     $("h2").text(evevt.pageX+","+event.pageY);
    // })
    //

    // // var i=0;
    // // $(window).resize(function () {             //document window做参数时不用引号。
    // //     $("h2").text(i=i+1)
    // // })
    //
    // // var i=0;
    // // $("input").keypress(function () {
    // //     $("p").text(i+=1);
    // // })
    //
    // var i=0;
    // $("div").scroll(function () {
    //     $("p").text(i=i+1);
    // })

    // $("input").select(function () {
    //     $("input").after("zhe shi yi ge ")
    // })

    // $("form").submit(function () {
    //     alert("zl");
    // })

    // $("button").toggle(function() {
    //     $("body").css("background-color","red");},
    //     function () {
    //         $("body").css("background-color","gray");},
    //     function () {
    //         $("body").css("background-color","blue");}
    //         );

    // $("button").toggle(function(){
    //         $("body").css("background-color","green");},
    //     function(){
    //         $("body").css("background-color","red");},
    //     function(){
    //         $("body").css("background-color","yellow");}
    // );

    // $("button").click(function () {        //显示(show)/隐藏(hide)/自动切换(toggle)
    //     $("p").toggle()
    // })
    // $("button").click(function () {           //淡入(fadeIn)淡出(fadOut)/自动切换(fadeToggle)(参数是speed callback)
    //     $("p").fadeToggle(3000)
    // })

    // $("button").click(function () {           //淡入淡出/自动切换(参数是speed callback),fadeTo有个opacity(0-1)
    //     $("p").css("color","red");
    //     $("p").fadeToggle(2000)
    // })

    // $("button").click(function () {            //滑动向下(slideDown),向上(slideUp)自动(slideToggle),参数(speed,callback)
    //     $("div").fadeOut(4000)
    // });
    // $("h2").click(function () {                 //stop(stopAll,goToEnd),第一个是停止所有,第二个是是否立即完成。
    //     $("div").stop(stopAll)
    // })

    // $("button").click(function () {
    //     $("div").animate({
    //         left:"200px",
    //         top:"30px",width:"+=100px",height:"+=100px",opacity:0.3},2000)      //格式animate({params},speed,callback),
    // })                                                          //params给定是css样式,是个对象{},其中动画记得给position,默认
    //是static,无法展现动画效果的。

    // $("button").click(function () {
    //     var div=$("div");
    //     div.animate({width:"300px",opacity:0.4},2000);           //队列写法。
    //     div.animate({height:"300px"},3000);
    //     div.animate({height:"-=100px",width:"-=100px"},3000)
    // })

    // $("button").click(function () {
    //     $("p").slideUp(2000,function () {                    //正确写法。slideUp(speed,callback)
    //         alert("eeeee")
    //     })
    // })

    // $("button").click(function () {
    //     $("p").css("background-color","red")                //换行不要给符号,是空白。
    //             .slideUp(2000)                              //链式写法
    //             .slideDown(1000)
    // })


    // 获取中讲了四种:.html() .text() .val() .attr()
    // $("button").click(function () {
    //     $("p").html("我的输入:"+"新的段落")                  // 获取p中的元素(包括标签)
    // })

    // $("button").click(function () {                        //获取p中的文档元素
    //     alert($("p").text())
    // })
    // $("button").click(function () {                           //获取input框的value 值
    //     alert($("input").val())
    // })
    // $("button").click(function () {                             //获取属性值的".attr"
    //     alert($("a").attr("href"));
    // })

    // $("button").click(function () {                           //如何设置text(),html(),val()。
    //     $("p").html("<a href='#'>经济界hf</a>");
    //     $("h2").text("新段落!");
    //     $("input").val("dddlll");
    // })
    // $("button").click(function () {
    //     $("p").attr("href","http:www.w3school.com.cn");
    //     alert($("p").attr())                                //设置"href"属性值的。attr("attributeName","value")
    // })
    // $("button").click(function () {                          //添加多种属性。
    //     $("p").attr({
    //         "href":"www.ddd.com",
    //         "title":"eejjrjjf课程",
    //     })
    // })
    // $("button").click(function () {                          //"prepend"在元素开头插入,append在元素结尾插入
    //     $("p").prepend("zl")                                 //before:在当前元素(之外)之前插入,after:在当前元素(之外)之后
    // })
    // $("button").click(function () {
    //     $("p").append("zl")
    // })
    // $("button").click(function () {
    //     $("p").after("zl")
    // })

    // var txt1="<b>I </b>";                                   // 以 HTML 创建元素
    // var txt2=$("<b></b>").text("love ");                    // 通过 jQuery 创建元素
    // var txt3=document.createElement("big");                 // 通过 DOM 创建元素
    // txt3.innerHTML="jQuery!";
    // $("img").after(txt1,txt2,txt3);                         // 在 img 之后插入新元素

    // $("button").click(function () {
    //     $("div").empty()
    // })
    // $("button").click(function () {                         //(empty)移除当前元素的子元素,(remove)移除选定元素(包括本身)。
    //     $("p").remove(".attribute")                         //.remove("attribute")筛选当前需要删除的元素。
    // })

    // $("button").click(function () {
    //     $("h2").addClass("property")
    // })                                                     //添加类,移除类,切换类。
    // $("button").click(function () {
    //     $("p").removeClass("attribute")
    // })
    // $("button").click(function () {
    //     $("h3").toggleClass("property")
    // })

    // $("button").click(function () {                         //单个css样式与多个样式的写法。
    //     $("h3").css("background-color","red")
    // })
    // $("button").click(function () {
    //     $("p,h2,div").css({"color":"gray", "background-color":"blue", "font-size":"30px"})
    // })

    // .width() height()元素宽/高度。innerWidth() innerHeight()包括内边距。outWidth() outHeight()包括边框距。outWidth(true)
    // outHeight(true) 包括外边距。

    // $("button").click(function () {
    //     $("div").width(500).height(500)                     //高度宽度,不带单位的。
    // })


    //遍历
    // $("button").click(function () {
    //     $("p").parent().css("background-color","red")
    // })
    // $("button").click(function () {
    //     $("p").parents("div").css("background-color","red")     //针对祖先元素进行处理。(parent)找直接父元素,parents:找
    // })                                                        //全部祖先。.parentsUntil("")选定之间的元素。
    // $("button").click(function () {
    //     $("b").parentsUntil("div").css("background-color","red")
    // })

    // $("button").click(function () {
    //     $("body").children().css("font-size","40px")         //针对后代元素处理,(children),(find)
    // })                                                        //.find(*) 找选定元素所有后代。
    // $("button").click(function () {
    //     $("body").find("p").css("color","red")
    // })

    // $("button").click(function () {
    //     $("p").siblings().css("color","red")             //针对同胞元素处理。siblings所有兄弟姐妹,next:选定下一个。
    // })                                                   //nextAll:选定下面所有。nextUnlil()选定到次之间
    // $("button").click(function () {                      //pre(),preAll(),preUnlil()  siblings向上选择。
    //     $("h2").next().css("color","red")
    // })
    // $("button").click(function () {
    //     $("h2").nextAll().css("color","red")
    // })

    // $("button").click(function () {
    //     $("h3").nextUntil("h2").css("color","red")
    // })
    // $("button").click(function () {
    //     $("div p ").first().css("color","red")           //过滤,选择第一个div元素里的第一个p元素;
    // })                                                   //选择最后一个div元素里面的最后一个p元素
    // $("button").click(function () {
    //     $("div p ").last().css("color","red")
    // })

    // $("button").click(function () {                         //不分子代,从0开始。
    //     $("p ").eq(5).css("color","red")
    // })

    // $("button").click(function () {
    //     $("button").filter(".zl").css("color","red")        //filter("") not("")对应一组。规定一个标准。
    // })
    // $("button").click(function () {
    //     !$("button").not(".zl").css("color","red")
    // })

    $("a").attr("href")
    $("#moment").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })
    $("p").mouseenter(function () {
        $(this).css("background-color", "#ff0")
    })
        .mouseleave(function () {
          $(this).css("background-color","blue")
        })
        .eq()
        .filter()
        .not()
        .first()
        .last()
        .parent()
        .parents()
        .parentsUntil()
        .children()
        .find()
        .find("*")
        .siblings()
        .next()
        .nextAll()
        .nextUntil()
        .pre()
        .preAll()
        .preUntil()
        .show()
        .hide()
        .toggle()
        .slideUp()
        .slideDown()
        .slideToggle()
        .fadeOut()
        .fadeIn()
        .fadeToggle()
        .fadeTo(2000,0.3,function () {

        })
         $("div").animate({left:"50px"})
        $("div").stop()
            .empty()
            .remove()
            .remove(".italic")
            .toggleClass()


})