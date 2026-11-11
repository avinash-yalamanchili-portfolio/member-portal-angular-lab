import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ClaimDetailComponent } from './claims/claim-detail.component';
import { MessageDetailComponent } from './messages/message-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { CoverageComponent } from './coverage/coverage.component';

const routes: Routes = [
  { path: 'overview', component: DashboardComponent, title: 'Overview | Member Portal' },
  { path: 'claims', component: ClaimsComponent, title: 'Claims | Member Portal' },
  { path: 'claims/:id', component: ClaimDetailComponent, title: 'Claim Details | Member Portal' },
  { path: 'benefits', component: BenefitsComponent, title: 'Benefits | Member Portal' },
  { path: 'coverage', component: CoverageComponent, title: 'Coverage | Member Portal' },
  { path: 'messages', component: MessagesComponent, title: 'Messages | Member Portal' },
  { path: 'messages/:id', component: MessageDetailComponent, title: 'Message Details | Member Portal' },
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: '**', redirectTo: 'overview' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
