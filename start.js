
//----------- 全局对象 ------------

console.log("Juniors");

// ES6 写法 
setTimeout(() => {
    console.log("Harden");
},3000)

var time = 0;

// 原写法 --- Ctrl + C 停止
var timer = setInterval(function(){
    time += 2;
    console.log(time + "seconds have password..");
    if(time > 6){
        clearInterval(timer);
    }
},2000)


console.log(__dirname)

// ----------- 回调函数 ------------

function callFunction(fun,name){
    fun(name);
}

callFunction( function(name){
    console.log("Bye "+name);
},'Kobe');

