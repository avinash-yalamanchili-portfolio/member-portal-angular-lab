import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Feature routes are registered here as portal capabilities are introduced.
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
