$(document).ready(function () {
    // $("#button").click(function () {
    //     var input1Value=parseInt($("#input1").val());
    //     var input2Value=parseInt($("#input2").val());
    //     $("#zl").html(input1Value*input2Value);
    //     // alert(input1Value*input2Value);
    // })
    var text = "";
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    for (var i = 0; i < 16; i++) {
        text += "<table>"
        for (var j = 0; j < 16; j++) {
            text += "<tr>"
            for (var k = 0; k < 16; k++) {
                var color = "#"+arr[i]+arr[j]+arr[k];
                text += "<td style='background-color: " + color + "'>";
                // text+= color;
                text += "</td>"
            }
            text += "</tr>"
        }
        text += "</table>";
        // (i%4==3)&&(text+="<br/>")
    // //    ===
        if(i%4===3){
            text+="<br/>"
        }
    }
    $("#wrap").html(text);
})
