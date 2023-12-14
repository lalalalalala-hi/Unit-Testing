import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { GradePipe } from './grade.pipe';
import { GradeDirective } from './grade.directive';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>; // create for debug element
  let el: DebugElement;
  let component: AppComponent;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, GradePipe, GradeDirective], // declare GradeDirective
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
});
