import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Upcoming } from '../upcoming.model';
import {UpcomingproService  } from '../upcomingpro.service';
@Component({
  selector: 'app-updetails',
  templateUrl: './updetails.component.html',
  styleUrls: ['./updetails.component.css']
})
export class UpdetailsComponent implements OnInit {
  pro: Upcoming;
  id: number;

  constructor(private projectService:UpcomingproService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.pro = this.projectService.getProject(this.id);
        }
      );

}
}
