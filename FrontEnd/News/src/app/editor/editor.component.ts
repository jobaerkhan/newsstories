import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'

import { Story, StoriesService } from '../core';

@Component({
  selector: 'app-editor-page',
  templateUrl: './editor.component.html'
})
export class EditorComponent implements OnInit {
  story: Story = {} as Story;
  storyForm: FormGroup;

  constructor(
    private storiesService: StoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {

    this.storyForm = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
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
    // update the model
    this.updateStory(this.storyForm.value);
    // post the changes
    this.storiesService.save(this.story).subscribe(
      success => {
        if(success)
        {
        this.toastr.success('Story saved successful');
        this.router.navigateByUrl('/');
        }
        else{
          console.log('failed');
        }
      }
    );
  }

  updateStory(values: Object) {
    Object.assign(this.story, values);
  }
}
