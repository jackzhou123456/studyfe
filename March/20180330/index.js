$(document).ready(function () {
    var input = $("input");
    var inputL = input.offset().left;
    var inputT = input.offset().top;
    var inputW = parseFloat(input.css("width"));


    var fontRandomRange = [30, 80];
    var rotateRandomRange = [-30, 30];
    var colorRange = [0, 255];

    function rangeRandom(arr) {
        return arr[0] + (arr[1] - arr[0]) * Math.random()
    }

    input.keydown(function () {
        setTimeout(function () {


            var text = input.val();
            var lastWord = text[text.length - 1];

            if (!lastWord) return;

            var id = new Date().getTime();

            var sL = inputL + Math.random() * inputW;
            var tL = inputL + Math.random() * inputW;
            var htmlText = "<p id=\"" + id + "\" class=\"ext\">" + lastWord + "</p>"


            $("body").append(htmlText);
            var extElement = $("#" + id);
            extElement.css({
                "left": sL + "px",
                "top": (inputT - 60) + "px",
                "transform": "rotate(" + rangeRandom(rotateRandomRange) + "deg)",
                "font-size": rangeRandom(fontRandomRange) + "px",
                "color": "rgb(" + parseInt(rangeRandom(colorRange)) + "," + parseInt(rangeRandom(colorRange)) + "," + parseInt(rangeRandom(colorRange)) + ")"
            });

            extElement.animate({
                left:  rangeRandom( [0,window.outerWidth] )+ "px",
                top: "10px",
                "font-size": "24px",
                "transform": "rotate(0deg)",
                "color": "rgb(" + parseInt(rangeRandom(colorRange)) + "," + parseInt(rangeRandom(colorRange)) + "," + parseInt(rangeRandom(colorRange)) + ")",
                opacity: 0,
            }, 900, function () {
                extElement.remove();
            })


        }, 0)

    })
});

// rgb(23,234,122)