import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  flushMicrotasks,
  tick,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>; // create for debug element
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        el = fixture.debugElement;
        component = fixture.componentInstance;
      })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'unit-testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing');
  });

  it('should render a button with text(false)', () => {
    //v1
    // const btn = el.nativeElement.querySelector('button');
    // component.isTesting = false;
    // component.btnText = 'Unit Testing False';
    // fixture.detectChanges();

    //v2
    component.isTesting = false;
    fixture.detectChanges();
    const btn = el.nativeElement.querySelector('button');

    expect(btn.textContent).toContain('Unit Testing False');
    expect(btn.disabled).toBeFalse();
  });

  it('should render a button with text(true)', (done: DoneFn) => {
    // add DoneFn
    // v1
    // const btn = el.nativeElement.querySelector('button');
    // component.isTesting = false;
    // component.btnText = 'Unit Testing False';

    // btn.click(); // trigger click event
    // fixture.detectChanges();
    // expect(btn.textContent).toContain('Unit Testing True');
    // expect(btn.disabled).toBeTrue();

    // v2
    component.isTesting = false;
    fixture.detectChanges();
    let btn = el.queryAll(By.css('.unit-test-button'));
    btn[0].nativeElement.click();
    setTimeout(() => {
      fixture.detectChanges();
      btn = el.queryAll(By.css('.unit-test-button'));
      expect(btn[0].nativeElement.textContent).toBe('Unit Testing True');
      expect(btn[0].nativeElement.disabled).toBeTrue();
      done(); // add done() to tell jasmine that the test is done
    }, 3000);
  });

  // Promise
  // fakeAsync() is a function that allows us to write asynchronous tests in a synchronous way.
  it('should test the promise', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => (counter += 2), 2000); // Tasks are executed in the order they were scheduled

    setTimeout(() => (counter += 3), 3000); // Tasks are executed in the order they were scheduled

    Promise.resolve().then(() => (counter += 1)); // Microtasks are executed before the next tick
    // flush(); // flush the microtasks queue

    flushMicrotasks(); // flush the microtasks queue
    expect(counter).toBe(1);

    tick(2000); // tick() is a function that allows us to move forward in time by a given number of milliseconds.
    expect(counter).toBe(3);

    tick(3000);
    expect(counter).toBe(6);
  }));

  // Observables
  it('should test the observable', fakeAsync(() => {
    let isTesting = false;
    let myObs = of(isTesting).pipe(delay(1000));
    myObs.subscribe((value) => {
      isTesting = true;
    });
    tick(1000);
    expect(isTesting).toBeTrue();
  }));
});
