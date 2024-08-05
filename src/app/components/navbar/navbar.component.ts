import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFormDialogComponent } from '../sidebar/create-form-dialog/create-form-dialog.component';
import { EquipeDialogComponent } from '../sidebar/equipe-dialog/equipe-dialog.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentView: string = 'container'; 

  constructor(private dialog: MatDialog) {}

  handleViewChange(view: string) {
    console.log('Received viewChange event with:', view);
    this.currentView = view;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFormDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogTwo(): void {
    const dialogRef = this.dialog.open(EquipeDialogComponent);

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
