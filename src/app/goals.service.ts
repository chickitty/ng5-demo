import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  private goals=new BehaviorSubject<any>(["I want to climb a mountain.", "I want to go ice skiiing."]);
  goal=this.goals.asObservable();
  
  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
