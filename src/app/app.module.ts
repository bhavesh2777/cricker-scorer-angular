import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewMatchComponent } from './pages/new-match/new-match.component';
import { ActiveMatchComponent } from './pages/active-match/active-match.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { MatchHistoryComponent } from './pages/match-history/match-history.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { HeaderComponent } from './shared/header/header.component';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TeamListCardComponent } from './pages/teams/team-list-card/team-list-card.component';
import { PlayerListCardComponent } from './pages/teams/player-list-card/player-list-card.component';
import { MatDialogComponent } from './shared/mat-dialog/mat-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NewMatchComponent,
    ActiveMatchComponent,
    TeamsComponent,
    MatchHistoryComponent,
    SidenavComponent,
    SettingsComponent,
    HeaderComponent,
    TeamListCardComponent,
    PlayerListCardComponent,
    MatDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
