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
image:'/Assets/images/Owner2pic.png',
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
'sarim-shahid':{
name:'Barrister Sarim Shahid',
designation:'Of Counsel',
location:'Lahore',
email:'info@legalinkattorneys.com',
phone:'042 36280666',
image:'/Assets/images/sarim.png',
practiceAreas:[
'Banking Regulation',
'Financial Services',
'Taxation',
'Fintech',
'Technology Law',
'Anti-Money Laundering',
'Constitutional Law',
'Regulatory Compliance'
],
bio:[
'Barrister Sarim Shahid serves as Of Counsel to Legalink Attorneys and advises clients on banking and financial regulation, taxation, fintech, technology law, anti-money laundering compliance and constitutional matters.',
'He completed his LL.B. (Hons.) from the University of London and thereafter undertook the Bar Professional Training Course (BPTC) through Cardiff University and Lincoln\'s Inn.',
'Prior to entering legal practice, he gained experience with a United Kingdom-based chartered accountancy firm, developing a strong foundation in taxation, financial compliance and regulatory advisory work.',
'Over the course of his legal career, Barrister Shahid has advised financial institutions, technology companies, fintech ventures and corporate clients on a broad range of regulatory and commercial matters.',
'His practice includes advising on licensing and compliance requirements before the State Bank of Pakistan, regulatory structuring of financial entities, taxation disputes, anti-money laundering investigations and regulatory enforcement proceedings.',
'His work frequently sits at the intersection of finance, technology and regulation, with particular emphasis on fintech, digital financial services, virtual assets, banking regulation and emerging technology-driven business models.',
'As Of Counsel to Legalink Attorneys, Barrister Shahid provides strategic advice on complex regulatory, financial, taxation and technology-related matters, assisting clients in navigating evolving legal and compliance frameworks.'
],
education:[
'LL.B. (Hons.), University of London',
'Bar Professional Training Course (BPTC), Cardiff University & Lincoln\'s Inn'
],
memberships:[
'Lincoln\'s Inn'
]
},

'haroon-hashmi':{
name:'Haroon Muzaffar Hashmi',
designation:'Partner',
location:'Lahore',
email:'info@legalinkattorneys.com',
phone:'042 36280666',
image:'/Assets/images/pic2pic.png',
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
},

'abdul-rehman-khan':{
name:'Ahmad Abdul Rehman Khan',
designation:'Senior Associate',
location:'Lahore',
email:'ahmad.rehman79a@gmail.com',
phone:'+92 (322) 4504678',
image:'/Assets/images/Abdulrehman.png',

practiceAreas:[
'Commercial Litigation',
'Civil Litigation',
'Arbitration',
'Corporate Advisory',
'Employment Law',
'Intellectual Property',
'Regulatory Compliance',
'Contract Drafting',
'Consumer Protection',
'Banking & Commercial Disputes'
],

bio:[
'Ahmad Abdul Rehman Khan is a Senior Associate at Legalink Attorneys with extensive experience in commercial litigation, corporate advisory, regulatory compliance and dispute resolution.',
'He regularly represents clients before the Civil Courts, High Courts, Consumer Courts, Punjab Revenue Authority, Securities and Exchange Commission of Pakistan (SECP) Tribunal, National Tariff Commission and Intellectual Property forums.',
'Prior to joining Legalink Attorneys, he served as a Senior Associate at Bhandari Naqvi Riaz, where he advised domestic and international corporate clients on commercial disputes, arbitration, employment law, intellectual property registration, contractual matters and regulatory compliance.',
'Earlier in his career, he worked with Ahmer Bilal Soofi & Co. and A.G. Tariq & Co., where he gained substantial experience in civil, commercial, banking, labour, family and contractual litigation.',
'His practice includes drafting complex commercial agreements, legal opinions, pleadings, petitions, legal notices and regulatory responses, while providing strategic advice to corporate clients across diverse sectors.',
'He has also authored academic and professional publications on arbitration, commercial contracts, competition law and enforcement of international arbitral awards, reflecting his strong interest in legal research and commercial law.'
],

education:[
'LL.M. Commercial Law, University of Management and Technology',
'LL.B., Pakistan College of Law'
],

memberships:[
'Punjab Bar Council'
],

representativeMatters:[
  {
    title:'Commercial & Civil Litigation',
    description:'Represented corporate and individual clients in complex civil and commercial disputes before Civil Courts and the High Courts.'
  },
  {
    title:'International Arbitration',
    description:'Assisted partners in High Court and Supreme Court proceedings relating to the recognition and enforcement of international arbitral awards.'
  },
  {
    title:'Corporate Advisory',
    description:'Drafted employment, consultancy, lease, non-disclosure and sponsor loan agreements together with legal opinions for corporate clients and technology companies.'
  },
  {
    title:'Regulatory Representation',
    description:'Appeared before the Punjab Revenue Authority, SECP Tribunal, Consumer Courts and National Tariff Commission on behalf of corporate clients.'
  },
  {
    title:'Intellectual Property',
    description:'Advised clients on intellectual property matters and filed trademark and other intellectual property registration applications.'
  },
  {
    title:'Employment & Regulatory Compliance',
    description:'Prepared legal opinions on labour and employment matters and responded to notices issued by regulatory authorities including Social Security and EOBI.'
  }
]
},

