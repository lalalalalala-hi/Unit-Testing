import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement; // add el

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement; // add el
    fixture.detectChanges();
  });

  // waitForAsync() is used to wait for asynchronous tasks to complete before continuing with the test.
  // This is useful when you are testing components that have asynchronous operations such as HTTP requests.
  // The waitForAsync() function returns a Promise that resolves when all asynchronous tasks are completed.
  // If you are using Angular version 8 or below, you can use async() instead of waitForAsync().
  // beforeEach(waitForAsync(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [HomeComponent],
  //   })
  //     .compileComponents()
  //     .then(() => {
  //       fixture = TestBed.createComponent(HomeComponent);
  //       component = fixture.componentInstance;
  //       el = fixture.debugElement;
  //     });
  // }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct contents', () => {
    let pElement = el.queryAll(By.css('p'));
    expect(pElement[0].nativeElement.textContent).toBe('home works!');

    let buttonElement = el.queryAll(By.css('.btn'));
    expect(buttonElement[0].nativeElement.disabled).toBeTrue();

    let imgElement = el.queryAll(By.css('img'));
    expect(imgElement[0].nativeElement.src).toBe(
      'https://miro.medium.com/v2/resize:fit:828/format:webp/1*P_H_UpQahH0juwQpXWXnpQ.jpeg'
    );

    fixture.detectChanges(); // trigger change detection manually
    let textElement = el.queryAll(By.css('.title'));
    expect(textElement[0].nativeElement.textContent).toBe('unit-testing');
  });
});
