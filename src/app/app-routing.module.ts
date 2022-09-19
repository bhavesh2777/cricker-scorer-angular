import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveMatchComponent } from './pages/active-match/active-match.component';
import { NewMatchComponent } from './pages/new-match/new-match.component';

const routes: Routes = [
  { path: '', redirectTo: 'active-match', pathMatch: 'full' },
  { path: 'active-match', component: ActiveMatchComponent },
  { path: 'new-match', component: NewMatchComponent },
  { path: '**', redirectTo: 'active-match' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
