import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-team',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {

searchTerm = '';
selectedCategory = '';
selectedPracticeArea = '';
selectedLocation = '';

  lawyers = [

{
  category: 'Partner',
  type: 'partner',
  name: 'Muhammad Areeb Khan',
  designation: 'Partner',
  location: 'Lahore',
  practiceArea: 'Corporate Law, Commercial Law, Taxation, Banking Law, Regulatory Advisory',
  image: '/Assets/images/Owner2pic.png',
  email: 'mak@legalinkattorneys.com',
  phone: '+92 (322) 2321999',
  route: '/partners/areeb-khan'
},
{
  category: 'Of Counsel',
  type: 'partner',
  name: 'Justice (R) Shahid Jamil Khan',
  designation: 'Of Counsel',
  location: 'Lahore',
  practiceArea: 'Constitutional Law, Taxation, Corporate Law, Banking Law, Commercial Law',
  image: '/Assets/images/JusticeShahid.png',
  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/partners/justice-shahid-jamil-khan'
},
{
  category: 'Partner',
  type: 'partner',
  name: 'Haroon Muzaffar Hashmi',
  designation: 'Partner',
  location: 'Lahore',
  practiceArea: 'International Commercial Law, Commercial Litigation, Corporate Advisory, Property Law, Real Estate Matters, Legal Research',
  image: '/Assets/images/pic2pic.png',
  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/partners/haroon-hashmi'
},



{
  category: 'Affiliate Partner',
  type: 'partner',
  name: 'Barrister Muhammad Ahsan Akram',
  designation: 'Affiliate Partner',
  location: 'Islamabad',
  practiceArea: 'Criminal Defence, Financial Crime, Constitutional Litigation, Regulatory Matters, Commercial Disputes',
  image: '/Assets/images/Ahsan.png',
  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/partners/ahsan-akram'
},

{
  category: 'Of Counsel',
  type: 'partner',
  name: 'Barrister Sarim Shahid',
  designation: 'Of Counsel',
  location: 'Lahore',
  practiceArea: 'Banking Regulation, Financial Regulation, Taxation, Fintech, Technology Law, AML Compliance, Constitutional Law',
  image: '/Assets/images/sarim.png',
  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/partners/sarim-shahid'
},

{
  category: 'Associate',
  type: 'member',
  name: 'Muhammad Hamza Nawaz',
  designation: 'Associate',
  location: 'Lahore',
  practiceArea: 'Tax Advisory, Tax Litigation, Regulatory Compliance, Corporate Advisory, Legal Research',
  image: '/Assets/images/Hamzabhaipic.png',
  email: 'hamzanawaz@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/team/hamza-nawaz'
},

{
  category: 'Associate',
  type: 'member',
  name: 'Hamza Butt',
  designation: 'Associate',
  location: 'Lahore',
  practiceArea: 'Labour Law, Taxation, Civil Litigation, Regulatory Compliance, Service Matters',
  image: '/Assets/images/Hamzapic.png',
  email: 'hamzabutt@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/team/hamza-butt'
},

{
  category: 'Associate',
  type: 'member',
  name: 'Shuja Ali Kamboh',
  designation: 'Associate',
  location: 'Lahore',
  practiceArea: 'Civil Litigation, Criminal Law, Family Law, Constitutional Law, Commercial Law, Legal Research, Legal Drafting',
  image: '/Assets/images/Shuja.png',
  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/team/shuja-kamboh'
},

{
  category: 'Paralegal',
  type: 'member',
  name: 'Muhammad Hammad Akbar',
  designation: 'Paralegal',
  location: 'Lahore',
  practiceArea: 'Civil Litigation, Labour Law, Regulatory Matters, Legal Research',
  image: '/Assets/images/Hammadpic.png',
  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/team/hammad-akbar'
},

{
  category: 'Paralegal',
  type: 'member',
  name: 'Wardah Shahid',
  designation: 'Paralegal',
  location: 'Lahore',
  practiceArea: 'Corporate Law, Commercial Law, Legal Research, Contract Drafting',
  image: '/Assets/images/Wardahpic.png',
  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/team/wardah-shahid'
},

{
  category: 'Paralegal',
  type: 'member',
  name: 'Syed Shabbar Ali Kazmi',
  designation: 'Paralegal',
  location: 'Lahore',
  practiceArea: 'Civil Litigation, Commercial Law, Taxation, Corporate Law, Regulatory Compliance, Legal Research',
  image: '/Assets/images/Shabbar.png',
  email: 'info@legalinkattorneys.com',
  phone: '042 36280666',
  route: '/team/shabbar-kazmi'
}
  ];
filteredLawyers: any[] = [];



  constructor() {
    this.filteredLawyers = [...this.lawyers];
  }
filterLawyers() {

  this.filteredLawyers = this.lawyers.filter(lawyer => {

    const matchesSearch =
      !this.searchTerm ||
      lawyer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      lawyer.practiceArea.toLowerCase().includes(this.searchTerm.toLowerCase());

    const matchesLocation =
      !this.selectedLocation ||
      lawyer.location === this.selectedLocation;

    const matchesCategory =
      !this.selectedCategory ||
      lawyer.category === this.selectedCategory;

    const matchesPracticeArea =
      !this.selectedPracticeArea ||
      lawyer.practiceArea
        .toLowerCase()
        .includes(this.selectedPracticeArea.toLowerCase());

    return (
      matchesSearch &&
      matchesLocation &&
      matchesCategory &&
      matchesPracticeArea
    );

  });

}
clearFilters() {

  this.searchTerm = '';
  this.selectedLocation = '';
  this.selectedCategory = '';
  this.selectedPracticeArea = '';

  this.filteredLawyers = [...this.lawyers];

}
}