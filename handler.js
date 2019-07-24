var fs = require('fs');

// ------ 各个路由的设置 --------

function home(response){
    response.writeHead(200,{
        'content-type' : 'text/html'      // 《 ------
    });
    var myReadStream = fs.createReadStream(__dirname + "/index.html",'utf-8'); // 引入文件记得加 '/'
    myReadStream.pipe(response)
}

function skr(response){
    response.writeHead(200,{
        'content-type' : 'text/plain'      // 《 ------
    });
    response.end('Juniors Skr ~')
}

// --------- 导出 -----------

module.exports= {
    home:home,
    skr:skr
};