define("main/board",
	["main/cell"], 
	function(Cell) {
	
		function Board() {
			this.outputElement = document.createElement('div');
			this.outputElement.id = 'Board';
			this.cells = new Array();
		}
		
		Board.prototype = {
			
			startGame: function() {
				for(var i = 0; i < 64; ++i) {
					this.addCell();	
				}
			},
			
			getOutputElement: function() {
				return this.outputElement;
			},
			
			getRows: function() {
				return 8;
			},
			
			getColumns: function() {
				return 8;
			},
			
			getCells: function() {
				return this.cells;
			},
			
			render: function() {
				document.body.insertBefore(this.outputElement, document.body.firstChild);
				for(var i = 0; i < 64; ++i) {
					this._renderCell(this.cells[i]);
				}
			},
			
			_renderCell: function(cell) {
				
			},
			
			addCell: function() {
				this.cells.push(new Cell());
			}
		
		};
		
		return Board;
	}
);
