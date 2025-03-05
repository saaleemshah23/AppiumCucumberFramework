Feature: Disappearing Elements functionality

  Scenario: Element disappears after a set duration
    Given I launch the Appium Sample App
    When I wait for 5 seconds
    Then I should see the "Disappear" element disappear
