import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClaimsComponent } from './claims/claims.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ClaimDetailComponent } from './claims/claim-detail.component';
import { MessageDetailComponent } from './messages/message-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClaimsComponent,
    ClaimDetailComponent,
    BenefitsComponent,
    MessagesComponent,
    MessageDetailComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
