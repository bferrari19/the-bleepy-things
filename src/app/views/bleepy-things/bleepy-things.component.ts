import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared-service';

@Component({
  selector: 'app-bleepy-things',
  templateUrl: './bleepy-things.component.html',
  styleUrls: ['./bleepy-things.component.css'],
  providers: [SharedService]
})
export class BleepyThingsComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
