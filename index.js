(function(){
  var net;
  net = require('net');
  module.exports = function(cb){
    var srv;
    srv = net.createServer(function(sock){
      return sock.end();
    });
    return srv.listen(0, function(){
      var port;
      port = srv.address().port;
      srv.close();
      return cb(void 8, port);
    });
  };
}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2xlc2gvY29kaW5nL25vZGVsaWJzL3JhbmRvbWxpc3Rlbi9pbmRleC5scyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztFQUNXLEdBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLEtBQUE7RUFFWCxNQUFNLENBQUMsT0FBUSxDQUFBLENBQUEsQ0FBRSxRQUFBLENBQUEsRUFBQTs7SUFDZixHQUFJLENBQUEsQ0FBQSxDQUFFLEdBQUcsQ0FBQyxhQUFhLFFBQUEsQ0FBQSxJQUFBO2FBQVUsSUFBSSxDQUFDLElBQUc7S0FBbEI7V0FDdkIsR0FBRyxDQUFDLE9BQU8sR0FBRyxRQUFBLENBQUE7O01BQ1osSUFBSyxDQUFBLENBQUEsQ0FBRSxHQUFHLENBQUMsUUFBTyxDQUFFLENBQUM7TUFDckIsR0FBRyxDQUFDLE1BQUs7YUFDVCxHQUFHLFFBQU0sSUFBTjtLQUhNIiwic291cmNlc0NvbnRlbnQiOlsiIyBhdXRvY29tcGlsZVxucmVxdWlyZSEgeyBuZXQgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IChjYikgLT4gXG4gIHNydiA9IG5ldC5jcmVhdGVTZXJ2ZXIgKHNvY2spIC0+IHNvY2suZW5kIVxuICBzcnYubGlzdGVuIDAsIC0+XG4gICAgcG9ydCA9IHNydi5hZGRyZXNzKCkucG9ydFxuICAgIHNydi5jbG9zZSFcbiAgICBjYiB2b2lkLCBwb3J0XG4iXX0=
