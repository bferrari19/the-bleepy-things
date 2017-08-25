import {Injectable} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
  showMenu: boolean = true;

  menuVisibilityChange: Subject<boolean> = new Subject<boolean>();

  constructor()  {
    this.menuVisibilityChange.subscribe((value) => {
      this.showMenu = value;
    });
  }

  toggleMenuVisibilty() {
    this.menuVisibilityChange.next(!this.showMenu);
  }
}
