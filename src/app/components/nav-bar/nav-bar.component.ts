import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

@Injectable()
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
