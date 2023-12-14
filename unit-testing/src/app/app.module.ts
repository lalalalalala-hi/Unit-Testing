import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { GradePipe } from './grade.pipe';
import { GradeDirective } from './grade.directive';

@NgModule({
  declarations: [AppComponent, HomeComponent, FooterComponent, GradePipe, GradeDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
