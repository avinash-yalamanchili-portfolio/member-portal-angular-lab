import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProviderDetailComponent } from './provider-detail.component';
import { ProviderDirectoryComponent } from './provider-directory.component';

@NgModule({
  declarations: [ProviderDirectoryComponent, ProviderDetailComponent],
  imports: [CommonModule, FormsModule, RouterModule, SharedModule],
  exports: [ProviderDirectoryComponent, ProviderDetailComponent]
})
export class ProviderDirectoryModule {}
