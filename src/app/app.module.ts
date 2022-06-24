import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { ResumeComponent } from './components/resume/resume.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpbarComponent } from './components/upbar/upbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuMobileComponent } from './components/menu-mobile/menu-mobile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataFormModule } from './components/data-form/data-form.module';
import { DataFormComponent } from './components/data-form/data-form.component';
import { FormDebugComponent } from './shared/form-debug/form-debug.component';
import { CampoControlErroComponent } from './shared/campo-control-erro/campo-control-erro.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { OwlCarouselComponent } from './components/owl-carousel/owl-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button'
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PortfolioComponent,
    ContactComponent,
    BlogComponent,
    ResumeComponent,
    UpbarComponent,
    FooterComponent,
    MenuMobileComponent,
    DataFormComponent,
    FormDebugComponent,
    CampoControlErroComponent,
    CarouselComponent,
    OwlCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    DataFormModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
