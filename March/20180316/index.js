var html = "";
for(var i =0;i<64;i++){
    html+="<tr>";
    for(var j=0;j<64;j++){
        h=0;
        s=parseInt((j)/64*100);
        l=parseInt((i)/64*100);
        html+="<td style=\"background-color: hsl("+h+","+s+"%,"+l+"%);\" onclick='choiceColor(event)'></td>"
    }
    html+="</tr>"
}
function choiceColor(e) {
    console.log(e.target.style.backgroundColor)
}
document.getElementById("table").innerHTML=html;