import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthorizationDetailComponent } from './authorization-detail.component';
import { AuthorizationsComponent } from './authorizations.component';

@NgModule({
  declarations: [AuthorizationsComponent, AuthorizationDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
  exports: [AuthorizationsComponent, AuthorizationDetailComponent]
})
export class AuthorizationsModule {}
