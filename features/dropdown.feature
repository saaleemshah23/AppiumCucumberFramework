Feature: Dropdown functionality

  Scenario: Select an option from a dropdown menu
    Given I launch the Appium Sample App
    When I select the "Option 1" from the dropdown
    Then I should see the "Option 1" selected
