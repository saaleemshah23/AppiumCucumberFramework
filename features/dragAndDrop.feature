Feature: Drag and Drop functionality

  Scenario: Drag and drop an element to a target area
    Given I launch the Appium Sample App
    When I drag the "Draggable" element to the "Target" area
    Then I should see the "Target" area containing the "Draggable" element
