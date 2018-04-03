

function generateText(x) {
    var text="";
    for (var i=1;i<=x;i++){
        text=text+"<tr>";
        for (var j=1;j<=i;j++){
            text=text+"<td>"+j+"x"+i+"="+i*j+"</td>";
        }
        text=text+"</tr>";
    }
    return text;
}
function generate() {
    var v1 = document.getElementById("i1").value-0;
    document.getElementById("table").innerHTML=generateText(v1);
}


//
// function generateSum(m) {
//     var n=0;
//     for(var i=1;i<=m;i++){
//         n=n+i;
//     }
//     return n;
//
// };
//
// function factorial(num) {
//     if(num==1) {
//         return 1
//     }
//     else {
//         return num*factorial(num-1)
//     }
// }
