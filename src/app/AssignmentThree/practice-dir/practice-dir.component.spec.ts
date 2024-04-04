import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeDirComponent } from './practice-dir.component';

describe('PracticeDirComponent', () => {
  let component: PracticeDirComponent;
  let fixture: ComponentFixture<PracticeDirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PracticeDirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticeDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
