require(["main/board"], 
	function(Board) {
					
		TestCase("BoardTest", {

			setUp: function() {
				this.board = new Board();
			  	this.board.startGame();	
			},
	
			testDefaultBoardDimensionsAre8x8: function() {
			  	assertEquals("Default rows should be 8", 8, this.board.getRows());
			  	assertEquals("Default columns should be 8", 8, this.board.getColumns());
			  	assertEquals("64 Cells should have been created", 64, this.board.getCells().length);
			},
			
			testBoardOutputElementHasIDBoard: function() {
				assertEquals("OutputElement should have ID board", "Board", this.board.getOutputElement().id);
			},
			
			testBoardRender: function() {
				this.board.render();
				assertNotNull("Board element should be in document", document.getElementById('Board'));
			},
			
			testAllCellsAreRenderedWhenBoardRendered: function() {
				var cells = this._stubCells(this.board);
				this.board.render();
				this._assertCellsRendered(cells, this.board);
			},

			_stubCells: function(board) {
				var stubs = new Array();
				for(var i = 0; i < this.board._cells.length; ++i) {
					stubs.push(sinon.stub(this.board._cells[i], "render"));
				}
				return stubs;
			},

			_assertCellsRendered: function(cells, board) {
				for(var i = 0; i < cells.length; ++i) {
					assertTrue("Cell " + i.toString() + " should have been rendered", cells[i].withArgs(board.getOutputElement()).calledOnce);
				}
			}	
			
		});
	}
);


