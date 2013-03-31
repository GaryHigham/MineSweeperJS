require(["main/minesweeperapplication"], 
	function(Application) {
		TestCase("ApplicationTest", {

			testStartGameButtonIsShownByDefault: function() {
				var app = new Application();
				var element = document.getElementById('startGameButton');
				assertNotNull('Start Game Button should be visible', element);
				assertEquals('Element created should be a button', 'button', element.type);
			},

			testStartGameButtonContainsTitle: function() {
				var app = new Application();
				var element = document.getElementById('startGameButton');
				assertEquals('Start Game button should have title', 'Start Game', element.value);
			},

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
