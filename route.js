
// ---------- 路由分发 ----------

function route(handle,pathname,response,params){
    console.log('Routing a request for ' + pathname);
    if(typeof handle[pathname] === 'function'){
        handle[pathname](response,params);
    }else{
        response.writeHead(200,{
            'content-type' : 'text/plain'      // 《 ------
        });
        response.end('404')
    }
}

module.exports.route = route;