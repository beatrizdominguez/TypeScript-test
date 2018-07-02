import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatInputModule, MatButtonModule, MatFormFieldModule } from '@angular/material';
import { InfluencerService } from '../services/influencer.service';
import { first } from 'rxjs/operators';
import { Influencer } from '../model/influencer.model';
import { SocialMedia } from '../model/social-media.model';

@Component({
  selector: 'app-add-influencer',
  templateUrl: './add-influencer.component.html',
  styleUrls: ['./add-influencer.component.scss']
})
export class AddInfluencerComponent implements OnInit {

  addForm: FormGroup;
  name = '';
  lastName = '';
  gender = '';
  instagram = '';
  twitter = '';
  youtube = '';

  constructor(private formBuilder: FormBuilder, private router: Router, private influencerService: InfluencerService) { }

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'lastName': [null, Validators.required],
      'gender': [null, Validators.required],
      'instagram': [],
      'twitter': [],
      'youtube': []
    });
  }

  onSubmit() {

    let influencer = new Influencer();
    influencer.name = this.addForm.value.name;
    influencer.lastName = this.addForm.value.lastName;
    influencer.gender = this.addForm.value.gender;
    if (this.addForm.value.instagram) {
      let instagram = new SocialMedia();
      instagram.profileUrl = this.addForm.value.instagram;
      influencer.instagram = instagram;
    }
    if (this.addForm.value.twitter) {
      let twitter = new SocialMedia();
      twitter.profileUrl = this.addForm.value.twitter;
      influencer.twitter = twitter;
    }
    if (this.addForm.value.youtube) {
      let youtube = new SocialMedia();
      youtube.profileUrl = this.addForm.value.youtube;
      influencer.youtube = youtube;
    }
    this.influencerService.addInfuencer(influencer);
  }

}
