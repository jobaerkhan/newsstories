import { Component, OnInit } from '@angular/core';
import { Story, StoriesService } from '../../core';
@Component({
  selector: 'app-story-list',
  styleUrls: ['story-list.component.css'],
  templateUrl: './story-list.component.html'
})
export class StoryListComponent implements OnInit{
  constructor (
    private storiesService: StoriesService
  ) {}

  results: Story[]= [
    {
        id: 1,
        title: 'Test title',
        body: 'I am new to Angular (and Javascript for that matter). I have written an Angular service which returns an array of users. The data is retrieved from an HTTP call which returns the data in JSON format. When logging the JSON data returned from the HTTP call',
        publishedDate: '2018/09/17'
    },
    {
        id: 2,
        title: 'Story title',
        body: 'Usually, when you start with Angular, you want to connect to a backend. But often the backend is developed while your working on the frontend. For those who need a quick fully functioning REST',
        publishedDate: '2018/05/17'
    }
];;

  //results: Story[];

  ngOnInit() {
    console.log(this.results);
    // this.storiesService.getStories()
    // .subscribe(data => {
    //     console.log(data);
    //   this.results = data.stories;
    // });
  }
}
