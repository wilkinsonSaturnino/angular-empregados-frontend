import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadosListComponent } from './empregados-list.component';

describe('EmpregadosListComponent', () => {
  let component: EmpregadosListComponent;
  let fixture: ComponentFixture<EmpregadosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregadosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
