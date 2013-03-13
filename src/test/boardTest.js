require(["main/board"], 
	function(Board) {
					
		TestCase("BoardTest", {
	
			testDefaultBoardDimensionsAre8x8: function() {
			  	var board = new Board();
			  	board.startGame();

			  	assertEquals("Default rows should be 8", 8, board.getRows());
			  	assertEquals("Default columns should be 8", 8, board.getColumns());
			  	assertEquals("64 Cells should have been created", 64, board.getCells().length);
			},
			
			testBoardOutputElementHasIDBoard: function() {
				var board = new Board();
				assertEquals("OutputElement should have ID board", "Board", board.getOutputElement().id);
			},
			
			testBoardRender: function() {
				var board = new Board();
				board.render();
				assertNotNull("Board element should be in document", document.getElementById('Board'));
			},
			
			testAllCellsAreRendered: function() {
				var board = new Board();
				var spy = sinon.spy(board, "_renderCell");
				board.render();
				assertEquals("64 Cells render calls should have been made", 64, spy.callCount);
				assertTrue("Cells are passed to render cell call", spy.getCall(0).calledWith(sinon.match.instanceOf(Cell)));
			}	
			
		});
	}
);


