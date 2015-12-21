var apiData = "";


(function getData() {
	$.get('/apicall', function(data){
		apiData = data;
		console.log(data);
	})

})();