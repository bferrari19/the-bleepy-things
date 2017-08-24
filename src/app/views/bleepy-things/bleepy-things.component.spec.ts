import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BleepyThingsComponent } from './bleepy-things.component';

describe('BleepyThingsComponent', () => {
  let component: BleepyThingsComponent;
  let fixture: ComponentFixture<BleepyThingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BleepyThingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BleepyThingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
