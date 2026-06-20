import { Component, OnInit } from '@angular/core';
import { Intro } from '../../intro/intro';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Intro],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  ngOnInit(): void {

    // Always start from the top when Home loads
    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior
    });

  }

}