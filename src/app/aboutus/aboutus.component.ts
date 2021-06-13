import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html'

})
export class AboutusComponent implements OnInit 
{

  constructor() { }

  ngOnInit() 
  {
  }
  loadedFeature = 'project';    //If nothing is click then display project component

  onNavigate(feature: string) 
  {
    this.loadedFeature = feature;
  }

}
