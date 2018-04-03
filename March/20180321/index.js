$(document).ready(function () {
    // var text = "";
    // for (var i = 0; i < 9; i++) {
    //     text += "<tr>";
    //     for (var j = 0; j < 9; j++) {
    //         text += "<td>";
    //         text += (i + 1) + "-" + (j + 1);
    //         text += "</td>";
    //     }
    //     text += "</tr>";
    // }
    // ;
    // $("#button").click(function () {
    //     var input1Value = parseInt($("#input1").val());
    //     var input2Value = parseInt($("#input2").val());
    //     $("#result").html(input1Value * input2Value);
    // })

    var input1 = "";
    var input2 = "";
    var handle = "";
    var result = "";
    var nowStep = 1; // 当前输入处于哪个阶段

    $(".num").click(function () {
        if (nowStep === 1) {
            if (input1.length > 20) return;
            var txt = $(this).text();
            if (txt === '.' && input1.indexOf(".") > -1) return;
            if (txt === '.' && input1.length === 0) return;
            input1 += txt;
            playSound(txt);
            $("#input1").text(input1)
        }
        else if (nowStep === 2) {
            if (input2.length > 20) return;
            var txt = $(this).text();
            if (txt === '.' && input2.indexOf(".") > -1) return;
            if (txt === '.' && input2.length === 0) return;
            input2 += txt;
            playSound(txt);
            $("#input2").text(input2)
        }
        else if (nowStep = 3) {
            var txt = $(this).text();
            if (txt === '.') return;
            playSound(txt);
            doClear();
            input1 += txt;
            $("#input1").text(input1)
        }
    });

    function playSound(text) {
        var current;
        if(text==='.'){ current= $("audio#s_DOT")[0];}
        else{ current = $("audio#s_"+text)[0];}
        current&&current.play();
    }

    $(".handle").click(function () {
        if (input1.length === 0 || nowStep !== 1) return;
        handle = $(this).text();
        $("#handleResult").text(handle)
        nowStep = 2;
    });

    $(".calculate").click(function () {
        if ((nowStep === 1 && input1.length === 0) || (nowStep === 2 && input2.length === 0)) return;
        if (nowStep === 1) {
            result = "=" + input1;
            $("#result").text(result);
        }
        else if (nowStep === 2) {
            var in1 = parseFloat(input1);
            var in2 = parseFloat(input2);
            var res;
            switch (handle) {
                case "+":
                    res = in1 + in2;
                    break;
                case "-":
                    res = in1 - in2;
                    break;
                case "*":
                    res = in1 * in2;
                    break;
                case "/":
                    res = in1 / in2;
                    break;
            }
            result = "=" + res;
            $("#result").text(result);
        }
        nowStep = 3;
    })


    $("td").mousedown(function () {
        $(this).css('background', "#222")
    }).mouseup(function () {
        $(this).css('background', "#444")
    })

    $(".clear").click(doClear);
    function doClear() {
        input1 = "";
        input2 = "";
        handle = "";
        result = "";
        nowStep = 1;
        $("#input1").text(input1);
        $("#input2").text(input2);
        $("#handleResult").text(handle);
        $("#result").text(result);
    }

})