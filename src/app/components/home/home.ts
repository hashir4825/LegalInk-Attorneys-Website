import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Intro } from '../../intro/intro';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Intro
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  currentSlide = 0;

testimonials = [

  {
    company: 'Faltoo Sey Paltoo (Guarantee) Limited',
    designation: 'Chief Executive Officer',
    review:
      'Legalink Attorneys has been our trusted legal advisor for over three years. The firm successfully handled the complete legal incorporation of our NGO and continues to advise us on governance, contractual matters, employment issues and regulatory compliance. Their work has consistently been thorough, reliable and strategically aligned with our organisational objectives.'
  },

  {
    company: 'Swifty Technologies LLC FZ',
    designation: 'Chief Executive Officer',
    review:
      'Muhammad Yar Lak and Legalink Attorneys provided exceptional legal support across a range of commercial and technology-focused agreements, including SaaS, NDAs, referral agreements and managed services contracts. Their professionalism, commercial awareness and practical advice have been invaluable to our business.'
  },

  {
    company: 'NXI Trading Ltd.',
    designation: 'Chief Executive Officer',
    review:
      'Legalink Attorneys acted as our external legal counsel in relation to payment and technology-related commercial activities. Their advice on commercial agreements, payment gateway structures, merchant services and data protection matters was consistently practical, reliable and delivered to the highest professional standards.'
  },

  {
    company: 'Punjab Information Technology Board (PITB)',
    designation: 'Director – Incubation Wing',
    review:
      'Legalink Attorneys has provided legal, regulatory and commercial advisory services across technology-focused public sector initiatives, including startup ecosystems, innovation projects and investment structures. Their expertise, professionalism and strategic legal guidance make them a highly recommended legal advisor.'
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