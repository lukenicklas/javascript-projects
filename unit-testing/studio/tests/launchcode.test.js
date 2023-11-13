// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("checking that the value of organization is 'nonprofit'", function() {
    expect(launchcode.organization).toBe("nonprofit")
  })
  test("checking that the value of executiveDirector is 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe("Jeff")
  })
  test("checking the value of percentage of Cool Employees", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100)
  })
  test("checking the value of programs that are offered.", function() {
    expect(launchcode.programsOffered[0]).toBe("Web Development");
    expect(launchcode.programsOffered[1]).toBe("Data Analysis");
    expect(launchcode.programsOffered[2]).toBe("Liftoff");
    expect(launchcode.programsOffered.length).toBe(3)
  })
});

