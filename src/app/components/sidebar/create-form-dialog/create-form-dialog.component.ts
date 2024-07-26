import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-form-dialog',
  templateUrl: './create-form-dialog.component.html',
  styleUrls: ['./create-form-dialog.component.css']
})
export class CreateFormDialogComponent {
onSubmit() {
throw new Error('Method not implemented.');
}
  constructor(public dialogRef: MatDialogRef<CreateFormDialogComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
