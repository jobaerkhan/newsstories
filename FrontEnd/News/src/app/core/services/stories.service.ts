import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import * as xml2js from 'xml2js';

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

  //To get xml format data
  getxmlStories() : Observable<any> {
    return this.apiService.get('/getstories?type=xml');
  }

  get(id): Observable<Story> {
    return this.apiService.get('/stories/' + id)
      .pipe(map(data => data.story));
  }

  delete(id) {
    return this.apiService.delete('/stories/' + id);
  }

  save(story): Observable<any> {
    if (story.id > 0) {
      return this.apiService.put('/stories/' + story.id, story)
      .pipe(map(data => data.success));
    } else {
      return this.apiService.post('/stories/', story)
      .pipe(map(data => data.success));
    }
  }
}
