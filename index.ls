# autocompile
require! { net }

module.exports = (cb) -> 
  srv = net.createServer (sock) -> sock.end!
  srv.listen 0, ->
    port = srv.address().port
    srv.close!
    cb void, port
