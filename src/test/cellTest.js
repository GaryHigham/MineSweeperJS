require(["main/cell"], 
	function(Cell) {
	
		TestCase('cellTest', {
			testCellRendersDivWithIDCell: function() {
				var cell = new Cell();
				var parentElement = { appendChild: function() {} };
				var mock = sinon.mock(parentElement);
				mock.expects("appendChild").once().withArgs(this._createIDCustomMatcher());
				cell.render(parentElement);
				mock.verify();
			},

			_createIDCustomMatcher: function() {
				return sinon.match(function (value) {
					return value.id = 'Cell';
				}, "Cell ID not set");
			}
			
		});
	}
);