
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

// ------ 模块调用 ------

var obj = require('./count')

console.log(obj.count(['java','ruby','go','vue']));

obj.a()

// ------- 读取文件 -----------

var fs = require('fs')

// 同步执行
var readMe = fs.readFileSync("README.txt","utf8");
console.log(readMe)

fs.writeFileSync("abc.txt",readMe)

// 异步执行
var read = fs.readFile("abc.txt","utf8",function(err,data){
    console.log(data)
})

console.log("finished")