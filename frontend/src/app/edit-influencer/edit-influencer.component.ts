import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Influencer } from '../model/influencer.model';
import { SocialMedia } from '../model/social-media.model';
import { InfluencerService } from '../services/influencer.service';

@Component({
  selector: 'app-edit-influencer',
  templateUrl: './edit-influencer.component.html',
  styleUrls: ['./edit-influencer.component.scss']
})
export class EditInfluencerComponent implements OnInit {

  editForm: FormGroup;
  id: number;
  private sub: any;
  influencer: Influencer;

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router,
    private influencerService: InfluencerService) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('WE HAVE THIS ID :: ' + this.id);

    });

    // form params
    this.editForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'name': [null, Validators.required],
      'lastName': [null, Validators.required],
      'instagram': [],
      'twitter': [],
      'youtube': []
    });

    // load information
    this.influencerService.getById(this.id)
      .then(result => {
        console.log('ALL Data: ', result);
        this.influencer = result;

        // this.editForm.setValue(result);
        this.editForm.controls['id'].setValue(this.influencer.id);
        this.editForm.controls['name'].setValue(this.influencer.name);
        this.editForm.controls['lastName'].setValue(this.influencer.lastName);
        // this.editForm.controls['gender'].setValue(this.influencer.gender);
        this.editForm.controls['instagram'].setValue(this.influencer.instagram.profileUrl);
        this.editForm.controls['twitter'].setValue(this.influencer.twitter.profileUrl);
        this.editForm.controls['youtube'].setValue(this.influencer.youtube.profileUrl);

        console.log('the influences data is : ' + JSON.stringify(this.influencer));

      })
      .catch(error => {
        console.log('Error Getting Data: ', error);
      });
  }

  onSubmit() {

    let influencer = new Influencer();
    influencer.id = this.id;
    influencer.name = this.editForm.value.name;
    influencer.lastName = this.editForm.value.lastName;
    influencer.gender = this.editForm.value.gender;
    if (this.editForm.value.instagram) {
      let instagram = new SocialMedia();
      instagram.profileUrl = this.editForm.value.instagram;
      influencer.instagram = instagram;
    }
    if (this.editForm.value.twitter) {
      let twitter = new SocialMedia();
      twitter.profileUrl = this.editForm.value.twitter;
      influencer.twitter = twitter;
    }
    if (this.editForm.value.youtube) {
      let youtube = new SocialMedia();
      youtube.profileUrl = this.editForm.value.youtube;
      influencer.youtube = youtube;
    }
    this.influencerService.updateInfluencer(influencer);
      // .then(result => {
      //   console.log('the user was updated wuccessfully');
      //   this.router.navigate(['']);

      // });
  }

}
