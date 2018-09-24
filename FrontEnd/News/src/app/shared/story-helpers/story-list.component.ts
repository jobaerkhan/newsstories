import { Component, OnInit, Input } from '@angular/core';
import { Story, StoriesService, StoryFilter } from '../../core';
@Component({
  selector: 'app-story-list',
  styleUrls: ['story-list.component.css'],
  templateUrl: './story-list.component.html'
})
export class StoryListComponent{
  constructor (
    private storiesService: StoriesService
  ) {}

  query: StoryFilter;
  results: Story[];
  loading = false;
  currentPage = 1;
  totalPages: Array<number> = [1];

  @Input() pagesize: number;
  @Input()
  set config(config: StoryFilter) {
    if (config) {
      this.query = config;
      this.currentPage = 1;
      this.runQuery();
    }
  }

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.runQuery();
  }

  runQuery() {
    this.loading = true;
    this.results = [];

    if (this.pagesize) {
      this.query.pagesize = this.pagesize;
      this.query.page =  (this.currentPage - 1);
    }

    this.storiesService.query(this.query)
    .subscribe(data => {
      this.loading = false;
      this.results = data.stories;
      this.totalPages = Array.from(new Array(Math.ceil(data.storiesCount / this.pagesize)), (val, index) => index + 1);
    });
  }


  // ngOnInit() {
  //   this.storiesService.getStories()
  //   .subscribe(data => {
  //     this.results = data.stories;
  //     console.log(this.results);
  //   });
  // }
}
