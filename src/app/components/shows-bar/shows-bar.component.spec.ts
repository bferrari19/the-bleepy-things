import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsBarComponent } from './shows-bar.component';

describe('ShowsBarComponent', () => {
  let component: ShowsBarComponent;
  let fixture: ComponentFixture<ShowsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
