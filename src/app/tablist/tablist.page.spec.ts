import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablistPage } from './tablist.page';

describe('TablistPage', () => {
  let component: TablistPage;
  let fixture: ComponentFixture<TablistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
