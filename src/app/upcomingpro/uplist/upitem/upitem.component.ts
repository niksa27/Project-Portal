import { Component, OnInit, Input } from '@angular/core';
import { Upcoming } from '../../upcoming.model';

@Component({
  selector: 'app-upitem',
  templateUrl: './upitem.component.html',
  styleUrls: ['./upitem.component.css']
})
export class UpitemComponent implements OnInit {

  constructor() { }
  @Input() pro: Upcoming;
  @Input() index: number;

  ngOnInit() {
  }

}


