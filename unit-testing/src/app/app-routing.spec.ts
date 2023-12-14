import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradePipe } from './grade.pipe';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { Router } from '@angular/router';
import { Component, DebugElement } from '@angular/core';
import { GradeDirective } from './grade.directive';
import { Location } from '@angular/common'; // Must Add This
import { By } from '@angular/platform-browser';

describe('AppRouting', () => {
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;
  let homefixture: ComponentFixture<HomeComponent>;
  let infofixture: ComponentFixture<InfoComponent>;
  let location: Location;
  let el: DebugElement;
  let btnel: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [
        AppComponent,
        InfoComponent,
        HomeComponent,
        GradePipe,
        GradeDirective,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    router.initialNavigation();
    fixture = TestBed.createComponent(AppComponent);
    homefixture = TestBed.createComponent(HomeComponent);
    infofixture = TestBed.createComponent(InfoComponent);
    el = homefixture.debugElement;
    btnel = infofixture.debugElement;
  });

  it('should navigate to default path = home', waitForAsync(() => {
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));

  it('should navigate to info on click link in home component', waitForAsync(() => {
    homefixture.detectChanges();
    let links = el.queryAll(By.css('a'));
    links[0].nativeElement.click();
    homefixture.whenStable().then(() => {
      expect(location.path()).toBe('/info');
    });
  }));

  it('should navigate to info on click button in info component', waitForAsync(() => {
    infofixture.detectChanges();
    let btns = el.queryAll(By.css('button'));
    btns[0].nativeElement.click();
    infofixture.whenStable().then(() => {
      expect(location.path()).toBe('/home');
    });
  }));
});
