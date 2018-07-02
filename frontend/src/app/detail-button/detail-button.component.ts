import { Component, OnInit, Input } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-detail-button',
  templateUrl: './detail-button.component.html',
  styleUrls: ['./detail-button.component.scss']
})
export class DetailButtonComponent implements OnInit {

  @Input() id: Number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToDetail(id) {
    this.router.navigate(['/detail', id]);
  }

}
