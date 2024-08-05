import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent {
  @Output() viewChange = new EventEmitter<string>();

  emitViewChange() {
    this.viewChange.emit('archive');
  }
}
