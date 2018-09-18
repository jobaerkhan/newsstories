import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { Story, StoriesService } from '../core';
import { catchError ,  map } from 'rxjs/operators';

@Injectable()
export class EditableStoryResolver implements Resolve<Story> {
  constructor(
    private storiesService: StoriesService,
    private router: Router
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.storiesService.get(route.params['id'])
      .pipe(
        map(
          story => {
            return story;
          }
        ),
        catchError((err) => this.router.navigateByUrl('/'))
      );
  }
}
