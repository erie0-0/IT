var http =  require('http')
http.createServer((request, response)=>{
    console.log(request)
    response.write("Hello world, This is my Node.js server")
    response.end()
}
).listen(11000)  // port no.