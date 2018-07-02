import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-menu-button',
  templateUrl: './main-menu-button.component.html',
  styleUrls: ['./main-menu-button.component.scss']
})
export class MainMenuButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToMain(): void {
    this.router.navigate(['']);
  }

}
