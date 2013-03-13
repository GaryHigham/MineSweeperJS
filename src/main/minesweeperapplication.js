define("main/minesweeperapplication",
	["main/board"], 
	function(GameBoard) {
		
		function MineSweeperApplication (gameBoard) {
			this._gameBoard = gameBoard;
		}
		
		MineSweeperApplication.prototype = {
			start: function() {
				this._gameBoard.render();
			}
		}
				
		return MineSweeperApplication;	
	}
);
