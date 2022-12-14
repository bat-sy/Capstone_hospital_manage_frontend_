import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptlistComponent } from './deptlist.component';

describe('DeptlistComponent', () => {
  let component: DeptlistComponent;
  let fixture: ComponentFixture<DeptlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
