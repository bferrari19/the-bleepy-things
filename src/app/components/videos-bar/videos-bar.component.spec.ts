import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosBarComponent } from './videos-bar.component';

describe('VideosBarComponent', () => {
  let component: VideosBarComponent;
  let fixture: ComponentFixture<VideosBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideosBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideosBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
