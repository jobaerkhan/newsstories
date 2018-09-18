import { Component, Input } from '@angular/core';

import { Story } from '../../core';

@Component({
  selector: 'app-story-preview',
  templateUrl: './story-preview.component.html'
})
export class StoryPreviewComponent {
  @Input() story: Story;
}
