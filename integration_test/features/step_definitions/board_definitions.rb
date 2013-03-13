require 'capybara/cucumber'
Capybara.app_host = 'http://192.168.0.20/~garyhigham/minesweeperjs'


Given /^I start a game of MineSweeper$/ do
  visit "/"
end

Then /^I should see an (\d+) x (\d+) board$/ do |arg1, arg2|
  page.should have_content "This is a start" 
end