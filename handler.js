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

function api_records(res, params) {
    console.log('api_records')
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(params))
}

// --------- 导出 -----------

module.exports= {
    home:home,
    skr:skr,
    api_records:api_records
};