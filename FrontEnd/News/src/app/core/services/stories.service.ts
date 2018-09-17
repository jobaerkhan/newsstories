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
    return this.apiService
    .get('/stories');
  }

  get(id): Observable<Story> {
    return this.apiService.get('/stories/' + id)
      .pipe(map(data => data.article));
  }

  delete(id) {
    return this.apiService.delete('/stories/' + id);
  }

  save(article): Observable<Story> {
    // If we're updating an existing article
    if (article.id) {
      return this.apiService.put('/stories/' + article.id, {article: article})
        .pipe(map(data => data.article));

    // Otherwise, create a new article
    } else {
      return this.apiService.post('/articles/', {article: article})
        .pipe(map(data => data.article));
    }
  }
}
