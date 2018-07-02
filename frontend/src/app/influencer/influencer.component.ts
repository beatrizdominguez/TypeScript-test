import { Component, OnInit, Input  } from '@angular/core';
// import { MatButtonModule, MatIconModule, MatCardModule } from '@angular/material';
import {Influencer} from '../model/influencer.model';
import {InfluencerService} from '../services/influencer.service';


import {Router} from '@angular/router';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit {

  @Input() influencer: Influencer;

  constructor(private router: Router, private influencerService: InfluencerService) { }

  ngOnInit() {
  }

  goToDetail(id) {
    this.router.navigate(['/detail', id]);
  }

  // edit(id) {
  //   // this.router.navigate(['/detail', id]);
  //   alert('THE SELECTED ID IS : ' + id);
  // }

  delete(id) {
   // this.router.navigate(['/detail', id]);

   this.influencerService.deleteInfluencer(id);
  }
  // openDialog(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: {name: this.name, animal: this.animal}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });
  // }

}
