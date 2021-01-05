import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsAndCultureComponent } from './ethics-and-culture.component';

describe('EthicsAndCultureComponent', () => {
  let component: EthicsAndCultureComponent;
  let fixture: ComponentFixture<EthicsAndCultureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthicsAndCultureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicsAndCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
