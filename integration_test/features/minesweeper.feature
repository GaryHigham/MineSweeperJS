Feature: Minesweeper
	In order to play minesweeper
	As a user
	I would like the ability to start a game

Scenario: Ability to start a game
	Given I visit the Minewseeper home page
	Then I am able to start a game

@wip
Scenario: Starting a game of Minesweeper
	Given I visit the Minewseeper home page
	When I start a new game
	Then I am presented with the Minesweeper game board