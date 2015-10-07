(function(){
	
	var button = document.querySelector('#calculate');
	var worker = new Worker('webworker.js');

	worker.addEventListener('message', function(event) {
		alert('result: ' + event.data[0] + ', execution time: ' + (event.data[1] / 1000 ) + 's');
	});
	
	button.addEventListener('click', function(){
		worker.postMessage('calculate');
	});
	
})();