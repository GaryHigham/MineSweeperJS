define("main/minesweeperapplication",
	["main/board"], 
	function(GameBoard) {
		
		function MineSweeperApplication (gameBoard) {
			this._gameBoard = gameBoard;
			this._addStartGameButton();
		}
		
		MineSweeperApplication.prototype = {

			_addStartGameButton: function() {
				var buttonnode = document.createElement('input');
				buttonnode.setAttribute('type','button');
				buttonnode.setAttribute('id', 'startGameButton');
				buttonnode.setAttribute('value', 'Start Game');
				document.body.insertBefore(buttonnode, document.body.firstChild);
			},

			start: function() {
				this._gameBoard.render();
			}
		}
				
		return MineSweeperApplication;	
	}
);
