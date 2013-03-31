require(["main/delegate"], 
	function(Delegate) {
		TestCase("DelegateTest", {

			testDelegateCanCallMethod: function() {
				var delegate = Delegate(this, function() {
					return 5;
				});

				assertEquals('Delegate should call method and return 5', 5, delegate());
			},

			testDelegatedMethodsCanAcceptParameters: function() {
				var delegate = Delegate(this, function(parameter) {
					return 5 + parameter;
				});

				assertEquals('Results of method call should be 10', 10, delegate(5));
			}
		});
	}
);
