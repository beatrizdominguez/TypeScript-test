import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {InfluencerService} from '../services/influencer.service';
import { Influencer } from '../model/influencer.model';
import { SocialMedia } from '../model/social-media.model';

@Component({
  selector: 'app-detail-influencer',
  templateUrl: './detail-influencer.component.html',
  styleUrls: ['./detail-influencer.component.scss']
})
export class DetailInfluencerComponent implements OnInit {

  id: number;
  private sub: any;
  influencer: Influencer;

  constructor(private route: ActivatedRoute, private router: Router, private influencerService: InfluencerService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('WE HAVE THIS ID :: ' + this.id);

   });


    // load information
    this.influencerService.getById(this.id)
      .then( result => {
        console.log('ALL Data: ', result);
       this.influencer = result;
       console.log('the influences data is : ' + JSON.stringify(this.influencer));

      })
      .catch( error => {
        console.log('Error Getting Data: ', error);
      });

  }

}