'justice-shahid-jamil-khan':{
name:'Justice (R) Shahid Jamil Khan',
designation:'Of Counsel',
location:'Lahore',
email:'info@legalinkattorneys.com',
phone:'042 36280666',
image:'/Assets/images/shahid.png',
practiceAreas:[
'Constitutional Law',
'Taxation',
'Corporate Law',
'Banking Law',
'Commercial Litigation',
'Regulatory Advisory',
'Arbitration'
],
bio:[
'Justice (R) Shahid Jamil Khan serves as Of Counsel to Legalink Attorneys and brings over three decades of distinguished experience across constitutional, taxation, corporate, banking and commercial law.',
'He was enrolled as an Advocate of the High Court in 1994 and became an Advocate of the Supreme Court of Pakistan in 2007. In 2014, he was elevated as a Judge of the Honourable Lahore High Court, where he served until 2024.',
'Prior to his elevation to the Bench, Justice Khan maintained an extensive legal practice with a particular focus on taxation, corporate and banking matters, commercial litigation and regulatory advisory work.',
'He also served as Legal Advisor to the Federal Board of Revenue, contributing significantly to the development and interpretation of Pakistan\'s tax jurisprudence.',
'During his tenure on the Lahore High Court, he adjudicated thousands of matters and authored numerous reported judgments across constitutional law, taxation, corporate law, arbitration, civil law and commercial disputes.',
'His judicial and professional experience provides clients with unique strategic insight into complex litigation and regulatory matters.',
'At Legalink Attorneys, Justice Khan advises on high-stakes constitutional, taxation, corporate, banking and regulatory matters, drawing upon his extensive experience as both a practitioner and a member of the superior judiciary.'
],
education:[
'Advocate High Court (1994)',
'Advocate Supreme Court of Pakistan (2007)'
],
memberships:[
'Former Judge, Lahore High Court',
'Former Legal Advisor, Federal Board of Revenue'
]
},
'ahsan-akram':{
name:'Barrister Muhammad Ahsan Akram',
designation:'Affiliate Partner',
location:'Lahore',
email:'info@legalinkattorneys.com',
phone:'042 36280666',
image:'/Assets/images/Ahsan.png',
practiceAreas:[
'Criminal Defence',
'Financial Crime',
'White-Collar Crime',
'Constitutional Litigation',
'Regulatory Matters',
'Commercial Disputes',
'Service Law'
],
bio:[
'Barrister Muhammad Ahsan Akram is an Affiliate Partner of Legalink Attorneys and advises and represents clients in criminal defence, financial crime, constitutional litigation, regulatory matters and complex commercial disputes.',
'He holds an LL.B. (Hons.) in Law and Politics from Queen’s University Belfast and completed both the Barrister Training Course with Professional Legal Studies and an LL.M. in Anti-Money Laundering and Financial Crime from BPP Law School, London, graduating with distinction.',
'Barrister Akram regularly appears before the High Courts and District & Sessions Courts of Pakistan, representing clients in a broad spectrum of contentious matters.',
'His practice encompasses criminal defence, white-collar and financial crime investigations, constitutional litigation, service and regulatory disputes and complex civil proceedings.',
'Prior to joining active legal practice, he gained experience through legal and policy placements with the Ministry of Law and Justice, Government of Pakistan and the Ministry of Federal Education and Professional Training.',
'He has also undertaken advanced international legal studies at The Hague Academy of International Law at the International Court of Justice, focusing on public international law, treaty interpretation and international dispute resolution.',
'Barrister Akram combines strong advocacy skills with extensive legal research and strategic litigation experience, enabling him to advise clients effectively in high-stakes and legally complex matters.'
],
education:[
'LL.B. (Hons.) Law & Politics, Queen’s University Belfast',
'Barrister Training Course with Professional Legal Studies',
'LL.M. Anti-Money Laundering & Financial Crime, BPP Law School London (Distinction)'
],
memberships:[
'Barrister-at-Law'
]
}
};

    this.partner = partners[id ?? ''];
  }
}