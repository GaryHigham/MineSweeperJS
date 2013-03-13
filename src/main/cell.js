define("main/cell", function() {
	
	function Cell() {
	}
	
	Cell.prototype = {
		
		render: function(parentElement) {
			var outputElement = document.createElement('div');
			outputElement.id = "Cell";
			parentElement.appendChild(outputElement);
		}
	}; 
	
	return Cell;
});



