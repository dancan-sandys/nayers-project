import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureImplimentationsComponent } from './future-implimentations.component';

describe('FutureImplimentationsComponent', () => {
  let component: FutureImplimentationsComponent;
  let fixture: ComponentFixture<FutureImplimentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FutureImplimentationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureImplimentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
