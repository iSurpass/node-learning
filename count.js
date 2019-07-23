var count = function(arr){
    return "There are " + arr.length + " elements in array";
}

var a = function(){
    return "....";
}
// ----- module 创建 -------
module.exports = {
    count : count,
    a : a
}