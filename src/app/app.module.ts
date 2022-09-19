import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewMatchComponent } from './pages/new-match/new-match.component';
import { ActiveMatchComponent } from './pages/active-match/active-match.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { MatchHistoryComponent } from './pages/match-history/match-history.component';
import { TeamDetailComponent } from './pages/teams/team-detail/team-detail.component';
import { PlayerDetailComponent } from './pages/teams/player-detail/player-detail.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './shared/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewMatchComponent,
    ActiveMatchComponent,
    TeamsComponent,
    MatchHistoryComponent,
    TeamDetailComponent,
    PlayerDetailComponent,
    SidenavComponent,
    SettingsComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
