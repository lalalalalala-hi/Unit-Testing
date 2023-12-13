import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let shared: SharedService;
  let calc: CalcService;

  // beforeEach is a Jasmine function that allows us to run code before each test.
  // beforeEach takes a function as an argument.
  // beforeEach is called before each test.
  beforeEach(() => {
    //   shared = new SharedService();
    //   calc = new CalcService(shared);

    // TestBed is an Angular function that allows us to configure a testing module.
    // TestBed.configureTestingModule takes an object as an argument.
    // The object has a providers property.
    // The providers property is an array of services.
    // The services are the services that we want to test.
    // The services are injected into the constructor of the service that we want to test.

    // v1:
    // TestBed.configureTestingModule({
    //   providers: [CalcService, SharedService],
    // });

    // v2:
    // createSpyObj is a Jasmine function that allows us to create a mock object
    // with the specified methods.
    // createSpyObj takes 2 arguments:
    // 1. The name of the object
    // 2. An array of strings that represent the methods of the object
    shared = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({
      providers: [{ provide: SharedService, useValue: shared }, CalcService],
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });

  // Test multiply function
  it('should multiply 2 numbers', () => {
    const result = calc.multiply(2, 3);
    expect(result).toBe(6);
  });

  // Test add function
  it('should add 2 numbers', () => {
    const result = calc.add(2, 3);
    expect(result).toBe(5);
  });

  // Test shared function call using spyOn
  // sypOn is a Jasmine function that allows us to spy on a function
  // and track its calls.
  // sypOn must called before the function is called.
  it('should call mySharedFunction', () => {
    const result = calc.multiply(2, 3);
    expect(result).toBe(6);
  });
});
