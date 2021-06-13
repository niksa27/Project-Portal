import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { Upcoming } from '../upcoming.model';
import { UpcomingproService} from '../upcomingpro.service';
@Component({
  selector: 'app-uplist',
  templateUrl: './uplist.component.html',
  styleUrls: ['./uplist.component.css']
})
export class UplistComponent implements OnInit {
  pro: Upcoming[];
  subscription: Subscription;

  // Constructor with dependency injection
  constructor(private projectService: UpcomingproService,
              private router: Router,
              private route: ActivatedRoute) 
              {
              }

  // When component gets loaded

  //ADD THE CODE TRANSFER THE INTAKE FROM THE USER TO THE DESIRED ARRAY" 
  // Here we are subscribing to the service array to update the vlsue whenever added
  ngOnInit() 
  {
    this.subscription = this.projectService.projectChanged
      .subscribe(
        (recipes: Upcoming[]) => {
          this.pro = recipes;
        }
      );
    this.pro = this.projectService.getProjects();
  }
 
  // When component gets unloaded
  ngOnDestroy() 
  {
    this.subscription.unsubscribe();
  }

  // Listener to add new project
  onNewProject() 
  {
    this.router.navigate(['new1'], {relativeTo: this.route});
  }


}

