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
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
