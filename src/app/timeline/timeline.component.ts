import { Time } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  startTime?: Time
  endTime?: Time

  timeStamps: Array<number> = [];
  timeMinutes: Array<number> = [];

  lineLength: number = 0;

  constructor() { }

  ngOnInit(): void {


    
  }

  test(){
    if(this.startTime && this.endTime){
      this.timeStamps = this.createTimeLine(this.startTime, this.endTime);
    }
  }

  createTimeLine(startTime: Time, endTime: Time): Array<number>{
    let res = [];
    this.timeMinutes = [];
    
    let startTimeStr = startTime + '';
    let endTimeStr = endTime + '';
    let startHours = Number.parseInt(startTimeStr.split(':')[0]);
    let endHours = Number.parseInt(endTimeStr.split(':')[0]);

    for(let i = startHours; i <= endHours; ++i){
      res.push(i);
      if (i !== endHours){
        for (let j = 0; j < 4; ++j){
          this.timeMinutes.push(j)
        }
      }
    }
    this.timeMinutes.push(0)

    return res;
    
  }

  

}
