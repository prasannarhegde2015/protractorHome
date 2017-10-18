let {defineSupportCode} = require('cucumber');
var fs = require('fs');
function writeScreenShot(data, filename,path) {
        var stream = fs.createWriteStream(path+ filename);
        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function GetFormattedDate() {
var todayTime = new Date();
var month = String(todayTime.getMonth() +1);
var day = String(todayTime.getDate());
var year = String(todayTime.getFullYear());
var hour = String(todayTime.getHours());
var minute = String(todayTime.getMinutes());
var second = String(todayTime.getSeconds());
return day + "_" + month + "_" + year +"_"+ hour + "_" + minute + "_" +second;
}

defineSupportCode(({When, Then}) => {
  
   When('I am on the homepage', function() {
    console.log("Executing step 1---------------------------");
    browser.driver.ignoreSynchronization = true ;
	return browser.manage().window().maximize().then(
		function() 
		{
			browser.driver.get('http://13.126.109.72/home').then(
			function()
			{
				console.log("Done  Step1");
			}
			);
		}
		);
  });
   Then('I should see a {string}',function(arg1){
   console.log("Executing step 2---------------------------");
   browser.driver.ignoreSynchronization = true ;
     console.log("did Sync---------------------------");
  // browser.driver.wait(function() 
  // {
   console.log("Inside wait---------------------------");
		return browser.driver.findElement(by.xpath('//a[text()="PHP Samples"]'))
              .then(
			  function(elem)
			  {
			    console.log("Element found");
                elem.getText().then(
				function(text)
				{ 
					console.log("Obtained Link text: "+text);
					expect(text).to.equal('PHP Samples');
				});
                console.log("Non Angular Text: "+arg1);
                return true;
              });
   //}, 15000);
   });
   When('I click on {string}',function(arg1){
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    return browser.driver.findElement(by.xpath('//a[text()="PHP Samples"]'))
              .then(
						function(elem) 
						{
							elem.click();
							console.log("Clicked elem");
							return true;
						}
				   );
    });
   Then('I should find {string}', function(arg1) {
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    return browser.driver.findElement(by.xpath('//a[contains(text(),"Create Web List")]'))
              .then(function(elem) {
                elem.getText().then(function(text){ console.log("text last step : 2:  "+text);expect(text).to.contain('Create Web List.'); });
                return true;
              });
  });
   When('I click link {string}', function(arg1) {
        var lnktext = "";
        browser.driver.ignoreSynchronization = true ;
        return browser.driver.findElement(by.xpath('//a[contains(text(),"'+arg1+'")]'))
	 // Given(/^//a[text()="Create Web List."]" //a[contains(text(),"Create Web List.")]
              .then(function(elem) {
               elem.click();
               console.log("clciked text "+arg1);
                return true;
              });
  });

 
  When('I enter firstname as {string}', function(arg1) {
    browser.driver.ignoreSynchronization = true ;
     return browser.driver.findElement(by.xpath('//input[@name="firstname"]'))
              .then(function(elem) {
                elem.click();
				  console.log("typing ... "+arg1);
				elem.sendKeys(arg1);
                return true;
              });
    });

	
  When('I enter lastname as {string}', function(arg1) {
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
     return browser.driver.findElement(by.xpath('//input[@name="lastname"]'))
              .then(function(elem) {
                elem.click();
				elem.sendKeys(arg1);
                return true;
              });
    });

  When('I enter email as {string}', function(arg1) {
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
     return browser.driver.findElement(by.xpath('//input[@name="email"]'))
              .then(function(elem) {
                elem.click();
				elem.sendKeys(arg1);
                return true;
              });
 
    });
  When('I enter phone as {string}', function(arg1) {
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//input[@name="phone"]'))
              .then(function(elem) {
                elem.click();
				elem.sendKeys(arg1);
                return true;
              });
    });
    });
  When('I enter address as {string}', function (arg1) {
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    browser.driver.wait(function() {
     return browser.driver.findElement(by.xpath('//input[@name="address"]'))
              .then(function(elem) {
                elem.click();
				elem.sendKeys(arg1);
                return true;
              });
    });
	 });
  When('I click submit', function () {
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
    return browser.driver.findElement(by.xpath('//input[@name="btnsubmit"]'))
              .then(function(elem) {
                elem.click();
                return true;
              });
    });
	
	
  Then('I should see {string}', function(vrtxt) {
    var lnktext = "";
    browser.driver.ignoreSynchronization = true ;
     return browser.driver.findElement(by.xpath('//font[contains(text(),"System Message:")]'))
              .then(function(elem) {
          //     elem.click();
                elem.getText().then(function(text){ console.log("text last step : 2:  "+text);expect(text).to.contain('Prasanna'); });
          //      expect(lnktext).to.equal('Create Web List.');
		   var userpath = getUserHome();
		   var timestamp =  GetFormattedDate();
		   console.log("Time stamp "+timestamp);
		         browser.takeScreenshot().then(function (png) {
        writeScreenShot(png, 'screenshot_'+timestamp+'.png' , userpath+'\\Screenshots\\');
    });
                return true;
              });

   });
  });
