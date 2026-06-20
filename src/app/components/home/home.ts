import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Intro } from '../../intro/intro';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    Intro
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  currentSlide = 0;

  testimonials = [

    {
      company: 'Swifty Technologies LLC FZ',
      designation: 'Chief Executive Officer',
      review:
        'Legalink Attorneys consistently demonstrated exceptional professionalism, responsiveness and commercial understanding. Their advice was practical, strategic and delivered with the highest level of integrity. We confidently recommend the firm for complex corporate and commercial matters.'
    },

    {
      company: 'Faltoo Sey Paltoo',
      designation: 'Founder',
      review:
        'The Legalink team provided outstanding legal support throughout our engagement. Their attention to detail, proactive communication and ability to simplify complex legal issues gave us complete confidence in every stage of the process.'
    },

    {
      company: 'Corporate Client',
      designation: 'Managing Director',
      review:
        'Working with Legalink Attorneys has been an excellent experience. Their lawyers are knowledgeable, approachable and always available to provide timely legal solutions tailored to our business requirements.'
    },

    {
      company: 'Business Client',
      designation: 'Director',
      review:
        'Legalink Attorneys consistently exceeded our expectations with their professionalism, legal expertise and commitment to achieving practical outcomes. We highly value our long-standing professional relationship with the firm.'
    }

  ];

  ngOnInit(): void {

    window.scrollTo({
      top: 0,
      behavior: 'instant' as ScrollBehavior
    });

  }

  nextSlide(): void {

    this.currentSlide =
      (this.currentSlide + 1) % this.testimonials.length;

  }

  previousSlide(): void {

    this.currentSlide =
      (this.currentSlide - 1 + this.testimonials.length)
      % this.testimonials.length;

  }

  goToSlide(index: number): void {

    this.currentSlide = index;

  }

}