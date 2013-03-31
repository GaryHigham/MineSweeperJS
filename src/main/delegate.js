define("main/delegate", function() {
	
	function Delegate(object, method) {
		this.shim = function() {
			return method.apply(object, arguments);
		};

		return this.shim;
	}
		
	return Delegate;
});