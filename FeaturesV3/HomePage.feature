Feature: Homepage
  As a user
  I want to visit the homepage
  So that I can access the various links on Page

  Scenario: Visit Homepage
	When I am on the homepage
	Then I should see a "PHP Samples"
	When I click on "PHP Samples"
	Then I should find "Create a Web List."
	
   Scenario: create record
	When I click link "Create Web List."
    When I enter firstname as "Prasanna"
    When I enter lastname as "Hegde"
    When I enter email as "prasannarhegde@gmail.com"
    When I enter phone as "9768125870"
    When I enter address as "Airoli"
    When I click submit  
	Then I should see "already exists."
