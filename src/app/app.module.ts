import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {AuthInterceptorProvider} from "./interceptors/auth.interceptor";
import { CalculatorAmountComponent } from './components/calculator-amount/calculator-amount.component';

const routes: Routes = [
  {path: 'amount/:id', component: CalculatorAmountComponent},
  {path: '', redirectTo: '/amount/5', pathMatch: 'full'},
]
@NgModule({
  declarations: [
    AppComponent,
    CalculatorAmountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
