import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sommissions',
  templateUrl: './sommissions.component.html',
  styleUrl: './sommissions.component.css'
})
export class SommissionsComponent {

    @Output() viewChange = new EventEmitter<string>();
  
    emitViewChange() {
      this.viewChange.emit('sommissions');
    }
  
}
