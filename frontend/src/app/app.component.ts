import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
//import {InfluencerService} from "../services/influencer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{ 

  constructor(private router: Router) { }

  ngOnInit() {
    //load information
   /* this.userService.getAll()
      .subscribe( data => {
        this.users = data;
      });*/

  }

  addUser(): void {
    this.router.navigate(['add']);
  }

}
