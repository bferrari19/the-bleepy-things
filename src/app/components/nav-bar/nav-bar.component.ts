import { Component, OnInit, Injectable } from '@angular/core';
import { SharedService } from '../../services/shared-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@Injectable()
export class NavBarComponent implements OnInit {

  showMenu = true;

  constructor(private sharedService: SharedService) {
    console.log('constructor setting the navbar display to: ' + sharedService.showMenu)
    this.showMenu = sharedService.showMenu;
  }

  ngOnInit() {
    this.sharedService.menuVisibilityChange.subscribe(value => {
      console.log('init consructor setting the navbar display to: ' + this.sharedService.showMenu)
      this.showMenu = value;
    });
  }

  menuClick(event: any) {
    const navigation = document.getElementsByClassName('navigation');
    const socialMedia = document.getElementsByClassName('socialMedia');
    const nav = document.getElementById('navBar');

    if (event.type === 'blur') {
      navigation[0].className = 'navigation';
      socialMedia[0].className = 'socialMedia';
      nav.className = '';
    } else if (navigation[0].className === 'navigation') {
      navigation[0].className += ' responsive';
      socialMedia[0].className += ' responsiveTwo';
      nav.className += 'responsiveThree';
    } else {
      navigation[0].className = 'navigation';
      socialMedia[0].className = 'socialMedia';
      nav.className = '';
    }
  }
}
