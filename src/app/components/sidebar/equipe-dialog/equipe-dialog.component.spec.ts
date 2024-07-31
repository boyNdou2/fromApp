import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeDialogComponent } from './equipe-dialog.component';

describe('EquipeDialogComponent', () => {
  let component: EquipeDialogComponent;
  let fixture: ComponentFixture<EquipeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EquipeDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquipeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
