import { Component, Input, OnInit } from '@angular/core';

interface Skill { name: string, rating: number }

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

  @Input() skill: Skill = null;

  constructor() { }

  ngOnInit(): void {
  }

  getValue(){
    return Array.from({ length: 5 }).map((_,i) => (i + 1) <= this.skill.rating);
  }

}
