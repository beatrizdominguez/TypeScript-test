import { Component, OnInit, Input } from '@angular/core';
import {SocialMedia} from '../model/social-media.model';
import { log } from 'util';

@Component({
  selector: 'app-media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.scss']
})
export class MediaCardComponent implements OnInit {

  @Input() info: SocialMedia;

  constructor() { }

  ngOnInit() {
      console.log('the media is passed :: ' + this.info);
  }

}
