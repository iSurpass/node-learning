var fs = require('fs')

// ------ Web 服务器 -------

function startServer(route,handle){
    var http = require('http')
var server = http.createServer(function(request,response){
    
    console.log("Request received " + request.url);
    route(handle,request.url,response);
    
    // 纯文本
    // response.writeHead(200,{
    //     'Content-type' : 'text/plain',  《-----
    //     'Swag':'Run As One'
    // });
    // response.write("JUNIORS SUCCESS");

    // JSON 类型
    // response.writeHead(200,{
    //     'content-type':'application/json'   《-----
    // });
    // var myObj = {
    //     name : "juniors",
    //     age : 20,
    //     swag : 'Run As One!'
    // }
    // response.end(JSON.stringify(myObj));

    // HTML 类型
    // response.writeHead(200,{
    //     'content-type' : 'text/html'      // 《 ------
    // });
    // var myReadStream = fs.createReadStream(__dirname + "/index.html",'utf-8'); // 引入文件记得加 '/'
    // myReadStream.pipe(response)     // 管道输出数据---
})

server.listen(3000);
console.log("Server started on localhost port 3000")
}

exports.startServer = startServer;
