import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterphoneComponent } from './alterphone.component';

describe('AlterphoneComponent', () => {
  let component: AlterphoneComponent;
  let fixture: ComponentFixture<AlterphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterphoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
