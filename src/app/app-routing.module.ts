import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { ClaimDetailComponent } from './claims/claim-detail.component';
import { MessageDetailComponent } from './messages/message-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { CoverageComponent } from './coverage/coverage.component';
import { AuthorizationDetailComponent } from './authorizations/authorization-detail.component';
import { AuthorizationsComponent } from './authorizations/authorizations.component';
import { ProviderDetailComponent } from './provider-directory/provider-detail.component';
import { ProviderDirectoryComponent } from './provider-directory/provider-directory.component';

const routes: Routes = [
  { path: 'overview', component: DashboardComponent, title: 'Overview | Member Portal' },
  { path: 'claims', component: ClaimsComponent, title: 'Claims | Member Portal' },
  { path: 'claims/:id', component: ClaimDetailComponent, title: 'Claim Details | Member Portal' },
  { path: 'benefits', component: BenefitsComponent, title: 'Benefits | Member Portal' },
  { path: 'coverage', component: CoverageComponent, title: 'Coverage | Member Portal' },
  { path: 'authorizations', component: AuthorizationsComponent, title: 'Prior Authorizations | Member Portal' },
  { path: 'authorizations/:id', component: AuthorizationDetailComponent, title: 'Authorization Details | Member Portal' },
  { path: 'find-care', component: ProviderDirectoryComponent, title: 'Find Care | Member Portal' },
  { path: 'find-care/:id', component: ProviderDetailComponent, title: 'Provider Details | Member Portal' },
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
