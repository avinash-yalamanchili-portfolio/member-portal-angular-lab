import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Feature routes will be added as the lab grows.
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
