import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Story,
  StoriesService
} from '../core';

@Component({
  selector: 'app-story-page',
  templateUrl: './story.component.html'
})
export class StoryComponent implements OnInit {
  story: Story;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { story: Story }) => {
        this.story = data.story;
      }
    );
  }
}
