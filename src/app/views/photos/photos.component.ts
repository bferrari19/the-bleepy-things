import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { SharedService } from '../../services/shared-service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(private sharedService: SharedService) { }

  ngOnInit() {
  }

  viewChanged(event: any) {
    // event is a boolean, true if viewer is opened and false if it's closed
    console.log(event);
    console.log('Before toggle: ' + this.sharedService.showMenu);
    this.sharedService.toggleMenuVisibilty();
    console.log('After toggle: ' + this.sharedService.showMenu);
  }
}
