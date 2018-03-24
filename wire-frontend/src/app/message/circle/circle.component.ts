/* 
 *
 */
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalDismissReasons, NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { CircleService } from '../../circle.service';
import { UsercircleService } from '../../usercircle.service';



@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  
  ciecles : Circle[];
//  userCircles : UserCircle[];
  
  userCircles = [];
  
  @Output() selectedCircle = new EventEmitter<any>();
  

  constructor( private modalService: NgbModal, private circleService : CircleService, private  userCircleService : UsercircleService) { }
  
  closeResult: string;

  
/* -------- selectCircle -------- */
  selectCircle(circleName : string) {
    
    console.log("Circle Clicked : " + circleName);
    
     let currentCircleName = {
       type :'circle', 
       value : circleName
     }
     this.selectedCircle.emit(currentCircleName);
  }  

/* -------- ngOnInit -------- */
  ngOnInit() {
    
    this.userCircleService.getUserCircles().subscribe((data) => {
      console.log("CCC======> " + data);
      let abc = data.split(',');
      for(let xx of abc) {
        xx = xx.replace('"','').replace('[','').replace(']','').replace('"','');
        console.log(xx);
        
        this.userCircles.push(xx);
      }
     
     });
    
  }


/* -------- open --> To Open Model Box -------- */
  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  

/* -------- getDismissReason --> To Close Model Box -------- */
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
   
  
}

interface Circle {
  circleName : string;
  creatorId : string;
  createdDate : any;
}

interface UserCircle {
  userCircleId : any;
  userName : string;
  circleName : string;
}