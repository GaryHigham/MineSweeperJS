Feature: Board
  In order to play MineSweeperJS
  As an advanced gamer
  I want to play with multiple dimensioned boards

Scenario: Default board is 8 x 8
  Given I start a game of MineSweeper
  Then I should see an 8 x 8 board