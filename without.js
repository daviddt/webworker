(function(){
	
	var button = document.querySelector('#calculate');
	
	button.addEventListener('click', function(){
		
		var j = 0;
		var start = new Date().getTime();
		
		for (var i = 0; i < 10000000000; i++) {
			j = j + i;
		};
		
		var end = new Date().getTime();
		
		alert('result: ' + j + ', execution time: ' + ((end - start) / 1000 ) + 's');
	});
	
})();