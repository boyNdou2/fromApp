import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFormDialogComponent } from '../sidebar/create-form-dialog/create-form-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(public dialog: MatDialog) {}

  openCreateFormDialog(): void {
    const dialogRef = this.dialog.open(CreateFormDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
