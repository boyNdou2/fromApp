import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-corbeille',
  templateUrl: './corbeille.component.html',
  styleUrls: ['./corbeille.component.css']
})
export class CorbeilleComponent {
  @Output() viewChange = new EventEmitter<string>();

  emitViewChange() {
    this.viewChange.emit('corbeille');
  }
}
