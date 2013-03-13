require(["main/cell", "main/board"], 
	function(Cell, Board) {
	
		TestCase('cellTest', {
			"testCellRendersDivWithIDCell": function() {
				var cell = new Cell();
				cell.render();
				assertNotNull("Cell name should append identifier", document.getElementById('Cell'));
			},
			
			"testCellCanBePassedBoardAsParent": function() {
				var board = new Board();
				board.render();
				var cell = new Cell();
				cell.render(board.getOutputElement());
				assertEquals('cell parent should be the board', 'Board', document.getElementById('Cell').parentNode.id);
			}
	
		});
	}
);