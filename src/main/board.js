define("main/board",
	["main/cell"], 
	function(Cell) {
	
		function Board() {
			this.outputElement = document.createElement('div');
			this.outputElement.id = 'Board';
			this._cells = new Array();
		}
		
		Board.prototype = {
			
			startGame: function() {
				for(var i = 0; i < 64; ++i) {
					this._addCell();	
				}
			},

			_addCell: function() {
				this._cells.push(new Cell());
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
				return this._cells;
			},
			
			render: function() {
				document.body.insertBefore(this.outputElement, document.body.firstChild);
				for(var i = 0; i < 64; ++i) {
					this._renderCell(this._cells[i]);
				}
			},
			
			_renderCell: function(cell) {
				cell.render(this.getOutputElement());	
			}
		
		};
		
		return Board;
	}
);
