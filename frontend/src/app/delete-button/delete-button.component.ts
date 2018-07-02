import { Component, OnInit, Input } from '@angular/core';
import {InfluencerService} from '../services/influencer.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {

  @Input() id: Number;

  constructor(private influencerService: InfluencerService) { }

  ngOnInit() {
  }

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
