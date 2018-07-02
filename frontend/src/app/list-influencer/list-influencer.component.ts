import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {InfluencerService} from '../services/influencer.service';

@Component({
  selector: 'app-list-influencer',
  templateUrl: './list-influencer.component.html',
  styleUrls: ['./list-influencer.component.scss']
})
export class ListInfluencerComponent implements OnInit {

  constructor(private router: Router, private influencerService: InfluencerService) { }

  influencerList = {};

  ngOnInit() {
    // load information
  /*  this.influencerService.getAll()
      .subscribe( data => {
        console.log('all data is retrieved');
        //this.influencerList = data;
      });*/

      this.influencerService.getAll()
      .then( result => {
        console.log('ALL Data: ', result);
       this.influencerList = result;
      })
      .catch( error => {
        console.log('Error Getting Data: ', error);
      });

  }

  addInfluencer(): void {
    this.router.navigate(['add']);
  }

}
