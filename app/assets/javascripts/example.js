
var helper = function () {
    var my = {};

    my.write = function (results) {
        $('#Results').append(results + "\n");
    };

    my.forEach = function (myArray, func) {
        for (var index = 0; index < myArray.length; index++) {
            func(myArray[index]);
        }
    };


    my.theRandomTruth = function(){
        return Math.floor(Math.random() * 10) % 2;
    };

    return my;
}();


