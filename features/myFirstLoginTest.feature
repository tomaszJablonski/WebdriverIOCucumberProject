Feature: Test Login Functianality

  Scenario Outline: Check login with valid credentials
    Given User is on login page
    When User enter <username> and <password>
    And Clicks on login button
    # Then User is navigated to the home page
    Then this <message> is displayed

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | user123  | pass123              | Your username is invalid       |
