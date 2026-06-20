import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-intro',
  standalone: true,
  templateUrl: './intro.html',
  styleUrl: './intro.css'
})
export class Intro implements OnInit, OnDestroy {

  private timer: any;

  ngOnInit(): void {

    this.timer = setTimeout(() => {

      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });

    }, 5000);

  }

  ngOnDestroy(): void {

    clearTimeout(this.timer);

  }

}