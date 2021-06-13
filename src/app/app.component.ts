import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent 
{
  loadedFeature = 'project';    //If nothing is click then display project component

  onNavigate(feature: string) 
  {
    this.loadedFeature = feature;
  }
}
