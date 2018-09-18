import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { Story } from '../models/story.model';
import { map } from 'rxjs/operators';

@Injectable()
export class StoriesService {
  constructor (
    private apiService: ApiService
  ) {}

  query(): Observable<{stories: Story[], storiesCount: number}> {
    return this.apiService
    .get('/stories');
  }
  
  getStories() : Observable<{stories: Story[]}> {
    return this.apiService.get('/stories');
  }

  get(id): Observable<Story> {
    return this.apiService.get('/stories/' + id)
      .pipe(map(data => data.story));
  }

  delete(id) {
    return this.apiService.delete('/stories/' + id);
  }

  save(story): Observable<Story> {
    if (story.id) {
      return this.apiService.put('/stories/' + story.id, {story: story})
        .pipe(map(data => data.story));
    } else {
      return this.apiService.post('/stories/', {story: story})
        .pipe(map(data => data.story));
    }
  }
}
