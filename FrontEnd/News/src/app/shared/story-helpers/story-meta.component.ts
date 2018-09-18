import { Component, Input } from '@angular/core';

import { Story } from '../../core';

@Component({
  selector: 'app-story-meta',
  templateUrl: './story-meta.component.html'
})
export class StoryMetaComponent {
  @Input() story: Story;

}
