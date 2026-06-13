import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-partner-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './partner-profile.html',
  styleUrl: './partner-profile.css'
})
export class PartnerProfile {

  partner: any;
  showMatters = false;
  openedMatter: number | null = null;

toggleMatter(index: number) {

  this.openedMatter =
    this.openedMatter === index
      ? null
      : index;

}

  constructor(private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('id');

const partners: any = {
'areeb-khan':{
name:'Muhammad Areeb Khan',
designation:'Partner',
location:'Lahore',
email:'Mak@legalinkattorneys.com',
phone:'+92 (322) 2321999',
image:'/Assets/images/Owner2.jpeg',
practiceAreas:[
'Litigation',
'Taxation',
'Banking Law',
'Corporate Advisory',
'Regulatory Compliance',
'Public Sector Representation',
'Government Contracts',
'Joint Ventures',
'SECP Compliance',
'Technology & Fintech Advisory'
],
bio:[
'Muhammad Areeb Khan is a Partner at Legalink Attorneys, with a practice spanning litigation, transactional advisory, corporate compliance, banking law, and public-sector regulatory work.',
'He has advised and represented public authorities, financial institutions, and corporate clients including the Federal Board of Revenue (FBR), Punjab Revenue Authority (as Standing Counsel), Habib Bank Limited (HBL), Parks and Horticulture Authority (PHA), Punjab Food Authority (PFA), National Command Authority (NCA), and the Punjab Information Technology Board (PITB) on matters involving taxation, regulatory compliance, government contracts, and administrative and constitutional law.',
'His work includes advising on government-backed incubation and innovation initiatives such as Accelerate Punjab and Plan X, and on the Punjab Technology Fund, a provincial government-backed venture capital fund, with a focus on institutional structuring and public-private investment frameworks.',
'He has also worked on civil engineering, infrastructure, public-private partnerships (PPPs), and large-scale housing projects involving Habib Rafique Limited and other major developers.',
'Mr. Khan regularly advises on joint ventures, SECP compliance, Section 42 entities, and technology and fintech platforms, including PandaCredit.',
'He appears before High Courts, civil courts, tax authorities, and tribunals across Pakistan and also serves as a Lecturer at Blackstone School of Law & Business and as Deputy Secretary General of the Youth General Assembly (YGA).'
],
education:[
'LL.B.'
],
memberships:[
'Punjab Bar Council',
'Standing Counsel – Punjab Revenue Authority',
'Deputy Secretary General – Youth General Assembly (YGA)',
'Lecturer – Blackstone School of Law & Business'
],
representativeMatters: [
  {
    title: 'China Gezhouba Group Company',
    description: 'Advised China Gezhouba Group Company on contractual and project development matters relating to the Dasu Hydropower Project, one of Pakistan\'s largest hydropower infrastructure developments.'
  },
  {
    title: 'Heavy Mechanical Complex (Pvt.) Ltd.',
    description: 'Advised Heavy Mechanical Complex (Pvt.) Ltd. on EPC contract obligations and regulatory issues relating to the 16 MW Nalter-III Hydropower Project in Gilgit-Baltistan.'
  },
  {
    title: 'National Command Authority',
    description: 'Advised National Command Authority on the restructuring, transfer, governance, and regulatory framework of thirteen state-owned enterprises previously owned by the State Engineering Corporation.'
  },
  {
    title: 'TCS Private Limited',
    description: 'Advised TCS Private Limited on legal and regulatory compliance requirements governing international transport and logistics operations under the TIR Convention, 1975.'
  },
  {
    title: 'Habib Rafique (Pvt.) Limited',
    description: 'Advised Habib Rafique (Pvt.) Limited on an unsolicited public-private partnership proposal for the development of approximately 1,200 acres of land before the Ravi Urban Development Authority and drafted the associated joint venture documentation.'
  },
  {
    title: 'Capital Smart City (Pvt.) Ltd.',
    description: 'Advised Capital Smart City (Pvt.) Ltd. on the drafting and negotiation of project, development, and commercial agreements relating to the 35,000-kanal Capital Smart City development in Islamabad.'
  },
  {
    title: 'Future Developments Holdings Limited',
    description: 'Advised Future Developments Holdings Limited on engineering and construction agreements relating to the development of a 4.5 MGD water treatment facility within the Capital Smart City project.'
  },
  {
    title: 'Samsons (Pvt.) Ltd.',
    description: 'Advised Samsons (Pvt.) Ltd. on the acquisition and development of approximately 3,000 kanals of land for a large-scale residential housing project and drafted the master land purchase agreement.'
  },
  {
    title: 'Smart Future Technology (Pvt.) Ltd.',
    description: 'Advised Smart Future Technology (Pvt.) Ltd. on the negotiation and structuring of joint venture arrangements with Defence Housing Authority Peshawar relating to the DHA Peshawar Smart City Project.'
  },
  {
    title: 'Punjab Population Innovation Fund',
    description: 'Advised the Punjab Population Innovation Fund on procurement, public-private partnerships, employment matters, corporate governance, and regulatory compliance for population planning and awareness initiatives.'
  },
  {
    title: 'Federal Board of Revenue & Punjab Revenue Authority',
    description: 'Represented and advised the Federal Board of Revenue and Punjab Revenue Authority in taxation, regulatory, constitutional, and administrative law matters.'
  },
  {
    title: 'Punjab Information Technology Board',
    description: 'Advised the Punjab Information Technology Board on technology, innovation, startup ecosystem, venture capital, and public-sector investment initiatives, including Accelerate Punjab, Plan X, and the Punjab Technology Fund.'
  },
  {
    title: 'Habib Bank Limited',
    description: 'Represents and advises Habib Bank Limited in banking litigation, recovery proceedings, financial disputes, and regulatory matters.'
  }
]
},
'haroon-hashmi':{
name:'Haroon Muzaffar Hashmi',
designation:'Partner',
location:'Lahore',
email:'info@legalinkattorneys.com',
phone:'042 36280666',
image:'/Assets/images/pic2.png',
practiceAreas:[
'International Commercial Law',
'Commercial Litigation',
'Corporate Advisory',
'Property Law',
'Real Estate Matters',
'Legal Research'
],
bio:[
'Haroon Muzaffar Hashmi is a Partner at Legalink Attorneys.',
'Mr. Hashmi has completed his LL.M. in International Commercial Law from City, University of London. He is also a graduate of the same institution with an LL.B. (Hons.), bringing a blend of academic rigor and practical experience to his role at the firm.',
'Prior to joining Legalink Attorneys, he served as a Legal Research Associate at Zaffar & Associates and later as an Associate at Hyat & Meerjees, where he contributed extensively to litigation strategy and client advisory work.',
'Haroon is recognized for his strong sense of justice, effective communication skills, and disciplined approach to client representation and legal problem-solving.',
'With early internship experience in real estate legal matters, he has developed a practical understanding of both commercial and property law, enabling him to advise clients on a wide range of legal and commercial issues.'
],
education:[
'LL.M. International Commercial Law – City, University of London',
'LL.B. (Hons.) – City, University of London'
],
memberships:[
'Punjab Bar Council'
]
}
};

    this.partner = partners[id ?? ''];
  }
}