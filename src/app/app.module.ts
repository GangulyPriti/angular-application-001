import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './AssignmentOne/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './AssignmentOne/success-alert/success-alert.component';
import { UsernameComponent } from './AssignmentTwo/username/username.component';
import { PracticeDirComponent } from './AssignmentThree/practice-dir/practice-dir.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { OddComponent } from './AssignmentFour/odd/odd.component';
import { EvenComponent } from './AssignmentFour/even/even.component';
import { GameControlComponent } from './AssignmentFour/game-control/game-control.component';
import { BasicHighlightDirective } from './directives/basic-hightlight.directive';
import { BetterHighlightDirective } from './directives/better-highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { AccountService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { UserService } from './services/user.service';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    UsernameComponent,
    PracticeDirComponent,
    CockpitComponent,
    ServerElementComponent,
    OddComponent,
    EvenComponent,
    GameControlComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [AccountService, LoggingService, UserService, CounterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
