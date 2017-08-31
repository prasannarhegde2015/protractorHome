Feature: Homepage
  As a user
  I want to visit the homepage
  So that I can access the various links on Page

  Scenario: Visit Homepage
    Given I am on the homepage
    Then I should see a "PHP Samples"
    When I click on "PHP Samples"
    Then I should find "Create a Web List."
	
  Scenario: create record
    Given I click link "Create Web List."
    When I enter firstname as  "Prasanna"
	     And I enter lastname as  "Hegde"
	     And I enter email as  "prasannarhegde@gmail.com"
	     And I enter phone as  "9768125870"
	     And I enter address as  "Airoli"
	     And I click submit  
    Then I should see "already exists."
