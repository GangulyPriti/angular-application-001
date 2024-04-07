import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css',
})
export class CockpitComponent {
  newServerName = '';
  newServerContent = '';
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serveContent: string;
  }>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string;
    serveContent: string;
  }>();
  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serveContent: this.newServerContent,
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serveContent: this.newServerContent,
    });
  }
}
