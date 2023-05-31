@Login
Feature: to validate login functionality in facebook

  Background: 
    Given user have to be in fb login page
@sanity
  Scenario: To validate login using valid email and invalid password
    And user have to maximize window
    When user have to enter  valid email and invalid password
    |9840304764|Suriya1512|suriya@123|2434567|
    |9629096720|VSP123|Vijay@123|456789|
    |123456789|Prabha123|Prabha@1234|67890|
    And user have to click the login button
    Then user have to be in password invaild page
@reg @smoke
  Scenario: To validate login using invalid email and invalid password
    When user have to enter  invalid email and invalid password
    |PhoneNumber|1234567890|
    |UserName|suriya@123|
    |Password|Suriya@56789|
    
    And user have to click the login button
    Then user have to be in password invaild page

@reg
  Scenario: To validate login using invalid email and valid password
    And user have to maximize window
    When user have to enter  invalid email and valid password
    |Name|Phonenno|Email|Password|
    |Dev|12345678|suriya@123|rtyui|
    |Suriya|345678567|Riya@123|hari|
    |Prabha|123456789|Bala@456|Vijay|
    
    And user have to click the login button
    Then user have to be in password invaild page
