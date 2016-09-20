# autocompile
require! { net }

export (cb) -> 
  srv = net.createServer (sock) -> sock.end!
  srv.listen 0, ->
    srv.end!
    cb srv.address().port
