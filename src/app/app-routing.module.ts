import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveMatchComponent } from './pages/active-match/active-match.component';
import { MatchHistoryComponent } from './pages/match-history/match-history.component';
import { NewMatchComponent } from './pages/new-match/new-match.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TeamsComponent } from './pages/teams/teams.component';

const routes: Routes = [
  { path: '', redirectTo: 'active-match', pathMatch: 'full' },
  { path: 'active-match', component: ActiveMatchComponent },
  { path: 'new-match', component: NewMatchComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'match-history', component: MatchHistoryComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'active-match' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
