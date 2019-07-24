var fs = require('fs')    
var http = require('http')
var url = require('url')
var querystring = require('querystring')

// ------ Web 服务器 -------

function startServer(route,handle){

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

function handleServer(route,handle){
        var onRequest = function (req, res) {
            console.log('request received ' + req.url)
            var pathname = url.parse(req.url).pathname
    
            var data = ""
            req.on("error", function (err) {
                console.error(err)
            }).on("data", function (chunk) {
                data += chunk
            }).on("end", function () {
                if (req.mothod === "POST") {
                    if (data.length > 1e6) {
                        req.connection.destroy() // 如果数据很大，就断开
                    }
                    route(handle, pathname, res, querystring.parse(data))
                } else {
                    var params = url.parse(req.url, true).query
                    route(handle, pathname, res, params)
                }
            })
            // 或者
            // var data = []
            // data.push(chunk)
            // data = Buffer.concat(data).toString()
    }
    var server = http.createServer(onRequest)
    server.listen(3000)
    console.log('server started on http://127.0.0.1:3000')
}


module.exports.startServer = startServer;
module.exports.handleServer = handleServer;