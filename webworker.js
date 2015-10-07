self.addEventListener('message', function(e) {
    var j = 0;
    var start = new Date().getTime();
		
    for (var i = 0; i < 10000000000; i++) {
        j = j + i;
    };
    var end = new Date().getTime();
  
    self.postMessage([j, end - start]);
});