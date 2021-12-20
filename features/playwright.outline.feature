@foo
Feature: Playwright multi docs

  Background: Navigation
    Given I go to the playwright website

  Scenario Outline: Changing theme to required mode
    When I change the theme to "<ThemeOne>" mode
    Then Snapshot "<ThemeOne>"
    When I change the theme to "<ThemeTwo>" mode
    Then Snapshot "<ThemeTwo>"

    Examples:
      | ThemeOne | ThemeTwo |
      | light    | dark     |
      | dark     | light    |
