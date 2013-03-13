require(["main/minesweeperapplication"], 
	function(Application) {
		TestCase("ApplicationTest", {
			testStartingANewApplicationCreatesABoard: function() {
				var board = { render: function() {} };
				var mock = sinon.mock(board);
				mock.expects("render").once();
				 
				var app = new Application(board);
				app.start();
				mock.verify();	
			}	
		});
	}
);
