Feature: Dynamic Content Loading

  Scenario: Wait for dynamic content to load and display
    Given I launch the Appium Sample App
    When I wait for dynamic content to load
    Then I should see the dynamic content displayed