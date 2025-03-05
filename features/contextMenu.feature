Feature: Context Menu functionality

  Scenario: Right-click on an element in the app
    Given I launch the Appium Sample App
    When I perform a long press on "Context Menu" element
    Then I should see the context menu options