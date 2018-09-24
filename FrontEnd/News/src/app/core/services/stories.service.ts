import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import * as xml2js from 'xml2js';

import { ApiService } from './api.service';
import { Story, StoryFilter} from '../models';
import { map } from 'rxjs/operators';

@Injectable()
export class StoriesService {
  constructor (
    private apiService: ApiService
  ) {}

  query(query : StoryFilter): Observable<{stories: Story[], storiesCount: number}> {
    // Convert any filters over to Angular's URLSearchParams
    const params = {};
    Object.keys(query)
    .forEach((key) => {
      params[key] = query[key];
    });
    return this.apiService
    .get(
      '/stories',
      new HttpParams({ fromObject: params })
    );
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
    if (story.Id > 0) {
      return this.apiService.put('/stories/' + story.Id, story)
      .pipe(map(data => data.success));
    } else {
      return this.apiService.post('/stories/', story)
      .pipe(map(data => data.success));
    }
  }
}
