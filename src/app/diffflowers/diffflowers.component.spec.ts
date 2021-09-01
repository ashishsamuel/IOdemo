import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffflowersComponent } from './diffflowers.component';

describe('DiffflowersComponent', () => {
  let component: DiffflowersComponent;
  let fixture: ComponentFixture<DiffflowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffflowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiffflowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
