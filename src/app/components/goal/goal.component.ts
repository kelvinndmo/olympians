import { Component, OnInit } from '@angular/core';

import { Goal } from '../../types/Goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss'],
})
export class GoalComponent implements OnInit {
  //type inference
  showStudent = true;

  //property
  goals: Goal[] = [
    {
      id: '1',
      description: 'go somewhere to do some hiking',
      name: 'Hike',
      dueDate: 'Fri Feb 15 1998 00:00:00 GMT-0700',
    },
    {
      id: '1',
      description: 'go bike riding around',
      name: 'Bike Riding',
      dueDate: 'Fri Feb 15 1998 00:00:00 GMT-0700',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  handleIsInterested(activity: string) {
    console.log(activity);
  }
}
