import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Story, StoriesService } from '../core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  story: Story = {} as Story;
  storyForm: FormGroup;
  errors: Object = {};
  isSubmitting = false;

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {

    this.storyForm = this.fb.group({
      title: '',
      body: '',
      publishedDate:''
    });
  }

  ngOnInit() {
    this.route.data.subscribe((data: { story: Story }) => {
      if (data.story) {
        this.story = data.story;
        this.storyForm.patchValue(data.story);
      }
    });
  }

    submitForm() {
    this.isSubmitting = true;

    // update the model
    this.updateStory(this.storyForm.value);

    // post the changes
    this.storiesService.save(this.story).subscribe(
      story => this.router.navigateByUrl('/story/' + story.id),
      err => {
        this.errors = err;
        this.isSubmitting = false;
      }
    );
  }

  updateStory(values: Object) {
    Object.assign(this.story, values);
  }
}
