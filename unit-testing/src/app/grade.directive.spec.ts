import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { GradeDirective } from './grade.directive';
import { DebugElement } from '@angular/core';
import { GradePipe } from './grade.pipe';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('GradeDirective', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent, GradePipe, GradeDirective],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    let mockElRef = {
      nativeElement: document.createElement('div'),
    };
    const directive = new GradeDirective(mockElRef);
    expect(directive).toBeTruthy();
  });

  it('should change the text color on mouse over', () => {
    let divs = el.queryAll(By.css('div'));
    let div0 = divs[0];
    let div1 = divs[1];
    let div2 = divs[2];
    let div3 = divs[3];
    let div4 = divs[4];
    div0.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('red');

    div1.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(div1.nativeElement.style.color).toBe('blue');

    div2.triggerEventHandler('mouseenter', null);
    fixture.detectChanges();
    expect(div2.nativeElement.style.color).toBe('blue');
  });
});
