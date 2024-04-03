import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',attribute selector changes
  // selector: '.app-servers',class selector changes
  selector: 'app-servers',
  // template: ` <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No Server is created';
  serverName = '';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreatedServer() {
    this.serverCreationStatus = 'Server is Created Name is ' + this.serverName;
  }
  onUpdateServerName(e: Event) {
    this.serverName = (<HTMLInputElement>e.target).value;
  }
}
