import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBarComponent } from './news-bar.component';

describe('NewsBarComponent', () => {
  let component: NewsBarComponent;
  let fixture: ComponentFixture<NewsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
