import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { GoalsService } from '../goals.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals: any;

  constructor(private route: ActivatedRoute, private router: Router, private _goals: GoalsService) {
    this.route.params.subscribe(res => console.log(res.id));
   }

  ngOnInit() {
    this._goals.goal.subscribe(res => this.goals = res );
  }

  sendMeHome() {
    this.router.navigate(['']);
  }

}
