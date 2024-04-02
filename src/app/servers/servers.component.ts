import { Component } from '@angular/core';

@Component({
  // selector: '[app-servers]',attribute selector changes
  // selector: '.app-servers',class selector changes
  selector: 'app-servers',
  template: ` <app-server></app-server>
    <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {}
