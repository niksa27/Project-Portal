import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent
{
  loadedFeature = 'project';    //If nothing is click then display project component

  onNavigate(feature: string) 
  {
    this.loadedFeature = feature;
  }
}
