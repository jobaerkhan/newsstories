import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    //this.userService.populate();
  }
}
