import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommissionsComponent } from './sommissions.component';

describe('SommissionsComponent', () => {
  let component: SommissionsComponent;
  let fixture: ComponentFixture<SommissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SommissionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SommissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
