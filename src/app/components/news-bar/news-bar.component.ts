import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-bar',
  templateUrl: './news-bar.component.html',
  styleUrls: ['./news-bar.component.css']
})
export class NewsBarComponent implements OnInit {

  constructor() { }

  title = 'NEWS';
  news = {
    title: 'News Article Title',
    text: 'You now, some sort of news stuff would go here to talk about how awesome the bleepy things are.'
  };

  ngOnInit() {
  }

}
