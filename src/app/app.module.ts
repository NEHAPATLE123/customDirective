import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicCssDirectives } from './shared/directives/basicCss.directive';
import { AdvanceCssDirective } from './shared/directives/advance-css.directive';
import { Hover1Directives } from './shared/directives/hover1.directives';
import { LowerCaseDirective } from './shared/directives/lower-case.directive';
import { CreditCardDirective } from './shared/directives/credit-card.directive';



@NgModule({
  declarations: [
    AppComponent,
    BasicCssDirectives,
    AdvanceCssDirective,
    Hover1Directives,
    LowerCaseDirective,
    CreditCardDirective,
  
  ],
  imports: [
    BrowserModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
