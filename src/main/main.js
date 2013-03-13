requirejs.config({
    paths: {
        main: '.'
    }
});


require(["main/minesweeperapplication", "main/board"], 
	function(MineSweeperApplication, Board) {
		var board = new Board();
		board.startGame();
		var app = new MineSweeperApplication(board);
		app.start();
	}
);