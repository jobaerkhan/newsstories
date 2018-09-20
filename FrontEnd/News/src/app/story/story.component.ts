import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

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
    private route: ActivatedRoute,
    private storyService: StoriesService,
    private router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { story: Story }) => {
        this.story = data.story;
      }
    );
  }

  deleteStory() {

    this.storyService.delete(this.story.id)
      .subscribe(
        success => {
          if (success) {
            this.toastr.success('Story deleted successfully');
            this.router.navigateByUrl('/');
          }
          else {
            this.toastr.error('Failed to delete story');
          }
        }
      );
  }
}