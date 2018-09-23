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

  results: Story[];

  ngOnInit() {
    this.storiesService.getStories()
    .subscribe(data => {
      this.results = data.stories;
      console.log(this.results);
    });
  }
}
