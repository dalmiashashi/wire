import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circle-management',
  templateUrl: './circle-management.component.html',
  styleUrls: ['./circle-management.component.css',
              './createNewCircle.css']
})
  
  
export class CircleManagementComponent implements OnInit {

  @Input() typeOfForm : string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
