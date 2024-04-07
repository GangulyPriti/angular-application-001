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
  gameNumber = 0;
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
  onFirstChange() {
    this.serverElements[0].name = 'Changed';
  }
  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
  startGame(newNumber: number) {
    this.gameNumber = newNumber;
    console.log(this.gameNumber);
  }
}
