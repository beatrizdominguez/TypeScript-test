import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-button',
  templateUrl: './edit-button.component.html',
  styleUrls: ['./edit-button.component.scss']
})
export class EditButtonComponent implements OnInit {

  @Input() id: Number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  edit(id) {
     this.router.navigate(['/edit', id]);
    // alert('THE SELECTED ID IS : ' + id);
  }

}
