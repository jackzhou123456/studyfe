$(document).ready(function () {
    var text="";
    var zl =["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    for (var i=0 ; i<16 ; i++){
        text+="<table>";
        for (var j=0 ; j<16 ; j++){
            text+="<tr>";
            for (var k=0 ; k<16 ; k++){
                var color="#"+zl[i]+zl[j]+zl[k];
                text+="<td style='background-color:"+color+"'>";
                // text+=color;
                text+="</td>";
            }
            text+="</tr>"
        }
        text+="</table>";
        if(i%4===3){
            text+="<br/>";
        }
        // (i%4==3)&&(text+="<br/>")
    }

    $(".zy").html(text);
})


// var text = "";
//     var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
//     for (var i = 0; i < 16; i++) {
//         text += "<table>"
//         for (var j = 0; j < 16; j++) {
//             text += "<tr>"
//             for (var k = 0; k < 16; k++) {
//                 var color = "#"+arr[i]+arr[j]+arr[k];
//                 text += "<td style='background-color: " + color + "'>";
//                 // text+= color;
//                 text += "</td>"
//             }
//             text += "</tr>"
//         }
//         text += "</table>";