@foo
Feature: Playwright docs

  Background: Navigation
    Given I go to the playwright website

  Scenario: Change theme
    When I change the theme to "light" mode
    Then Snapshot
    Then I see the background color "light"
    When I change the theme to "dark" mode
    Then Snapshot


