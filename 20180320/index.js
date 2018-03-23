$(document).ready(function () {
    $(".origin,.image3").mouseenter(function () {
        $(".origin").show();
    })
        .mouseleave(function () {
            $(".origin").hide();
        });
    $.ajax({
        url: "http://localhost:3000/zhiHuDaily",
        type: "GET",
        success: function (data, status) {
            if (status === 'success') {

                var list = data.result;
                var htmlText = '';
                for (var i = 0; i < list.length; i++) {
                    var item = list[i];

                    htmlText += "<li class=\"col-4 item\">";
                    htmlText += "<a href=\"" + item.link + "\"> ";
                    htmlText += "<img src=\"images/" + item.imageUrl + "\" alt=\"\"> ";
                    htmlText += "<p>" + item.title + "</p> ";
                    htmlText += '</a> ';
                    htmlText += "</li>";
                }
                $('#contentList').html(htmlText)
            }
        }
    });

// //    1鼠标划过table中的偶数行时,让#a2元素的背景变红。
//     $("table tr:nth-child(2n)").mouseenter(function () {
//         $("#a2").css("background-color","red");
//     })
//         .mouseleave(function () {
//             $("#a2").css("background-color","#fff");
//         })
//

});






