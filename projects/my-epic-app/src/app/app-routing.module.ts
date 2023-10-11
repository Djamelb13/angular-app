// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule) },
  { path: 'admin', loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Initial redirect
  { path: '**', redirectTo: 'home' }, // Catch all (non-existent routes)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
