import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [
  //   `
  //     h3 {
  //       color: dodgerblue;
  //     }
  //     body {
  //       padding-bottom: '20px';
  //     }
  //   `,
  // ],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a Test' },
  ];
  onServerAdded(serverData: { serverName: string; serveContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serveContent,
    });
  }

  onBlueprintAdded(serverData: { serverName: string; serveContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serveContent,
    });
  }
}
