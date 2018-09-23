import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

import {
  Story,
  StoriesService,
  User,
  UserService
} from '../core';

@Component({
  selector: 'app-story-page',
  templateUrl: './story.component.html'
})
export class StoryComponent implements OnInit {
  story: Story;
  currentUser: User;
  canModify: boolean;
  isDeleting = false;

  constructor(
    private route: ActivatedRoute,
    private storyService: StoriesService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(
      (data: { story: Story }) => {
        this.story = data.story;
      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.UserId === this.story.UserId);
      }
    );
  }

  deleteStory() {
    this.isDeleting = true;
    this.storyService.delete(this.story.Id)
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