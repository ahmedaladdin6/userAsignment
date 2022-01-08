import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})


export class LevelComponent implements OnInit {

  constructor() { }
 @Input() node:any  ={}
  // obj=[
  //   {
  //     "parent":"1",
  //     childs:[
  //     {"parent":"2",childs:[]},
  //     {"parent":"3",childs:[]}
  //    ]
  // }
  // ]
  ngOnInit(): void {
  }

}
