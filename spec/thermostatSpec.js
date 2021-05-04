'use strict';

describe("Thermostat", function(){
  let thermostat;

  beforeEach(function(){
    thermostat = new Thermostat;
  });
  
  it("thermostat starts at 20 degrees", function(){
    expect(thermostat.temperature).toEqual(20)
  });


});
