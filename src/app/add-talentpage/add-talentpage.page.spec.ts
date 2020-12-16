import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTalentpagePage } from './add-talentpage.page';

describe('AddTalentpagePage', () => {
  let component: AddTalentpagePage;
  let fixture: ComponentFixture<AddTalentpagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTalentpagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTalentpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
