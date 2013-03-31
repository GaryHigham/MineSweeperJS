require 'capybara/cucumber'

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end


Capybara.default_driver = :selenium
Capybara.app_host = 'http://localhost/~gary/minesweeperjs/'

Given /^I visit the Minewseeper home page$/ do
  visit "/"
end

Then /^I am able to start a game$/ do
  find('input#startGameButton')
end

When /^I start a new game$/ do
  find('input#startGameButton').click
end

Then /^I am presented with the Minesweeper game board$/ do
  find('div#board')
end

