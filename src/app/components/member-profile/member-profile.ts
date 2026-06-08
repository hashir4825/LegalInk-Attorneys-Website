import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './member-profile.html',
  styleUrl: './member-profile.css'
})
export class MemberProfile {

  member: any;

  constructor(private route: ActivatedRoute) {

    const id = this.route.snapshot.paramMap.get('id');

     const members: any = {

      'hamza-nawaz': {
        name: 'Muhammad Hamza Nawaz',
        designation: 'Associate',
        location: 'Lahore',

        email: 'hamzanawaz@legalinkattorneys.com',
        phone: '042 36280666',

        image: '/Assets/images/Hamzabhai.png',

        practiceAreas: [
          'Tax Advisory',
          'Tax Litigation',
          'Regulatory Compliance',
          'Corporate Advisory',
          'Legal Research'
        ],

        bio: [
          'Muhammad Hamza Nawaz is an Advocate and graduate of the University of the Punjab.',
          'His work includes tax advisory, compliance, audits and litigation before relevant authorities. He has served as Associate and Team Lead at United Law Associates and NWMS and has gained exposure to High Court litigation, particularly involving the Lahore Development Authority (LDA) and matters relating to the Federal Investigation Agency (FIA).',
          'Currently a Legal Associate at Legalink Attorneys, he represents the Parks and Horticulture Authority (PHA) and assists Senior Attorneys in advising and representing the Punjab Revenue Authority (PRA). His ability to analyze intricate legal frameworks and create practical legal solutions has earned him recognition among clients and colleagues.'
        ],

        education: [
          'LL.B., University of the Punjab'
        ],

        memberships: [
          'Punjab Bar Council',
          'HRCP'
        ]
      },

      'hamza-butt': {
        name: 'Hamza Butt',
        designation: 'Associate',
        location: 'Lahore',

        email: 'hamzabutt@legalinkattorneys.com',
        phone: '042 36280666',

        image: '/Assets/images/Hamza.png',
        practiceAreas: [
          'Labour Law',
          'Taxation',
          'Civil Litigation',
          'Regulatory Compliance',
          'Service Matters'
        ],

        bio: [
          'Hamza Butt is an Advocate and a graduate in Shariah and Law from the International Islamic University, Islamabad.',
          'He practices civil and labour litigation, taxation matters and regulatory compliance and regularly appears before Subordinate Courts, Labour Courts, the Labour Appellate Tribunal and various statutory authorities.',
          'He assists public sector bodies and private clients in matters relating to service regularization, disciplinary proceedings and tax disputes. His work includes drafting pleadings, legal opinions, compliance memoranda and providing litigation and research support to senior counsel.',
          'He previously interned at Bajwa Law Associates and Josh and Mak International, where he developed strong litigation support and legal research skills. With a sound understanding of statutory interpretation and procedural law, he contributes effectively to the firm’s litigation and advisory practice.'
        ],

        education: [
          'LL.B. (Shariah & Law), International Islamic University Islamabad'
        ],

        memberships: [
          'Punjab Bar Council',
          'HRCP'
        ]
      },

      'hammad-akbar': {
        name: 'Muhammad Hammad Akbar',
        designation: 'Paralegal',
        location: 'Lahore',

        email: 'info@legalinkattorneys.com',
        phone: '042 36280666',

        image: '/Assets/images/Hammad.png',

        practiceAreas: [
          'Civil Litigation',
          'Labour Law',
          'Regulatory Matters',
          'Legal Research'
        ],

        bio: [
          'Muhammad Hammad Akbar serves as a Paralegal with substantive exposure to civil, labour and regulatory matters.',
          'He works closely on litigation and advisory assignments involving service-related disputes, compliance matters and procedural documentation, providing consistent research and drafting support to the legal team.',
          'Prior to joining the firm, he gained experience at AGHS Legal Aid where he assisted in family, civil and criminal law matters with a primary focus on legal research and case preparation.',
          'He demonstrates strong capability in legal research, procedural analysis and efficient case management and contributes significantly to case strategy and client support.'
        ],

        education: [
          'LL.B. Universisty of London'        ],

        memberships: [
          'HRCP'
        ]
      },

      'wardah-shahid': {
        name: 'Wardah Shahid',
        designation: 'Paralegal',
        location: 'Lahore',

        email: 'info@legalinkattorneys.com',
        phone: '042 36280666',

        image: '/Assets/images/Wardah.png',
        practiceAreas: [
          'Corporate Law',
          'Commercial Law',
          'Legal Research',
          'Contract Drafting'
        ],

        bio: [
          'Wardah Shahid is a dynamic Paralegal with growing expertise in civil, commercial and corporate law.',
          'Currently pursuing an external LL.B (Hons.), she is building a strong foundation in legal research and advisory work.',
          'Prior to joining the firm, Wardah interned at Awais Law International where she contributed to civil law and arbitration research.',
          'In her current role, she provides support in legal research, drafting contracts and advisory matters across transactional, litigation and policy-related assignments. She also serves as the CIArb Student Ambassador for Blackstone School of Law.'
        ],

        education: [
          'LL.B. Universisty of London (Undergraduate)'
        ],

        memberships: [
          'HRCP'
                ]
      }

    };
    this.member = members[id ?? ''];
  }
}