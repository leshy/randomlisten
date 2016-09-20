(function(){
  var net, out$ = typeof exports != 'undefined' && exports || this;
  net = require('net');
  import$(out$, function(cb){
    var srv;
    srv = net.createServer(function(sock){
      return sock.end();
    });
    return srv.listen(0, function(){
      srv.end();
      return cb(srv.address().port);
    });
  });
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
