import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcomingpro',
  templateUrl: './upcomingpro.component.html',
  styleUrls: ['./upcomingpro.component.css']
})
export class UpcomingproComponent implements OnInit {

  constructor() { }
  loadedFeature = 'project';    //If nothing is click then display project component

  onNavigate(feature: string) 
  {
    this.loadedFeature = feature;
  }
  ngOnInit() {
  }

  
}
